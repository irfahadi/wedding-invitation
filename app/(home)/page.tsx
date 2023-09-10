"use client";

import { InvitationModal } from "@/components/InvitationModal";
import { VStack, useDisclosure } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { setCookie, getCookie } from "cookies-next";
import { HomeContent } from "./content";

const HomePage = () => {
  const query = useSearchParams();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [name, setName] = useState<string>();
  const isRecentlyOpen = getCookie("is-recently-open") === "1";

  const getDisplayName = ({
    to,
    gender,
    married,
    hasPartner,
  }: {
    to: string | null;
    gender: string | undefined;
    married: boolean;
    hasPartner: boolean;
  }) => {
    if (!to) return undefined;

    if (!gender || gender === "c") return to;

    let target = to?.split("&")[0]?.trim();
    let partnerName = to?.split("&")[1]?.trim();

    if (gender?.toLowerCase() === "f") {
      target = `${married ? "Mrs." : "Ms."} ${target}`;
    } else {
      target = `Mr. ${target}`;
    }

    if (!hasPartner) return target;
    if (!partnerName) return `${target} & Partner`;

    if (gender?.toLowerCase() === "f") {
      return `Mr. ${partnerName} & ${target}`;
    }

    return `${target} & ${married ? "Mrs." : "Ms."} ${partnerName}`;
  };

  useEffect(() => {
    const to = query.get("to");
    const gender = query.get("g")?.toLowerCase();
    const married = query.get("m") === "1";
    const hasPartner = query.get("p") === "1";

    setName(getDisplayName({ to, gender, married, hasPartner }));
  }, [query]);

  useEffect(() => {
    if (name && !isRecentlyOpen) onOpen();
  }, [name, isRecentlyOpen, onOpen]);

  useEffect(() => {
    if (isOpen) setCookie("is-recently-open", "1");
  }, [isOpen]);

  return (
    <VStack minH="100vh" justifyContent={"center"} gap={0}>
      <InvitationModal isOpen={isOpen} onClose={onClose} name={name} />
      <HomeContent name={name} />
    </VStack>
  );
};

export default HomePage;
