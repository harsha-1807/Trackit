"use client";
import { TypewriterEffectSmooth } from "./ui/typerwriter-effect";

export function TypewriterEffectSmooth1() {
  const words = [
    {
      text: "Unleash",
      className: "text-[#000] dark:text-[#000]",
    },
    {
      text: " the",
      className: "text-[#000] dark:text-[#000]",
    },
    {
      text: "Power",
      className: "text-[#000] dark:text-[#000]",
    },
    {
      text: "of",
      className: "text-[#000] dark:text-[#000]",
    },
    {
      text: "Track It",
      className: "text-[#905DE8] dark:text-[#905DE8]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
