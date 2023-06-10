import Image from "next/image";
import Title from "../title";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Transition } from "@headlessui/react";

export default function HolyMatrimony({
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
    <article id="holy_matrimony" ref={setRefs}>
      <Transition
        className={className}
        show={show}
        enter="transition-all ease-in-out duration-1000 delay-[300ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
      >
        {children || <Title>HOLY MATRIMONY</Title>}

        <div className="text-xl text-center font-normal">
          Saturday, July 8th 2023
          <br />4 PM GMT +7 / 16:00 WIB
        </div>
        <div className="text-center text-sm font-normal">
          Since we held a private Holy Matrimony. Hence, we
          <br />
          encourage you to celebrate it through Youtube Live.
          <br />
          Don’t forget to screenshot the moment and tag us on
          <br />
          our Instagram! :D
        </div>
        <Image
          src="/homeContent/holy_matrimony.jpg"
          alt="holy_matrimony"
          width={640}
          height={360}
          style={{ width: "auto", height: "auto" }}
        />
      </Transition>
    </article>
  );
}
