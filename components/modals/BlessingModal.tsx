import {
  Box,
  Button,
  Image,
  Input,
  Link,
  LinkOverlay,
  Modal,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { CommonModalContent } from "./CommonModalContent";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FormEvent, useRef, useState } from "react";
import { Title } from "../Title";
import { FaCircleChevronLeft } from "react-icons/fa6";

type BlessingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BlessingModal = ({ isOpen, onClose }: BlessingModalProps) => {
  const toast = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbxGQDEZ63r9SAxvJmI1i1AnDykScrl1p2_8JTWUKc5xM-9xModZEkMXnpU28LAnHwab/exec",
      {
        method: "POST",
        body: new FormData(formRef.current!),
      }
    )
      .then(() => {
        formRef.current?.reset();
        toast({
          description: "Thank You for your blessing!",
          status: "success",
          isClosable: true,
          duration: 2500,
        });
      })
      .catch((e) =>
        toast({
          description: e.message,
          status: "error",
          isClosable: true,
          duration: 2500,
        })
      )
      .finally(() => setLoading(false));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
      <CommonModalContent
        justifyContent={"center"}
        alignItems={"center"}
        gap={6}
        backButton={
          <Box
            position={"absolute"}
            zIndex={10}
            onClick={onClose}
            left={6}
            top={6}
            bg={"white"}
            borderRadius={24}
            cursor={"pointer"}
          >
            <FaCircleChevronLeft size={24} color={"#50657F"} />
          </Box>
        }
      >
        <Title>
          {`We Appreciate
          Your Blessing`}
        </Title>
        <Text>You can send the blessing gift to</Text>
        <Text
          as="h4"
          fontSize={"xl"}
          casing={"uppercase"}
          textAlign={"center"}
          letterSpacing={2}
          fontWeight={700}
        >
          BCA | Stephanie | 2820037114
        </Text>

        <CopyToClipboard text={"2820037114"}>
          <Button
            onClick={() =>
              toast({
                description: "Copied!",
                status: "success",
                isClosable: true,
                duration: 2500,
              })
            }
          >
            Copy Account Number
          </Button>
        </CopyToClipboard>

        <VStack
          as="form"
          justifyContent={"center"}
          alignItems={"center"}
          ref={formRef}
          onSubmit={onFormSubmit}
        >
          <Input
            name="bank_account_name"
            placeholder="Bank Account Name"
            w="96"
            type="text"
            required
            bg={"white"}
            autoFocus
            autoComplete={"off"}
          />
          <Input
            name="name"
            placeholder="Name (for shipping detail)"
            w="96"
            type="text"
            required
            bg={"white"}
            autoComplete={"on"}
          />
          <Input
            name="phone_number"
            placeholder="Phone Number (for shipping detail)"
            w="96"
            type="tel"
            required
            bg={"white"}
            autoComplete={"on"}
          />
          <Textarea
            name="shipping_address"
            placeholder="Shipping Address"
            w="96"
            rows={2}
            required
            bg={"white"}
            autoComplete={"on"}
          />
          <Button type="submit" isLoading={loading} mt={4}>
            {loading ? "Confirming..." : "Confirm"}
          </Button>
        </VStack>
      </CommonModalContent>
    </Modal>
  );
};

export { BlessingModal };
