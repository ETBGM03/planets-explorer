"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import { planetsIntro } from "@/shared/constants/planets";

export const PlanetIntro = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-2xl h-60">
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
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.1,
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
