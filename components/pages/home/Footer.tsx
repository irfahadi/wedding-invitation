import { Box, Link, StackProps, Text, VStack } from "@chakra-ui/react";

const Footer = ({ ...stackProps }: StackProps) => {
  return (
    <VStack position={"relative"} gap={1} zIndex={1} {...stackProps}>
      {/* <Text textAlign={"center"} fontWeight={"light"} fontSize={"sm"}>
        {`© 2023 Kristianto & Stephanie All Rights Reserved`}
      </Text> */}
      {/* <Text textAlign={"center"} fontWeight={"light"} fontSize={"sm"}>
        {`Photo and video by `}
        <Link
          fontWeight={700}
          href="https://www.instagram.com/elysian.picture/"
          target="_blank"
          textDecoration="underline"
        >
          @elysian.picture
        </Link>
      </Text> */}
      <Text textAlign={"center"} fontWeight={"light"} fontSize={"sm"}>
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
      <Text textAlign={"center"} fontWeight={"light"} fontSize={"sm"}>
        {`Song `}
        <Box as="span" fontWeight={400}>{`Yen Ing Tawang `}</Box>
        {`by `}
        <Link
          fontWeight={700}
          href="https://open.spotify.com/track/3ozPXNirioACjrsEcwKFFY?si=9657d9a49af24068"
          target="_blank"
          textDecoration="underline"
        >
          Steve Handoyo
        </Link>
      </Text>
    </VStack>
  );
};

export { Footer };
