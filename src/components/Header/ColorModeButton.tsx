import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export function ColorModeButton() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Flex>
      {colorMode === "light" ? (
        <Button
          bg="blue.700"
          _hover={{ bg: "blue.500" }}
          onClick={() => setColorMode("dark")}
        >
          <MdOutlineNightlight size={20} color="white" />
        </Button>
      ) : (
        <Button
          bg="blue.700"
          _hover={{ bg: "blue.500" }}
          onClick={() => setColorMode("light")}
        >
          <MdOutlineLightMode size={20} color="white" />
        </Button>
      )}
    </Flex>
  );
}
