import Layout from "../../components/PostLayout";
import { getAllDS, getPostBySlug } from "../../lib/docs";
import markdownToHtml from "../../lib/markdown";

export default function Doc({ meta, content }) {
  return <Layout meta={meta}>{content}</Layout>;
}

export async function getStaticProps({ params }) {
  const doc = getPostBySlug(params.slug, ["title", "content"]);
  const content = await markdownToHtml(doc.content || "");

  return {
    props: {
      meta: { title: doc.title },
      content,
    },
  };
}

export async function getStaticPaths() {
  const docs = getAllDS(["slug"]);

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: true,
  };
}
