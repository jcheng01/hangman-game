import { FC } from 'react';

const keys = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  activeLetter: string[];
  wrongLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export const Keyboard: FC<KeyboardProps> = ({
  activeLetter,
  wrongLetters,
  disabled = false,
  addGuessedLetter,
}) => {
  return (
    <div className="grid grid-cols-10 gap-2">
      {keys.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInActive = wrongLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={
              isActive
                ? 'w-auto border-black border-2 bg-none uppercase cursor-pointer p-2 font-bold bg-sky-400'
                : isInActive
                ? `opacity-50 w-auto border-black border-2 bg-none uppercase cursor-default`
                : 'w-auto border-black border-2 bg-none uppercase cursor-pointer p-2 font-bold hover:bg-sky-200'
            }
            disabled={disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
