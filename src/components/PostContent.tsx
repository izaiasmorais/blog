import { api } from "../lib/axios";
import { useEffect, useState } from "react";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";
import styles from "./post.module.scss";

const username = "izaiasmorais";
const repoName = "blog-posts";

export function PostContent() {
  const [postData, setPostData] = useState({} as any);

  async function getPostDetails() {
    const response = await api.get(`/repos/${username}/${repoName}/issues/1`);

    setPostData(response.data);
  }

  const content = postData.body;

  useEffect(() => {
    getPostDetails();
  }, []);

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
