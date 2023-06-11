import Link from "next/link";
import Title from "../title";
import TransitionWrapper from "../transitionWrapper";

export default function YourBlessing({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <TransitionWrapper id="wedding_reception" className={className}>
      {children || (
        <Title>
          WE APPRECIATE
          <br />
          YOUR BLESSING
        </Title>
      )}
      <div className="text-sm font-normal text-center">
        Your kind blessing can be sent to this information below.
        <br />
        Also please fill your address information so that we can
        <br />
        send you a gratitude gift.
      </div>
      <Link
        className="flex justify-center text-sm text-white mt-12 px-6 py-2 rounded-full cursor-pointer"
        style={{ background: "#50657F" }}
        href={"/blessing"}
      >
        Bank Transfer
      </Link>
    </TransitionWrapper>
  );
}
