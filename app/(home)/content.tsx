import { BottomOrnament, TopOrnament } from "@/components/Ornaments";
import {
  CelebrateWithUs,
  HolyMatrimony,
  WeddingReception,
  OurEpicJourney,
  Blessing,
  HappinessCollection,
  Footer,
  Header,
} from "@/components/pages/home";
import { WeddingWishes } from "@/components/pages/home/WeddingWishes";
import { VStack } from "@chakra-ui/react";

const HomeContent = ({ name }: { name?: string }) => {
  return (
    <VStack
      boxSize={"lg"}
      h="full"
      bg="white"
      shadow={"lg"}
      position={"relative"}
      pt={28}
      pb={32}
      gap={10}
    >
      <TopOrnament />
      <BottomOrnament />

      <Header />
      <CelebrateWithUs />
      <HolyMatrimony />
      <WeddingReception />
      <OurEpicJourney />
      <HappinessCollection />
      <WeddingWishes displayName={name} />
      <Blessing />
      <Footer />
    </VStack>
  );
};

export { HomeContent };
