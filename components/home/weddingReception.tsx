import Image from "next/image";
import Link from "next/link";
import TransitionWrapper from "../transitionWrapper";

export default function WeddingReception({
  className,
}: {
  className?: string;
}) {
  return (
    <TransitionWrapper id="wedding_reception" className={className}>
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
        width={640}
        height={360}
        style={{ width: "auto", height: "auto" }}
      />
      <div className="text-center font-normal">
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
      <div className="text-center text-sm font-normal px-8">
        It’s an outdoor wedding party, so we would recommend you to wear your
        comfortable
        <br />
        party outfit and shoes.
      </div>
      <div className="flex items-center justify-center w-full space-x-8">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="homeContent/no_stilleto.svg"
            alt="No Stilleto"
            width={48}
            height={48}
            priority
          />
          <div className="text-xs text-center font-normal">
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
          <div className="text-xs text-center font-normal">
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
          <div className="text-xs text-center font-normal">
            Valid for
            <br />2 person
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
}
