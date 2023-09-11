import { ScaleFade } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Transition = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [firstTimeInView, setFirstTimeInView] = useState(false);

  useEffect(() => {
    if (!firstTimeInView && isInView) setFirstTimeInView(true);
  }, [firstTimeInView, isInView]);

  return (
    <ScaleFade ref={ref} initialScale={0.9} in={isInView}>
      {firstTimeInView && children}
    </ScaleFade>
  );
};

export { Transition };
