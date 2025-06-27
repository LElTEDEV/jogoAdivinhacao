import tipSvg from "../assets/lamp.svg";

interface Props {
  tip: string;
}

export function Tip({ tip }: Props) {
  return (
    <div className="w-full bg-violet-200 text-violet-900 rounded-lg p-4 flex items-center gap-4">
      <img className="h-8" src={tipSvg} alt="Ícone de dica" />

      <div>
        <h3 className="text-[1.12rem] font-bold">Dica</h3>
        <p className="mt-[0.31rem]">{tip}</p>
      </div>
    </div>
  );
}
