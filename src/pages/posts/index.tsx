import { Flex } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Gallery } from "../../components/Gallery";
import { api } from "../../lib/axios";
import { Post } from "../../types/types";
import Header from "../../components/Header";

export default function Posts() {
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
      <Gallery posts={posts} />
      <Footer />
    </Flex>
  );
}
