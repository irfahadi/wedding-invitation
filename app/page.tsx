"use client";

import InvitationCard from "@/components/invitationCard";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import HomeContent from "@/components/homeContent";
import { useEffect, useState } from "react";
import Toast from "@/components/toast";
import Music from "@/components/music";
import { useCookieState } from "use-cookie-state";

export default function IndexPage() {
  const paramExpireDate = new Date();
  paramExpireDate.setDate(paramExpireDate.getDate() + 10);
  const [params, setParams] = useCookieState<string | undefined>(
    "params",
    undefined,
    {
      encode: { path: "/", expires: paramExpireDate, sameSite: true },
    }
  );
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState<
    ReadonlyURLSearchParams | URLSearchParams
  >(useSearchParams());

  const invitationExpireDate = new Date();
  invitationExpireDate.setHours(invitationExpireDate.getHours() + 1);
  const [invitationIsOpen, setInvitationIsOpen] = useCookieState<boolean>(
    "invitationIsOpen",
    false,
    {
      // 1 hours
      encode: {
        path: "/",
        expires: invitationExpireDate,
        sameSite: true,
        secure: true,
      },
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
