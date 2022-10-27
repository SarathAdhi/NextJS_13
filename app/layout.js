import "tailwindcss/tailwind.css";
import NavLink from "./components/NavLink";

const pages = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/todos",
    label: "Todos",
  },
];

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next 13</title>
      </head>

      <body className="bg-gray-900 text-white grid gap-5 p-5">
        <header className="flex gap-5">
          {pages.map(({ href, label }) => (
            <NavLink href={href} className="text-orange-400 underline">
              {label}
            </NavLink>
          ))}
        </header>

        <hr />

        <div>{children}</div>
      </body>
    </html>
  );
}
