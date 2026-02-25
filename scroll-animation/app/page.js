"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const heroRef = useRef(null);
  const carRef = useRef(null);
  const revealRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1.5,
        pin: true,
      },
    });

    /* -------------------
       CAR MOVE
    --------------------*/
    tl.fromTo(
      carRef.current,
      { x: "-70vw" },
      { x: "70vw", ease: "none" },
      0
    );

    /* -------------------
       TEXT REVEAL
    --------------------*/
    tl.fromTo(
      revealRef.current,
      { width: "0%" },
      { width: "100%", ease: "none" },
      0
    );

    /* -------------------
       STATS APPEAR
    --------------------*/
    tl.to(
      statsRef.current,
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
      },
      0.4
    );
  }, []);

  const stats = [
  { value: "98%", label: "Model Accuracy" },
  { value: "4.9★", label: "User Satisfaction" },
  { value: "120+", label: "Deployments" },
  { value: "35%", label: "Faster Processing" },
  { value: "24/7", label: "System Reliability" },
  { value: "10K+", label: "Active Users" },
];

  return (
    <main className="bg-black text-white">

      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >

        {/* TEXT MASK */}
        <div className="absolute overflow-hidden z-0">
          <div
            ref={revealRef}
            className="overflow-hidden whitespace-nowrap"
            style={{ width: "0%" }}
          >
            <h1 className="
              text-[4vw]
              font-extrabold
              tracking-[0.6em]
              text-white/20
              select-none
            ">
              WELCOME ITZ FIZZ
            </h1>
          </div>
        </div>

        {/* CAR */}
        <img
          ref={carRef}
          src="car.png"
          className="
            absolute
            bottom-28
            w-[1000px]
            max-w-none
            z-10
          "
          alt="car"
        />

        {/* STATS */}
        <div className="
  absolute
  bottom-14
  grid
  grid-cols-3
  gap-x-16
  gap-y-6
  z-20
">
  {stats.map((stat, i) => (
    <div
      key={i}
      ref={(el) => (statsRef.current[i] = el)}
      className="
        opacity-0
        translate-y-16
        text-center
        backdrop-blur-md
        bg-white/5
        px-6
        py-4
        rounded-xl
        border border-white/10
      "
    >
      <h2 className="text-4xl font-bold text-white">
        {stat.value}
      </h2>

      <p className="text-gray-400 text-sm tracking-wide">
        {stat.label}
      </p>
    </div>
  ))}
</div>

      </section>

      {/* SCROLL SPACE */}
      <div className="h-[200vh]" />

    </main>
  );
}