import { Flex } from "@chakra-ui/react";
import ActiveLink from "../ActiveLink";

export default function NavBar() {
  return (
    <Flex gap={8} fontSize="lg" h="100%" justify="center" align="center">
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>

      <ActiveLink href="/posts" activeClassName="active">
        <a>Posts</a>
      </ActiveLink>

      <ActiveLink href="/about" activeClassName="active">
        <a>Sobre</a>
      </ActiveLink>
    </Flex>
  );
}
