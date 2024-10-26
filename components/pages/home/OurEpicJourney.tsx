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
                  2011
                </Text>
              </Td>
              <Td py={0} px={[2, 4]} rowSpan={9}>
                <Image src="gold_line.svg" alt="Gold Line" objectFit={"fill"} />
              </Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`Our first meet at Maranatha 
                  Christian University Bandung.`}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td p={[2, 4]}></Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`Growing together as community 
                  group in church.`}
                </Text>
              </Td>
            </Tr>
            <Tr>
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
            </Tr>
            <Tr>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  2018
                </Text>
              </Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`Meeting again in Bandung and 
                  begin a relationship.`}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td p={[2, 4]}></Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`Had a long distance relationship
                  between Jakarta - Karawang.`}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  2020
                </Text>
              </Td>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} whiteSpace={"pre-line"}>
                  {`Commited to proceed a serious 
                  relationship.`}
                </Text>
              </Td>
            </Tr>
            <Tr>
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
            </Tr>
            <Tr>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  Feb 12nd 2023
                </Text>
              </Td>
              <Td p={[2, 4]}>
                <Text
                  fontSize={["sm", "medium"]}
                  whiteSpace={"pre-line"}
                >{`Engagement`}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td p={[2, 4]}>
                <Text fontSize={["sm", "medium"]} textAlign={"right"}>
                  July 8th 2023
                </Text>
              </Td>
              <Td p={[2, 4]}>
                <Text
                  fontSize={["sm", "medium"]}
                  whiteSpace={"pre-line"}
                >{`Our big day with you!`}</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </VStackTransition>
  );
};

export { OurEpicJourney };
