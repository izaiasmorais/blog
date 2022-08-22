import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import ReactMarkdown from "react-markdown";
import styles from "./post.module.scss";
import { SlideFade, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";

interface PostConentProps {
  content: string;
}

export function PostContent({ content }: PostConentProps) {
  return (
    <ReactMarkdown
      children={content}
      className={styles.Markdown}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={dracula as any}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
}
