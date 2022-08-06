import { Flex, Grid } from "@chakra-ui/react";
import PostDescription from "./PostDescription";
import PostImage from "./PostImage";

export default function Gallery() {
  return (
    <Grid
      w="100%"
      mx="auto"
      marginTop="8"
      maxWidth="1120px"
      padding={5}
      gap="8"
      gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
    >
      <Flex direction="column" minWidth="200px">
        <PostImage image="/assets/image1.png" borderRadius=".5rem .5rem 0 0" />
        <PostDescription />
      </Flex>

      <Flex direction="column">
        <PostImage image="/assets/image2.png" borderRadius=".5rem .5rem 0 0" />
        <PostDescription />
      </Flex>

      <Flex direction="column">
        <PostImage image="/assets/image4.png" borderRadius=".5rem .5rem 0 0" />
        <PostDescription />
      </Flex>
    </Grid>
  );
}
