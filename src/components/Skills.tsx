import { TbBrandAdobe } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import {
  SiCanva,
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLua,
  SiMiro,
  SiNodedotjs,
  SiPhp,
  SiPhpstorm,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Win95Window } from "./Win95Window";
import { SkillSplit } from "./SkillSplit";
import type { SkillItem } from "./SkillSplit";
import { TanStackIcon } from "./TanStackIcon";

const frontEndProficient: SkillItem[] = [
  { label: "HTML", Icon: SiHtml5 },
  { label: "CSS", Icon: SiCss },
  { label: "Tailwind CSS", Icon: SiTailwindcss },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "React", Icon: SiReact },
  { label: "Zod", Icon: TanStackIcon },
];

const frontEndLearning: SkillItem[] = [
  { label: "TypeScript", Icon: SiTypescript },
  { label: "TanStack Router", Icon: TanStackIcon },
  { label: "TanStack Form", Icon: TanStackIcon },
  { label: "TanStack Query", Icon: TanStackIcon },
  { label: "Lua", Icon: SiLua },
];

const backEndProficient: SkillItem[] = [
  { label: "PHP", Icon: SiPhp },
  { label: "Laravel", Icon: SiLaravel },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "Express", Icon: SiExpress },
];

const backEndLearning: SkillItem[] = [];

const toolsProficient: SkillItem[] = [
  { label: "Git", Icon: SiGit },
  { label: "GitHub", Icon: SiGithub },
  { label: "Figma", Icon: SiFigma },
  { label: "VS Code", Icon: VscVscode },
  { label: "PhpStorm", Icon: SiPhpstorm },
  { label: "Miro", Icon: SiMiro },
  { label: "Canva", Icon: SiCanva },
];

const toolsLearning: SkillItem[] = [
  { label: "Adobe Suite", Icon: TbBrandAdobe },
];

export function Skills() {
  return (
    <div className="skills-stack">
      <Win95Window title="Vaardigheden (Front-end)">
        <SkillSplit
          proficient={frontEndProficient}
          learning={frontEndLearning}
        />
      </Win95Window>
      <Win95Window title="Vaardigheden (Back-end)">
        <SkillSplit proficient={backEndProficient} learning={backEndLearning} />
      </Win95Window>
      <Win95Window title="Tools & software">
        <SkillSplit proficient={toolsProficient} learning={toolsLearning} />
      </Win95Window>
    </div>
  );
}
