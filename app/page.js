import React from "react";

const A = ({ href, children }) => (
  <a
    className="text-blue-400 hover:underline"
    href={href}
    target="_blank"
    referrerPolicy="no-referrer"
  >
    {children}
  </a>
);

export default function page() {
  return (
    <div className="grid gap-4">
      <h1 className="text-xl">
        Hello world, this is a demo of{" "}
        <span className="text-orange-500">NextJS 13</span>
      </h1>

      <A href="https://blog-ocean.vercel.app/content/635a78e3a899dc7b270587c1/nextjs--here-is-what-i-have-learnt">
        Check out my blog post to know more about NextJS 13
      </A>

      <iframe
        className="w-full h-[90vh] rounded-lg"
        src="https://blog-ocean.vercel.app/content/635a78e3a899dc7b270587c1/nextjs--here-is-what-i-have-learnt"
        name="blog-ocean-next13"
        scrolling="yes"
        frameborder="1"
        allowfullscreen
      ></iframe>
    </div>
  );
}
