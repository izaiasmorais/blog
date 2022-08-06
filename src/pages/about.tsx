import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";

export default function About() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <div>
        <h1>About</h1>
      </div>
    </Flex>
  );
}
