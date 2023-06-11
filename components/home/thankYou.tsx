import Title from "../title";
import TransitionWrapper from "../transitionWrapper";

export default function ThankYou({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <TransitionWrapper id="thank_you" className={className}>
      {children || (
        <Title>
          THANK YOU
          <br />
          FOR YOUR SUPPORT
          <br />& PRAYER
        </Title>
      )}

      <div className="font-normal text-center">
        Warm regards,
        <br />
        Kristianto & Stephanie
      </div>
    </TransitionWrapper>
  );
}
