import { Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import toast from "react-hot-toast";
import ActiveLink from "./ActiveLink";

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  function Subscribe() {
    toast.error("Inscrição não disponível no momento");
  }

  return (
    <Flex as="header" w="100%">
      <Flex
        w="100%"
        maxWidth="1120px"
        mx="auto"
        display="flex"
        justify={"space-between"}
        align="center"
        px="4"
        py="4"
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
          </Flex>
        )}

        <Flex>
          <Button
            colorScheme="orange"
            color="black"
            borderRadius=".2rem"
            onClick={() => Subscribe()}
          >
            Inscreva-se
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
