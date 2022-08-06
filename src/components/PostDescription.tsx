import { Box, Text } from "@chakra-ui/react";

export default function PostDescription() {
  return (
    <Box
      boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.1)"}
      borderRadius={"0 0 .5rem .5rem"}
      p="4"
    >
      <Text fontSize="xs" mb="2" fontWeight="600">
        Agosto 03, 2022
      </Text>
      <Text as="h1" fontSize="1.25rem" mb="6" fontWeight="600">
        Utilizando FaunaDB para salvar dados facilmente
      </Text>
      <Text fontSize="sm">Banco de dados</Text>
    </Box>
  );
}
