import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const dsDirectory = join(process.cwd(), "pages/ds");
const algoDirectory = join(process.cwd(), "pages/algo");

type Items = {
  [key: string]: string;
};

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
  isAlgo = false
) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(isAlgo ? algoDirectory : dsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllDS(fields: string[] = []) {
  const dsFiles = fs.readdirSync(dsDirectory);
  const posts = dsFiles
    .filter((filePath) => filePath.endsWith(".md"))
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => parseInt(post1.order) - parseInt(post2.order));
  return posts;
}

export function getAllAlgo(fields: string[] = []) {
  const algoFiles = fs.readdirSync(algoDirectory);
  const posts = algoFiles
    .filter((filePath) => filePath.endsWith(".md"))
    .map((slug) => getPostBySlug(slug, fields, true))
    // sort posts by date in descending order
    .sort((post1, post2) => parseInt(post1.order) - parseInt(post2.order));
  return posts;
}
