import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

type LeaderboardItem = {
  address: string;
  score: number;
};

function readScoresCsv(): LeaderboardItem[] {
  const filePath = path.join(
    process.cwd(),
    "app",
    "ThresholdCryptographyBootcamp",
    "scores.csv"
  );
  const csvContent = fs.readFileSync(filePath, "utf-8");
  const lines = csvContent.trim().split(/\r?\n/);
  if (lines.length <= 1) return [];

  const header = lines[0].split(",");
  const addressIdx = header.indexOf("Address");
  const scoreIdx = header.indexOf("Score");
  if (addressIdx === -1 || scoreIdx === -1) return [];

  const rows: LeaderboardItem[] = lines
    .slice(1)
    .map((line) => line.split(","))
    .filter((cols) => cols[addressIdx] && cols[addressIdx].trim().length > 0)
    .map((cols) => ({
      address: cols[addressIdx].trim(),
      score: Number(cols[scoreIdx] ?? 0),
    }))
    .filter((row) => Number.isFinite(row.score));

  return rows;
}

export async function GET() {
  try {
    const leaderboard = readScoresCsv().sort((a, b) => b.score - a.score);
    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error('Error reading leaderboard data:', error);
    return NextResponse.json({ error: 'Failed to load leaderboard data' }, { status: 500 });
  }
}
