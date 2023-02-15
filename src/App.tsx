import React, { FC, useCallback, useEffect, useState } from 'react';
import HangmanDrawing from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/Keyboard';
import words from './words.json';

const App: FC = () => {
  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]; // returns random word from list
  });
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);
  const wrongLetters = guessedLetter.filter((letter) => !word.includes(letter));
  console.log(wrongLetters.length);

  const isLoser = wrongLetters.length >= 6;
  const isWinner = word
    .split('')
    .every((letter) => guessedLetter.includes(letter)); //if every letter is included in letter, return winner

  const refreshPage = () => {
    window.location.reload();
  };
  const addGuessedLetter = useCallback(
    // usecallback is needed bc when the function is called without it, the guessed letter array state is called empty. Useefect will rerun when the dependency changes while not rerending component everytime
    (letter: string) => {
      if (guessedLetter.includes(letter)) return; //if the key is pressed already in array, do nothing
      setGuessedLetter((currentLetters) => [...currentLetters, letter]); //else, add to guessed state
    },
    [guessedLetter]
  );

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;
      if (!key.match(/^[a-z]$/)) return; //if key matches from letters a through z
      event.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetter]);

  return (
    <div className="max-w-3xl flex flex-col gap-6 m-auto items-center">
      <button
        onClick={refreshPage}
        className={
          isLoser || isWinner
            ? 'text-2xl text-center text-white bg-black p-3 rounded-md mt-2 hover:opacity-10 hover:transition-opacity'
            : ''
        }
      >
        {isWinner && 'You win, refresh to play again'}
        {isLoser && 'Try again'}
      </button>
      <HangmanDrawing numberOfGuesses={wrongLetters.length} />
      <HangmanWord guessedLetter={guessedLetter} word={word} />
      <Keyboard
        disabled={isLoser || isWinner}
        activeLetter={guessedLetter.filter((letter) => word.includes(letter))}
        wrongLetters={wrongLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
};

export default App;
