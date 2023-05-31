import Image from "next/image";
import Title from "../title";
import Link from "next/link";

export default function Profile({
  className,
  name,
  title,
  linkedIn,
  instagram,
  picture,
}: {
  className?: string;
  name?: string;
  title?: string;
  linkedIn?: string;
  instagram?: string;
  picture?: string;
}) {
  return (
    <article className={className}>
      <Image
        src={`/homeContent/${picture}.jpg`}
        alt={`${name}`}
        width={160}
        height={160}
        className="rounded-full w-40 h-40 object-cover"
        priority
      />
      <Title className="uppercase">{name}</Title>
      <div className="font-semibold text-sm">{title}</div>
      <div className="flex space-x-2">
        <Link href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank">
          <Image
            src="/homeContent/linkedIn.svg"
            alt={`https://www.linkedin.com/in/${linkedIn}`}
            width={32}
            height={32}
            priority
          />
        </Link>
        <Link href={`https://www.instagram.com/${instagram}`} target="_blank">
          <Image
            src="/homeContent/instagram.svg"
            alt={`https://www.instagram.com/${instagram}`}
            width={32}
            height={32}
            priority
          />
        </Link>
      </div>
    </article>
  );
}
