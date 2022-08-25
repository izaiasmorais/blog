import { Flex, Link, Text } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function About() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex h="100%" mb="4rem">
        <Flex w="100%" maxW="800px" mx="auto" p="5" direction="column">
          <Text as="h1" fontSize="3xl" mb="4">
            Sobre o Blog
          </Text>
          <Text as="p" fontSize="1.125rem">
            Feito em Next.js e CharkaUI, o blog é responsivo e altamente
            performático. Inicialmente, eu o criei para treinar o
            desenvolvimento de interfaces com ChakraUI, e logo decidi mantê-lo
            como blog pessoal, onde eu documento meus aprendizados na
            programação, com dicas de bibliotecas muito úteis e resolução de
            problemas que vou encontrado ao longo dos tempos. Hoje o maior foco
            é documentar essas soluções e compartilhar com a comunidade.
            <br />
            <br />
            Considere passar no meu{" "}
            <Link
              href="https://github.com/IzaiasMorais"
              textDecoration="underline"
            >
              Github
            </Link>{" "}
            ou no meu{" "}
            <Link
              href="https://www.linkedin.com/in/iza%C3%ADas-lima/"
              textDecoration="underline"
            >
              Linkedin
            </Link>
            . 🖐
          </Text>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}
