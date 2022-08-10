import { Flex, Text, Link } from "@chakra-ui/react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export function Footer() {
  return (
    <Flex w="100%">
      <Flex
        w="100%"
        maxWidth="1120px"
        mx="auto"
        direction="column"
        align="center"
        justify="center"
        mt="4rem"
        py="2rem"
      >
        <Text as="span" fontSize="1rem" mb="1rem">
          2022 © EZBlog • Todos os direitos reservados
        </Text>
        <Flex gap="1rem" align="center">
          <Link href="https://github.com/IzaiasMorais">
            <AiFillGithub size={30} />
          </Link>
          <Link href="https://www.instagram.com/_izaias_morais/">
            <AiFillInstagram size={30} />
          </Link>
          <Link href="https://discord.com/users/734056109605650534">
            <BsDiscord size={26} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
