import Image from "next/image";
import UserProfile from "./components/State/UserProfile";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
      <UserProfile />
    </main>
  );
}
