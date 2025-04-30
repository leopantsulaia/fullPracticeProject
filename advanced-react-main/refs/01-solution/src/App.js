import React, { useRef, useState } from "react";

export default function VideoPlayer() {
  const ref = useRef();
  const [isPlaying, setPlaying] = useState(false);

  function playVideo() {
    ref.current.play();
  }

  function pauseVideo() {
    ref.current.pause();
  }

  return (
    <div className="max-w-[500px] space-y-4 p-8 mx-auto">
      <h1 className="text-center font-bold text-3xl">Video Player</h1>
      <video
        ref={ref}
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="flex justify-between">
        <button onClick={pauseVideo} className="text-orange-500 font-semibold">
          Pause
        </button>
        <div>{isPlaying ? "Playing..." : "Paused"}</div>
        <button onClick={playVideo} className="text-indigo-500 font-semibold">
          Play
        </button>
      </div>
    </div>
  );
}
