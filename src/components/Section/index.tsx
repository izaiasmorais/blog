import { Flex, Text } from "@chakra-ui/react";
import ImageBox from "../Gallery/PostImage";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

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
        <ImageBox src="/assets/image3.png" borderRadius=".5rem" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text as="h1" fontSize="3xl" fontWeight="600">
          Receita de bolo para criar contextos no React
        </Text>
        <Text as="p" fontSize="1xl">
          Numa aplicação React comum, os dados são passados de cima para baixo
          (pai para filho), no entanto, isso pode se tornar complicado quando
          começamos a trabalhar com aplicações mais complexas...
        </Text>
        <Link
          href="https://ezblog.vercel.app/posts/receita-de-bolo-para-criar-contextos-no-react"
          passHref
        >
          <Text
            as="a"
            fontSize="1xl"
            fontWeight="bold"
            display="flex"
            align="center"
            cursor="pointer"
            _hover={{ color: "orange.500" }}
            transition=".2s color"
          >
            Veja mais <BsArrowRightShort size={30} />
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
