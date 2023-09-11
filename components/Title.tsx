import { Text, TextProps } from "@chakra-ui/react";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ weight: "600", subsets: ["latin"] });

const Title = ({
  children,
  ...textProps
}: { children: React.ReactNode } & TextProps) => {
  return (
    <Text
      as="h1"
      fontFamily={cormorant.style.fontFamily}
      fontSize={["2xl", "3xl"]}
      casing={"uppercase"}
      textAlign={"center"}
      letterSpacing={2}
      whiteSpace={"pre-line"}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export { Title };
