import Image from "next/image";
import FetchUserData from "./components/Fetch API Data/FetchUserData";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <FetchUserData />
    </main>
  );
}
