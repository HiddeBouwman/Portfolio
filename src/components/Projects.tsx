import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import {
  SiJavascript,
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { SITE } from "../siteContent";
import { Win95Window } from "./Win95Window";
import { SkillChip } from "./SkillChip";
import { TanStackIcon } from "./TanStackIcon";
import type { IconType } from "react-icons";
import { useLightbox } from "./Lightbox";
import { asset } from "../utils/asset";

const techIcons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  "TanStack Router": TanStackIcon,
  "TanStack Query": TanStackIcon,
  "TanStack Form": TanStackIcon,
  Laravel: SiLaravel,
  JavaScript: SiJavascript,
};

export function Projects() {
  const lightbox = useLightbox();

  return (
    <Win95Window title="Projecten">
      <div className="project-list" role="list">
        {SITE.projects.map((p) => (
          <article
            key={p.title}
            className="project-row w95-sunken"
            role="listitem"
          >
            <div className="project-inner">
              <div className="project-header">
                <h3>{p.title}</h3>
                <div className="project-links">
                  <a
                    className="w95-button w95-button--primary w95-button--icon-only"
                    href={p.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Repository van ${p.title} op GitHub openen`}
                  >
                    <SiGithub aria-hidden />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <p>{p.description}</p>
                <Link
                  to={`/project/${p.slug}`}
                  className="w95-button w95-button--secondary"
                >
                  Meer informatie...
                </Link>
                {p.image ? (
                  <div className="project-thumb-wrap">
                    <img
                      src={asset(p.image)}
                      alt={`Thumbnail van ${p.title}`}
                      className="project-thumb"
                      style={{ cursor: "pointer" }}
                      onClick={() => lightbox.open(asset(p.image), p.title)}
                    />
                  </div>
                ) : null}
                <div className="skill-grid" role="list">
                  {p.technologies.map((tech) => {
                    const Icon = techIcons[tech] ?? TanStackIcon;
                    return (
                      <span key={tech} role="listitem">
                        <SkillChip label={tech} Icon={Icon} />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Win95Window>
  );
}
