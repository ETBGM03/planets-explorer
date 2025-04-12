interface PlanetIntroProps {
  name: string;
  size: string;
  image: string;
}

export const planetsIntro: PlanetIntroProps[] = [
  {
    name: "Mercury",
    size: "w-8 h-8",
    image: "/images/mercury.webp",
  },
  {
    name: "Venus",
    size: "w-10 h-10",
    image: "/images/venus.webp",
  },
  {
    name: "Earth",
    size: "w-12 h-12",
    image: "/images/earth.webp",
  },
  {
    name: "Mars",
    size: "w-9 h-9",
    image: "/images/mars.webp",
  },
  {
    name: "Jupiter",
    size: "w-16 h-16",
    image: "/images/jupiter.webp",
  },
  {
    name: "Saturn",
    size: "w-14 h-14",
    image: "/images/saturn.webp",
  },
  {
    name: "Uranus",
    size: "w-11 h-11",
    image: "/images/uranus.webp",
  },
  {
    name: "Neptune",
    size: "w-11 h-11",
    image: "/images/neptune.webp",
  },
];
