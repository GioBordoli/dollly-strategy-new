"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(n);
}

export default function Price3D({ amount = 2650 }: { amount?: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, amount, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [amount]);

  return (
    <div className="relative flex w-full items-center justify-center">
      <motion.div
        initial={{ rotateX: 18, rotateY: -14, scale: 0.96, y: 12, opacity: 0 }}
        animate={{
          rotateX: [18, 22, 18],
          rotateY: [-14, -10, -14],
          y: [12, 0, 12],
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="select-none text-6xl font-black leading-none sm:text-7xl lg:text-8xl"
        style={{
          perspective: 900,
          textShadow: "0 10px 0 rgba(2,6,23,0.04), 0 24px 32px rgba(2,6,23,0.15)",
        }}
        aria-label={`Prezzo indicativo ${formatUSD(display)}`}
      >
        <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent drop-shadow">
          {formatUSD(display)}
        </span>
      </motion.div>
    </div>
  );
} 