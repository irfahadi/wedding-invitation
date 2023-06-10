import Link from "next/link";
import Title from "../title";
import { Transition } from "@headlessui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function YourBlessing({
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
            WE APPRECIATE
            <br />
            YOUR BLESSING
          </Title>
        )}
        <div className="text-sm font-normal text-center">
          Your kind blessing can be sent to this information below.
          <br />
          Also please fill your address information so that we can
          <br />
          send you a gratitude gift.
        </div>
        <Link
          className="flex justify-center text-sm text-white mt-12 px-6 py-2 rounded-full cursor-pointer"
          style={{ background: "#50657F" }}
          href={"/blessing"}
        >
          Bank Transfer
        </Link>
      </Transition>
    </article>
  );
}
