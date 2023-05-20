"use client";

import InvitationCard from "@/components/invitationCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import HomeContent from "@/components/homeContent";
import Image from "next/image";

export default function IndexPage() {
  const searchParams = useSearchParams();
  const [invitationIsOpen, setInvitationIsOpen] = useState(false);

  const gender = searchParams.get("g");
  let prefix: string = "Mr.";
  if (gender && gender === "f") {
    prefix = "Ms.";
  }

  const openInvitation = () => {
    setInvitationIsOpen(!invitationIsOpen);
  };

  return (
    <main className="flex flex-col items-center min-h-screen max-w-screen-md mx-auto bg-white relative">
      <Image
        className="absolute max-w-screen-md"
        src="top_ornaments.svg"
        alt="top_ornaments"
        width={1080}
        height={584}
        priority
      />
      <Image
        className="absolute max-w-screen-md bottom-0"
        src="bottom_ornaments.svg"
        alt="bottom_ornaments"
        width={1080}
        height={584}
        priority
      />
      <InvitationCard
        className={`flex flex-col w-full items-center justify-center invitation-card ${
          invitationIsOpen ? "hide" : ""
        }`}
        hasPartner={searchParams.get("p") === "true"}
        to={searchParams.get("to")}
        prefix={prefix}
        openInvitation={openInvitation}
      />
      {invitationIsOpen && (
        <HomeContent className="flex flex-col w-full items-center space-y-6 py-40 px-8 relative" />
      )}
    </main>
  );
}
