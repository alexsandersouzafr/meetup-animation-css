"use client";

import { useRef } from "react";
import Abas from "./abas";
import Accordeons from "./accordeons";
import Check from "./check";
import ProgressBar from "./progress-bar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const illustrations = [
  <Check key={1} />,
  <Abas key={2} />,
  <ProgressBar key={3} />,
  <Accordeons key={4} />,
];
gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  const scope = useRef(null);
  const grow = {
    scale: 1.5,
    rotate: -2,
    borderColor: "#FFFFFF",
    backgrondColor: "#dc2626",
  };
  const shrink = {
    scale: 1,
    rotate: 0,
    borderColor: "#dc2626",
    backgrondColor: "#dc262600",
  };

  useGSAP(
    () => {
      gsap
        .timeline({
          defaults: { duration: 0.5, ease: "power1.out" },
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "=+8000",
            pin: true,
            scrub: true,
            snap: "labels",
            // markers: true,
          },
        })
        .to(".item1", grow)
        .addLabel("item1")
        .to(".item1", shrink)
        .to(".item2", grow)
        .to(".illustration", { yPercent: -100 }, "<")
        .addLabel("item2")
        .to(".item2", shrink)
        .to(".item3", grow)
        .to(".illustration", { yPercent: -200 }, "<")
        .addLabel("item3")
        .to(".item3", shrink)
        .to(".item4", grow)
        .to(".illustration", { yPercent: -300 }, "<")
        .addLabel("item4")
        .to(".item4", shrink);
    },
    { scope: scope },
  );

  return (
    <div
      ref={scope}
      className="flex h-screen items-center justify-center gap-16 bg-red-600 text-white"
    >
      <div className="flex h-screen flex-col justify-center">
        <h1 className="text-5xl font-bold">POR QUE ANIMAR?</h1>
        <ul className="list-disc text-2xl *:w-fit *:origin-[20%_50%] *:rounded-xl *:border *:border-red-600 *:bg-transparent *:px-2 *:py-4">
          <li className="item1 z-40">
            Ponto de contato entre o mundo virtual e a realidade
          </li>
          <li className="item2">Arquitetura de informações </li>
          <li className="item3"> Estados da UI</li>
          <li className="item4">Experiência mais suave e agradável</li>
        </ul>
      </div>
      <div className="illustration z-50 flex h-screen flex-col gap-0 *:shrink-0">
        {illustrations.map((item, i) => (
          <div
            key={i}
            className={cn("flex h-screen items-center justify-center")}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
