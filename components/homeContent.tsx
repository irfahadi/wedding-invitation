import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import { CountdownTimeDelta } from "react-countdown/dist/utils";

import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ weight: "600", subsets: ["latin"] });

export default function HomeContent({ className }: { className?: string }) {
  const renderer = ({ days, hours, minutes, seconds }: CountdownTimeDelta) => {
    return (
      <div className="flex flex-col space-y-2 font-bold">
        <div className="flex flex-row space-x-4">
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {Math.floor(days / 10)}
          </div>
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {days % 10}
          </div>
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {Math.floor(hours / 10)}
          </div>
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {hours % 10}
          </div>
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {Math.floor(minutes / 10)}
          </div>
          <div
            className="flex items-center justify-center border"
            style={{ width: 40, height: 48, borderColor: "#50657F" }}
          >
            {minutes % 10}
          </div>
        </div>
        <div className="flex flex-row space-x-4 text-xs">
          <div className="text-center" style={{ width: 96 }}>
            Days
          </div>
          <div className="text-center" style={{ width: 96 }}>
            Hours
          </div>
          <div className="text-center" style={{ width: 96 }}>
            Minutes
          </div>
        </div>
      </div>
    );
  };

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

        <article className="flex flex-col items-center space-y-4 w-full">
          <Image
            src="homeContent/kristianto.svg"
            alt="Kristianto"
            width={160}
            height={160}
            priority
          />
          <div
            className={`uppercase font-semibold tracking-widest text-2xl ${cormorant.className}`}
          >
            Kristianto 陈俊辉
          </div>
          <div className="font-semibold text-sm">
            The son of Mr. Amran & Mrs. Sucyati (+)
          </div>
          <div className="flex space-x-2">
            <Link
              href="https://www.linkedin.com/in/christiantochen"
              target="_blank"
            >
              <Image
                src="homeContent/linkedIn.svg"
                alt="https://www.linkedin.com/in/christiantochen"
                width={32}
                height={32}
                priority
              />
            </Link>
            <Link
              href="https://www.instagram.com/christianto_chen"
              target="_blank"
            >
              <Image
                src="homeContent/instagram.svg"
                alt="https://www.instagram.com/christianto_chen"
                width={32}
                height={32}
                priority
              />
            </Link>
          </div>
        </article>

        <article className="flex flex-col items-center space-y-4 w-full">
          <Image
            src="homeContent/stephanie.svg"
            alt="Stephanie"
            width={160}
            height={160}
            priority
          />
          <div
            className={`uppercase font-semibold tracking-widest text-2xl ${cormorant.className}`}
          >
            Stephanie 林友爱
          </div>
          <div className="font-semibold text-sm">
            The daughter of Mr. Liem Swie Lin & Mrs. Tan Fei Tjin
          </div>
          <div className="flex space-x-2">
            <Link
              href="https://www.linkedin.com/in/stephanieai"
              target="_blank"
            >
              <Image
                src="homeContent/linkedIn.svg"
                alt="https://www.linkedin.com/in/stephanieai"
                width={32}
                height={32}
                priority
              />
            </Link>
            <Link
              href="https://www.instagram.com/stephanie_aiai"
              target="_blank"
            >
              <Image
                src="homeContent/instagram.svg"
                alt="https://www.instagram.com/stephanie_aiai"
                width={32}
                height={32}
                priority
              />
            </Link>
          </div>
        </article>

        <article className="flex flex-col items-center space-y-6 w-full">
          <div
            className={`text-2xl text-center tracking-widest font-bold ${cormorant.className}`}
          >
            SAVE THE DATE &<br />
            CELEBRATE WITH US
          </div>
          <div className="text-xl text-center font-bold">
            Saturday, July 8th 2023
          </div>
          <Image
            src="/homeContent/celebrate_with_us.svg"
            alt="celebrate_with_us"
            width={512}
            height={256}
            priority
            style={{ width: "auto", height: "auto" }}
          />
          <Countdown
            date={new Date(2023, 6, 8, 18, 0, 0)}
            renderer={renderer}
          />
          <Link
            href={
              "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230708T110000Z%2F20230708T140000Z&details=&location=Jl.%20Adi%20Sucipto%20No.56%2C%20Gatak%2C%20Gajahan%2C%20Kec.%20Colomadu%2C%20Kabupaten%20Karanganyar%2C%20Jawa%20Tengah%2057716&text=Kristianto%20%26%20Stephanie%20Wedding"
            }
            target="_blank"
          >
            <div
              className="flex justify-center text-sm text-white px-6 py-2 rounded-full cursor-pointer"
              style={{ background: "#50657F" }}
            >
              Remind Me!
            </div>
          </Link>
        </article>

        <Image
          src="/homeContent/gold_line_vertical.svg"
          alt="gold_line_vertical"
          width={320}
          height={3}
          priority
        />

        <article className="flex flex-col items-center space-y-6 w-full">
          <div
            className={`text-2xl text-center tracking-widest font-bold ${cormorant.className}`}
          >
            HOLY MATRIMONY
          </div>
          <div className="text-xl text-center font-bold">
            Saturday, July 8th 2023
            <br />4 PM GMT +7 / 16:00 WIB
          </div>
          <div className="text-center text-sm font-bold">
            Since we held a private Holy Matrimony. Hence, we
            <br />
            encourage you to celebrate it through Youtube Live.
            <br />
            Don’t forget to screenshot the moment and tag us on
            <br />
            our Instagram! :D
          </div>
          <Image
            src="/homeContent/holy_matrimony.svg"
            alt="holy_matrimony"
            width={512}
            height={256}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </article>

        <article className="flex flex-col items-center space-y-2 w-full">
          <div className="text-center text-xl font-bold">
            “A wedding is an event,
            <br />
            but a marriage is life”
          </div>
          <div className="text-xs font-bold">Myles Munroe</div>
        </article>

        <article className="flex flex-col items-center space-y-6 w-full">
          <Image
            src="/homeContent/rose_wedding.svg"
            alt="wedding_reception"
            width={640}
            height={172}
            priority
          />
          <Image
            src="/homeContent/wedding_reception.svg"
            alt="wedding_reception"
            width={512}
            height={256}
            priority
            style={{ width: "auto", height: "auto" }}
          />
          <div className="text-center font-bold">
            Saturday, July 8th 2023 <br />
            6 PM GMT +7 / 18:00 WIB <br />
            Ramada Suites By Wyndham Solo <br />
            The Warmest Garden
          </div>
          <Link
            href={"https://goo.gl/maps/trFaRRzjDf26VUTm7?coh=178572&entry=tt"}
            target="_blank"
          >
            <div
              className="flex justify-center text-sm text-white px-6 py-2 rounded-full cursor-pointer"
              style={{ background: "#50657F" }}
            >
              Map Location
            </div>
          </Link>
          <div className="text-center text-sm font-bold">
            It’s an outdoor wedding party, so we would recommend
            <br />
            you to wear your comfortable party outfit and shoes.
          </div>
          <div className="flex justify-around w-full">
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="homeContent/no_stilleto.svg"
                alt="No Stilleto"
                width={48}
                height={48}
                priority
              />
              <div className="text-xs text-center font-bold">
                No
                <br />
                Stilleto
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="homeContent/outfit.svg"
                alt="Comfortable Outfit"
                width={48.5}
                height={48}
                priority
              />
              <div className="text-xs text-center font-bold">
                Comfortable
                <br />
                party outfit
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="homeContent/2_person.svg"
                alt="2 Person"
                width={48}
                height={48}
                priority
              />
              <div className="text-xs text-center font-bold">
                Valid for
                <br />2 person
              </div>
            </div>
          </div>
        </article>

        <article className="flex flex-col items-center space-y-6 w-full">
          <div
            className={`text-2xl text-center tracking-widest font-bold ${cormorant.className}`}
          >
            OUR EPIC JOURNEY
          </div>
          <div className="bg-slate-700 w-full h-64"></div>
          <table className="w-full our-epic-journey font-bold relative">
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
                <td>
                  Our first meet at Maranatha Christian University Bandung.
                </td>
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
                  Starting a long distance relationship again (LOL) between
                  Tanjung Pinang - Solo.
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

        <article className="flex flex-col items-center space-y-6 w-full">
          <div
            className={`text-2xl text-center tracking-widest font-bold ${cormorant.className}`}
          >
            OUR HAPPINESS
            <br />
            COLLECTION
          </div>
          <div className="bg-slate-700 w-full h-64"></div>
        </article>

        <article className="flex flex-col items-center space-y-6 w-full">
          <div
            className={`text-2xl text-center tracking-widest font-bold ${cormorant.className}`}
          >
            WEDDING WISHES
          </div>
          <div className="bg-slate-700 w-full h-64"></div>
        </article>

        <article className="flex flex-col items-center space-y-6 w-full">
          <div
            className={`text-2xl text-center tracking-widest font-bold ${cormorant.className}`}
          >
            WE APPRECIATE
            <br />
            YOUR BLESSING
          </div>
          <div className="text-sm font-bold text-center">
            Your kind blessing can be sent to this information below.
            <br />
            Also please fill your address information so that we can
            <br />
            send you a gratitude gift.
          </div>
          <button
            className="flex justify-center text-sm text-white mt-12 px-6 py-2 rounded-full cursor-pointer"
            style={{ background: "#50657F" }}
          >
            Bank Transfer
          </button>
        </article>

        <Image
          src="/homeContent/gold_line_vertical.svg"
          alt="gold_line_vertical"
          width={320}
          height={3}
          priority
        />

        <article className="flex flex-col items-center space-y-6 w-full">
          <div
            className={`text-2xl text-center tracking-widest font-bold ${cormorant.className}`}
          >
            THANK YOU
            <br />
            FOR YOUR SUPPORT
            <br />& PRAYER
          </div>
          <div className="font-bold text-center">
            Warm regards,
            <br />
            Kristianto & Stephanie
          </div>
        </article>

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
