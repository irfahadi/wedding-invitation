import Image from "next/image";
import { CSSProperties, MouseEventHandler } from "react";

export default function InvitationCard({
  className,
  hasPartner,
  to,
  prefix,
  openInvitation,
  style,
}: {
  className?: string;
  hasPartner?: boolean;
  to?: string | null;
  prefix?: string;
  openInvitation?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}) {
  return (
    <section className={className} style={style}>
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
          src="/gold_frame.svg"
          alt="gold_frame"
          width={350}
          height={90}
          priority
        />
        {`${prefix || "Mr."} ${to || "Lorem Ipsum"} ${
          hasPartner ? "& Partner" : ""
        }`}
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
    </section>
  );
}
