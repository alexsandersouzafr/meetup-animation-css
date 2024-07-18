"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function CheckBadge() {
  const scope = useRef(null);
  useGSAP(
    () => {
      gsap.to(".badge", { rotate: 360, duration: 12, repeat: -1 });
    },
    { scope: scope },
  );
  return (
    <svg
      ref={scope}
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="absolute top-16"
    >
      <path
        className="badge origin-[40.8%_40.8%]"
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
