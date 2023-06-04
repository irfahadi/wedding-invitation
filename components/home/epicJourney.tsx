import Image from "next/image";
import Title from "../title";

export default function EpicJourney({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className={className}>
      {children || <Title>OUR EPIC JOURNEY</Title>}

      <table className="w-full our-epic-journey font-normal relative">
        <tbody>
          <tr>
            <td rowSpan={2} className="text-right">
              <Image
                className="absolute left-0 top-1/3 -z-10"
                src="homeContent/daun_mirror.svg"
                alt="Gold Line"
                width={120}
                height={105}
                priority
              />
              <Image
                className="absolute right-0 -bottom-8"
                src="homeContent/daun.svg"
                alt="Gold Line"
                width={102}
                height={85}
                priority
              />
              2011
            </td>
            <td rowSpan={9} className="relative">
              <Image
                className="absolute"
                src="homeContent/gold_line.svg"
                alt="Gold Line"
                fill
                priority
              />
            </td>
            <td>Our first meet at Maranatha Christian University Bandung.</td>
          </tr>
          <tr>
            <td>Growing together as community group in church.</td>
          </tr>
          <tr>
            <td className="text-right">2015</td>
            <td>Kris left Bandung to pursue his career in Jakarta.</td>
          </tr>
          <tr>
            <td rowSpan={2} className="text-right">
              2018
            </td>
            <td>Meeting again in Bandung and begin a relationship.</td>
          </tr>
          <tr>
            <td>
              Had a long distance relationship between Jakarta - Karawang.
            </td>
          </tr>
          <tr>
            <td rowSpan={2} className="text-right">
              2020
            </td>
            <td>Commited to proceed a serious relationship.</td>
          </tr>
          <tr>
            <td>
              Starting a long distance relationship again (LOL) between Tanjung
              Pinang - Solo.
            </td>
          </tr>
          <tr>
            <td className="text-right">12th Feb 2023</td>
            <td>Engagement</td>
          </tr>
          <tr>
            <td className="text-right">8th July 2023</td>
            <td>Our big day with you!</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
