import Image from "next/image";
import Title from "../title";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Transition } from "@headlessui/react";

export default function EpicJourney({
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
    <article id="epic_journey" ref={setRefs}>
      <Transition
        className={className}
        show={show}
        enter="transition-all ease-in-out duration-1000 delay-[300ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
      >
        {children || <Title>OUR EPIC JOURNEY</Title>}

        <iframe
          width="640"
          height="320"
          src="https://www.youtube.com/embed/cJLEemvirnw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 0 }}
        />
        <table className="w-full our-epic-journey font-normal relative">
          <tbody>
            <tr>
              <td rowSpan={2} className="text-right">
                <Image
                  className="absolute left-0 top-1/3 -z-10"
                  src="homeContent/daun_mirror.svg"
                  alt="Gold Line"
                  width={120}
                  height={105}
                  priority
                />
                <Image
                  className="absolute right-0 -bottom-8"
                  src="homeContent/daun.svg"
                  alt="Gold Line"
                  width={102}
                  height={85}
                  priority
                />
                2011
              </td>
              <td rowSpan={9} className="relative">
                <Image
                  className="absolute"
                  src="homeContent/gold_line.svg"
                  alt="Gold Line"
                  fill
                  priority
                />
              </td>
              <td>Our first meet at Maranatha Christian University Bandung.</td>
            </tr>
            <tr>
              <td>Growing together as community group in church.</td>
            </tr>
            <tr>
              <td className="text-right">2015</td>
              <td>Kris left Bandung to pursue his career in Jakarta.</td>
            </tr>
            <tr>
              <td rowSpan={2} className="text-right">
                2018
              </td>
              <td>Meeting again in Bandung and begin a relationship.</td>
            </tr>
            <tr>
              <td>
                Had a long distance relationship between Jakarta - Karawang.
              </td>
            </tr>
            <tr>
              <td rowSpan={2} className="text-right">
                2020
              </td>
              <td>Commited to proceed a serious relationship.</td>
            </tr>
            <tr>
              <td>
                Starting a long distance relationship again (LOL) between
                Tanjung Pinang - Solo.
              </td>
            </tr>
            <tr>
              <td className="text-right">12th Feb 2023</td>
              <td>Engagement</td>
            </tr>
            <tr>
              <td className="text-right">8th July 2023</td>
              <td>Our big day with you!</td>
            </tr>
          </tbody>
        </table>
      </Transition>
    </article>
  );
}
