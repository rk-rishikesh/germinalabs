import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

type LeaderboardItem = {
  address: string;
  w1: number | null;
  w2: number | null;
  w3: number | null;
  total: number | null;
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
  const w1Idx = header.indexOf("W1");
  const w2Idx = header.indexOf("W2");
  const w3Idx = header.indexOf("W3");
  const totalIdx = header.indexOf("Total");
  if (addressIdx === -1) return [];

  const rows: LeaderboardItem[] = lines
    .slice(1)
    .map((line) => line.split(","))
    .filter((cols) => cols[addressIdx] && cols[addressIdx].trim().length > 0)
    .map((cols) => {
      const parse = (idx: number) => {
        if (idx === -1) return null;
        const v = cols[idx]?.trim();
        if (v === undefined || v === "") return null;
        const n = Number(v);
        return Number.isFinite(n) ? n : null;
      };
      return {
        address: cols[addressIdx].trim(),
        w1: parse(w1Idx),
        w2: parse(w2Idx),
        w3: parse(w3Idx),
        total: parse(totalIdx),
      };
    });

  return rows;
}

export async function GET() {
  try {
    const leaderboard = readScoresCsv().sort((a, b) => (b.total ?? 0) - (a.total ?? 0));
    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error('Error reading leaderboard data:', error);
    return NextResponse.json({ error: 'Failed to load leaderboard data' }, { status: 500 });
  }
}
