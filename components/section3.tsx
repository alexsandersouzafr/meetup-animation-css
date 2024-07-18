"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check, X } from "lucide-react";
import { useRef } from "react";

export default function Section2() {
  const scope = useRef(null);
  useGSAP(
    () => {
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
        .from(".card", { opacity: 0, y: 100, duration: 0.3, stagger: 0.3 })
        .from(".card>*", { opacity: 0, x: -50, duration: 0.3, stagger: 0.3 })
        .to(".icon", {
          opacity: 0.5,
          scale: 4,
          duration: 3,
          stagger: 0.8,
          ease: "bounce.out",
        })
        .addLabel("end");
    },
    { scope: scope },
  );
  return (
    <section
      ref={scope}
      className="flex h-screen w-full items-center bg-pink-500 text-black"
    >
      <div className="container flex flex-col items-start justify-center gap-16">
        <h1 className="card text-5xl">O QUE ANIMAR?</h1>
        <div className="grid w-full grid-cols-3 gap-16 *:flex *:flex-col *:gap-8 *:rounded-xl *:border *:border-black *:p-8 *:text-xl">
          <div className="card overflow-hidden">
            <h1 className="inline-flex text-7xl font-bold">
              <X className="icon size-[72px] scale-[600%] opacity-0" />
              LAYOUT/
              <br />
              REFLOW
            </h1>
            <p>
              Quando o browser calcula a posição e tamanho dos elementos. O que
              causa reflow:
            </p>
            <ul className="list-disc">
              <li>Modificação na estrutura do DOM</li>
              <li>
                Alteração em propriedades que mudam o tamanho dos elementos:
                height, width, border-width, margin, etc
              </li>
            </ul>
          </div>
          <div className="card overflow-hidden">
            <h1 className="inline-flex text-7xl font-bold">
              <Check className="icon size-[72px] scale-[600%] opacity-0" />
              PAINT/
              <br />
              REPAINT
            </h1>
            <p>
              Quando o browser pinta/atualiza os pixels na tela. Alterar as
              seguintes propriedades causa repaint:
            </p>
            <ul className="list-disc">
              <li>Cor</li>
              <li>Opacidade</li>
              <li>Visibilidade</li>
            </ul>
          </div>
          <div className="card overflow-hidden">
            <h1 className="inline-flex text-7xl font-bold">
              <Check className="icon size-[72px] scale-[600%] opacity-0" />
              GPU
            </h1>
            <p>Proprieadaes processadas na GPU</p>
            <ul className="list-disc">
              <li>Transform</li>
              <li>Opacity</li>
              <li>Filters</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
