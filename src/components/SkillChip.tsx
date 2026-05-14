import type { IconType } from "react-icons";
import { TanStackIcon } from "./TanStackIcon";

type SkillChipProps = {
  label: string;
  Icon: IconType;
};

export function SkillChip({ label, Icon }: SkillChipProps) {
  const tooltip =
    Icon === TanStackIcon || label.includes("TanStack")
      ? "Geen (goed) icoon gevonden"
      : undefined;

  return (
    <span
      className="skill-chip"
      {...(tooltip ? { "data-tooltip": tooltip } : {})}
      aria-label={tooltip ?? label}
    >
      <Icon aria-hidden />
      {label}
    </span>
  );
}
