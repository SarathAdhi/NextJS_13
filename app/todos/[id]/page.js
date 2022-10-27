import React, { use } from "react";

async function getTodo(id) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return response.json();
}

export default function ViewTodo({ params }) {
  let todo = use(getTodo(params.id));
  console.log(params);

  return (
    <div className="w-full text-center">
      <p className="flex items-center justify-center gap-2 divide-x-2">
        <span>ID: {todo.id}</span>
        <span className="pl-2">Status: {`${todo.completed}`}</span>
      </p>

      <h1 className="text-2xl font-semibold">Title: {todo.title}</h1>
    </div>
  );
}
