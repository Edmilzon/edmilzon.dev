import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { getPost, getAllPosts } from "@/lib/mdx";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="px-6 py-24 pt-32">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        <header className="mb-10">
          <div className="mb-4 flex items-center gap-4 text-xs text-text-secondary">
            <span className="flex items-center gap-1">
              <CalendarDays size={14} />
              {post.meta.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.meta.readingTime} de lectura
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            {post.meta.title}
          </h1>
          <p className="mb-4 text-lg text-text-secondary">
            {post.meta.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.meta.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight],
              },
            }}
            components={mdxComponents}
          />
        </div>
      </article>
    </div>
  );
}
