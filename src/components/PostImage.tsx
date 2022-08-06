import { Image } from "@chakra-ui/react";

interface ImageBoxProps {
  image: string;
  borderRadius: string;
}

export default function PostImage({ image, borderRadius }: ImageBoxProps) {
  return (
    <Image
      src={image}
      alt="image"
      height={["260px", "260px", "224px"]}
      width="100%"
      objectFit="cover"
      borderRadius={borderRadius}
    />
  );
}
