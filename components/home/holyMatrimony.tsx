import Image from "next/image";
import Title from "../title";

export default function HolyMatrimony({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className={className}>
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
        width={512}
        height={256}
        style={{ width: "auto", height: "auto" }}
      />
    </article>
  );
}
