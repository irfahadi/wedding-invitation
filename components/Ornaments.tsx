import { Image } from "@chakra-ui/react";

const TopOrnament = () => {
  return (
    <Image
      src="/top_ornaments.png"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      alt="Top Ornaments"
      position={"absolute"}
      top={0}
      zIndex={0}
    />
  );
};

const BottomOrnament = () => {
  return (
    <Image
      src="/bottom_ornaments.png"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      alt="Bottom Ornaments"
      position={"absolute"}
      bottom={0}
      zIndex={0}
    />
  );
};

export { TopOrnament, BottomOrnament };
