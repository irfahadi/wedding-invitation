import { Image, ModalContent, StackProps, VStack } from "@chakra-ui/react";
import { BottomOrnament, TopOrnament } from "../Ornaments";

type InvitationModalContentProps = {
  children?: React.ReactNode;
} & StackProps;

const InvitationModalContent = ({
  children,
  ...props
}: InvitationModalContentProps) => {
  return (
    <ModalContent
      h="100vh"
      justifyContent={"center"}
      alignItems={"center"}
      bg="blackAlpha.100"
    >
      <VStack
        boxSize={"lg"}
        h="full"
        position={"relative"}
        bg="white"
        shadow={"lg"}
        gap={0}
      >
        <TopOrnament />
        <BottomOrnament />
        <VStack position={"relative"} zIndex={1} h="full" {...props}>
          {children}
        </VStack>
      </VStack>
    </ModalContent>
  );
};

export { InvitationModalContent };
