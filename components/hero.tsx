"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Hero() {
  const scope = useRef(null);
  useGSAP(
    () => {
      gsap.to(".text-bg", {
        backgroundPositionX: -400,
        duration: 5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap
        .timeline({ repeat: -1 })
        .to(".hero-chars", {
          rotate: 360,
          opacity: 1,
          duration: 2,
          stagger: 0.1,
          ease: "bounce.out",
        })
        .to(
          ".css",
          {
            opacity: 1,
            duration: 2,
          },
          "-=2",
        )
        .to(".podcodar", {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
        })
        .to(
          ".hero-text, .podcodar",
          { opacity: 0, duration: 2, ease: "bounce.inOut" },
          "=+3",
        );
    },
    { scope: scope },
  );

  return (
    <section
      ref={scope}
      className="max-w-screen flex h-screen flex-col items-center justify-center overflow-hidden bg-blue-950 py-6 text-white"
    >
      <p className="podcodar relative -translate-y-40 opacity-0">
        {" ==> PODCODAR <=="}
      </p>
      <div className="hero-text flex py-10 text-3xl sm:text-4xl md:text-5xl lg:text-8xl">
        {".animação-com-".split("").map((c, i) => (
          <div key={i} className="hero-chars opacity-0">
            {c}
          </div>
        ))}
        <span className="text-bg css bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 bg-[length:400%] bg-clip-text font-bold text-transparent opacity-0">
          CSS
        </span>
      </div>
    </section>
  );
}
