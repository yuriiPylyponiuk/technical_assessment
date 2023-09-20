import { List } from "@/features/FlashCard";
import React, { FC } from "react";
import "./style.css";

interface FlashcardModalProps {
  flashcard: List;
  onClose: () => void;
  onFlip: (id: string) => void;
}

export const FlashcardModal: FC<FlashcardModalProps> = ({
  flashcard,
  onClose,
  onFlip,
}) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="flashcard-modal">
        <div
          className={`flashcard-content ${flashcard.flipped ? "flipped" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onFlip(flashcard.id);
          }}
        >
          <div className="flashcard-side front">{flashcard.front}</div>
          <div className="flashcard-side back">{flashcard.back}</div>
        </div>
      </div>
    </div>
  );
};
