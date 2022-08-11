import {
  Button,
  Flex,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import ActiveLink from "./ActiveLink";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export default function Header() {
  const { colorMode, setColorMode } = useColorMode();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  function Subscribe() {
    toast.error("Inscrição não disponível no momento");
  }

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
          EZBlog.
        </Text>

        {isWideVersion && (
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
        )}

        <Flex gap="1rem">
          {colorMode === "light" ? (
            <Button
              bg="blue.700"
              _hover={{ bg: "blue.500" }}
              onClick={() => setColorMode("dark")}
            >
              <MdOutlineNightlight size={20} />
            </Button>
          ) : (
            <Button
              bg="blue.700"
              _hover={{ bg: "blue.500" }}
              onClick={() => setColorMode("light")}
            >
              <MdOutlineLightMode size={20} />
            </Button>
          )}
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
