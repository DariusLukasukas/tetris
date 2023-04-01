"use client";

import { useEffect, useState } from "react";

type Props = {
  BestScore: number;
};

export default function BestScore({ BestScore }: Props) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const localScore = localStorage.getItem("tetrisScore");
    setScore(localScore ? JSON.parse(localScore) : 0);
  }, [BestScore]);

  return <div>Best score: {score}</div>;
}
