import {
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CgMenuRight } from "react-icons/cg";
import { ActiveLink } from "./ActiveLink";
import { SubscribeButton } from "./SubscribeButton";

export function HeaderMenu() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        bg="transparent"
        _focus={{ bg: "transparent" }}
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
      >
        <CgMenuRight size={30} color="white" />
      </MenuButton>

      <MenuList bg="blue.700" border="none" px="2" py="4">
        <MenuItem _focus={{ bg: "transparent" }} bg="transparent" mb="1">
          <ActiveLink href="/" activeClassName="#eea229">
            <Link w="100%" textDecoration="none" fontSize="1rem">
              Home
            </Link>
          </ActiveLink>
        </MenuItem>

        <MenuItem mb="1" bg="transparent">
          <ActiveLink href="/posts" activeClassName="#eea229">
            <Link w="100%" textDecoration="none" fontSize="1rem">
              Posts
            </Link>
          </ActiveLink>
        </MenuItem>

        <MenuItem mb="1" bg="transparent">
          <ActiveLink href="/about" activeClassName="#eea229">
            <Link w="100%" textDecoration="none" fontSize="1rem">
              Sobre
            </Link>
          </ActiveLink>
        </MenuItem>

        <Flex p="2">
          <SubscribeButton />
        </Flex>
      </MenuList>
    </Menu>
  );
}
