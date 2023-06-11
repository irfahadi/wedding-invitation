import { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { useCookieState } from "use-cookie-state";

export default function Music() {
  const [playing, setPlaying] = useCookieState<string>("autoPlay", "t");
  const [firstTimeInteract, setFirstTimeInteract] = useState(false);

  const toggleAudio = () => {
    setPlaying(playing === "t" ? "f" : "t");
  };

  useEffect(() => {
    const triggerFirstTimeInteract = () => {
      if (!firstTimeInteract) {
        setFirstTimeInteract(true);
        document.removeEventListener("mousedown", triggerFirstTimeInteract);
      }
    };

    document.addEventListener("mousedown", triggerFirstTimeInteract);

    return () => {
      document.removeEventListener("mousedown", triggerFirstTimeInteract);
    };
  }, []);

  useEffect(() => {
    const playTrigger = () => {
      const audioEl = document.getElementsByClassName(
        "audio-element"
      )[0] as HTMLAudioElement;

      if (playing === "t" && audioEl.paused) {
        audioEl.play();
      } else if (playing === "f" && !audioEl.paused) {
        audioEl.pause();
      }
    };

    if (firstTimeInteract) {
      playTrigger();
    }
  }, [playing, firstTimeInteract]);

  return (
    <>
      <div className="fixed top-8 right-8">
        <button
          className="p-2 rounded-full shadow-lg"
          style={{ color: "#262262", background: "white" }}
          onClick={toggleAudio}
        >
          {playing === "f" ? <FaPlay /> : <FaPause />}
        </button>
      </div>
      <audio className="audio-element" autoPlay loop>
        <source src="/looping.mp3"></source>
      </audio>
    </>
  );
}
