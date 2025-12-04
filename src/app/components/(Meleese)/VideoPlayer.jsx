"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
  "/media/video-crowd.mp4",
  "/media/video-dj-crowd1.mp4",
  "/media/video-dj-crowd-2.mp4",
];

export default function VideoPlayer() {
  const [index, setIndex] = useState(0);

  function prevVideo() {
    setIndex((i) => (i === 0 ? videos.length - 1 : i - 1));
  }

  function nextVideo() {
    setIndex((i) => (i === videos.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="flex flex-col items-center gap-4">

        {/* Needs Full bleed when screen is small */}

      <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-lg sm:col-start-1 sm:col-end-4">
        <video
          key={index}         
          src={videos[index]}
          controls
          autoPlay
          className="w-full h-auto"
        />
      </div>

      <div className="flex items-center gap-6 text-white">
        <button
          onClick={prevVideo}
          className="p-3  border border-white hover:bg-white hover:text-black transition"
        >
          <FaChevronLeft size={15} />
        </button>

        <button
          onClick={nextVideo}
          className="p-3  border border-white hover:bg-white hover:text-black transition"
        >
          <FaChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
