import { FC } from 'react';

type Props = {
  guessedLetter: string[];
  word: string;
};

export const HangmanWord: FC<Props> = ({ guessedLetter, word }) => {
  return (
    <div className="flex gap-1 font-bold font text-6xl uppercase">
      {word.split('').map((letter, index) => (
        <span className="border-b-black border-b-4 " key={index}>
          <span
            style={{
              visibility: guessedLetter.includes(letter) ? 'visible' : 'hidden',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
