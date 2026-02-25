"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

  const heroRef = useRef(null);
  const carRef = useRef(null);
  const lettersRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {

    /* ---------------- LOAD ANIMATION ---------------- */

    const tl = gsap.timeline();

    tl.from(lettersRef.current,{
      opacity:0,
      y:40,
      stagger:0.06,
      duration:1,
      ease:"power3.out"
    })

    .from(statsRef.current,{
      opacity:0,
      y:25,
      stagger:0.2,
      duration:0.8
    });

    /* ---------------- SCROLL CONTROLLED CAR ---------------- */

    gsap.fromTo(
      carRef.current,
      { x: "-120vw" },   // start outside left
      {
        x: "120vw",      // move to right
        ease:"none",

        scrollTrigger:{
          trigger: heroRef.current,
          start:"top top",
          end:"+=2000",   // scroll distance
          scrub:1.5,
          pin:true,
          anticipatePin:1
        }
      }
    );

  },[]);

  const title="WELCOME ITZFIZZ".split("");

  return(
<section
ref={heroRef}
className="relative h-[300vh] bg-black">

{/* PINNED SCREEN */}
<div className="
h-screen
flex flex-col
justify-center
items-center
text-center
overflow-hidden
relative">

{/* HEADLINE */}
<h1 className="
text-6xl
tracking-[0.6em]
font-semibold
mb-10">

{title.map((l,i)=>(
<span
key={i}
ref={(el)=>lettersRef.current[i]=el}>
{l}
</span>
))}
</h1>

{/* STATS */}
<div className="flex gap-14 text-zinc-300 mb-16">

{[
"98% Accuracy",
"40% Faster",
"AI Powered"
].map((s,i)=>(
<div
key={i}
ref={(el)=>statsRef.current[i]=el}>
{s}
</div>
))}

</div>

{/* CAR */}
<img
ref={carRef}
src="/car.png"
className="
absolute
bottom-24
w-[750px]
pointer-events-none
"
/>

</div>

</section>
  );
}