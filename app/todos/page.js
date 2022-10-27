import { use } from "react";
import TodoCard from "../components/TodoCard";

async function getTodos() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
}

export default function Page() {
  let todos = use(getTodos());

  if (!todos) return <>Oops</>;

  console.log(todos); // Fetches data in server

  return (
    <div className="w-full grid grid-cols-2 gap-5">
      {todos?.map((todo) => (
        <TodoCard key={todo?.id} todo={todo} />
      ))}
    </div>
  );
}
