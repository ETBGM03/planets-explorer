"use client";

import { useState, useEffect } from "react";
import { PlanetIntro } from "./PlanetIntro";

interface IntroWrapperProps {
  children: React.ReactNode;
}

export const IntroWrapper = ({ children }: IntroWrapperProps) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <PlanetIntro />;
  }

  return <>{children}</>;
};
