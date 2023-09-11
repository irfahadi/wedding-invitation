"use client";

import { InvitationModal } from "@/components/modals";
import { VStack, useDisclosure } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { setCookie, getCookie } from "cookies-next";
import { HomeContent } from "./content";
import { getDisplayName } from "./utils";
import * as gtag from "@/libs/gtag";
import { useReportWebVitals } from "next/web-vitals";

const HomePage = () => {
  useReportWebVitals(({ id, name, label, value }: any) => {
    // Use `window.gtag` if you initialized Google Analytics as this example:
    // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
    gtag.event(name, {
      event_category:
        label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    });
  });

  const query = useSearchParams();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [name, setName] = useState<string | undefined>(getCookie("name"));

  const cookieOptions = useMemo(
    () => ({
      path: "/",
      maxAge: 3600,
      sameSite: true,
      secure: true,
    }),
    []
  );

  const isRecentlyOpen = getCookie("is-recently-open") === "1";

  useEffect(() => {
    const to = query.get("to");
    const gender = query.get("g")?.toLowerCase();
    const married = query.get("m") === "1";
    const hasPartner = query.get("p") === "1";
    const displayName = getDisplayName({ to, gender, married, hasPartner });

    if (displayName) {
      setName(displayName);
      setCookie("name", displayName, cookieOptions);
    }
  }, [query, cookieOptions]);

  useEffect(() => {
    if (name && !isRecentlyOpen) onOpen();
  }, [name, isRecentlyOpen, onOpen]);

  useEffect(() => {
    if (isOpen) {
      setCookie("is-recently-open", "1", cookieOptions);
    }
  }, [isOpen, cookieOptions]);

  return (
    <VStack minH="100vh" justifyContent={"center"} gap={0}>
      <InvitationModal isOpen={isOpen} onClose={onClose} name={name} />
      <HomeContent name={name} />
    </VStack>
  );
};

export default HomePage;
