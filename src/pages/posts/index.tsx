import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";

export default function Posts() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <div>
        <h1>Posts</h1>
      </div>
    </Flex>
  );
}
