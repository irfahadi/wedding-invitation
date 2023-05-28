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

export default function HomeContent({ className }: { className?: string }) {
  return (
    <section className={className}>
      <Image
        className="absolute top-0"
        src="top_ornaments.svg"
        alt="top_ornaments"
        width={1080}
        height={584}
        priority
      />
      <Image
        className="absolute bottom-0"
        src="bottom_ornaments.svg"
        alt="bottom_ornaments"
        width={1080}
        height={584}
        priority
      />
      <section className="flex flex-col items-center justify-center z-10 space-y-8 pt-24 md:pt-36 pb-36 md:pb-56">
        <Image
          src="/monogram.svg"
          alt="monogram"
          width={128}
          height={128}
          priority
        />

        <article className="flex flex-col items-center space-y-2 w-full">
          <div className="text-center text font-bold">
            “Love never gives up, never loses faith, is always hopeful
            <br />
            and endures through every circumstance.”
          </div>
          <div className="text-xs font-bold">- Corinthians 13:7 -</div>
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
          <div className="text-center text-xl font-bold">
            “A wedding is an event,
            <br />
            but a marriage is life”
          </div>
          <div className="text-xs font-bold">Myles Munroe</div>
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

        <article className="flex flex-col items-center space-y-2 w-full">
          <div className="text-center text-sm">
            © 2023 Kristianto & Stephanie. All Rights Reserved
          </div>
          <div className="text-center text-sm">Song by Lorem Ipsum</div>
        </article>
      </section>
    </section>
  );
}
