"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function AudioPlayer({ audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoopActive, setIsLoopActive] = useState(false);

  const handleAudioToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoopToggle = () => {
    setIsLoopActive(!isLoopActive);
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
      <audio ref={audioRef} src={audioSrc} __idm_id__="4546561" />
      {audioSrc ? (
        <div className="flex flex-row items-center gap-x-3 xs:w-full">
          <Image
            className="cursor-pointer xs:w-8"
            src={
              isPlaying
                ? "/assets/others/pause.svg"
                : "/assets/others/audiobtn.svg"
            }
            alt="cursor-pointer"
            width={50}
            height={50}
            onClick={handleAudioToggle}
          />

          <input
            className={isPlaying ? "" : "hidden"}
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => {
              audioRef.current.currentTime = e.target.value;
              setCurrentTime(e.target.value);
            }}
            style={{
              backgroundSize: `${(currentTime / duration) * 100}% 100%`,
            }}
          />
        </div>
      ) : (
        ""
      )}

      <div className={isPlaying ? "" : "hidden"}>
        <p className="ml-2 text-mute-grey-200 text-sm dark:text-dark-text">
          {formatTime(currentTime)} / {formatTime(duration)}
        </p>
      </div>

      <div className={isPlaying ? "" : "hidden"}>
        <Image
          className="cursor-pointer w-8 opacity-60"
          alt="suffle"
          src="/assets/memorize/suffle.svg"
          width={50}
          height={50}
          onClick={handleLoopToggle}
        />
      </div>
    </div>
  );
}

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export default AudioPlayer;
