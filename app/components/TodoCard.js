"use client";

import NavLink from "./NavLink";

export default function TodoCard({ todo }) {
  return (
    <NavLink
      key={todo.id}
      href={`/todos/${todo.id}`}
      className="w-40 border-2 p-2 rounded-md"
    >
      <p>ID: {todo.id}</p>
      <h1>Title: {todo.title}</h1>
      <p>Status: {`${todo.completed}`}</p>
    </NavLink>
  );
}
