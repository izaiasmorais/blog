import { Flex, Text } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

export default function About() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex h="100%" mb="4rem">
        <Flex w="100%" maxW="1120px" mx="auto" p="5" direction="column">
          <Text as="h1" fontSize="3xl" mb="4">
            About
          </Text>
          <Text as="p" fontSize="1.125rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            dolorem vel earum, eaque repellat consectetur consequatur libero
            magnam sunt modi expedita quam voluptate nobis fuga possimus
            voluptatibus nesciunt suscipit! Cupiditate impedit et itaque
            voluptatibus ipsam similique quo, nisi dignissimos ea quis natus
            explicabo nihil officia maxime voluptatum, assumenda illo fugit!
            Quod officiis, eum numquam minima a dolores laborum modi architecto
            corporis neque, maxime laudantium animi? Aperiam ipsum magni iste
            impedit ex et. Vero voluptas est molestias dolore quibusdam
            voluptatibus odio cum excepturi, odit, aliquam nemo ratione ullam
            facere, tempore hic consectetur placeat fugiat pariatur reiciendis
            doloribus culpa? Necessitatibus, possimus dolorum cumque veniam
            explicabvitae nesciunt sint odio dolorum. Labore, autem soluta
            facere aperiam nulla dicta alias eaque, fugit a veritatis minima
            quas? Neque, facilis error omnis optio nemo vel nihil libero eum
            magnam sed in veritatis repudiandae earum consequatur et corporis
            facere accusamus laborum quos! Blanditiis incidunt reiciendis
            voluptatem expedita recusandae minus optio placeat nostrum quasi?
          </Text>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}
