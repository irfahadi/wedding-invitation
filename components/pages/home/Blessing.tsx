import { VStackTransition } from "@/components/VStackTransition";
import {
  Box,
  Button,
  Divider,
  Link,
  StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";

const Blessing = ({ ...stackProps }: StackProps) => {
  return (
    <VStackTransition gap={10} zIndex={1} {...stackProps}>
      <Text
        as="h1"
        fontSize={"3xl"}
        casing={"uppercase"}
        textAlign={"center"}
        letterSpacing={2}
        whiteSpace={"pre-line"}
      >
        {`We Appreciate
        Your Blessing`}
      </Text>
      <Text textAlign={"center"} whiteSpace={"pre-line"}>
        {`Your kind blessing can be sent to this information below. 
        Also please fill your address information so that we can send you a gratitude gift.`}
      </Text>
      <Button>Bank Transfer</Button>
      <Divider
        w={60}
        borderColor={"#B98B3C"}
        borderWidth={1}
        marginX={"auto"}
      />
      <Text
        as="h1"
        fontSize={"3xl"}
        casing={"uppercase"}
        textAlign={"center"}
        letterSpacing={2}
        whiteSpace={"pre-line"}
      >
        {`THANK YOU 
        FOR YOUR SUPPORT 
        & PRAYER`}
      </Text>
      <Text
        as="h3"
        fontSize={"xl"}
        casing={"uppercase"}
        textAlign={"center"}
        letterSpacing={2}
        whiteSpace={"pre-line"}
      >
        {`Warm regards,
        Kristianto & Stephanie`}
      </Text>
    </VStackTransition>
  );
};

export { Blessing };
