import { Flex, Grid, SlideFade, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { Post } from "../../types/types";

import slugify from "slugify";
import PostDescription from "./PostDescription";

interface PostsProps {
  posts: Post[];
}

export function Gallery({ posts }: PostsProps) {
  const { isOpen, onOpen } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <Grid
      w="100%"
      h="100%"
      mx="auto"
      marginTop="8"
      maxWidth="1120px"
      padding={5}
      gap="8"
      gridTemplateColumns={[
        "1fr",
        "1fr",
        "1fr 1fr",
        "1fr 1fr 1fr",
        "1fr 1fr 1fr",
        "1fr 1fr 1fr",
        "1fr 1fr 1fr",
      ]}
    >
      {posts.map((post) => {
        return (
          <SlideFade offsetY="50px" in={isOpen} key={post.number}>
            <Flex
              direction="column"
              boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.1)"}
              borderRadius={"0 0 .5rem .5rem"}
              transition="all .3s"
              _hover={{
                transform: "translate3d(0, -5px, 0)",
                boxShadow: "0px 15px 20px -3px #00000020",
              }}
            >
              <PostDescription
                tag="ReactJS"
                title={post.title}
                key={post.title}
                slug={String(post.number)}
                postedAt={post.created_at}
              />
            </Flex>
          </SlideFade>
        );
      })}
    </Grid>
  );
}
