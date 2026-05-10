import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import LightRays from "./bits/LightRays";
import Hyperspeed from "./bits/Hyperspeed";
const cubeFaces = [
  "from-cyan-400/70 to-blue-500/70",
  "from-orange-400/70 to-amber-500/70",
  "from-blue-500/70 to-indigo-500/70",
];

export default function Hero() {
  const professionRef = useRef(null);

  useEffect(() => {
    // Typed effect for professions
    const professionTyped = new Typed(professionRef.current, {
      strings: ["Frontend ", "Backend ", "MERN  "],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      professionTyped.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center pt-24 pb-16"
    >

      <Hyperspeed
        effectOptions={{
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
        onSpeedUp={() => { }}
        onSlowDown={() => { }}
      />
      {/* <div className="absolute top-0 left-0 w-screen h-screen">

        <LightRays
          raysOrigin="top-left"
          raysColor="#ffffff"
          raysSpeed={0.5}
          lightSpread={0.5}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />

      </div> */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
      </div>
      <div className="container">

        <div className="grid w-full relative z-11 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-7"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <span className="text-orange-300">{"<"}</span>Full Stack Developer
              <span className="text-orange-300">{"/>"}</span>
            </p>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl md:text-6xl">
              Hi, I'm Sharvan
              <span className="block mt-2    text-zinc-300">
                Specialized in <br />
                <span
                  ref={professionRef}
                  className="bg-gradient-to-r from-cyan-300 via-blue-300 to-orange-300 bg-clip-text text-transparent"
                />
                Developer
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
              I build modern apps with clean architecture, playful UI motion, and
              robust backend integrations. Code quality and user delight stay
              equally important.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-900/30 transition hover:brightness-110"
              >
                See Project Showcase
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-orange-300/30 bg-orange-400/10 px-7 py-3 text-sm font-semibold text-orange-100 transition hover:bg-orange-400/20"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="section-ring glass-panel rounded-3xl p-8">
              <motion.div
                animate={{ rotateX: [0, 12, -10, 0], rotateY: [0, -16, 12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative mx-auto h-52 w-52"
              >
                {cubeFaces.map((face, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 rounded-2xl border border-white/20 bg-gradient-to-br ${face}`}
                    style={{ transform: `translateZ(${index * 20}px)` }}
                  />
                ))}
              </motion.div>

              <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-slate-950/70 p-4">
                <p className="font-mono text-xs text-zinc-300">
                  <span className="text-cyan-300">const</span> stack = ['React',
                  'Node', 'MongoDB', 'Tailwind'];
                </p>
                <p className="mt-2 font-mono text-xs text-zinc-300">
                  <span className="text-orange-300">ship</span>(cleanCode,
                  smoothUX, secureAPI);
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
