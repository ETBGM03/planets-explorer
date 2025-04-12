"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import { planetsIntro } from "@/shared/constants/planets";

export const PlanetIntro = () => {
  return (
    <div className="size-full fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Planet Explorer</h1>
        <p className="text-gray-300">Discovering the planets...</p>
      </motion.div>

      <div className="relative w-full max-w-2xl h-64">
        {planetsIntro.map((planet, index) => (
          <motion.div
            key={planet.name}
            initial={{ x: -100, y: 0, opacity: 0 }}
            animate={{
              x: [0, Math.sin(index) * 50, 0],
              y: [0, Math.cos(index) * 50, 0],
              opacity: 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            className={`absolute ${planet.size} rounded-full overflow-hidden`}
            style={{
              left: `${(index + 1) * 10}%`,
              top: "50%",
            }}
          >
            <Image
              src={planet.image}
              alt={planet.name}
              width={100}
              height={100}
              className="w-full h-full object-cover"
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
