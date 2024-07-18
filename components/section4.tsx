"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check, ChevronRightCircle, X } from "lucide-react";
import { useRef, useState } from "react";

export default function Section4() {
  const [open, setOpen] = useState(false);
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
        .from(".card", { opacity: 0, y: 100, duration: 1, stagger: 0.5 })
        .from(".card>*", { opacity: 0, x: -50, duration: 1, stagger: 0.5 })
        .addLabel("end");
    },
    { scope: scope },
  );
  return (
    <section
      ref={scope}
      className="bg-blue-950-500 flex h-screen w-full items-center bg-blue-950 text-white"
    >
      <div className="container flex flex-col items-start justify-center gap-8 text-xl">
        <h1 className="card text-5xl">TRANSITIONS</h1>
        <div className="card flex flex-col gap-4">
          <p>
            CSS Transitions te permite trocar suavemente a estilização de um
            elemento dentro de dada duração. Geralmente usada com gerenciamento
            de estados e pseud-classes.
          </p>
          <p className="w-fit rounded-xl bg-zinc-900 p-4 text-red-500">
            {"transition: <property> <duration> <timing-function> <delay>"}
          </p>
        </div>
        <div className="card grid w-full grid-cols-2 gap-16 *:h-[500px]">
          <div className="flex flex-col gap-2 rounded-xl border border-white p-8">
            <h2 className="text-3xl">PSEUDO-CLASSES</h2>
            <p>
              Pseudo-classes engatilham a mudança de estilização. Algumas
              pseudo-classes: hover, active, disabled, focus.
            </p>
            <button className="exemplo-hover">hover me</button>
          </div>
          <div className="flex flex-col gap-2 rounded-xl border border-white p-8">
            <h2 className="text-3xl">DATA-ATTRIBUTES</h2>
            <p>
              Você pode criar seus próprios atributos em um elemento HTML apenas
              adicionando data-* ao nome que você escolher. Esses atributos
              podem ser lidos dentro do CSS. Por exemplo:{" "}
              <span className="text-red-500">{'<div data-open="true">'}</span>
            </p>
            <button onClick={() => setOpen(!open)} className="exemplo-open-me">
              {open ? "close" : "open"} me
              <ChevronRightCircle className="exemplo-chevron" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
