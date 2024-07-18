"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import CheckBadge from "./check-badge";

export default function ProgressBar() {
  const scope = useRef(null);
  const [success, setSuccess] = useState(false);
  useGSAP(
    () => {
      gsap
        .timeline({ repeat: -1 })
        .to(".dot", {
          y: 10,
          duration: 0.3,
          opacity: 0,
          stagger: 0.1,
          ease: "power1.out",
        })
        .to(
          ".dot",
          {
            y: 0,
            duration: 0.2,
            opacity: 1,
            stagger: 0.1,
            ease: "power1.out",
          },
          "=0.2",
        );

      gsap
        .timeline({ repeat: -1 })
        .to(scope.current, { opacity: 1, duration: 0.5 })
        .to(".progress-bar", {
          clipPath: "rect(0px 100% 100% 0px)",
          duration: 6,
        })
        .to(".message", {
          onStart: () => setSuccess(true),
          opacity: 1,
          duration: 0.5,
        })
        .to(scope.current, { opacity: 0, duration: 0.7 }, "=+5")
        .call(() => setSuccess(false));
    },
    { scope: scope },
  );
  return (
    <div
      className="relative flex flex-col items-center justify-center opacity-0"
      ref={scope}
    >
      <div className="progress-bar flex h-10 w-[300px] items-center justify-center bg-white">
        <p className="message flex gap-4 font-bold text-red-600 opacity-0">
          REQUISIÇÃO CONCLUÍDA
        </p>
      </div>
      {success && <CheckBadge />}
      <p
        data-success={success}
        className="relative flex justify-center text-9xl *:absolute data-[success=true]:hidden"
      >
        <span className="dot left-[37%]">.</span>
        <span className="dot">.</span>
        <span className="dot right-[37%]">.</span>
      </p>
    </div>
  );
}
