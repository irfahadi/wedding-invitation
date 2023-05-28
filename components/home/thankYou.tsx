import Title from "../title";

export default function ThankYou({
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
          THANK YOU
          <br />
          FOR YOUR SUPPORT
          <br />& PRAYER
        </Title>
      )}

      <div className="font-bold text-center">
        Warm regards,
        <br />
        Kristianto & Stephanie
      </div>
    </article>
  );
}
