"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Check() {
  const scope = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({ repeat: -1 })
        .from(".stroke", { x: 10, opacity: 0, duration: 0.4, stagger: 0.1 })
        .to(".check", {
          duration: 0.7,
          stagger: 0.3,
          strokeDashoffset: 0,
          ease: "power1.out",
          scale: 1.1,
        })
        .to(
          ".check",
          {
            duration: 0.5,
            stagger: 0.3,
            ease: "power1.out",
            scale: 1,
          },
          "=-0.2",
        )
        .to(scope.current, { opacity: 0, suration: 0.5 }, "=+3");
    },
    { scope: scope },
  );

  return (
    <svg
      ref={scope}
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="overflow-visible"
    >
      <path className="check" d="m3 7 2 2 4-4" />
      <path className="check" d="m3 17 2 2 4-4" />
      <path className="stroke" d="M13 6h8" />
      <path className="stroke" d="M13 12h8" />
      <path className="stroke" d="M13 18h8" />
    </svg>
  );
}
