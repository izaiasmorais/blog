import { Button, Flex, Text, useBreakpointValue, Link } from "@chakra-ui/react";
import ActiveLink from "./ActiveLink";

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  return (
    <Flex as="header" w="100%">
      <Flex
        w="100%"
        maxWidth="1120px"
        mx="auto"
        display="flex"
        justify={"space-between"}
        align="center"
        px="6"
        py="8"
      >
        <Text fontSize="xl" fontWeight="600">
          EZBlog.
        </Text>

        {isWideVersion && (
          <Flex gap={8} fontSize="lg" color="blackAlpha.700">
            <ActiveLink href="/" activeClassName="active">
              <a>Home</a>
            </ActiveLink>

            <ActiveLink href="/posts" activeClassName="active">
              <a>Posts</a>
            </ActiveLink>

            <ActiveLink href="/about" activeClassName="active">
              <a>Sobre</a>
            </ActiveLink>

            <ActiveLink href="/contact" activeClassName="active">
              <a>Contato</a>
            </ActiveLink>
          </Flex>
        )}

        <Flex>
          <Button colorScheme="orange" color="black" borderRadius=".2rem">
            Subscribe
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
