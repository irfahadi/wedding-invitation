import Title from "../title";
import TransitionWrapper from "../transitionWrapper";

export default function HolyMatrimony({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <TransitionWrapper id="holy_matrimony" className={className}>
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
      <iframe
        className="w-full h-60 md:h-80"
        src="https://www.youtube.com/embed/0XYivn2zdnk?controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 0 }}
      />
    </TransitionWrapper>
  );
}
