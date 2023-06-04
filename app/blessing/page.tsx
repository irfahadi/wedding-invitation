"use client";
import Title from "@/components/title";
import Toast from "@/components/toast";
import Image from "next/image";
import { toast } from "react-hot-toast";
import {
  FaChevronLeft,
  FaLandmark,
  FaMobile,
  FaTruck,
  FaUser,
} from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";

export default function BlessingPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbxGQDEZ63r9SAxvJmI1i1AnDykScrl1p2_8JTWUKc5xM-9xModZEkMXnpU28LAnHwab/exec",
      {
        method: "POST",
        body: new FormData(formRef.current!),
      }
    )
      .then((r) => {
        setLoading(false);
        formRef.current?.reset();
        toast.success("Thank You for your blessing!");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <>
      <Toast />
      <section className="flex flex-col min-h-screen max-w-screen-sm items-center justify-center bg-white mx-auto relative shadow-lg">
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
        <Link
          className="absolute left-4 top-4 flex text-sm text-white py-2 px-4 space-x-2 rounded-full justify-center items-center cursor-pointer"
          style={{ background: "#50657F" }}
          href={"/"}
        >
          <FaChevronLeft size={16} />
          <span>Back</span>
        </Link>

        <article className="flex flex-col items-center justify-center z-10 space-y-8">
          <Title className="uppercase">
            We Appreciate
            <br />
            Your Blessing
          </Title>

          <div className="text-sm">You can send the blessing gift to</div>
          <div className="text-lg font-normal tracking-widest">
            BCA | Stephanie | 2820037114
          </div>

          <button
            className="flex justify-center text-sm text-white px-6 py-2 rounded-full cursor-pointer"
            style={{ background: "#50657F" }}
            onClick={() => toast.success("Copied!")}
          >
            <CopyToClipboard text={"2820037114"}>
              <span>Copy Account Number</span>
            </CopyToClipboard>
          </button>

          <form
            className="flex flex-col w-full space-y-4"
            method="post"
            name="google-sheet"
            ref={formRef}
            onSubmit={onFormSubmit}
          >
            <div
              className="flex justify-center items-center px-2 space-x-2 border-b"
              style={{ borderColor: "#262262" }}
            >
              <FaLandmark />
              <input
                name="bank_account_name"
                className="p-2 w-full bg-transparent outline-none"
                placeholder="Bank Account Name"
                autoFocus
                required
              />
            </div>
            <div
              className="flex justify-center items-center px-2 space-x-2 border-b"
              style={{ borderColor: "#262262" }}
            >
              <FaUser />
              <input
                name="name"
                className="p-2 w-full bg-transparent outline-none"
                placeholder="Name (for shipping detail)"
                required
              />
            </div>
            <div
              className="flex justify-center items-center px-2 space-x-2 border-b"
              style={{ borderColor: "#262262" }}
            >
              <FaMobile />
              <input
                name="phone_number"
                className="p-2 w-full bg-transparent outline-none"
                placeholder="Phone Number (for shipping detail)"
                type="tel"
                required
              />
            </div>
            <div
              className="flex justify-center px-2 space-x-2 border-b"
              style={{ borderColor: "#262262" }}
            >
              <FaTruck className="mt-3" />
              <textarea
                name="shipping_address"
                className="p-2 w-full bg-transparent outline-none"
                placeholder="Shipping Address"
                rows={2}
                required
              />
            </div>
          </form>

          <button
            className="flex justify-center text-sm text-white mt-12 px-6 py-2 rounded-full cursor-pointer relative"
            style={{
              background: loading ? "" : "#50657F",
              color: loading ? "#50657F" : "",
              border: loading ? "1px #50657F solid" : "",
              fontWeight: loading ? "normal" : "light",
            }}
            type="button"
            disabled={loading}
            onClick={() => formRef.current?.requestSubmit()}
          >
            {loading ? "Loading" : "Confirm"}
            {loading && (
              <span className="absolute right-0 top-0 flex h-3 w-3">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: "#50657F" }}
                />
                <span
                  className="relative inline-flex rounded-full h-3 w-3"
                  style={{ backgroundColor: "#50657F" }}
                />
              </span>
            )}
          </button>
        </article>
      </section>
    </>
  );
}
