import { PropsWithChildren } from "react";

interface PlanetDataSectionProps extends PropsWithChildren {
  title: string;
}

export const PlanetDataSection = ({
  title,
  children,
}: PlanetDataSectionProps) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    <ul className="space-y-3">{children}</ul>
  </div>
);
