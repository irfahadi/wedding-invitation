import { Transition } from "@headlessui/react";
import Title from "../title";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ThankYou({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>();
  const [show, setShow] = useState(false);
  const { ref: inViewRef, inView } = useInView();

  // Use `useCallback` so we don't recreate the function on each render
  const setRefs = useCallback(
    (node: HTMLElement) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    if (inView && !show) setShow(true);
  }, [inView, show]);

  return (
    <article id="wedding_reception" ref={setRefs}>
      <Transition
        className={className}
        show={show}
        enter="transition-all ease-in-out duration-1000 delay-[300ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
      >
        {children || (
          <Title>
            THANK YOU
            <br />
            FOR YOUR SUPPORT
            <br />& PRAYER
          </Title>
        )}

        <div className="font-normal text-center">
          Warm regards,
          <br />
          Kristianto & Stephanie
        </div>
      </Transition>
    </article>
  );
}
