import Link from "next/link";
import Title from "../title";
import Countdown, { CountdownTimeDelta } from "react-countdown";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import { useCallback, useEffect, useRef, useState } from "react";

export default function SaveTheDate({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const renderer = ({ days, hours, minutes, seconds }: CountdownTimeDelta) => {
    return (
      <div className="flex flex-col space-y-2 font-normal">
        <div className="flex flex-row space-x-4">
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {Math.floor(days / 10)}
          </div>
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {days % 10}
          </div>
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {Math.floor(hours / 10)}
          </div>
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {hours % 10}
          </div>
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {Math.floor(minutes / 10)}
          </div>
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {minutes % 10}
          </div>
        </div>
        <div className="flex flex-row space-x-4 text-xs">
          <div className="text-center" style={{ width: 96 }}>
            Days
          </div>
          <div className="text-center" style={{ width: 96 }}>
            Hours
          </div>
          <div className="text-center" style={{ width: 96 }}>
            Minutes
          </div>
        </div>
      </div>
    );
  };

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
    <article id="save_the_date" ref={setRefs}>
      <Transition
        className={className}
        show={show}
        enter="transition-all ease-in-out duration-1000 delay-[300ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
      >
        {children || (
          <Title>
            SAVE THE DATE &
            <br />
            CELEBRATE WITH US
          </Title>
        )}

        <div className="text-xl text-center font-normal">
          Saturday, July 8th 2023
        </div>
        <Image
          src="/homeContent/celebrate_with_us.jpg"
          alt="celebrate_with_us"
          width={640}
          height={360}
          style={{ width: "auto", height: "auto" }}
        />
        <Countdown date={new Date(2023, 6, 8, 18, 0, 0)} renderer={renderer} />
        <Link
          href={
            "https://calendar.google.com/render?action=TEMPLATE&text=Kristianto+%26+Stephanie+Wedding&location=Ramada+Suites+By+Wyndham+Solo%2C+Jalan+Adi+Sucipto%2C+Gatak%2C+Gajahan%2C+Karanganyar+Regency%2C+Central+Java&dates=20230708T110000Z%2F20230708T140000Z"
          }
          target="_blank"
        >
          <div
            className="flex justify-center text-sm text-white px-6 py-2 rounded-full cursor-pointer"
            style={{ background: "#50657F" }}
          >
            Remind Me!
          </div>
        </Link>
      </Transition>
    </article>
  );
}
