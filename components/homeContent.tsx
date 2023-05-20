import Image from "next/image";

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
      <article className="flex flex-col items-center justify-center z-10 space-y-4 lg:space-y-8 py-20 lg:py-40 px-4 lg:px-8">
        <Image
          src="/monogram.svg"
          alt="monogram"
          width={125}
          height={125}
          priority
        />
        <article className="flex flex-col items-center space-y-4 w-full">
          <div className="text-center text-sm font-bold">
            “Love never gives up, never loses faith, is always hopeful and
            endures through every circumstance.”
            <span className="block">- Corinthians 13:7 -</span>
          </div>
        </article>
        <article className="flex flex-col items-center space-y-4 w-full">
          <div className="rounded-full bg-slate-700 w-40 h-40"></div>
          <div className="uppercase font-semibold tracking-widest text-xl">
            Kristianto 陈俊辉
          </div>
          <div className="font-semibold text-sm">
            The son of Mr. Amran & Mrs. Sucyati (+)
          </div>
          <div className="flex space-x-2">
            <div className="rounded-full bg-slate-700 w-12 h-12"></div>
            <div className="rounded-full bg-slate-700 w-12 h-12"></div>
          </div>
        </article>
        <article className="flex flex-col items-center space-y-4 w-full">
          <div className="rounded-full bg-slate-700 w-40 h-40"></div>
          <div className="uppercase font-semibold tracking-widest text-xl">
            Stephanie 林友爱
          </div>
          <div className="font-semibold text-sm">
            The daughter of Mr. Liem Swie Lin & Mrs. Tan Fei Tjin
          </div>
          <div className="flex space-x-2">
            <div className="rounded-full bg-slate-700 w-12 h-12"></div>
            <div className="rounded-full bg-slate-700 w-12 h-12"></div>
          </div>
        </article>
        <article className="flex flex-col items-center space-y-4 w-full">
          <div className="text-xl text-center tracking tracking-widest font-bold">
            SAVE THE DATE & CELEBRATE WITH US
          </div>
          <div className="text-xl text-center tracking tracking-widest font-bold">
            Saturday, July 8th 2023
          </div>
          <div className="bg-slate-700 w-full h-64"></div>
          <button
            className="flex justify-center text-sm text-white mt-12 px-6 py-2 rounded-full cursor-pointer"
            style={{ background: "#50657F" }}
          >
            Remind Me!
          </button>
        </article>
        <article className="flex flex-col items-center space-y-4 w-full">
          <div className="text-xl text-center tracking tracking-widest font-bold">
            WEDDING RECEPTION
          </div>
          <div className="bg-slate-700 w-full h-64"></div>
          <div className="text-center font-bold">
            Saturday, July 8th 2023 <br />
            6 PM GMT +7 / 18:00 WIB <br />
            Ramada Suites By Wyndham Solo <br />
            The Warmest Garden
          </div>
          <button
            className="flex justify-center text-sm text-white mt-12 px-6 py-2 rounded-full cursor-pointer"
            style={{ background: "#50657F" }}
          >
            Map Location
          </button>
          <div className="text-center text-sm font-bold">
            It’s an outdoor wedding party, so we would recommend you to wear
            your comfortable party outfit and shoes.
          </div>
          <div className="flex justify-around w-full">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-slate-700 w-12 h-12"></div>
              <div className="text-sm text-center font-bold">
                No
                <br />
                Stilleto
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-slate-700 w-12 h-12"></div>
              <div className="text-sm text-center font-bold">
                Comfortable
                <br />
                party outfit
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-slate-700 w-12 h-12"></div>
              <div className="text-sm text-center font-bold">
                Valid for
                <br />2 person
              </div>
            </div>
          </div>
        </article>
        <article className="flex flex-col items-center space-y-4 w-full">
          <div className="text-center text-xl font-bold">
            “I love you more than coffee, but please don’t make me prove it. ”
          </div>
          <div className="text-sm font-bold">Elizabeth Evans</div>
        </article>
        <article className="flex flex-col items-center space-y-4 w-full">
          <div className="text-xl text-center tracking tracking-widest font-bold">
            OUR EPIC JOURNEY
          </div>
          <div className="bg-slate-700 w-full h-64"></div>
        </article>
        <article className="flex flex-col items-center space-y-4 w-full">
          <div className="text-xl text-center tracking tracking-widest font-bold">
            OUR HAPPINESS COLLECTION
          </div>
          <div className="bg-slate-700 w-full h-64"></div>
        </article>
        <article className="flex flex-col items-center space-y-4 w-full">
          <div className="text-xl text-center tracking tracking-widest font-bold">
            WEDDING WISHES
          </div>
          <div className="bg-slate-700 w-full h-64"></div>
        </article>
        <article className="flex flex-col items-center space-y-4 w-full">
          <div className="text-xl text-center tracking tracking-widest font-bold">
            WE APPRECIATE
            <br />
            YOUR BLESSING
          </div>
          <div className="text-sm font-bold text-center">
            Your kind blessing can be sent to this information below. Also
            please fill your address information so that we can send you a
            gratitude gift.
          </div>
          <button
            className="flex justify-center text-sm text-white mt-12 px-6 py-2 rounded-full cursor-pointer"
            style={{ background: "#50657F" }}
          >
            Send Blessing Gift
          </button>
        </article>
        <article className="flex flex-col items-center space-y-4 w-full">
          <div className="text-xl text-center tracking tracking-widest font-bold">
            THANK YOU
            <br />
            FOR YOUR SUPPORT
            <br />& PRAYER
          </div>
          <div className="text-sm font-bold text-center">
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
      </article>
    </section>
  );
}
