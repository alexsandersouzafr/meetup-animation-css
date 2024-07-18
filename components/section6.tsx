"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const tools = [
  "CSS",
  "DOM",
  "CCS Tricks",
  "MDN Web Docs",
  "Tailwind",
  "GSAP",
  "P5",
];

export default function Section6() {
  const scope = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: scope.current,
            scrub: true,
            pin: true,
            end: "=+4000",
          },
        })
        .from(".card", { opacity: 0, y: -100, duration: 0.3, stagger: 0.1 })
        .from(".tools", { opacity: 0, x: 50, duration: 0.3, stagger: 0.1 })
        .addLabel("end");
    },
    { scope: scope },
  );
  return (
    <section
      ref={scope}
      className="flex h-screen w-full items-center bg-emerald-700 text-white"
    >
      <div className="container flex flex-col items-start justify-center gap-8 text-xl">
        <h1 className="card w-full text-5xl">FERRAMENTAS</h1>
        <div className="tools flex w-full flex-wrap gap-16">
          {tools.map((item, i) => (
            <div
              key={i}
              className="flex w-96 items-center justify-center rounded-xl border border-white p-16 text-2xl transition-all duration-500 hover:scale-110 hover:bg-emerald-950 hover:text-white hover:shadow-2xl"
            >
              <p className="tools">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
