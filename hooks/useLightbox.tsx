import * as React from "react";
import type { LightboxExternalProps } from "yet-another-react-lightbox";
import { Lightbox } from "@/components/Lightbox.e";

const useLightbox = () => {
  const [open, setOpen] = React.useState(false);
  const [interactive, setInteractive] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const openLightbox = React.useCallback((index: number) => {
    setIndex(index);
    setOpen(true);
    setInteractive(true);
  }, []);

  const renderLightbox = React.useCallback(
    (props?: Omit<LightboxExternalProps, "open" | "close">) =>
      interactive ? (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          {...props}
        />
      ) : null,
    [open, interactive, index]
  );

  return { openLightbox, renderLightbox };
};

export { useLightbox };
