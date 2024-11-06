import Image from "next/image";

import ToDoApp from "./components/ToDoApp";

export default function Home() {
  return (
    <main className="my-12 flex justify-center ">
      <ToDoApp />
    </main>
  );
}
