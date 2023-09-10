import { Countdown } from "@/components/Countdown";
import { VStackTransition } from "@/components/VStackTransition";
import { STORAGE_URL } from "@/contants";
import {
  Box,
  Button,
  Image,
  LinkOverlay,
  StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";

const HolyMatrimony = ({ ...stackProps }: StackProps) => {
  return (
    <VStackTransition gap={10} zIndex={1} {...stackProps}>
      <VStackTransition gap={4}>
        <Text
          as="h1"
          fontSize={"3xl"}
          casing={"uppercase"}
          textAlign={"center"}
          letterSpacing={2}
          whiteSpace={"pre-line"}
        >
          Holy Matrimony
        </Text>
        <Text
          as="h3"
          fontSize={"xl"}
          textAlign={"center"}
          whiteSpace={"pre-line"}
        >
          {`Saturday, July 8th 2023
        4 PM GMT +7 / 16:00 WIB`}
        </Text>
        <Text textAlign={"center"} whiteSpace={"pre-line"}>
          {`Since we held a private Holy Matrimony. Hence, we
          encourage you to celebrate it through Youtube Live.
          Don’t forget to screenshot the moment and tag us on
          our Instagram! :D`}
        </Text>
      </VStackTransition>
      <Box
        as="iframe"
        boxSize={"lg"}
        h={"72"}
        border={0}
        src="https://www.youtube.com/embed/0XYivn2zdnk?controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <VStack gap={1} justifyContent={"center"} alignItems={"center"}>
        <Text
          as="h2"
          fontSize={"2xl"}
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
