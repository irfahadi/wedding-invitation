import { Countdown } from "@/components/Countdown";
import { Title } from "@/components/Title";
import { VStackTransition } from "@/components/VStackTransition";
import { Button, Divider, Image, LinkOverlay, StackProps, Text } from "@chakra-ui/react";

const CelebrateWithUs = ({ ...stackProps }: StackProps) => {
  const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

  return (
    <VStackTransition gap={[6, 10]} zIndex={1} {...stackProps}>
      <VStackTransition gap={[2, 4]}>
        <Title>
          {`Save the date &
          Celebrate with us`}
        </Title>
        <Text as="h3" fontSize={"xl"} textAlign={"center"}>
          Sunday, December 29th 2024
        </Text>
        {/* <Image
          src={`${STORAGE_URL}/celebrate_with_us.jpg?alt=media&token=9613a9e4-ca4c-4906-92c8-0d5e8355c883`}
          alt="Save the date & Celebrate with us"
        /> */}
      </VStackTransition>
      <Countdown />
      <LinkOverlay
        href={"https://calendar.app.google/ivx7kRbyTdjNCe6w7"}
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
