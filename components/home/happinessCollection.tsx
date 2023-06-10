import Image from "next/image";
import Title from "../title";
import useLightbox from "@/hooks/useLightbox";
import { Transition } from "@headlessui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function HappinessCollection({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openLightbox, renderLightbox } = useLightbox();

  const images = [
    { className: "col-span-2", picture: "1", width: 542, height: 305 },
    { className: "", picture: "2", width: 463, height: 261 },
    { className: "", picture: "3", width: 463, height: 261 },
    { className: "col-span-2", picture: "4", width: 542, height: 305 },
    { className: "", picture: "5", width: 542, height: 305 },
    {
      className: "row-span-3",
      picture: "6",
      width: 2731,
      height: 4096,
    },
    { className: "", picture: "7", width: 542, height: 305 },
    { className: "", picture: "8", width: 542, height: 305 },
  ];
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
    <article id="happiness_collection" ref={setRefs}>
      <Transition.Root className={className} show={show}>
        <Transition.Child
          enter="transition-all ease-in-out duration-1000 delay-[300ms]"
          enterFrom="opacity-0 translate-y-6"
          enterTo="opacity-100 translate-y-0"
        >
          {children || (
            <Title>
              OUR HAPPINESS
              <br />
              COLLECTION
            </Title>
          )}
        </Transition.Child>

        <div className="w-full px-4 grid grid-cols-2 gap-4">
          {images.map(({ className, picture, width, height }, index) => (
            <Transition.Child
              key={index}
              className={className}
              enter="transition-all ease-in-out duration-1000 delay-[300ms]"
              enterFrom={`opacity-0 translate-x-${index % 2 === 0 ? 6 : -6}`}
              enterTo="opacity-100 translate-x-0"
            >
              <Image
                className="cursor-pointer object-cover w-full h-full"
                src={`/homeContent/happinessCollection/${picture}.jpg`}
                alt={picture}
                width={width}
                height={height}
                onClick={() => openLightbox(index)}
              />
            </Transition.Child>
          ))}
        </div>
      </Transition.Root>
      {renderLightbox({
        slides: images.map((image) => {
          const width = image.width * 4;
          const height = image.height * 4;
          return {
            src: `/homeContent/happinessCollection/${image.picture}.jpg`,
            width,
            height,
          };
        }),
      })}
    </article>
  );
}
