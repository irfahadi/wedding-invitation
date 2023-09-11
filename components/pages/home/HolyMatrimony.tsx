import { Title } from "@/components/Title";
import { VStackTransition } from "@/components/VStackTransition";
import { Box, StackProps, Text, VStack } from "@chakra-ui/react";

const HolyMatrimony = ({ ...stackProps }: StackProps) => {
  return (
    <VStackTransition gap={[6, 10]} zIndex={1} {...stackProps}>
      <VStackTransition gap={[2, 4]}>
        <Title>Holy Matrimony</Title>
        <Text
          as="h3"
          fontSize={"xl"}
          textAlign={"center"}
          whiteSpace={"pre-line"}
        >
          {`Saturday, July 8th 2023
          4 PM GMT +7 / 16:00 WIB`}
        </Text>
        <Text textAlign={"center"} w="sm" px={2}>
          {`Since we held a private Holy Matrimony. Hence, we encourage you to
          celebrate it through Youtube Live. Don't forget to screenshot the
          moment and tag us on our Instagram! :D`}
        </Text>
      </VStackTransition>
      <Box position={"relative"} pt={"56.25%"} w={["md", "lg"]}>
        <Box
          as="iframe"
          position={"absolute"}
          top={0}
          left={0}
          w={"100%"}
          h={"100%"}
          border={0}
          src="https://www.youtube.com/embed/0XYivn2zdnk?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
      <VStack gap={1} justifyContent={"center"} alignItems={"center"}>
        <Text
          as="h2"
          fontSize={["xl", "2xl"]}
          textAlign={"center"}
          whiteSpace={"pre-line"}
        >
          {`“A wedding is an event,  
          but a marriage is life”`}
        </Text>
        <Text>Myles Munroe</Text>
      </VStack>
    </VStackTransition>
  );
};

export { HolyMatrimony };
