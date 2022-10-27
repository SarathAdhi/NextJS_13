import { use } from "react";
import TodoCard from "../components/TodoCard";

async function getTodos() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
}

export default function Page() {
  let todos = use(getTodos());
  // let todos = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 4,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 5,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 4,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  //   {
  //     userId: 1,
  //     id: 5,
  //     title: "delectus aut autem",
  //     completed: false,
  //   },
  // ];

  console.log(todos); // Fetches data in server

  return (
    <div className="w-full flex flex-wrap gap-5 items-stretch justify-center">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
