"use client";
import React, { FC, useState } from "react";
import "./style.css";

interface FlashcardFormProps {
  onCreateCard: (front: string, back: string) => void;
}

export const FlashcardForm: FC<FlashcardFormProps> = ({ onCreateCard }) => {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (front && back) {
      onCreateCard(front, back);
      setFront("");
      setBack("");
    }
  };

  return (
    <form className="flashcard-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Front side"
        value={front}
        onChange={(e) => setFront(e.target.value)}
      />
      <input
        type="text"
        placeholder="Back side"
        value={back}
        onChange={(e) => setBack(e.target.value)}
      />
      <button type="submit">Create Flashcard</button>
    </form>
  );
};
