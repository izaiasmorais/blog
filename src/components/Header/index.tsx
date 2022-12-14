import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { ColorModeButton } from "./ColorModeButton";
import { NavBar } from "./NavBar";
import { SubscribeButton } from "./SubscribeButton";
import { HeaderMenu } from "./HeaderMenu";
import { Logo } from "./Logo";

export function Header() {
  const isWildVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex as="header" w="100%" color="white" mb="4" bg="blue.800">
      <Flex
        maxWidth="1120px"
        display="flex"
        justify={"space-between"}
        align="center"
        mx="auto"
        w="100%"
        h="5rem"
        px="5"
        py="5"
      >
        <Logo />

        <Flex display={["none", "none", "flex"]}>
          <NavBar />
        </Flex>

        <Flex display={["none", "none", "flex"]}>
          <Flex gap="1rem">
            <ColorModeButton />
            <SubscribeButton />
          </Flex>
        </Flex>

        <Flex display={["flex", "flex", "none"]}>
          <ColorModeButton />
          <HeaderMenu />
        </Flex>
      </Flex>
    </Flex>
  );
}
