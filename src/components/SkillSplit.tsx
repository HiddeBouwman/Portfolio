import type { IconType } from "react-icons";
import { SkillChip } from "./SkillChip";

export type SkillItem = { label: string; Icon: IconType };

type SkillSplitProps = {
  proficient: SkillItem[];
  learning: SkillItem[];
};

export function SkillSplit({ proficient, learning }: SkillSplitProps) {
  const showLearning = learning.length > 0;

  return (
    <div className={`skill-columns${showLearning ? "" : " skill-columns--single"}`}>
      <div>
        <p className="skill-column__title">Vaardig</p>
        <div className="skill-grid" role="list">
          {proficient.map((s) => (
            <span key={s.label} role="listitem">
              <SkillChip label={s.label} Icon={s.Icon} />
            </span>
          ))}
        </div>
      </div>
      {showLearning ? (
        <div>
          <p className="skill-column__title">Lerend</p>
          <div className="skill-grid" role="list">
            {learning.map((s) => (
              <span key={s.label} role="listitem">
                <SkillChip label={s.label} Icon={s.Icon} />
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
