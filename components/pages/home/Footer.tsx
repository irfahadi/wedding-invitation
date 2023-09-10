import { Box, Link, StackProps, Text, VStack } from "@chakra-ui/react";

const Footer = ({ ...stackProps }: StackProps) => {
  return (
    <VStack position={"relative"} gap={1} zIndex={1} {...stackProps}>
      <Text
        textAlign={"center"}
        whiteSpace={"pre-line"}
        fontWeight={"light"}
        fontSize={"sm"}
      >
        {`© 2023 Kristianto & Stephanie All Rights Reserved`}
      </Text>
      <Text
        textAlign={"center"}
        whiteSpace={"pre-line"}
        fontWeight={"light"}
        fontSize={"sm"}
      >
        {`Photo and video by `}
        <Link
          fontWeight={700}
          href="https://www.instagram.com/elysian.picture/"
          target="_blank"
          textDecoration="underline"
        >
          @elysian.picture
        </Link>
      </Text>
      <Text
        textAlign={"center"}
        whiteSpace={"pre-line"}
        fontWeight={"light"}
        fontSize={"sm"}
      >
        {`Invitation design & apps by `}
        <Link
          fontWeight={700}
          href="https://www.decobytestudio.com/"
          target="_blank"
          textDecoration="underline"
        >
          Kristianto & Stephanie
        </Link>
      </Text>
      <Text
        textAlign={"center"}
        whiteSpace={"pre-line"}
        fontWeight={"light"}
        fontSize={"sm"}
      >
        {`Song `}
        <Box as="span" fontWeight={400}>{`Can't Help Falling in Love `}</Box>
        {`by `}
        <Link
          fontWeight={700}
          href="https://open.spotify.com/artist/3NuX2HNLS62uUmkVGBQYzP?si=I-ZtSRbbSweeFEa7T2_VtQ"
          target="_blank"
          textDecoration="underline"
        >
          INST
        </Link>
      </Text>
    </VStack>
  );
};

export { Footer };
