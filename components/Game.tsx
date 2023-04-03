"use client";

import { useTetris } from "@/hooks/useTetris";
import Board from "./Board";
import UpcomingBlocks from "./UpcomingBlocks";
import BestScore from "./BestScore";
import PlayerForm from "./score/PlayerForm";
import { useState } from "react";
import LeadBoard from "./score/LeadBoard";
import { addScore } from "./score/ScoreManager";

export default function Game() {
  const [playerName, setPlayerName] = useState("");
  const [lastNickname, setLastNickname] = useState("");
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<number>(Date.now());

  const handlePlayerSubmit = (name: string) => {
    setPlayerName(name);
    setLastNickname(name);
    startGame();
  };

  const handleGameOver = async () => {
    await addScore({ name: playerName, score });
    setGameStarted(false);
    setPlayerName("");
    setLastUpdated(Date.now());
  };

  const { board, startGame, isPlaying, score, upcomingBlocks } =
    useTetris(handleGameOver);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex items-start justify-end">
          <LeadBoard lastUpdated={lastUpdated} />
        </div>
        <div className="order-2 flex justify-center md:order-1">
          {playerName === "" ? (
            <PlayerForm
              lastNickname={lastNickname}
              onPlayerNameSubmit={handlePlayerSubmit}
            />
          ) : (
            <Board currentBoard={board} />
          )}
        </div>

        <div className="order-1 flex flex-col items-center justify-center md:order-2 md:items-start md:justify-start">
          <div className="mb-4 flex flex-row gap-6 text-lg font-semibold md:flex-col lg:text-2xl">
            <BestScore BestScore={score} />
            <div>Your score: {score}</div>
          </div>
          <div>
            {isPlaying && <UpcomingBlocks upcomingBlocks={upcomingBlocks} />}
          </div>
        </div>
      </div>
    </>
  );
}
