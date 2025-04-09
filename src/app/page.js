"use client"
import Image from "next/image";
import GetRef from "./components/useRef/GetRef";
import PasswordId from "./components/useId/PasswordId";
import ThemeSwitcher from "./components/ContextAPI/ThemeSwitcher";
import CustomHook from "./components/Custom Hooks/CustomHook";
import CounterCustom from "./components/Custom Hooks/CounterCustom";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <CounterCustom/>
    </main>
  );
}
