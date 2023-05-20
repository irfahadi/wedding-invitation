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
    <main className="relative overflow-x-hidden">
      {invitationIsOpen && (
        <HomeContent className="flex flex-col min-h-screen max-w-screen-md items-center justify-center bg-white mx-auto relative" />
      )}
      <InvitationCard
        className={`flex flex-col min-h-screen max-w-screen-md items-center justify-center bg-white z-10 mx-auto invitation-card ${
          invitationIsOpen ? "hide" : ""
        }`}
        hasPartner={searchParams.get("p") === "true"}
        to={searchParams.get("to")}
        prefix={prefix}
        openInvitation={openInvitation}
      />
    </main>
  );
}
