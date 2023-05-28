import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ weight: "600", subsets: ["latin"] });

const _defaultTitleClassName = `text-2xl text-center tracking-widest font-bold ${cormorant.className}`;

export default function Title({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={[_defaultTitleClassName, className].join(" ")}>
      {children}
    </div>
  );
}
