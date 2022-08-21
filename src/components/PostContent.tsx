import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import styles from "./post.module.scss";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PostContentProps {
  content: string;
}

const username = "GBDev13";
const repoName = "blog-posts";

export function PostContent() {
  const [postData, setPostData] = useState({} as any);

  async function getPostDetails() {
    const response = await api.get(`/repos/${username}/${repoName}/issues/2`);

    setPostData(response.data);
  }

  const content = postData.body;

  console.log(content);

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <div className={styles.Container}>
      <ReactMarkdown
        children={content}
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
    </div>
  );
}
