import { FC } from 'react';

const Head = (
  <div className="top-11 -right-5 h-12 w-12 absolute border-solid border-2.5 bg-black rounded-3xl"></div>
);
const Body = (
  <div className="bg-black absolute w-2.5 h-48 top-11 right-0"></div>
);

const Larm = (
  <div className="bg-black absolute w-20 h-2.5 top-36 -right-2 -rotate-45"></div>
);
const Rarm = (
  <div className="bg-black absolute w-20 h-2.5 top-36 -right-16 rotate-45"></div>
);
const Lleg = (
  <div className="bg-black absolute w-20 h-2.5 top-64 -right-2 -rotate-45"></div>
);
const Rleg = (
  <div className="bg-black absolute w-20 h-2.5 top-64 -right-16 rotate-45"></div>
);

const bodyParts = [Head, Body, Larm, Rarm, Lleg, Rleg];

export interface Props {
  numberOfGuesses: number;
}

const HangmanDrawing: FC<Props> = ({ numberOfGuesses }) => {
  return (
    <div className="relative">
      {bodyParts.slice(0, numberOfGuesses)}
      <div className="h-12 w-2.5 bg-black absolute right-0 top-0"></div>
      <div className="h-2.5 w-32 bg-black ml-32"></div>
      <div className="h-96 w-2.5 bg-black ml-32"></div>
      <div className="h-2.5 w-64 bg-black "></div>
    </div>
  );
};

export default HangmanDrawing;
