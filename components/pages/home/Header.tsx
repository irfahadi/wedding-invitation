import { VStackTransition } from "@/components/VStackTransition";
import { ProfileImage } from "@/components/pages/home";
import { Image, StackProps, Text } from "@chakra-ui/react";

const Header = ({ ...stackProps }: StackProps) => {
  return (
    <VStackTransition gap={[6, 10]} zIndex={1} {...stackProps}>
      <Image
        src="/monogram.svg"
        alt="Kristianto & Stephanie Monogram"
        width={[128, 192]}
        height={[128, 192]}
        marginX="auto"
      />
      <Text
        textAlign={"center"}
        w="sm"
        fontSize={"sm"}
        px={2}
        whiteSpace={"pre-line"}
      >
        {`“Love never gives up, never loses faith, is always hopeful and endures through every circumstance.”
          - Corinthians 13:7 -`}
      </Text>
      <ProfileImage
        src="kristianto.jpg?alt=media&token=f34c6966-b600-4164-86e5-9755c23a3117"
        name="Kristianto 陈俊辉"
        desc="The son of Mr. Amran & Mrs. Sucyati (+)"
        linkedIn="christiantochen"
        instagram="christianto_chen"
      />
      <ProfileImage
        src="stephanie.jpg?alt=media&token=04ffcedd-1f00-42c5-98b1-9262b18b34e3"
        name="Stephanie 林友爱"
        desc="The daughter of Mr. Liem Swie Lin & Mrs. Tan Fei Tjin"
        linkedIn="stephanieai"
        instagram="stephanie_aiai"
      />
    </VStackTransition>
  );
};

export { Header };
