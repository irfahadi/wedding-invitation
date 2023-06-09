import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function Music() {
  const [playing, setPlaying] = useLocalStorage("autoPlay", true);

  const toggleAudio = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    const audioEl: any = document.getElementsByClassName("audio-element")[0];

    if (playing) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  }, [playing]);

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
      <audio className="audio-element">
        <source src="/looping.mp3"></source>
      </audio>
    </>
  );
}
