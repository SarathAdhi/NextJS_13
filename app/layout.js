import "tailwindcss/tailwind.css";
import { Inter } from "@next/font/google";
import Image from "next/image";
import NavLink from "./components/NavLink";
const inter = Inter();

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
    <html className={inter.className}>
      <head>
        <title>Next 13</title>
      </head>

      <body className="bg-gray-900 text-white grid gap-5 p-5">
        <Image
          alt="leeerob"
          src={"/assets/cover-img.png"}
          width={10000}
          height={50}
        />

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
