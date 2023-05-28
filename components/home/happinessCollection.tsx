import Title from "../title";

export default function HappinessCollection({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className={className}>
      {children || (
        <Title>
          OUR HAPPINESS
          <br />
          COLLECTION
        </Title>
      )}

      <div className="bg-slate-700 w-full h-64"></div>
    </article>
  );
}
