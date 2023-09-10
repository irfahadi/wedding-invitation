import { Countdown } from "@/components/Countdown";
import { VStackTransition } from "@/components/VStackTransition";
import { STORAGE_URL } from "@/contants";
import {
  Button,
  Divider,
  Image,
  LinkOverlay,
  StackProps,
  Text,
} from "@chakra-ui/react";

const CelebrateWithUs = ({ ...stackProps }: StackProps) => {
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
          {`Save the date &
        Celebrate with us`}
        </Text>
        <Text
          as="h3"
          fontSize={"xl"}
          textAlign={"center"}
          whiteSpace={"pre-line"}
        >
          Saturday, July 8th 2023
        </Text>
        <Image
          src={`${STORAGE_URL}/celebrate_with_us.jpg?alt=media&token=9613a9e4-ca4c-4906-92c8-0d5e8355c883`}
          alt="Save the date & Celebrate with us"
        />
      </VStackTransition>
      <Countdown />
      <LinkOverlay
        href={
          "https://calendar.google.com/render?action=TEMPLATE&text=Kristianto+%26+Stephanie+Wedding&location=Ramada+Suites+By+Wyndham+Solo%2C+Jalan+Adi+Sucipto%2C+Gatak%2C+Gajahan%2C+Karanganyar+Regency%2C+Central+Java&dates=20230708T110000Z%2F20230708T140000Z"
        }
        target="_blank"
      >
        <Button>Remind Me!</Button>
      </LinkOverlay>
      <Divider
        w={60}
        borderColor={"#B98B3C"}
        borderWidth={1}
        marginX={"auto"}
      />
    </VStackTransition>
  );
};

export { CelebrateWithUs };
