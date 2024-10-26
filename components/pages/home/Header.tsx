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
      {/* <Text
        textAlign={"center"}
        w="sm"
        fontSize={"sm"}
        px={2}
        whiteSpace={"pre-line"}
      >
        {`“Love never gives up, never loses faith, is always hopeful and endures through every circumstance.”
          - Corinthians 13:7 -`}
      </Text> */}
      <ProfileImage
        src="irfan.jpg"
        name="Irfan Fahmi Ahmadi, S.T"
        desc={`Putra Pertama dari 
        Bpk. Ahmadi (Miraza) & Ibu Nanik Lestari`}
        alt="foto irfa"
        // linkedIn="christiantochen"
        // instagram="christianto_chen"
      />
      <ProfileImage
        src="sinta.jpg"
        name="Sinta Ariani, S.T"
        desc={`Putri Ketiga dari 
        Bpk. Sugeng Budi Raharjo, A.Md & Ibu Sri Pujiati`}
        alt="foto sinta"
        // linkedIn="stephanieai"
        // instagram="stephanie_aiai"
      />
    </VStackTransition>
  );
};

export { Header };
