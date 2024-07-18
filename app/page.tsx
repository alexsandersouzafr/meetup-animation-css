"use client";

import Hero from "@/components/hero";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
import Section6 from "@/components/section6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Home() {
  const scope = useRef(null);
  // useGSAP(
  //   () => {
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: scope.current,
  //         start: "top top",
  //         scrub: 2,
  //         pin: true,
  //       },
  //     });
  //   },
  //   { scope: scope },
  // );
  return (
    <main ref={scope}>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
