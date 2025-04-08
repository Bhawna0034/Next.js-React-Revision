import Image from "next/image";
import CounterEffect from "./components/useEffect/CounterEffect";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <CounterEffect />
    </main>
  );
}
