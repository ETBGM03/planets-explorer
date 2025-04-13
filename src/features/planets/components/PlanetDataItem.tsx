import { ReactNode } from "react";

interface PlanetDataItemProps {
  label: string;
  value: ReactNode;
}

export const PlanetDataItem = ({ label, value }: PlanetDataItemProps) => (
  <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
    <span className="font-semibold text-gray-700">{label}</span>
    <span className="text-gray-900">{value}</span>
  </li>
);
