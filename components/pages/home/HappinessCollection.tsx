import { Transition } from "@/components/Transition";
import { VStackTransition } from "@/components/VStackTransition";
import { STORAGE_URL } from "@/contants";
import { useLightbox } from "@/hooks/useLightbox";
import {
  Divider,
  Grid,
  GridItem,
  Image,
  StackProps,
  Text,
} from "@chakra-ui/react";

const images = [
  {
    colSpan: 2,
    picture: "1.jpg?alt=media&token=53a91a61-533d-427a-bcf9-656633de898f",
    width: 542,
    height: 305,
  },
  {
    picture: "2.jpg?alt=media&token=d2c39c49-5ce8-413a-a871-1ccd22722e03",
    width: 258,
    height: 454,
  },
  {
    picture: "3.jpg?alt=media&token=6cdbc91a-04a2-461b-8b79-15f393e1736f",
    width: 258,
    height: 454,
  },
  {
    colSpan: 2,
    picture: "4.jpg?alt=media&token=40aadf22-f6f8-4940-b572-8aeeb750dff1",
    width: 542,
    height: 305,
  },
  {
    className: "",
    picture: "5.jpg?alt=media&token=db1ac04b-0653-4161-94d3-bcc635e6c352",
    width: 258,
    height: 145,
  },
  {
    rowSpan: 3,
    picture: "6.jpg?alt=media&token=577f9b96-06ab-43a7-82be-fd23f5b0194a",
    width: 258,
    height: 452,
  },
  {
    picture: "7.jpg?alt=media&token=20239de1-4b8e-4b1b-9df5-a44b0e5a5933",
    width: 258,
    height: 145,
  },
  {
    picture: "8.jpg?alt=media&token=63def493-196b-4d8c-80b4-2aa5a0a23710",
    width: 258,
    height: 145,
  },
];

const HappinessCollection = ({ ...stackProps }: StackProps) => {
  const { openLightbox, renderLightbox } = useLightbox();

  return (
    <VStackTransition gap={10} zIndex={1} {...stackProps}>
      <Text
        as="h1"
        fontSize={"3xl"}
        casing={"uppercase"}
        textAlign={"center"}
        letterSpacing={2}
        whiteSpace={"pre-line"}
      >
        {`Our Happiness
        Collection`}
      </Text>
      <Grid
        templateRows="repeat(6, auto)"
        templateColumns="repeat(2, 1fr)"
        gap={2}
        px={2}
      >
        {images.map(({ picture, colSpan, rowSpan, width, height }, index) => (
          <GridItem key={index} colSpan={colSpan} rowSpan={rowSpan}>
            <Transition>
              <Image
                src={`${STORAGE_URL}/happinessCollections%2F${picture}`}
                alt={picture}
                w={width}
                h={height}
                objectFit={"cover"}
                onClick={() => openLightbox(index)}
                cursor={"pointer"}
              />
            </Transition>
          </GridItem>
        ))}
      </Grid>
      {renderLightbox({
        slides: images.map((image) => {
          const width = image.width * 4;
          const height = image.height * 4;
          return {
            src: `${STORAGE_URL}/happinessCollections%2F${image.picture}`,
            width,
            height,
          };
        }),
      })}
      <Divider
        w={60}
        borderColor={"#B98B3C"}
        borderWidth={1}
        marginX={"auto"}
      />
    </VStackTransition>
  );
};

export { HappinessCollection };
