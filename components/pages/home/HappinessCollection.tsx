import { Title } from "@/components/Title";
import { Transition } from "@/components/Transition";
import { VStackTransition } from "@/components/VStackTransition";
import useLightbox from "@/hooks/useLightbox";
import { Divider, Grid, GridItem, StackProps } from "@chakra-ui/react";
import Image from "next/image";
import { Suspense } from "react";

const images = [
  // {
  //   colSpan: 2,
  //   picture: "1.jpg?alt=media&token=53a91a61-533d-427a-bcf9-656633de898f",
  //   width: 542,
  //   height: 305,
  // },
  {
    colSpan: 2,
    picture: "/happy.jpg",
    width: 542,
    height: 305,
  },
  {
    picture: "/engadgement.jpg",
    width: 258,
    height: 305,
  },
  {
    picture: "/engadgement 2.jpg",
    width: 258,
    height: 305,
  },
  {
    picture: "/happy 3.jpg",
    width: 258,
    height: 305,
  },
  {
    picture: "/happy 2.jpg",
    width: 258,
    height: 305,
  }
];

const HappinessCollection = ({ ...stackProps }: StackProps) => {
  const { openLightbox, renderLightbox } = useLightbox();
  const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL || "";

  return (
    <Suspense>
      <VStackTransition gap={[6, 10]} zIndex={1} {...stackProps}>
        <Title>
          {`Our Happiness
        Collection`}
        </Title>
        <Grid
          templateRows="repeat(6, auto)"
          templateColumns="repeat(2, 1fr)"
          gap={2}
          px={2}
        >
          {images.map(({ picture, colSpan, width, height }, index) => (
            <GridItem key={index} colSpan={colSpan}>
              <Transition>
                <Image
                  src={`${STORAGE_URL}${picture}`}
                  alt={picture}
                  width={width}
                  height={height}
                  objectFit={"cover"}
                  onClick={() => openLightbox(index)}
                  // cursor={"pointer"}
                  // placeholder="blur"
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
              src: `${STORAGE_URL}${image.picture}`,
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
    </Suspense>
  );
};

export { HappinessCollection };
