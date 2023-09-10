import { Box, Button, Image, Modal, Text } from "@chakra-ui/react";
import { InvitationModalContent } from "./InvitationModalContent";

type InvitationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name?: string;
};

const InvitationModal = ({ isOpen, onClose, name }: InvitationModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
      <InvitationModalContent
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Image
          src="/monogram.svg"
          alt="Kristianto & Stephanie Monogram"
          width={228}
          height={229}
          mb={8}
        />
        <Text>To our dearest,</Text>
        <Box
          position={"relative"}
          width={276.75}
          height={75}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            position={"absolute"}
            src="/gold_frame.svg"
            alt="Gold Frame"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <Text>{name}</Text>
        </Box>
        <Text>You are invited to our Wedding Ceremony</Text>
        <Button mt={8} onClick={onClose}>
          Open Invitation
        </Button>
      </InvitationModalContent>
    </Modal>
  );
};

export { InvitationModal };
