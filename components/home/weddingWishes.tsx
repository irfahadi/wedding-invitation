import Link from "next/link";
import Title from "../title";

export default function WeddingWishes({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className={className}>
      {children || <Title>WEDDING WISHES</Title>}

      <div className="text-center text-sm font-normal">
        Your wishes are our blessing to start a<br />
        new awesome journey ahead!
      </div>

      <button
        className="flex justify-center text-sm text-white mt-12 px-6 py-2 rounded-full cursor-pointer"
        style={{ background: "#50657F" }}
      >
        Send
      </button>
    </article>
  );
}
