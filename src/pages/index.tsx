import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Section from "../components/Section";

const Home: NextPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Section />
      <Gallery />
    </Flex>
  );
};

export default Home;
