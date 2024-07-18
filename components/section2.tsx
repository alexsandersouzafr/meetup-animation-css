"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Section2() {
  const scope = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({ repeat: -1, repeatDelay: 2 })
        .to(".square1", { duration: 3, xPercent: 600 })
        .to(".square2", { duration: 5, xPercent: 600 }, "<")
        .to(".square3", { duration: 10, xPercent: 600 }, "<")
        .to(".square1, .square2, .square3", { duration: 1, xPercent: 0 });
      gsap
        .timeline({ repeat: -1, repeatDelay: 2 })
        .to(".square4", { duration: 1, delay: 1, xPercent: 600 })
        .to(".square5", { duration: 1, delay: 3, xPercent: 600 }, "<")
        .to(".square6", { duration: 1, delay: 5, xPercent: 600 }, "<")
        .to(".square4, .square5, .square6", { duration: 1, xPercent: 0 });
      gsap
        .timeline({ repeat: -1, repeatDelay: 2 })
        .to(".square7", { duration: 2, ease: "power1.in", xPercent: 200 })
        .to(".square8", { duration: 2, ease: "power1.out", xPercent: 200 }, "<")
        .to(".square9", { duration: 2, ease: "bounce.out", xPercent: 200 }, "<")
        .to(
          ".square7, .square8, .square9",
          { duration: 1, xPercent: 0 },
          "=+2",
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: scope.current,
            scrub: true,
            pin: true,
            end: "=+2000",
            snap: "labels",
          },
        })
        .from(".card", { opacity: 0, y: -100, duration: 1, stagger: 0.3 })
        .addLabel("end");
    },
    { scope: scope },
  );
  return (
    <section
      ref={scope}
      className="flex h-screen w-full items-center bg-green-600 text-white"
    >
      <div className="container flex flex-col items-start justify-center gap-16">
        <h1 className="card text-5xl">PROPRIEDADES FUNDAMENTAIS</h1>
        <div className="grid w-full grid-cols-3 gap-16 *:grid *:grid-rows-3 *:gap-1 *:rounded-xl *:border *:border-white *:p-8">
          <div className="card">
            <h1 className="text-7xl font-bold">
              DURAÇÃO
              <br />
            </h1>
            <p className="text-xl">
              Tempo de duração de uma iteração ou transição.
            </p>
            <div className="flex flex-col gap-2 text-green-950 *:flex *:items-center *:justify-center">
              <div className="square1 size-[50px] bg-white">3s</div>
              <div className="square2 size-[50px] bg-white">5s</div>
              <div className="square3 size-[50px] bg-white">10s</div>
            </div>
          </div>
          <div className="card">
            <h1 className="text-7xl font-bold">DELAY</h1>
            <p className="text-xl">Tempo de pausa antes da animação começar.</p>
            <div className="flex flex-col gap-2 text-green-950 *:flex *:items-center *:justify-center">
              <div className="square4 size-[50px] bg-white">1s</div>
              <div className="square5 size-[50px] bg-white">3s</div>
              <div className="square6 size-[50px] bg-white">5s</div>
            </div>
          </div>
          <div className="card">
            <h1 className="text-7xl font-bold">TIMING FUNCTION</h1>
            <p className="text-xl">Flexibilização da animação.</p>
            <div className="flex flex-col gap-2 text-green-950 *:flex *:items-center *:justify-center">
              <div className="square7 h-[50px] w-[120px] bg-white">ease in</div>
              <div className="square8 h-[50px] w-[120px] bg-white">
                ease out
              </div>
              <div className="square9 h-[50px] w-[120px] bg-white">
                bounce out
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
