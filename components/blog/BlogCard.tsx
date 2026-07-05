import { CalendarDays, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/lib/mdx";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-border bg-surface-light p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-3 flex items-center gap-4 text-xs text-text-secondary">
        <span className="flex items-center gap-1">
          <CalendarDays size={14} />
          {post.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {post.readingTime} lectura
        </span>
      </div>
      <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
        {post.title}
      </h3>
      <p className="mb-4 text-sm text-text-secondary leading-relaxed">
        {post.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </a>
  );
}
