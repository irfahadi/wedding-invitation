"use client";

import InvitationCard from "@/components/invitationCard";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import HomeContent from "@/components/homeContent";

export default function IndexPage() {
  const searchParams = useSearchParams();
  const [invitationIsOpen, setInvitationIsOpen] = useState(false);

  const openInvitation = () => {
    setInvitationIsOpen(!invitationIsOpen);
  };

  return (
    <main className="overflow-x-hidden">
      {invitationIsOpen && (
        <HomeContent className="flex flex-col min-h-screen max-w-screen-sm items-center justify-center bg-white mx-auto relative shadow-lg" />
      )}
      <InvitationCard
        className={`flex flex-col min-h-screen max-w-screen-sm items-center justify-center bg-white z-10 mx-auto invitation-card shadow-lg ${
          invitationIsOpen ? "hide" : ""
        }`}
        to={searchParams.get("to")}
        gender={searchParams.get("g")}
        married={searchParams.get("m") === "t"}
        hasPartner={searchParams.get("p") === "t"}
        partnerName={searchParams.get("pm")}
        openInvitation={openInvitation}
      />
    </main>
  );
}
