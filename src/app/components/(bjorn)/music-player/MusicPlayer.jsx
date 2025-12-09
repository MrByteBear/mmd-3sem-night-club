"use client";
// Component Styling
import playerStyle from "./MusicPlayerStyle.module.css";
// NextJS Components
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
// Images
import track1 from "@/app/assets/content-img/track1.jpg";
import track2 from "@/app/assets/content-img/track2.jpg";
import track3 from "@/app/assets/content-img/track_thumb.jpg";
import track4 from "@/app/assets/content-img/track4.jpg";
import track5 from "@/app/assets/content-img/track5.jpg";
// Icons
import {
  IoCaretForward,
  IoCaretBack,
  IoPause,
  IoShuffle,
  IoVolumeHigh,
  IoPlaySkipForward,
  IoPlaySkipBack,
} from "react-icons/io5";
import CornerElem from "../corner-elem/CornerElem";

export default function MusicPlayer() {
  const audioTracks = [
    {
      title: "Black Box Funky",
      src: "/media/black-box-funky.mp3",
      image: track1,
    },
    { title: "Euphoria", src: "/media/euphoria.mp3", image: track2 },
    { title: "Futuristic", src: "/media/music-comp-future.mp3", image: track3 },
    {
      title: "Fashion Red Tape",
      src: "/media/fashion-red-tape.mp3",
      image: track4,
    },
    {
      title: "Trap Music",
      src: "/media/music-comp-trap.mp3",
      image: track5,
    },
  ];

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [shuffle, setShuffle] = useState(false);

  const audioRef = useRef(null);

  return (
    <div className="grid">
      <div className="flex items-center gap-x-4">
        <Image
          src="/media/madbars.gif"
          alt="text"
          width={232}
          height={192}
          className="max-lg:hidden"
        />
        <div className="flex-1">
          <p>{audioTracks[currentTrack].title}</p>
          <input
            type="range"
            min="0"
            max="100"
            className={`${playerStyle.slider} mt-8 h-4 w-full cursor-pointer appearance-none`}
          />
          <div className="mt-4 grid grid-cols-3 items-center max-lg:mt-8 max-lg:grid-flow-row max-lg:grid-cols-none max-lg:justify-items-center max-lg:gap-y-8">
            <span className="text-lg">0:00 / 03:38</span>
            <div className="flex gap-x-4 justify-self-center">
              <button type="button" className="cursor-pointer">
                <IoPlaySkipBack className="size-8" />
              </button>
              <button
                type="button"
                className="border-foreground grid cursor-pointer place-items-center rounded-full border-4 border-solid p-1"
              >
                <IoCaretForward className="size-8" />
              </button>
              <button type="button" className="cursor-pointer">
                <IoPlaySkipForward className="size-8" />
              </button>
              <button type="button" className="cursor-pointer">
                <IoShuffle className="size-8" />
              </button>
            </div>
            <div className="flex items-center gap-x-4 justify-self-end">
              <IoVolumeHigh className="size-8" />
              <input
                type="range"
                min="0"
                max="100"
                className={`${playerStyle.slider} h-4 w-40 cursor-pointer appearance-none`}
              />
            </div>
          </div>
        </div>

        <audio ref={audioRef} src={audioTracks[currentTrack].src} />
      </div>
      <div className="flex cursor-pointer max-lg:hidden">
        {audioTracks.map((img) => (
          <div key={img.title} className="relative">
            <CornerElem topLeft={true} className="w-15" />
            <div className="grid place-items-center *:[grid-area:1/1]">
              <Image src={img.image} alt={img.title} />
              <div className="border-accent text-accent grid cursor-pointer place-items-center rounded-full border-4 border-solid p-1">
                <IoCaretForward className="size-8" />
              </div>
              <span className="tracking-2pct bg-background w-full self-end py-3 text-center text-lg font-medium">
                {img.title}
              </span>
            </div>
            <CornerElem bottomRight={true} className="w-15" />
          </div>
        ))}
      </div>
      <div className="hidden max-lg:cursor-pointer max-lg:mt-8 max-lg:grid max-lg:place-items-center max-lg:gap-y-8">
        <div className="relative">
          <CornerElem topLeft={true} className="w-15" />
          <div className="grid place-items-center *:[grid-area:1/1]">
            <Image src={audioTracks[1].image} alt={audioTracks[1].title} />
            <div className="border-accent text-accent grid cursor-pointer place-self-center rounded-full border-4 border-solid p-1">
              <IoCaretForward className="size-8" />
            </div>
            <span className="tracking-2pct bg-background w-full self-end py-3 text-center text-lg font-medium">
              {audioTracks[1].title}
            </span>
          </div>
          <CornerElem bottomRight={true} className="w-15" />
        </div>
        <div className="flex gap-x-3">
          <button
            type="button"
            className="border-foreground hover:text-background hover:bg-foreground grid place-items-center border-2 border-solid p-3"
          >
            <IoCaretBack className="size-8" />
          </button>
          <button
            type="button"
            className="border-foreground hover:text-background hover:bg-foreground grid place-items-center border-2 border-solid p-3"
          >
            <IoCaretForward className="size-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
