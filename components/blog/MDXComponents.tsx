import type { MDXComponents as MDXComponentsType } from "mdx/types";

export const mdxComponents: MDXComponentsType = {
    h1: (props) => (
      <h1 className="mb-4 mt-8 text-3xl font-bold tracking-tight" {...props} />
    ),
    h2: (props) => (
      <h2 className="mb-3 mt-8 text-2xl font-semibold tracking-tight" {...props} />
    ),
    h3: (props) => (
      <h3 className="mb-2 mt-6 text-xl font-semibold tracking-tight" {...props} />
    ),
    p: (props) => (
      <p className="mb-4 text-text-secondary leading-relaxed" {...props} />
    ),
    a: (props) => (
      <a
        className="text-primary-light underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    ul: (props) => (
      <ul className="mb-4 list-disc pl-6 text-text-secondary" {...props} />
    ),
    ol: (props) => (
      <ol className="mb-4 list-decimal pl-6 text-text-secondary" {...props} />
    ),
    li: (props) => <li className="mb-1" {...props} />,
    code: (props) => {
      const { className, children, ...rest } = props as React.HTMLAttributes<HTMLElement>;
      const isInline = !className;
      if (isInline) {
        return (
          <code
            className="rounded bg-surface-lighter px-1.5 py-0.5 text-sm font-mono text-primary-light"
            {...rest}
          >
            {children}
          </code>
        );
      }
      return (
        <pre className="mb-4 overflow-x-auto rounded-lg border border-border bg-surface-lighter p-4">
          <code className={`text-sm font-mono ${className}`} {...rest}>
            {children}
          </code>
        </pre>
      );
    },
    blockquote: (props) => (
      <blockquote
        className="mb-4 border-l-4 border-primary pl-4 text-text-secondary italic"
        {...props}
      />
    ),
    hr: (props) => <hr className="my-8 border-border" {...props} />,
    img: (props) => {
      // eslint-disable-next-line @next/next/no-img-element
      return (
        <img
          className="my-6 rounded-lg border border-border"
          {...props}
          alt={props.alt || ""}
        />
      );
    },
};
