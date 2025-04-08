import Image from "next/image";
import TodoList from "./components/TodoList";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
      <TodoList/>
    </main>
  );
}
