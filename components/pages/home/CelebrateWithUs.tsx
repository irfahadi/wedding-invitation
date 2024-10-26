import { Countdown } from "@/components/Countdown";
import { Title } from "@/components/Title";
import { VStackTransition } from "@/components/VStackTransition";
import { Button, Divider, Image, StackProps, Text } from "@chakra-ui/react";

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
          Sunday, November 17th 2024
        </Text>
        {/* <Image
          src={`${STORAGE_URL}/celebrate_with_us.jpg?alt=media&token=9613a9e4-ca4c-4906-92c8-0d5e8355c883`}
          alt="Save the date & Celebrate with us"
        /> */}
      </VStackTransition>
      <Countdown />
      <Button
        as="a"
        href={
          "https://calendar.google.com/render?action=TEMPLATE&text=Kristianto+%26+Stephanie+Wedding&location=Ramada+Suites+By+Wyndham+Solo%2C+Jalan+Adi+Sucipto%2C+Gatak%2C+Gajahan%2C+Karanganyar+Regency%2C+Central+Java&dates=20230708T110000Z%2F20230708T140000Z"
        }
        target="_blank"
      >
        Remind Me!
      </Button>
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
