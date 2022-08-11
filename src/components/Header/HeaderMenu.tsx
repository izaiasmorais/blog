import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { CgMenuRight } from "react-icons/cg";
import ActiveLink from "./ActiveLink";
import NavBar from "./NavBar";
import SubscribeButton from "./SubscribeButton";

export default function HeaderMenu() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        bg="transparent"
        _focus={{ bg: "transparent" }}
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
      >
        <CgMenuRight size={30} />
      </MenuButton>

      <MenuList bg="blue.700" border="none" px="2" py="4">
        <MenuItem _focus={{ bg: "transparent" }}>
          <ActiveLink href="/" activeClassName="activeMenu">
            <a>Home</a>
          </ActiveLink>
        </MenuItem>

        <MenuItem>
          <ActiveLink href="/posts" activeClassName="activeMenu">
            <a>Posts</a>
          </ActiveLink>
        </MenuItem>

        <MenuItem>
          <ActiveLink href="/about" activeClassName="activeMenu">
            <a>Sobre</a>
          </ActiveLink>
        </MenuItem>

        <MenuItem>
          <SubscribeButton />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
