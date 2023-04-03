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
    <div className="flex w-52 flex-col items-center justify-center">
      <div className="text-2xl">LeadBoard</div>
      <div>
        {loading ? (
          <div className="space-y-2">
            <Skeleton
              count={5}
              width={150}
              height={16}
              duration={0.5}
              baseColor="#27272a"
              highlightColor="#3f3f46"
              className="animate-pulse"
            />
          </div>
        ) : (
          <div>
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
        )}
      </div>
    </div>
  );
}
