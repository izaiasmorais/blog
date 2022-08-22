import { Text } from "@chakra-ui/react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Text fontSize="xl" fontWeight="600" cursor="pointer">
        <Text as="span" color="orange.500">
          EZ
        </Text>
        Blog.
      </Text>
    </Link>
  );
}
