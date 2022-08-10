import { Flex, Grid } from "@chakra-ui/react";
import { PostsProps } from "../../types/types";
import PostDescription from "./PostDescription";
import PostImage from "./PostImage";

export default function Gallery({ posts }: PostsProps) {
  return (
    <Grid
      w="100%"
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
          <Flex direction="column" key={post.slug}>
            <PostImage src={post.image.url} borderRadius=".5rem .5rem 0 0" />
            <PostDescription
              postedAt={post.postedAt}
              tag={post.topic}
              slug={post.slug}
              title={post.title}
            />
          </Flex>
        );
      })}
    </Grid>
  );
}
