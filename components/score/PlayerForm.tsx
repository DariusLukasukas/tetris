"use client";
import { useState, FormEvent, ChangeEvent } from "react";

interface PlayerFormProps {
  lastNickname: string;
  onPlayerNameSubmit: (playerName: string) => void;
}

const PlayerForm = ({ lastNickname, onPlayerNameSubmit }: PlayerFormProps) => {
  const [playerName, setPlayerName] = useState(lastNickname);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (playerName.trim() !== "") {
      onPlayerNameSubmit(playerName);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  return (
    <div className="container mx-auto flex justify-center">
      <form onSubmit={handleSubmit} className="flex max-w-xs flex-col gap-4">
        <label htmlFor="player-name">Enter your nickname:</label>
        <input
          type="text"
          id="player-name"
          value={playerName}
          maxLength={12}
          onChange={handleInputChange}
          className="rounded-lg px-4 py-2 text-black ring-2 ring-white"
        />
        <button
          type="submit"
          className="rounded-lg px-4 py-2 ring-2 ring-white"
        >
          Start Game
        </button>
      </form>
    </div>
  );
};

export default PlayerForm;
