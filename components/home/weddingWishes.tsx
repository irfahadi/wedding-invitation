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
      <div className="bg-slate-700 w-full h-64"></div>
    </article>
  );
}
