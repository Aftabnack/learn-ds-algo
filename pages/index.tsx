import Head from "next/head";
import Link from "next/link";
import { getAllAlgo, getAllDS } from "../lib/docs";

export default function Home({ allDS, allAlgo }) {
  const boxes = [
    { title: "Algorithms", route: "algo", list: allAlgo },
    { title: "Data Structures", route: "ds", list: allDS },
  ];
  return (
    <div className="bg-green-100 min-h-screen px-4 flex flex-col items-center ">
      <Head>
        <title>Learn DS & Algo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-12 grid grid-cols-2 grid-rows-1 gap-12">
        {boxes.map((item) => (
          <section
            key={item.title}
            className="max-w-lg rounded shadow-lg  bg-white"
          >
            <h3 className="text-2xl font-bold px-8 py-4 bg-green-300">
              {item.title}
            </h3>
            <div className="p-8 pt-4">
              {item.list.map((post) => (
                <Link key={post.slug} href={`/${item.route}/${post.slug}`}>
                  <span className="hover:underline hover:text-blue-300 cursor-pointer flex items-center text-lg">
                    <span className="rounded-full mr-2 bg-blue-400 h-2 w-2"></span>
                    {post.title}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allDS = getAllDS(["title", "slug", "order"]);
  const allAlgo = getAllAlgo(["title", "slug", "order"]);

  return {
    props: { allDS, allAlgo },
  };
}
