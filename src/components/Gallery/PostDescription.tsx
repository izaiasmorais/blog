import { relativeDateFormatter } from "../../utils/formatDate";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface PostDescriptionProps {
  postedAt: string;
  title: string;
  tag: string;
  slug: string;
  available: boolean;
}

export default function PostDescription({
  available,
  postedAt,
  title,
  slug,
  tag,
}: PostDescriptionProps) {
  let formattedDate = relativeDateFormatter(postedAt);

  return (
    <Box p="4">
      {available ? (
        <Text fontSize="xs" mb="2" fontWeight="600">
          {formattedDate}
        </Text>
      ) : (
        <Flex justify="space-between" align="center" mb=".5rem">
          <Text fontSize="xs" mb="2" fontWeight="600">
            {formattedDate}
          </Text>
          <Box
            bg="#eea22986"
            color="black"
            borderRadius=".3rem"
            fontSize="1rem"
            px=".3rem"
          >
            Em breve
          </Box>
        </Flex>
      )}

      <Link href={`/posts/${slug}`} passHref>
        <Text
          as="a"
          fontWeight="600"
          fontSize="1.25rem"
          h="4.375rem"
          display="block"
          mb="1.25rem"
          transition="0.2s color"
          _hover={{ color: "orange.500" }}
        >
          {title}
        </Text>
      </Link>
      <Text fontSize="sm">{tag}</Text>
    </Box>
  );
}
