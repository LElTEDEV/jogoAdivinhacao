import { useEffect, useState } from "react";

import { Tip } from "./components/tip";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { Letter } from "./components/letter";
import { LettersUsed, type LettersUsedProps } from "./components/lettersUsed";

import { WORDS, type Challenge } from "./utils/words";

export function App() {
  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setScore(0);
    setLetter("");
    setChallenge(randomWord);
    setLettersUsed([]);
  }

  function handleConfirm() {
    if (!challenge) return;

    if (!letter.trim()) return alert("Digite uma letra");

    const value = letter.toUpperCase();
    const exists = lettersUsed.find(
      (used) => used.value.toUpperCase() === value
    );

    if (exists) return alert(`Você já utilizou a letra: ${value}`);

    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setLettersUsed((prevState) => [...prevState, { value, correct }]);
    setScore(currentScore);
    setLetter("");
  }

  function endGame(message: string) {
    alert(message);
    startGame();
  }

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (!challenge) return;

    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabéns, você ganhou!");
      }

      if (lettersUsed.length === challenge.word.length + 5) {
        return endGame("Poxa, você perdeu! Tente novamente :)");
      }
    }, 200);
  }, [score, lettersUsed.length]);

  if (!challenge) return;

  return (
    <div className="w-full h-full flex items-center justify-center ">
      <main className="w-[556px] bg-white p-8 pt-[4.5rem] rounded-lg m-5">
        <Header
          current={lettersUsed.length}
          max={challenge.word.length + 5}
          onRestart={startGame}
        />

        <Tip tip={challenge.tip} />

        <div className="w-full flex justify-center flex-wrap gap-4 my-10 mx-0">
          {challenge.word.split("").map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            );

            return (
              <Letter
                key={index}
                value={letterUsed?.value}
                status={letterUsed?.correct ? "accepted" : "normal"}
              />
            );
          })}
        </div>

        <h4>Palpite</h4>

        <div className="flex gap-3 mt-3">
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={({ target }) => setLetter(target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed dados={lettersUsed} />
      </main>
    </div>
  );
}
