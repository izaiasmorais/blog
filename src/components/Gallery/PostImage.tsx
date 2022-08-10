import { Image } from "@chakra-ui/react";

interface ImageBoxProps {
  src: string;
  borderRadius: string;
}

export default function PostImage({ src, borderRadius }: ImageBoxProps) {
  return (
    <Image
      src={src}
      alt="image"
      height={["260px", "260px", "224px"]}
      width="100%"
      objectFit="cover"
      borderRadius={borderRadius}
    />
  );
}
