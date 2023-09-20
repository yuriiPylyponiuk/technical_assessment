import { List } from "@/features/FlashCard";
import React, { FC } from "react";
import "./style.css";

interface FlashcardListProps {
  flashcards: Array<List>;
  onCardClick: (index: List) => void;
}

export const FlashcardList: FC<FlashcardListProps> = ({
  flashcards,
  onCardClick,
}) => {
  return (
    <div>
      <h1>List:</h1>
      <div className="flashcard-list">
        {flashcards.map((flashcard, index) => (
          <div
            className="flashcard-item"
            key={index}
            onClick={() => onCardClick(flashcard)}
          >
            {flashcard.front}
          </div>
        ))}
      </div>
    </div>
  );
};
