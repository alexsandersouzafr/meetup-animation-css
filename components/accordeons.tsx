"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Accordeons() {
  const scope = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({ repeat: -1, repeatDelay: 3 })
        .to(".chevron1", { rotate: 180, duration: 0.5, ease: "power1.out" })
        .to(
          ".accordeon1",
          { maxHeight: 500, duration: 0.5, ease: "power1.out" },
          "<",
        )
        .to(".chevron2", {
          delay: 3,
          rotate: 180,
          duration: 0.5,
          ease: "power1.out",
        })
        .to(
          ".chevron1",
          {
            rotate: 0,
            duration: 0.5,
            ease: "power1.out",
          },
          "<",
        )
        .to(
          ".accordeon1",
          { maxHeight: 0, duration: 0.5, ease: "power1.out" },
          "<",
        )
        .to(
          ".accordeon2",
          { maxHeight: 500, duration: 0.5, ease: "power1.out" },
          "<",
        )
        .to(".chevron2", {
          delay: 3,
          rotate: 0,
          duration: 0.5,
          ease: "power1.out",
        })
        .to(
          ".accordeon2",
          { maxHeight: 0, duration: 0.5, ease: "power1.out" },
          "<",
        );
    },
    { scope: scope },
  );
  return (
    <ul
      ref={scope}
      className="flex h-[600px] w-[300px] flex-col gap-4 overflow-hidden rounded-xl border border-white p-4 [&>li]:rounded-xl [&>li]:border [&>li]:p-4"
    >
      <li className="flex flex-col">
        <div className="flex w-full items-center justify-between font-bold">
          Accordeon Trigger <ChevronDown className="chevron1" />
        </div>
        <div className="accordeon1 mt-4 h-full max-h-0 overflow-hidden text-sm">
          Accordeon Content: Ipsum qui laboris exercitation fugiat labore sunt
          cupidatat anim magna labore consequat velit. Esse qui pariatur ad
          laboris. Sint veniam dolore ullamco aute adipisicing qui culpa anim
          dolor minim labore reprehenderit voluptate. Veniam ut ipsum nisi id
          exercitation nisi ipsum reprehenderit non. Culpa ad nostrud commodo
          pariatur ad cupidatat tempor commodo ut ullamco proident occaecat.
          Mollit nulla proident incididunt aliquip incididunt nisi irure magna
          exercitation labore Lorem culpa. Ad qui id exercitation reprehenderit
          pariatur id in.
        </div>
      </li>
      <li className="flex flex-col">
        <div className="flex w-full items-center justify-between font-bold">
          Accordeon Trigger <ChevronDown className="chevron2" />
        </div>
        <div className="accordeon2 mt-4 h-full max-h-0 overflow-hidden text-sm">
          Accordeon Content: Esse ipsum esse ad veniam fugiat aliquip aliqua
          adipisicing aute esse. Incididunt sunt non ut exercitation. Duis
          mollit dolor ipsum amet ullamco eu. Et irure reprehenderit consequat
          ad officia anim aute culpa pariatur. Aliqua ad qui culpa ut id qui
          velit. Adipisicing consequat sunt pariatur laboris labore sit qui
          exercitation ipsum irure in laborum. Do elit tempor ullamco sint
          mollit elit Lorem sit est voluptate qui.
        </div>
      </li>
      <li>
        <div className="mb-4 flex w-full items-center justify-between font-bold">
          Accordeon Trigger <ChevronDown />
        </div>
      </li>
    </ul>
  );
}
