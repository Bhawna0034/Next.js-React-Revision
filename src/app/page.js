import Image from "next/image";

import ShoppingCart from "./components/State/ShoppingCart";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <ShoppingCart />
    </main>
  );
}
