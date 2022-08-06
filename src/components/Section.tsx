import { Flex, Text } from "@chakra-ui/react";
import ImageBox from "./PostImage";
import { BsArrowRightShort } from "react-icons/bs";

export default function Section() {
  return (
    <Flex
      w="100%"
      mx="auto"
      maxWidth="1120px"
      gap="8"
      padding={5}
      wrap={["wrap", "wrap", "nowrap"]}
    >
      <Flex width="100%" maxWidth={["100%", "100%", "350px"]}>
        <ImageBox image="/assets/image3.png" borderRadius=".5rem" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text as="h1" fontSize="3xl" fontWeight="600" transition="all .2s">
          Receita de bolo para criar contextos no React
        </Text>
        <Text as="p" fontSize="1xl">
          Numa aplicação React comum, os dados são passados de cima para baixo
          (pai para filho), no entanto, isso pode se tornar complicado quando
          começamos a trabalhar com aplicações mais complexas...
        </Text>
        <Text
          as="a"
          fontSize="1xl"
          fontWeight="bold"
          display="flex"
          align="center"
          cursor="pointer"
        >
          Veja mais <BsArrowRightShort size={30} />
        </Text>
      </Flex>
    </Flex>
  );
}
