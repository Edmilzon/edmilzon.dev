import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre desarrollo, arquitectura de software y tecnología",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="px-6 py-24 pt-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-sm font-medium text-primary-light">Blog</h1>
        <p className="mb-12 text-3xl font-semibold tracking-tight">
          Artículos y notas técnicas
        </p>

        {posts.length === 0 ? (
          <div className="rounded-xl border border-border bg-surface-light p-12 text-center">
            <p className="text-text-secondary">
              No hay artículos todavía. ¡Pronto escribiré sobre arquitectura de
              software, desarrollo y tecnología!
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
