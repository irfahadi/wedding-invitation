import { Title } from "@/components/Title";
import { VStackTransition } from "@/components/VStackTransition";
import {
  Box,
  Image,
  StackProps,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";

const OurEpicJourney = ({ ...stackProps }: StackProps) => {
  return (
    <VStackTransition gap={[6, 10]} zIndex={1} {...stackProps}>
      <Title>{`Our Epic Journey`}</Title>
      {/* <Box position={"relative"} pt={"56.25%"} w={["md", "lg"]}>
        <Box
          as="iframe"
          position={"absolute"}
          top={0}
          left={0}
          w={"100%"}
          h={"100%"}
          border={0}
          src="https://www.youtube.com/embed/cJLEemvirnw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box> */}
      <TableContainer>
        <Table variant={"unstyled"}>
          <Tbody>
            <Tr>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  2017
                </Text>
              </Td>
              <Td py={0} px={[2, 4]} rowSpan={9}>
                <Image src="gold_line.svg" alt="Gold Line" objectFit={"fill"} />
              </Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`We were just casual 
                  acquaintances on the 
                  same campus—two students 
                  in shared classes, offering 
                  each other brief nods and
                  polite smiles.`}
                </Text>
              </Td>
            </Tr>
            {/* <Tr>
              <Td p={[2, 4]}></Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`Growing together as community 
                  group in church.`}
                </Text>
              </Td>
            </Tr> */}
            {/* <Tr>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  2015
                </Text>
              </Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`Kris left Bandung to pursue his 
                  career in Jakarta.`}
                </Text>
              </Td>
            </Tr> */}
            <Tr>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  2023
                </Text>
              </Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`Life brought us back 
                  together, this time as 
                  colleagues in a new workplace. 
                  The setting was different, 
                  and so were we. `}
                </Text>
              </Td>
            </Tr>
            {/* <Tr>
              <Td p={[2, 4]}></Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`Had a long distance relationship
                  between Jakarta - Karawang.`}
                </Text>
              </Td>
            </Tr> */}
            <Tr>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  2024
                </Text>
              </Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`We started to see each 
                  other in a different light.`}
                </Text>
              </Td>
            </Tr>
            {/* <Tr>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  2021
                </Text>
              </Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`Starting a long distance 
                  relationship again (LOL) between
                  Tanjung Pinang - Solo.`}
                </Text>
              </Td>
            </Tr> */}
            <Tr>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  June 30th 2024
                </Text>
              </Td>
              <Td p={[2, 4]}>
                <Text
                  fontSize={["sm", "medium"]}
                  whiteSpace={"pre-line"}
                >{`in a moment filled with 
                love and hope, he asked 
                her to be his forever.`}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  November 17th 2024
                </Text>
                <br/>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  December 29th 2024
                </Text>
              </Td>
              <Td p={[2, 4]}>
                <Text
                  fontSize={["sm", "medium"]}
                  whiteSpace={"pre-line"}
                >{`with hearts full of 
                love and gratitude, 
                we humbly invite you 
                to join us and bless 
                our steps as we embark 
                on this beautiful new 
                journey together!`}</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </VStackTransition>
  );
};

export { OurEpicJourney };
