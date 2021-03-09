import Link from "next/link";
import Head from "next/head";

export default function Layout({ children, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css`}
          rel="stylesheet"
        />
      </Head>
      <main className="flex items-center justify-center flex-col mx-auto my-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left">
          {meta.title}
        </h1>
        <article
          className="prose mx-auto"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </main>
    </>
  );
}
