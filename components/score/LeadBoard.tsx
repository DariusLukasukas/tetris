"use client";
import { useState, useEffect } from "react";
import { subscribeToTopScores, ScoreWithId } from "./ScoreManager";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface LeadBoardProps {
  lastUpdated: number;
}

export default function LeadBoard({ lastUpdated }: LeadBoardProps) {
  const [topScores, setTopScores] = useState<ScoreWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToTopScores(setTopScores);
    setLoading(false);

    return () => unsubscribe();
  }, [lastUpdated]);

  return (
    <div className="flex w-52 select-none flex-col items-center justify-center text-lg lg:text-xl">
      <div>Leadboard</div>
      <div>
        {loading ? (
          <div className="space-y-2">
            <Skeleton
              count={10}
              width={200}
              enableAnimation={true}
              baseColor="#7d41e6"
              highlightColor="#0b161e"
              className="easy-in-out"
            />
          </div>
        ) : (
          <ul>
            {topScores.map((score, index) => (
              <li key={score.id}>
                {index + 1}. {score.name} - {score.score}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
