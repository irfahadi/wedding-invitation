import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import ReactCountdown, { CountdownTimeDelta } from "react-countdown";

const Countdown = () => {
  const box = (value: number) => {
    return (
      <Flex
        w={12}
        h={12}
        alignItems={"center"}
        justifyContent={"center"}
        borderColor={"#50657F"}
        border={1}
        borderStyle={"solid"}
      >
        <Text>{value}</Text>
      </Flex>
    );
  };

  const renderer = ({ days, hours, minutes }: CountdownTimeDelta) => {
    return (
      <HStack gap={6}>
        <VStack gap={2} justifyContent={"center"}>
          <HStack gap={4}>
            {box(Math.floor(days / 10))}
            {box(days % 10)}
          </HStack>
          <Text>Days</Text>
        </VStack>
        <VStack gap={2} justifyContent={"center"}>
          <HStack gap={4}>
            {box(Math.floor(hours / 10))}
            {box(hours % 10)}
          </HStack>
          <Text>Hours</Text>
        </VStack>
        <VStack gap={2} justifyContent={"center"}>
          <HStack gap={4}>
            {box(Math.floor(minutes / 10))}
            {box(minutes % 10)}
          </HStack>
          <Text>Minutes</Text>
        </VStack>
      </HStack>
    );
  };

  return (
    <ReactCountdown date={new Date(2023, 6, 8, 18, 0, 0)} renderer={renderer} />
  );
};

export { Countdown };
