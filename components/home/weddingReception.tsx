import Image from "next/image";
import Title from "../title";
import Link from "next/link";

export default function WeddingReception({
  className,
}: {
  className?: string;
}) {
  return (
    <article className={className}>
      <Image
        src="/homeContent/rose_wedding.svg"
        alt="wedding_reception"
        width={640}
        height={172}
        priority
      />
      <Image
        src="/homeContent/wedding_reception.jpg"
        alt="wedding_reception"
        width={512}
        height={256}
        style={{ width: "auto", height: "auto" }}
      />
      <div className="text-center font-bold">
        Saturday, July 8th 2023 <br />
        6 PM GMT +7 / 18:00 WIB <br />
        Ramada Suites By Wyndham Solo <br />
        The Warmest Garden
      </div>
      <Link
        href={"https://goo.gl/maps/trFaRRzjDf26VUTm7?coh=178572&entry=tt"}
        target="_blank"
      >
        <div
          className="flex justify-center text-sm text-white px-6 py-2 rounded-full cursor-pointer"
          style={{ background: "#50657F" }}
        >
          Map Location
        </div>
      </Link>
      <div className="text-center text-sm font-bold">
        It’s an outdoor wedding party, so we would recommend
        <br />
        you to wear your comfortable party outfit and shoes.
      </div>
      <div className="flex justify-around w-full">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="homeContent/no_stilleto.svg"
            alt="No Stilleto"
            width={48}
            height={48}
            priority
          />
          <div className="text-xs text-center font-bold">
            No
            <br />
            Stilleto
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="homeContent/outfit.svg"
            alt="Comfortable Outfit"
            width={48.5}
            height={48}
            priority
          />
          <div className="text-xs text-center font-bold">
            Comfortable
            <br />
            party outfit
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="homeContent/2_person.svg"
            alt="2 Person"
            width={48}
            height={48}
            priority
          />
          <div className="text-xs text-center font-bold">
            Valid for
            <br />2 person
          </div>
        </div>
      </div>
    </article>
  );
}
