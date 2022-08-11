import { Button, Flex } from "@chakra-ui/react";
import toast from "react-hot-toast";

export function SubscribeButton() {
  function Subscribe() {
    toast.error("Inscrição não disponível no momento");
  }

  return (
    <Flex gap="1rem">
      <Button
        bg="orange.500"
        _hover={{ bg: "orange.600" }}
        color="black"
        borderRadius=".2rem"
        onClick={() => Subscribe()}
      >
        Inscreva-se
      </Button>
    </Flex>
  );
}
