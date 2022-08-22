import { Flex } from "@chakra-ui/react";
import { ActiveNavbarLink } from "./ActiveNavbarLink";

export function NavBar() {
  return (
    <Flex gap={8} fontSize="lg" h="100%" justify="center" align="center">
      <ActiveNavbarLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveNavbarLink>

      <ActiveNavbarLink href="/posts" activeClassName="active">
        <a>Posts</a>
      </ActiveNavbarLink>

      <ActiveNavbarLink href="/about" activeClassName="active">
        <a>Sobre</a>
      </ActiveNavbarLink>
    </Flex>
  );
}
