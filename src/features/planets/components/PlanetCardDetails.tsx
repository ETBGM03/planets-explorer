import { PlanetDataSection } from "./PlanetDataSection";
import { PlanetDataItem } from "./PlanetDataItem";

interface DataItem {
  label: string;
  value: string | number | undefined;
  formatter?: (value: string | number | undefined) => string;
}

interface PlanetCardDetailsProps {
  title: string;
  data: DataItem[];
}

export const PlanetCardDetails = ({ title, data }: PlanetCardDetailsProps) => (
  <PlanetDataSection title={title}>
    {data.map((item, index) => (
      <PlanetDataItem
        key={index}
        label={item.label}
        value={item.formatter ? item.formatter(item.value) : item.value?.toString() || "N/A"}
      />
    ))}
  </PlanetDataSection>
);
