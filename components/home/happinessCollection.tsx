import Image from "next/image";
import Title from "../title";
import useLightbox from "@/hooks/useLightbox";

export default function HappinessCollection({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openLightbox, renderLightbox } = useLightbox();

  const images = [
    { className: "col-span-2", picture: "1", width: 3936, height: 2624 },
    { className: "", picture: "2", width: 2731, height: 4096 },
    { className: "", picture: "3", width: 2731, height: 4096 },
    { className: "col-span-2", picture: "4", width: 3936, height: 2624 },
    { className: "", picture: "5", width: 3936, height: 2624 },
    {
      className: "row-span-3",
      picture: "6",
      width: 2731,
      height: 4096,
    },
    { className: "", picture: "7", width: 3936, height: 2624 },
    { className: "", picture: "8", width: 3936, height: 2624 },
  ];

  return (
    <article className={className}>
      {children || (
        <Title>
          OUR HAPPINESS
          <br />
          COLLECTION
        </Title>
      )}

      <div className="w-full px-4 grid grid-cols-2 gap-2">
        {images.map(({ className, picture, width, height }, index) => (
          <Image
            key={index}
            className={[className, "cursor-pointer"].join(" ")}
            src={`homeContent/happinessCollection/${picture}.svg`}
            alt={picture}
            width={width}
            height={height}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {renderLightbox({
        slides: images.map((image) => {
          const width = image.width * 4;
          const height = image.height * 4;
          return {
            src: `homeContent/happinessCollection/${image.picture}.svg`,
            width,
            height,
          };
        }),
      })}
    </article>
  );
}
