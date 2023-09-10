import { ScaleFade, StackProps, VStack } from "@chakra-ui/react";
import { Children } from "react";
import { Transition } from "./Transition";

type VStackTransitionProps = {} & StackProps;

const VStackTransition = ({
  children,
  ...stackProps
}: VStackTransitionProps) => {
  return (
    <VStack {...stackProps}>
      {Children.map(children, (child) => (
        <Transition>{child}</Transition>
      ))}
    </VStack>
  );
};

export { VStackTransition };
