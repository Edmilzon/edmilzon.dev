import fs from "node:fs";
import path from "node:path";

const contentDir = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const meta = parseFrontmatter(source);

    const wordCount = source.split(/\s+/).length;
    const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min`;

    return {
      slug,
      title: meta.title || slug,
      description: meta.description || "",
      date: meta.date || "",
      tags: meta.tags || [],
      readingTime,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime(),
  );
}

export function getPost(slug: string): { content: string; meta: BlogPost } | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const meta = parseFrontmatter(source);
  const content = stripFrontmatter(source);

  const wordCount = source.split(/\s+/).length;
  const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min`;

  return {
    content,
    meta: {
      slug,
      title: meta.title || slug,
      description: meta.description || "",
      date: meta.date || "",
      tags: meta.tags || [],
      readingTime,
    },
  };
}

function parseFrontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return { title: "", description: "", date: "", tags: [] as string[] };

  const result: Record<string, string | string[]> = {};
  const lines = match[1].split("\n");

  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    const value = rest.join(":").trim();

    if (key === "tags") {
      result[key.trim()] = value
        .replace(/[[\]"]/g, "")
        .split(",")
        .map((t: string) => t.trim());
    } else {
      result[key.trim()] = value.replace(/^["']|["']$/g, "");
    }
  }

  return {
    title: (result.title as string) ?? "",
    description: (result.description as string) ?? "",
    date: (result.date as string) ?? "",
    tags: (result.tags as string[]) ?? [],
  };
}

function stripFrontmatter(source: string): string {
  return source.replace(/^---\n[\s\S]*?\n---\n/, "");
}
