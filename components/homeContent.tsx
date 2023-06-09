import Image from "next/image";

import HappinessCollection from "./home/happinessCollection";
import WeddingWishes from "./home/weddingWishes";
import YourBlessing from "./home/yourBlessing";
import ThankYou from "./home/thankYou";
import EpicJourney from "./home/epicJourney";
import Profile from "./home/profile";
import HolyMatrimony from "./home/holyMatrimony";
import SaveTheDate from "./home/saveTheDate";
import WeddingReception from "./home/weddingReception";
import { CSSProperties } from "react";

export default function HomeContent({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <section className={className} style={style}>
      <Image
        className="absolute top-0"
        src="/top_ornaments.svg"
        alt="top_ornaments"
        width={1080}
        height={584}
        priority
      />
      <Image
        className="absolute bottom-0"
        src="/bottom_ornaments.svg"
        alt="bottom_ornaments"
        width={1080}
        height={584}
        priority
      />
      <section className="flex flex-col items-center justify-center z-10 space-y-8 pt-24 md:pt-36 pb-36 md:pb-48">
        <Image
          src="/monogram.svg"
          alt="monogram"
          width={128}
          height={128}
          priority
        />

        <article className="flex flex-col items-center space-y-2 w-full px-8">
          <div className="text-center text-xs md:text-sm font-normal">
            “Love never gives up, never loses faith, is always hopeful
            <br />
            and endures through every circumstance.”
            <br />- Corinthians 13:7 -
          </div>
        </article>

        <Profile
          className="flex flex-col items-center space-y-4 w-full"
          name="Kristianto 陈俊辉"
          title="The son of Mr. Amran & Mrs. Sucyati (+)"
          linkedIn="christiantochen"
          instagram="christianto_chen"
          picture="kristianto"
        />
        <Profile
          className="flex flex-col items-center space-y-4 w-full"
          name="Stephanie 林友爱"
          title="The daughter of Mr. Liem Swie Lin & Mrs. Tan Fei Tjin"
          linkedIn="stephanieai"
          instagram="stephanie_aiai"
          picture="stephanie"
        />

        <SaveTheDate className="flex flex-col items-center space-y-6 w-full" />

        <Image
          src="/homeContent/gold_line_vertical.svg"
          alt="gold_line_vertical"
          width={320}
          height={3}
          priority
        />

        <HolyMatrimony className="flex flex-col items-center space-y-6 w-full" />

        <article className="flex flex-col items-center space-y-2 w-full">
          <div className="text-center text-xl font-normal">
            “A wedding is an event,
            <br />
            but a marriage is life”
          </div>
          <div className="text-xs font-normal">Myles Munroe</div>
        </article>

        <WeddingReception className="flex flex-col items-center space-y-6 w-full" />
        <EpicJourney className="flex flex-col items-center space-y-6 w-full" />
        <HappinessCollection className="flex flex-col items-center space-y-6 w-full" />
        <WeddingWishes className="flex flex-col items-center space-y-6 w-full" />
        <YourBlessing className="flex flex-col items-center space-y-6 w-full" />

        <Image
          src="/homeContent/gold_line_vertical.svg"
          alt="gold_line_vertical"
          width={320}
          height={3}
          priority
        />

        <ThankYou className="flex flex-col items-center space-y-6 w-full" />

        <article className="flex flex-col items-center space-y-0 w-full pt-8">
          <div className="text-center text-sm">
            © 2023 Kristianto & Stephanie <b>#STEPcloserwithKRIS</b>
          </div>
          <div className="text-center text-sm">
            Photo and Video by <b>@elysian.picture</b>
          </div>
          <div className="text-center text-sm">
            Invitation by <b>Kristianto & Stephanie</b>
          </div>
          <div className="text-center text-sm space-x-1">
            <span>Song</span>
            <span className="font-normal">Can`t Help Falling in Love</span>
            <span>by</span>
            <a
              className="font-normal underline"
              href="https://open.spotify.com/artist/3NuX2HNLS62uUmkVGBQYzP?si=I-ZtSRbbSweeFEa7T2_VtQ"
              target="_blank"
            >
              INST
            </a>
          </div>
        </article>
      </section>
    </section>
  );
}
