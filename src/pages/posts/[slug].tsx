import { Flex, SlideFade, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { PostContent } from "../../components/PostContent";
import { api } from "../../lib/axios";

const username = "izaiasmorais";
const repoName = "blog-posts";

export default function Post() {
  const { isOpen, onOpen } = useDisclosure();

  const { asPath } = useRouter();

  const id = asPath.replace("/posts/", "");

  const [postData, setPostData] = useState({} as any);

  async function getPostDetails() {
    const response = await api.get(
      `/repos/${username}/${repoName}/issues/${id}`
    );

    setPostData(response.data);
  }

  useEffect(() => {
    onOpen();
    getPostDetails();
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <SlideFade offsetY="50px" in={isOpen}>
        <Flex direction="column" p="1rem" mx="auto" my="5rem" w="800px">
          <Text
            as="h1"
            fontSize="2.625rem"
            textAlign="left"
            fontWeight="700"
            mb="1rem"
          >
            {postData.title}
          </Text>

          <Text as="span" mb="2rem">
            4 dias atrás • 5 min de leitura
          </Text>

          <PostContent content={postData.body} />

          <Footer />
        </Flex>
      </SlideFade>
    </Flex>
  );
}
