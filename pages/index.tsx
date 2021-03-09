import Head from "next/head";
import Link from "next/link";
import { getAllDS } from "./api/docs";

export default function Home({ allDS }) {
  return (
    <div className="bg-green-100 min-h-screen px-4 flex flex-col items-center ">
      <Head>
        <title>Learn DS & Algo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-12">
        <h3 className="text-3xl font-bold mb-4">Data Structures</h3>

        <section className="max-w-lg rounded shadow-lg p-4 bg-white">
          {allDS.map((post) => (
            <Link href={`/ds/${post.slug}`}>
              <span className="hover:underline hover:text-blue-300 cursor-pointer flex items-center text-xl">
                <span className="rounded-full mr-2 bg-blue-400 h-2 w-2"></span>
                {post.title}
              </span>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allDS = getAllDS(["title", "slug", "order"]);

  return {
    props: { allDS },
  };
}
