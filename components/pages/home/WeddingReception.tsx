import { VStackTransition } from "@/components/VStackTransition";
import {
  Button,
  Divider,
  HStack,
  Image,
  LinkOverlay,
  StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";

const WeddingReception = ({ ...stackProps }: StackProps) => {
  const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

  return (
    <VStackTransition gap={[6, 10]} zIndex={1} {...stackProps}>
      <Image src="/rose_wedding.svg" alt="Wedding Reception" />
      <Image
        src={`${STORAGE_URL}/wedding_reception.jpg?alt=media&token=74ebc86c-6944-4281-a739-9b8e84471970`}
        alt="Kristianto and Stephanie Wedding Reception"
      />
      <Text textAlign={"center"} whiteSpace={"pre-line"}>
        {`Saturday, July 8th 2023
        6 PM GMT +7 / 18:00 WIB
        Ramada Suites By Wyndham Solo
        The Warmest Garden`}
      </Text>
      <LinkOverlay
        href={"https://goo.gl/maps/trFaRRzjDf26VUTm7?coh=178572&entry=tt"}
        target="_blank"
      >
        <Button>Map Location</Button>
      </LinkOverlay>
      <Text textAlign={"center"} w="sm" px={2}>
        {`It’s an outdoor wedding party, so we would recommend you to wear your comfortable party outfit and shoes.`}
      </Text>
      <HStack gap={[12, 16]}>
        <VStack gap={2}>
          <Image
            src="/no_stilleto.svg"
            alt="No Stilleto"
            width={["12", "14"]}
          />
          <Text
            fontSize={["sm", "md"]}
            textAlign={"center"}
            whiteSpace={"pre-line"}
          >{`No
          Stilleto`}</Text>
        </VStack>
        <VStack gap={2}>
          <Image
            src="/outfit.svg"
            alt="Comfortable Outfits"
            width={["12", "14"]}
          />
          <Text
            fontSize={["sm", "md"]}
            textAlign={"center"}
            whiteSpace={"pre-line"}
          >{`Comfortable Party
          Outfits`}</Text>
        </VStack>
        <VStack gap={2}>
          <Image
            src="/2_person.svg"
            alt="Valid for 2 Person"
            width={["12", "14"]}
          />
          <Text
            fontSize={["sm", "md"]}
            textAlign={"center"}
            whiteSpace={"pre-line"}
          >{`Valid for 
          2 Person`}</Text>
        </VStack>
      </HStack>
      <Divider
        w={60}
        borderColor={"#B98B3C"}
        borderWidth={1}
        marginX={"auto"}
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

export { WeddingReception };
