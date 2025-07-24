// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Bootcamp is Ownable, ReentrancyGuard {
    // Struct to store participant information
    struct Participant {
        address participantAddress;
    }
    
    // Struct to store assignment details
    struct Assignment {
        string title;
        string description;
        uint256 maxScore;
        uint256 dueDate;
        bool isActive;
    }
    
    // Struct to store grade information
    struct Grade {
        uint256 score;
    }
    
    // Program configuration
    uint256 public totalLevels; // total number of levels
    uint256 public programStartDate;
    uint256 public currentLevel;
    
    // Storage mappings
    mapping(address => Participant) public participants;
    mapping(uint256 => Assignment) public assignments; // level => assignment
    mapping(address => mapping(uint256 => Grade)) public grades; // participant => level => grade
    
    // Arrays for batch operations
    address[] public participantAddresses;
    mapping(address => uint256) public participantIndex;
    
    // Events
    event ParticipantEnrolled(address indexed participant);
    event ParticipantRemoved(address indexed participant);
    event AssignmentCreated(uint256 indexed level, string title, uint256 maxScore);
    event AssignmentUpdated(uint256 indexed level, string title, uint256 maxScore);
    event BatchGradesUpdated(uint256 indexed level, uint256 participantCount);
    event LevelAdvanced(uint256 newLevel);
    event ProgramCompleted();
    
    // Modifiers
    modifier validLevel(uint256 level) {
        require(level >= 1 && level <= totalLevels, "Invalid level number");
        _;
    }
    
    modifier participantExists(address participant) {
        require(participants[participant].participantAddress != address(0), "Participant not enrolled");
        _;
    }
    
    modifier programActive() {
        require(block.timestamp >= programStartDate, "Program not started");
        require(currentLevel <= totalLevels, "Program completed");
        _;
    }
    
    constructor(
        uint256 _totalLevels,
        uint256 _programStartDate
    ) Ownable(msg.sender) {
        require(_totalLevels > 0, "Total levels must be positive");
        require(_programStartDate > block.timestamp, "Start date must be in future");
        
        totalLevels = _totalLevels;
        programStartDate = _programStartDate;
        currentLevel = 1;
    }
    
    // Participant Management Functions
    function enrollParticipant(address _participant) external onlyOwner {
        require(_participant != address(0), "Invalid participant address");
        require(participants[_participant].participantAddress == address(0), "Participant already enrolled");
        
        participants[_participant] = Participant({
            participantAddress: _participant
        });
        
        participantIndex[_participant] = participantAddresses.length;
        participantAddresses.push(_participant);
        
        emit ParticipantEnrolled(_participant);
    }
    
    // Assignment Management Functions
    function createAssignment(
        uint256 _level,
        string memory _title,
        string memory _description,
        uint256 _maxScore,
        uint256 _dueDate
    ) external onlyOwner validLevel(_level) {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(_maxScore > 0, "Max score must be positive");
        require(_dueDate > block.timestamp, "Due date must be in future");
        
        assignments[_level] = Assignment({
            title: _title,
            description: _description,
            maxScore: _maxScore,
            dueDate: _dueDate,
            isActive: true
        });
        
        emit AssignmentCreated(_level, _title, _maxScore);
    }
    
    function updateAssignment(
        uint256 _level,
        string memory _title,
        string memory _description,
        uint256 _maxScore,
        uint256 _dueDate
    ) external onlyOwner validLevel(_level) {
        require(assignments[_level].isActive, "Assignment does not exist");
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(_maxScore > 0, "Max score must be positive");
        
        assignments[_level].title = _title;
        assignments[_level].description = _description;
        assignments[_level].maxScore = _maxScore;
        assignments[_level].dueDate = _dueDate;
        
        emit AssignmentUpdated(_level, _title, _maxScore);
    }
    
    // Batch Grading Functions
    function submitGradesBatch(
        uint256 _level,
        address[] memory _participants,
        uint256[] memory _scores
    ) external onlyOwner validLevel(_level) programActive nonReentrant {
        require(_participants.length == _scores.length, "Arrays length mismatch");
        require(_participants.length > 0, "Empty arrays");
        require(assignments[_level].isActive, "Assignment not found");
        
        uint256 maxScore = assignments[_level].maxScore;
        uint256 gradedCount = 0;
        
        for (uint256 i = 0; i < _participants.length; i++) {
            address participant = _participants[i];
            uint256 score = _scores[i];
            
            // Validate participant and score
            if (participants[participant].participantAddress != address(0) && score <= maxScore) {
                grades[participant][_level] = Grade({
                    score: score
                });
                gradedCount++;
            }
        }
        
        require(gradedCount > 0, "No valid grades submitted");
        emit BatchGradesUpdated(_level, gradedCount);
    }
    
    function submitAllParticipantsGrades(
        uint256 _level,
        uint256[] memory _scores
    ) external onlyOwner validLevel(_level) programActive nonReentrant {
        require(_scores.length == participantAddresses.length, "Scores array length mismatch");
        require(assignments[_level].isActive, "Assignment not found");
        
        uint256 maxScore = assignments[_level].maxScore;
        uint256 gradedCount = 0;
        
        for (uint256 i = 0; i < participantAddresses.length; i++) {
            address participant = participantAddresses[i];
            uint256 score = _scores[i];
            
            if (participants[participant].participantAddress != address(0) && score <= maxScore) {
                grades[participant][_level] = Grade({
                    score: score
                });
                gradedCount++;
            }
        }
        
        require(gradedCount > 0, "No valid grades submitted");
        emit BatchGradesUpdated(_level, gradedCount);
    }
    
    // Program Management Functions
    function advanceLevel() external onlyOwner {
        require(currentLevel < totalLevels, "Program already completed");
        currentLevel++;
        emit LevelAdvanced(currentLevel);
        
        if (currentLevel > totalLevels) {
            emit ProgramCompleted();
        }
    }
    
    // View Functions
    function getParticipantGrade(address _participant, uint256 _level) 
        external 
        view 
        validLevel(_level) 
        participantExists(_participant) 
        returns (uint256 score) 
    {
        Grade memory grade = grades[_participant][_level];
        return grade.score;
    }
    
    function getParticipantAllGrades(address _participant) 
        external 
        view 
        participantExists(_participant) 
        returns (uint256[] memory scores) 
    {
        scores = new uint256[](totalLevels);
        
        for (uint256 i = 1; i <= totalLevels; i++) {
            scores[i-1] = grades[_participant][i].score;
        }
    }
    
    function getParticipantProgress(address _participant) 
        external 
        view 
        participantExists(_participant) 
        returns (
            uint256 totalScore,
            uint256 averageScore,
            uint256 completedAssignments
        ) 
    {
        totalScore = 0;
        completedAssignments = 0;
        
        for (uint256 i = 1; i <= totalLevels; i++) {
            if (grades[_participant][i].score > 0) {
                totalScore += grades[_participant][i].score;
                completedAssignments++;
            }
        }
        
        averageScore = completedAssignments > 0 ? totalScore / completedAssignments : 0;
    }
    
    function getAllParticipants() external view returns (address[] memory) {
        return participantAddresses;
    }
    
    function getActiveParticipantsCount() external view returns (uint256) {
        return participantAddresses.length;
    }
    
    function getAssignment(uint256 _level) 
        external 
        view 
        validLevel(_level) 
        returns (
            string memory title,
            string memory description,
            uint256 maxScore,
            uint256 dueDate,
            bool isActive
        ) 
    {
        Assignment memory assignment = assignments[_level];
        return (
            assignment.title,
            assignment.description,
            assignment.maxScore,
            assignment.dueDate,
            assignment.isActive
        );
    }
    
    function getProgramInfo() 
        external 
        view 
        returns (
            uint256 levels,
            uint256 startDate,
            uint256 level,
            uint256 totalParticipants
        ) 
    {
        return (
            totalLevels,
            programStartDate,
            currentLevel,
            participantAddresses.length
        );
    }
    
    function updateTotalLevels(uint256 _newTotalLevels) external onlyOwner {
        require(_newTotalLevels >= currentLevel, "New total levels cannot be less than current level");
        totalLevels = _newTotalLevels;
    }
}