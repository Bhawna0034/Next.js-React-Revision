import Image from "next/image";
import ControlledInput from "./components/ControlledInput";
import UnControlledInput from "./components/UnControlledInput";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <UnControlledInput />
    </main>
  );
}
