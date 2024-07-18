"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function Abas() {
  const scope = useRef(null);
  const [tabState, setTabState] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
  });
  useGSAP(
    () => {
      gsap
        .timeline({ repeat: -1 })
        .to(".tab-container", {
          onStart: () =>
            setTabState({
              tab1: false,
              tab2: true,
              tab3: false,
              tab4: false,
            }),
          xPercent: -100,
          duration: 2,
          ease: "power4.out",
        })
        .to(".tab-container", {
          onStart: () =>
            setTabState({
              tab1: false,
              tab2: false,
              tab3: true,
              tab4: false,
            }),
          xPercent: -200,
          duration: 2,
          ease: "power4.out",
        })
        .to(".tab-container", {
          onStart: () =>
            setTabState({
              tab1: false,
              tab2: false,
              tab3: false,
              tab4: true,
            }),
          xPercent: -300,
          duration: 2,
          ease: "power4.out",
        })
        .to(".tab-container", {
          onStart: () =>
            setTabState({
              tab1: true,
              tab2: false,
              tab3: false,
              tab4: false,
            }),
          xPercent: 0,
          duration: 2,
          ease: "power4.out",
        });
    },
    { scope: scope },
  );

  return (
    <div
      className="flex h-[600px] w-[300px] flex-col rounded-xl border border-white p-4"
      ref={scope}
    >
      <h1 className="mb-4">My App</h1>
      <div className="*relative grid grid-cols-4 justify-between gap-[1px] text-white *:rounded-t-lg *:bg-red-950 *:px-4 *:py-2 *:text-sm *:font-bold *:transition-all *:duration-500 *:ease-out">
        <div
          data-active={tabState.tab1}
          className="data-[active=true]:bg-white data-[active=true]:text-red-500"
        >
          Tab 1
        </div>
        <div
          data-active={tabState.tab2}
          className="data-[active=true]:bg-white data-[active=true]:text-red-500"
        >
          Tab 2
        </div>
        <div
          data-active={tabState.tab3}
          className="data-[active=true]:bg-white data-[active=true]:text-red-500"
        >
          Tab 3
        </div>
        <div
          data-active={tabState.tab4}
          className="data-[active=true]:bg-white data-[active=true]:text-red-500"
        >
          Tab 4
        </div>
      </div>
      <div className="size-full overflow-hidden rounded-b-md text-red-900 *:size-full">
        <div className="tab-container flex *:size-full *:shrink-0">
          <div className="bg-red-200 p-8">
            Officia exercitation do cupidatat consequat. Exercitation cupidatat
            aliquip reprehenderit culpa magna exercitation. Proident nulla
            proident adipisicing culpa aliqua velit id anim aute amet laborum
            fugiat mollit incididunt. Anim aliqua ea adipisicing minim officia
            velit exercitation voluptate. Mollit excepteur voluptate enim
            exercitation eiusmod culpa minim nostrud qui.
          </div>
          <div className="bg-red-300 p-8">
            <ul>
              <li>
                Laborum veniam aliqua consequat anim cupidatat exercitation
                aliqua.
              </li>
              <li>Quis sint pariatur ullamco labore nisi elit.</li>
            </ul>
          </div>
          <div className="bg-red-200 p-8">
            Et consequat aliquip sunt ad. Sit commodo ad qui aliquip sunt.
            Proident deserunt cillum nisi cupidatat velit velit. Excepteur
            consequat occaecat proident qui id qui.
          </div>
          <div className="bg-red-300 p-8">
            Proident qui eiusmod enim proident officia enim cillum ex cillum.
          </div>
        </div>
      </div>
    </div>
  );
}
