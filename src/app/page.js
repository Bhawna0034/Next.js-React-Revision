import Image from "next/image";
import CounterRef from "./components/useRef/CounterRef";
import Stopwatch from "./components/useRef/Stopwatch";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <Stopwatch />
    </main>
  );
}
