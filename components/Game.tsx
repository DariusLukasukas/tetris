"use client";

import { useTetris } from "@/hooks/useTetris";
import Board from "./Board";
import UpcomingBlocks from "./UpcomingBlocks";
import BestScore from "./BestScore";

export default function Game() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

  return (
    <>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-3 lg:gap-0">
        <div></div>
        <div className="order-2 flex justify-center md:order-1">
          <Board currentBoard={board} />
        </div>

        <div className="order-1 flex flex-col items-center justify-center md:order-2 md:items-start md:justify-start">
          <div className="mb-8 flex flex-row gap-6 text-xl font-semibold md:flex-col lg:text-2xl">
            <BestScore BestScore={score} />
            <div>Your score: {score}</div>
          </div>
          <div>
            {isPlaying ? (
              <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
            ) : (
              <button
                onClick={startGame}
                className="rounded-lg px-4 py-2 ring ring-white hover:ring-neutral-500"
              >
                New Game
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
