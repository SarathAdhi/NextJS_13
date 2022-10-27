import NavLink from "./NavLink";

export default function TodoCard({ todo }) {
  return (
    <NavLink
      key={todo.id}
      href={`/todos/${todo.id}`}
      className="border-2 p-2 rounded-md flex flex-col gap-2"
    >
      <p>ID: {todo?.id}</p>
      <h1>Title: {todo?.title}</h1>
      <p>Status: {`${todo?.completed}`}</p>
    </NavLink>
  );
}
