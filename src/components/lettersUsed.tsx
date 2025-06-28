import { Letter } from "./letter";

export function LettersUsed() {
  return (
    <div className="w-full mt-14 border-t-2 border-t-violet-100">
      <h5 className="my-3">Letras utilizadas</h5>

      <div className="flex flex-wrap gap-3">
        <Letter value="R" variant="small" status="accepted" />
        <Letter value="E" variant="small" status="wrong" />
      </div>
    </div>
  );
}
