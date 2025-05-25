"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { IconRocket } from "@tabler/icons-react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function MotionHookExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgrounds = [ "#b45309","#1e293b", "#7c3aed"];
  const [background, setBackground] = useState(backgrounds[0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    const safeIndex = Math.min(finalValue, backgrounds.length - 1);
    setBackground(backgrounds[safeIndex]);
  });

  return (
    <motion.div
      ref={containerRef}
      animate={{ background }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="min-h-screen bg-neutral-900 flex items-center justify-center"
    >
      <div className="flex flex-col gap-10 max-w-4xl mx-auto py-40">
        {features.map((feature) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useTransform(scrollYProgress, [0, 1], [200, -250]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-20 mb-40"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        className="flex flex-col"
      >
        {feature.icon}
        <h2 className="text-white font-bold text-4xl">{feature.title}</h2>
        <p className="text-neutral-300 text-2xl">{feature.description}</p>
      </motion.div>
      <motion.div style={{ y: translateContent, opacity: opacityContent }}>
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Ridham",
    description:
      "Check this out I have build this with Motion taught by Manu paji",
    content: (
      <div>
        <Image
          src="/motionkeliye.jpg"
          alt="car"
          height={350}
          width={350}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Manu Paji",
    description:
      "Hm hm hm .................",
    content: (
      <div>
        <Image
          src="/manupaji.jpg"
          alt="car"
          height={350}
          width={350}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "here is your Merch",
    description:
      "cool T-shirt from my side, it will suit u ",
    content: (
      <div>
        <Image
          src="/acc.png"
          alt="car"
          height={350}
          width={350}
          className="rounded-lg"
        />
      </div>
    ),
  },
];
