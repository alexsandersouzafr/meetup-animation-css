"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const propriedades = [
  "name",
  "duration",
  "timing-function",
  "delay",
  "iteration-count",
  "direction",
  "fill-mode",
  "play-state",
];

export default function Section5() {
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
            snap: "labels",
          },
        })
        .from(".card", { opacity: 0, y: 100, duration: 0.3, stagger: 0.5 })
        .from(".card>*", { opacity: 0, x: -50, duration: 0.3, stagger: 0.5 })
        .addLabel("end");
    },
    { scope: scope },
  );
  return (
    <section
      ref={scope}
      className="bg-blue-950-500 flex h-screen w-full items-center bg-yellow-600 text-black"
    >
      <div className="container flex flex-col items-start justify-center gap-8 text-xl">
        <h1 className="card text-5xl">ANIMATION</h1>
        <div className="card flex flex-col gap-4">
          <p>
            Te permite criar uma sequenciamento de estilos através de keyframes,
            te dando mais controle comparado à uma transição.
          </p>{" "}
          <p className="w-fit rounded-xl bg-zinc-900 p-4 text-red-500">
            {
              "animation: <name> <duration> <timing-function> <delay> <interaction-count> <direction> <fill-mode> <play-state>"
            }
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-16">
          <ul className="card list-disc space-y-6 pl-8 text-4xl">
            {propriedades.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="card ball" />
        </div>
      </div>
    </section>
  );
}
