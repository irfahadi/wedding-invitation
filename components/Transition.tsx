import { Box, ScaleFade } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Transition = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <Box position={"relative"}>
      <Box ref={ref} position={"absolute"} top={"20%"} bottom={"20%"} />
      <ScaleFade initialScale={0.9} in={isInView} reverse>
        {children}
      </ScaleFade>
    </Box>
  );
};

export { Transition };
