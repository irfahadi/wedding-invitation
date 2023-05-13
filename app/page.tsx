import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Image
        src="/monogram.svg"
        alt="monogram"
        width={300}
        height={300}
        priority
      />
      <p className="flex w-full justify-center text-lg mt-10">
        To our dearest,
      </p>
      <p
        className="flex w-full justify-center items-center text-lg mt-4"
        style={{ height: 90 }}
      >
        <Image
          className="fixed"
          src="/gold_frame.svg"
          alt="gold_frame"
          width={350}
          height={90}
          priority
        />
        Mr. Lorem Ipsum & Partner
      </p>
      <p className="flex w-full justify-center text-center text-lg mt-4">
        You are invited to our <br />
        Wedding Ceremony
      </p>
      <button
        className="flex justify-center text-sm text-white mt-10 px-6 py-2 rounded-full cursor-pointer"
        style={{ background: "#50657F" }}
      >
        Open Invitation
      </button>
    </main>
  );
}
