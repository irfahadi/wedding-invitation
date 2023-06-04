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
    </article>
  );
}
