import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import ColorModeButton from "./colorModeButton";
import HeaderMenu from "./HeaderMenu";
import NavBar from "./NavBar";
import SubscribeButton from "./SubscribeButton";

export default function Header() {
  const isWildVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  return (
    <Flex as="header" w="100%" bg="#14213d" color="white" mb="4">
      <Flex
        w="100%"
        h="80px"
        maxWidth="1120px"
        mx="auto"
        display="flex"
        justify={"space-between"}
        align="center"
        px="5"
        py="5"
      >
        <Text fontSize="xl" fontWeight="600">
          <Text as="span" color="orange.500">
            EZ
          </Text>
          Blog.
        </Text>

        {isWildVersion && <NavBar />}

        {isWildVersion && (
          <Flex gap="1rem">
            <ColorModeButton />
            <SubscribeButton />
          </Flex>
        )}

        {!isWildVersion && (
          <Flex gap="1rem">
            <ColorModeButton />
            <HeaderMenu />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
