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
    <Box
      boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.1)"}
      borderRadius={"0 0 .5rem .5rem"}
      p="4"
    >
      <Text fontSize="xs" mb="2" fontWeight="600">
        {dataFormatada}
      </Text>
      <Link href={`/posts/${slug}`} passHref>
        <a className="title">{title}</a>
      </Link>
      <Text fontSize="sm">{tag}</Text>
    </Box>
  );
}
