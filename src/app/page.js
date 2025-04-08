import Image from "next/image";

import UserForm from "./components/State/UserForm";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
      <UserForm />
    </main>
  );
}
