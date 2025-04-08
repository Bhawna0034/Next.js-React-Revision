import Image from "next/image";
import Counter from "./components/Counter";
import UserStatus from "./components/UserStatus";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
      <UserStatus isLoggedIn={isLoggedIn}/>
    </main>
  );
}
