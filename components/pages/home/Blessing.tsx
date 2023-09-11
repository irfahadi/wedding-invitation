import { Title } from "@/components/Title";
import { VStackTransition } from "@/components/VStackTransition";
import { BlessingModal } from "@/components/modals";
import {
  Button,
  Divider,
  Portal,
  StackProps,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const Blessing = ({ ...stackProps }: StackProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Portal>
        <BlessingModal isOpen={isOpen} onClose={onClose} />
      </Portal>
      <VStackTransition gap={[6, 10]} zIndex={1} {...stackProps}>
        <Title>
          {`We Appreciate
          Your Blessing`}
        </Title>
        <Text textAlign={"center"} w="sm" px={2}>
          Your kind blessing can be sent to this information below. Also please
          fill your address information so that we can send you a gratitude
          gift.
        </Text>
        <Button onClick={onOpen}>Bank Transfer</Button>
        <Divider
          w={60}
          borderColor={"#B98B3C"}
          borderWidth={1}
          marginX={"auto"}
        />
        <Title>
          {`THANK YOU 
          FOR YOUR SUPPORT 
          & PRAYER`}
        </Title>
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
    </>
  );
};

export { Blessing };
