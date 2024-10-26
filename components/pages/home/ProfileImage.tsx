import {
  HStack,
  Icon,
  IconButton,
  // Image,
  // ImageProps,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

type ProfileImageProps = {
  name?: string;
  desc?: string;
  instagram?: string;
  linkedIn?: string;
} & ImageProps;

const ProfileImage = ({
  name,
  desc,
  instagram,
  linkedIn,
  src,
  alt,
  ...imageProps
}: ProfileImageProps) => {
  const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL || "";

  return (
    <VStack gap={4}>
      <Image
        // borderRadius="full"
        style={{borderRadius:"50%"}}
        width={150}
        height={150}
        objectFit={"cover"}
        {...imageProps}
        src={`${STORAGE_URL}/${src}`}
        alt={alt}
      />
      <Text as="h2" fontSize={"2xl"} casing={"uppercase"} letterSpacing={2}>
        {name}
      </Text>
      <Text as="h4"
          textAlign={"center"}
          whiteSpace={"pre-line"}>{desc}</Text>
      {/* <HStack>
        <LinkOverlay
          href={`https://www.linkedin.com/in/${linkedIn}`}
          target="_blank"
        >
          <IconButton
            aria-label="LinkedIn Button"
            icon={<Icon as={FaLinkedinIn} boxSize={6} color={"white"} />}
            bg={"#50657F"}
            isRound
          />
        </LinkOverlay>

        <LinkOverlay
          href={`https://www.instagram.com/${instagram}`}
          target="_blank"
        >
          <IconButton
            aria-label="Instagram Button"
            icon={<Icon as={FaInstagram} boxSize={6} color={"white"} />}
            bg={"#50657F"}
            isRound
          />
        </LinkOverlay>
      </HStack> */}
    </VStack>
  );
};

export { ProfileImage };
