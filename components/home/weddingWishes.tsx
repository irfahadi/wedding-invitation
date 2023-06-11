import Title from "../title";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Papa from "papaparse";
import { useCookieState } from "use-cookie-state";
import TransitionWrapper from "../transitionWrapper";

export default function WeddingWishes({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [params] = useCookieState("params", undefined);
  const [name, setName] = useState<string>();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/1l2-Z12GPgk6iRrQyXnrDzXYC5XELzHJi_XbyHnshYrw/pub?output=csv",
      {
        download: true,
        header: true,
        complete: ({ data }: { data: any[] }) => {
          setData(data.reverse());
        },
      }
    );
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(params);
    setName(urlParams.get("to") || "");
  }, [params]);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const body = new FormData(formRef.current!);

    fetch(
      "https://script.google.com/macros/s/AKfycbx_OxjIUFc65jDR12ZNpgy-YgR24OaIVXry-Y17wAiuxO2DfwrEEBHy1irwOsfk4xNo/exec",
      { method: "POST", body }
    )
      .then(() => {
        setLoading(false);
        formRef.current?.reset();
        toast.success("Thank You for your wishes!");

        const result: any = {};
        body.forEach((value, key) => {
          result[key] = value;
        });

        if (data) {
          setData([result, ...data]);
        } else {
          setData([result]);
        }
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <>
      <TransitionWrapper id="wedding_wishes_form" className={className}>
        {children || <Title>WEDDING WISHES</Title>}

        <div className="text-center text-sm font-normal">
          Your wishes are our blessing to start a<br />
          new awesome journey ahead!
        </div>

        <form
          className="w-3/4"
          method="post"
          name="google-sheet"
          ref={formRef}
          onSubmit={onFormSubmit}
        >
          <div
            className="flex items-center justify-center px-2 space-x-2 border-b"
            style={{ borderColor: "#E9D3AE" }}
          >
            <FaUser style={{ color: "#E9D3AE" }} />
            <input
              name="name"
              className="p-2 w-full bg-transparent outline-none"
              placeholder="Name"
              required
              defaultValue={name}
            />
          </div>

          <div
            className="flex justify-center px-2 space-x-2 border-b"
            style={{ borderColor: "#E9D3AE" }}
          >
            <FaPencilAlt className="mt-3" style={{ color: "#E9D3AE" }} />
            <textarea
              name="wishes"
              className="p-2 w-full bg-transparent outline-none"
              placeholder="Type your wishes"
              rows={3}
              required
              style={{ resize: "none" }}
            />
          </div>
          <button
            className="flex justify-center text-sm text-white mx-auto mt-6 mb-6 px-6 py-2 rounded-full cursor-pointer relative"
            style={{
              background: loading ? "" : "#50657F",
              color: loading ? "#50657F" : "",
              border: loading ? "1px #50657F solid" : "",
              fontWeight: loading ? "normal" : "light",
            }}
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading" : "Send"}
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
        </form>
      </TransitionWrapper>
      {/* </form> */}
      <TransitionWrapper
        id="wedding_wishes_list"
        className="flex flex-col items-center space-y-4 w-3/4 mx-auto"
        style={{
          maxHeight: 500,
          overflowY: "scroll",
        }}
      >
        {data?.map((d: any, i) => {
          return (
            <div key={i} className="flex flex-col space-y-2 text-sm w-full">
              <div className="flex items-center space-x-2 font-normal">
                <FaUser style={{ color: "#E9D3AE" }} />
                <span>{d.name}</span>
              </div>
              <span className="text-justify">{d.wishes}</span>
            </div>
          );
        })}
      </TransitionWrapper>
    </>
  );
}
