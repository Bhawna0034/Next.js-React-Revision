import Image from "next/image";
import FetchData from "./components/Fetch API Data/FetchData";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <FetchData />
    </main>
  );
}
