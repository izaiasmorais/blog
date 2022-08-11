import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface PostDescriptionProps {
  postedAt: string;
  title: string;
  tag: string;
  slug: string;
}

export default function PostDescription({
  postedAt,
  title,
  slug,
  tag,
}: PostDescriptionProps) {
  let data = new Date(postedAt);
  let dataFormatada =
    data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

  return (
    <Box p="4">
      <Text fontSize="xs" mb="2" fontWeight="600">
        {dataFormatada}
      </Text>
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
