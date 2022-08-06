import { Button, Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";

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
          <Flex gap={8} fontSize="lg">
            <Link>Home</Link>

            <Link>Posts</Link>

            <Link>Sobre</Link>

            <Link>Contato</Link>
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
