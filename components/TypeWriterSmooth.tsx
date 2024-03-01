"use client";
import { TypewriterEffectSmooth } from "./ui/typerwriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Your",
    },
    {
      text: "Smart",
    },
    {
      text: "Shopping",
    },
    {
      text: "Starts",
    },
    {
      text: "Here.",
      className: "text-[#905DE8] dark:text-[#905DE8]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
