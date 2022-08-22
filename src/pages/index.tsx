import { useState, useCallback, useEffect } from "react";
import { Gallery } from "../components/Gallery";
import { Footer } from "../components/Footer";
import { Flex } from "@chakra-ui/react";
import { Post } from "../types/types";
import { api } from "../lib/axios";

import Section from "../components/Section";
import Header from "../components/Header";

export default function Home() {
  const username = "izaiasmorais";
  const repoName = "blog-posts";
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );

        setPosts(response.data.items);
      } finally {
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Section />
      <Gallery posts={posts} />
      <Footer />
    </Flex>
  );
}
