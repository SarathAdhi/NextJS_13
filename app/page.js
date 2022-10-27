import React from "react";
import Kbd from "./components/Kbd";

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

      <ul className="text-lg grid gap-2 leading-normal list-inside list-decimal">
        <li>
          {"Have tried React's official "}

          <Kbd>use</Kbd>
          {
            " hook, which is built on top of React Suspense for Data Fetching and it's pretty cool!. The new use hook replaces previous Next.js APIs like getStaticProps and getServerSideProps and aligns with the future of React."
          }
        </li>

        <li>
          Have tried <Kbd>Layouts</Kbd>, and you know what? This is next gen
          feature for NextJS and developer's like me going to love itt. If you
          check out my{" "}
          <A href="https://github.com/SarathAdhi/Blog_Ocean/blob/main/src/common/layouts/PageLayout.tsx">
            nextjs projects
          </A>
          , you will see that I have used a separate layout folder, and now no
          need for that.
        </li>

        <li>
          New <Kbd>Server Components</Kbd> architecture. When a route is loaded,
          the Next.js and React runtime will be loaded, which is cacheable and
          predictable in size. This runtime does not increase in size as your
          application grows.
        </li>

        <li>
          <Kbd>Streming</Kbd> An important feature which is used in data
          fetching. Lets say we want to fetch data using SSR and show a loading
          screen until the data is fetched, We can simple create a file called{" "}
          <Kbd>loading.js</Kbd> and use it as a loading component. This
          component can be customized.{" "}
          <A href="https://github.com/SarathAdhi/NextJS_13/blob/main/app/todos/loading.js">
            Example
          </A>
          <img
            className="w-full mt-10"
            src="https://nextjs.org/_next/image?url=%2Fstatic%2Fblog%2Fnext-13%2Fstreaming.png&w=3840&q=75"
          />
          <p className="text-sm text-center">Source: NextJS</p>
        </li>

        <li>
          <Kbd>Turbo pack</Kbd> The new Rust-based successor to Webpack.
          Turbopack only bundles the minimum assets required in development, so
          startup time is extremely fast. On an application with 3,000 modules,
          Turbopack takes 1.8 seconds to boot up. Vite takes 11.4 seconds and
          Webpack takes 16.5 seconds.
        </li>

        <li>
          <Kbd>@next/image</Kbd> The new Image component:
          <ul className="ml-5 leading-normal list-inside list-disc">
            <li>Ships less client-side JavaScript</li>
            <li>Easier to style and configure</li>
            <li>More accessible requiring alt tags by default</li>
            <li>Aligns with the Web platform</li>
            <li>
              Faster because native lazy loading doesn't require hydration
            </li>
          </ul>
        </li>

        <li>
          <Kbd>@next/font</Kbd> Next.js 13 introduces a brand new font system
          that:
          <ul className="ml-5 leading-normal list-inside list-disc">
            <li>Automatically optimizes your fonts, including custom fonts</li>
            <li>
              Removes external network requests for improved privacy and
              performance
            </li>
            <li>Built-in automatic self-hosting for any font file</li>
            <li>
              Zero layout shift automatically using the CSS{" "}
              <Kbd>size-adjust</Kbd> property
            </li>
          </ul>
          Custom fonts are also supported, including support for automatic
          self-hosting, caching, and preloading of font files.
          <br />
          NOTE: In order to use <Kbd>@next/font</Kbd> install next/font{" "}
          <Kbd>npm i @next/font</Kbd>
        </li>

        <li>
          <Kbd>@next/link</Kbd> From now no need <Kbd>{"<a>"}</Kbd> tag as a
          children under <Kbd>link</Kbd>.
          <br />
          <Kbd>{"<Link>"}</Kbd> always renders an {"<a>"} and allows you to
          forward props to the underlying tag.
        </li>
      </ul>
    </div>
  );
}
