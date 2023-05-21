import Image from "next/image";
import { CSSProperties, MouseEventHandler } from "react";

export default function InvitationCard({
  className,
  hasPartner,
  partnerName,
  to,
  gender,
  married,
  openInvitation,
  style,
}: {
  className?: string;
  hasPartner?: boolean;
  partnerName?: string | null;
  to?: string | null;
  gender?: string | null;
  married?: boolean;
  openInvitation?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}) {
  const displayName = () => {
    let target;

    if (gender === "f") {
      target = `${married ? "Mrs." : "Ms."} ${to || "Lorem Ipsum"}`;
    } else {
      target = `Mr. ${to || "Lorem Ipsum"}`;
    }

    if (!hasPartner) return target;
    if (!partnerName) return `${target} & Partner`;

    if (gender === "f") {
      return `Mr. ${partnerName} & ${target}`;
    }

    return `${target} & ${married ? "Mrs." : "Ms."} ${to}`;
  };

  return (
    <section className={className} style={style}>
      <Image
        className="absolute top-0"
        src="top_ornaments.svg"
        alt="top_ornaments"
        width={1080}
        height={584}
        priority
      />
      <Image
        className="absolute bottom-0"
        src="bottom_ornaments.svg"
        alt="bottom_ornaments"
        width={1080}
        height={584}
        priority
      />
      <article className="flex flex-col items-center justify-center z-10">
        <Image
          src="/monogram.svg"
          alt="monogram"
          width={300}
          height={300}
          priority
        />
        <p className="flex w-full justify-center text-lg mt-10">
          To our dearest,
        </p>
        <p
          className="flex w-full justify-center items-center text-lg mt-2"
          style={{ height: 90 }}
        >
          <Image
            className="absolute"
            src="invitationCard/gold_frame.svg"
            alt="gold_frame"
            width={350}
            height={90}
            priority
          />
          {displayName()}
        </p>
        <p className="flex w-full justify-center text-center text-lg mt-2">
          You are invited to our <br />
          Wedding Ceremony
        </p>
        <button
          className="flex justify-center text-sm text-white mt-12 px-6 py-2 rounded-full cursor-pointer"
          style={{ background: "#50657F" }}
          onClick={openInvitation}
        >
          Open Invitation
        </button>
      </article>
    </section>
  );
}
