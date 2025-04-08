import Image from "next/image";

import ShoppingCart from "./components/State/ShoppingCart";
import ParentComponent from "./components/State/LiftingState";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <ParentComponent />
    </main>
  );
}
