"use client";
import { FlashcardForm } from "@/comonents/FlashCardForm";
import { FlashcardList } from "@/comonents/FlashCardList";
import { FlashcardModal } from "@/comonents/FlashcardModal";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface List {
  front: string;
  back: string;
  flipped: boolean;
  id: string;
}

export const FleashCard = () => {
  const [list, setList] = useState([] as Array<List>);
  const [selectedCard, setCard] = useState({} as List);
  const [showModal, setShowModal] = useState(false);

  const showResult = (front: string, back: string) => {
    const array = { front: front, back: back, flipped: false, id: uuidv4() };
    setList([...list, array]);
  };

  const selectCard = (flashcard: List) => {
    setCard(flashcard);
    setShowModal(true);
  };

  const makeFlip = (id: string) => {
    const array = [...list];

    array.map((item) => {
      if (item.id === id) {
        item.flipped = !item.flipped;
      }
    });

    setList(array);
  };

  const closeModale = () => {
    const array = [...list];

    array.map((item) => (item.flipped = false));

    setList(array);
    setShowModal(false);
  };

  return (
    <div>
      <FlashcardForm onCreateCard={showResult} />
      <FlashcardList flashcards={list} onCardClick={selectCard} />
      {showModal && (
        <FlashcardModal
          flashcard={selectedCard}
          onClose={closeModale}
          onFlip={makeFlip}
        />
      )}
    </div>
  );
};
