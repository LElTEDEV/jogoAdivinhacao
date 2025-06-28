import { Letter } from "./letter";

export type LettersUsedProps = {
  value: string;
  correct: boolean;
};

type Props = {
  dados: LettersUsedProps[];
};

export function LettersUsed({ dados }: Props) {
  return (
    <div className="w-full mt-14 border-t-2 border-t-violet-100">
      <h5 className="my-3">Letras utilizadas</h5>

      <div className="flex flex-wrap gap-3">
        {dados.length > 0 ? (
          dados.map(({ value, correct }, index) => (
            <Letter
              key={index}
              value={value}
              variant="small"
              status={correct ? "accepted" : "wrong"}
            />
          ))
        ) : (
          <div className="w-full flex items-center justify-center">
            <h1 className="text-2xl text-gray-200">Comece a jogar :)</h1>
          </div>
        )}
      </div>
    </div>
  );
}
