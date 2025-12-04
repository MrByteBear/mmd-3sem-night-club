"use client";
import Image from "next/image";
import { useState, useRef } from "react";
// Client-Side Data Fetching
import DataFetcherClient from "@/app/components/(bjorn)/client-fetch/ClientFetch";
// Asset Imports
import SliderBg from "@/app/assets/bg/slider_bg_overlay.png";

function formatDate(string) {
  const date = new Date(string);

  const dateFormatted = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  const timeFormatted = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return { date: dateFormatted, time: timeFormatted };
}

function GalleryContent({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // useRef returns a mutable reference object that persists across re-renders.
  // It is better than e.g. document.getElementById, because, due to how React works,
  // the ref starts as "null", but react automatically sets e.g. "ref.current" -
  // - to the DOM element after mount (render).
  const scrollingContainer = useRef(null);

  const { date, time } = formatDate(data[currentIndex]?.date);
  const currentIndexDate = formatDate(data[currentIndex]?.date);
  const nextIndexDate = currentIndex + 1 < data.length ? formatDate(data[currentIndex + 1]?.date) : null;

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const slideWidth = e.target.offsetWidth;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    scrollingContainer.current.touchDown = touchDown;
  };

  const handleTouchMove = (e) => {
    if (!scrollingContainer.current.touchDown) return;
    const currentTouch = e.touches[0].clientX;
    const diff = scrollingContainer.current.touchDown - currentTouch;

    if (diff > 50) {
      setCurrentIndex((prev) => Math.min(prev + 1, data.length - 1));
      scrollingContainer.current.touchDown = null;
    } else if (diff < -50) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      scrollingContainer.current.touchDown = null;
    }
  };

  const handleKeyDown = (e) => {
  if (e.key === 'ArrowLeft') {
    setCurrentIndex((prev) => Math.max(prev - 2, 0));
  } else if (e.key === 'ArrowRight') {
    setCurrentIndex((prev) => Math.min(prev + 2, data.length - 2));
  }
};

  const isDesktopActive = (btnIndex) => {
    const startIndex = btnIndex * 2;
    return currentIndex === startIndex || currentIndex === startIndex + 1;
  };

  const isMobileActive = (btnIndex) => {
    return currentIndex === btnIndex;
  };

  return (
      <div className="grid place-items-center gap-y-16 px-4">
        <div
          ref={scrollingContainer}
          className="mt-8 flex w-full snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth"
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="flex gap-8 max-lg:hidden">
            <div className="snap-start">
              <Image
                src={data[currentIndex]?.asset?.url || "/placeholder.webp"}
                alt={data[currentIndex]?.title || "Placeholder img of cat"}
                width={700}
                height={500}
                unoptimized
              />
              <div className="flex gap-x-4 *:text-xl *:font-medium bg-accent py-2 px-6">
                <p>{currentIndexDate.date}</p>
                <p>{currentIndexDate.time}</p>
                <p>{data[currentIndex]?.location}</p>
              </div>
            </div>

            {currentIndex + 1 < data.length && (
              <div className="snap-start">
                <Image
                  src={data[currentIndex + 1]?.asset?.url || "/placeholder.webp"}
                  alt={data[currentIndex + 1]?.title || "Placeholder img of cat"}
                  width={700}
                  height={500}
                  unoptimized
                />
                <div className="flex gap-x-4 *:text-xl *:font-medium bg-accent py-2 px-6">
                  <p>{nextIndexDate.date}</p>
                  <p>{nextIndexDate.time}</p>
                  <p>{data[currentIndex + 1]?.location}</p>
                </div>
              </div>
            )}
          </div>
          <div className="lg:hidden">
            <div className="snap-start">
              <Image
                src={data[currentIndex]?.asset?.url || "/placeholder.webp"}
                alt={data[currentIndex]?.title || "Placeholder img of cat"}
                width={350}
                height={250}
                unoptimized
              />
              <div className="flex gap-x-4 *:text-base *:font-medium bg-accent py-2 px-6">
                <p>{date}</p>
                <p>{time}</p>
                <p>{data[currentIndex]?.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-4 max-lg:hidden">
            {[0, 1, 2].map((btnIndex) => (
              <button
                key={btnIndex}
                type="button"
                onClick={() => goToSlide(btnIndex * 2)}
                className={`h-5 w-5 transition-colors ${
                  isDesktopActive(btnIndex) ? "bg-accent" : "bg-foreground"
                }`}
                aria-label={`Go to slide ${btnIndex + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-4 lg:hidden">
            {data.slice(0, 6).map((_, btnIndex) => (
              <button
                key={btnIndex}
                type="button"
                onClick={() => goToSlide(btnIndex)}
                className={`h-5 w-5 transition-colors ${
                  isMobileActive(btnIndex) ? "bg-accent" : "bg-foreground"
                }`}
                aria-label={`Go to slide ${btnIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
  );
}

export default function SlidingGallery() {
  return (
    <DataFetcherClient endpoint="/events">
      {(data) => <GalleryContent data={data} />}
    </DataFetcherClient>
  );
}
