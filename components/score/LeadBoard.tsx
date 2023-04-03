"use client";
import { useState, useEffect } from "react";
import { subscribeToTopScores, ScoreWithId } from "./ScoreManager";

interface LeadBoardProps {
  lastUpdated: number;
}

export default function LeadBoard({ lastUpdated }: LeadBoardProps) {
  const [topScores, setTopScores] = useState<ScoreWithId[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToTopScores(setTopScores);
    return () => unsubscribe();
  }, [lastUpdated]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl">LeadBoard</div>
      <div>
        <ul>
          {topScores.map((score, index) => (
            <li key={score.id}>
              {index + 1}. {score.name} - {score.score}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
