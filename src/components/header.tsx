import logoSvg from "../assets/logo.svg";
import refreshSvg from "../assets/refresh.svg";

export function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <img className="h-[3.75rem]" src={logoSvg} alt="Adivinhação" />

      <header className="w-full flex justify-between py-[3.25rem] px-0">
        <span className="text-[1.12rem] text-gray-400">
          <strong className="text-[1.37rem] text-orange-400">5</strong> de 10
          tentativas
        </span>

        <button className="" type="button">
          <img
            className="h-8 transition ease-in cursor-pointer hover:scale-105 hover:animate-spin"
            src={refreshSvg}
            alt="Ícone de reiniciar"
          />
        </button>
      </header>
    </div>
  );
}
