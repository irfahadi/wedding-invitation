import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function Music() {
  const [playing, setPlaying] = useLocalStorage("autoPlay", true);
  const [firstTimeInteract, setFirstTimeInteract] = useState(false);

  const toggleAudio = () => {
    setPlaying(!playing);
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

      if (playing && audioEl.paused) {
        audioEl.play();
      } else if (!playing && !audioEl.paused) {
        audioEl.pause();
      }
    };

    console.log("trigger", firstTimeInteract, playing);

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
          {playing ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      <audio className="audio-element" autoPlay loop>
        <source src="/looping.mp3"></source>
      </audio>
    </>
  );
}
