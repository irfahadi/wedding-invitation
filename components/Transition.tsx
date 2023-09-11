import { Box, ScaleFade } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Transition = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [firstTimeInView, setFirstTimeInView] = useState(false);

  if (!firstTimeInView && isInView) setFirstTimeInView(true);

  return (
    <Box position={"relative"}>
      <Box ref={ref} position={"absolute"} top={"20%"} bottom={"20%"} />
      <ScaleFade initialScale={0.9} in={isInView} reverse>
        {firstTimeInView && children}
      </ScaleFade>
    </Box>
  );
};

export { Transition };
