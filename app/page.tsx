"use client";

import InvitationCard from "@/components/invitationCard";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import HomeContent from "@/components/homeContent";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [params, setParams] = useLocalStorage("params", undefined);
  const [searchParams, setSearchParams] = useState<
    ReadonlyURLSearchParams | URLSearchParams
  >(useSearchParams());
  const [invitationIsOpen, setInvitationIsOpen] = useLocalStorage(
    "invitationIsOpen",
    false
  );

  const openInvitation = () => {
    setInvitationIsOpen(!invitationIsOpen);
  };

  useEffect(() => {
    const searchParamsStr = searchParams.toString();

    if (searchParamsStr !== "") {
      setParams(searchParamsStr);
    } else if (params) {
      setSearchParams(new URLSearchParams(params));
    }
  }, [searchParams, params, setParams]);

  return (
    <>
      {invitationIsOpen && (
        <HomeContent className="flex flex-col max-w-screen-sm items-center justify-center bg-white mx-auto relative shadow-lg" />
      )}
      <InvitationCard
        className={`flex flex-col max-w-screen-sm items-center justify-center bg-white z-10 mx-auto invitation-card shadow-lg ${
          invitationIsOpen ? "hide" : ""
        }`}
        to={searchParams.get("to")}
        gender={searchParams.get("g")}
        married={searchParams.get("m") === "t"}
        hasPartner={searchParams.get("p") === "t"}
        partnerName={searchParams.get("pm")}
        openInvitation={openInvitation}
      />
    </>
  );
}
