import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";

export default function Post() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <div>
        <h1>Post</h1>
      </div>
    </Flex>
  );
}
