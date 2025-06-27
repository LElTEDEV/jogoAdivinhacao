import { Header } from "./components/header";

export function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <main className="w-[442px]">
        <Header current={7} max={10} onRestart={() => console.log("UE")} />
      </main>
    </div>
  );
}
