"use client";

import InvitationCard from "@/components/invitationCard";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import HomeContent from "@/components/homeContent";
import { useEffect, useState } from "react";
import Toast from "@/components/toast";
import Music from "@/components/music";
import { useCookieState } from "use-cookie-state";

export default function IndexPage() {
  const [params, setParams] = useCookieState<string | undefined>(
    "params",
    undefined,
    {
      // 28 days
      encode: { path: "/", maxAge: 60 * 60 * 24 * 28 },
    }
  );
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState<
    ReadonlyURLSearchParams | URLSearchParams
  >(useSearchParams());
  const [invitationIsOpen, setInvitationIsOpen] = useCookieState<boolean>(
    "invitationIsOpen",
    false,
    {
      // 1 hours
      encode: { path: "/", maxAge: 60 * 60 },
    }
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

    setLoading(false);
  }, [searchParams, params, setParams]);

  if (loading) return;

  return (
    <>
      <Toast />
      <HomeContent className="flex flex-col max-w-screen-sm items-center justify-center bg-white mx-auto relative shadow-lg" />
      <InvitationCard
        className={`flex flex-col max-w-screen-sm items-center justify-center bg-white z-10 mx-auto invitation-card shadow-lg ${
          invitationIsOpen ? "hide" : ""
        }`}
        to={searchParams.get("to")}
        gender={searchParams.get("g")}
        married={searchParams.get("m") === "1"}
        hasPartner={searchParams.get("p") === "1"}
        openInvitation={openInvitation}
      />
      <Music />
    </>
  );
}
