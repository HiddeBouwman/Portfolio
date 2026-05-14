import { useParams } from "react-router-dom";
import { SITE } from "../siteContent";
import { Win95Window } from "./Win95Window";
import { SkillChip } from "./SkillChip";
import { TanStackIcon } from "./TanStackIcon";
import { SiGithub } from "react-icons/si";
import { useLightbox } from "./Lightbox";
import { asset } from "../utils/asset";
import {
  SiJavascript,
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

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

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = SITE.projects.find((p) => p.slug === slug);
  const lightbox = useLightbox();

  if (!project) {
    return (
      <Win95Window title="Project niet gevonden">
        <p>Het project kon niet worden gevonden.</p>
      </Win95Window>
    );
  }

  return (
    <Win95Window
      title={`${project.title}`}
      titleAction={
        <a
          className="w95-button w95-button--primary w95-button--icon-only"
          href={project.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Repository van ${project.title} op GitHub openen`}
        >
          <SiGithub aria-hidden />
        </a>
      }
    >
      {project.image && (
        <img
          src={asset(project.image)}
          alt={`Screenshot van ${project.title}`}
          className="project-image"
          style={{ cursor: "pointer" }}
          onClick={() => {
            lightbox.open(asset(project.image), project.title);
          }}
        />
      )}
      <p>
        <strong>Rol:</strong> {project.role}
      </p>
      {project.duration ? (
        <p>
          <strong>Projectduur:</strong> {project.duration}
        </p>
      ) : null}
      {project.endDate ? (
        <p>
          <strong>Afrondingsdatum:</strong> {project.endDate}
        </p>
      ) : null}
      <p>{project.fullDescription}</p>

      {project.descriptionImages && project.descriptionImages.length > 0 ? (
        <section className="project-field">
          <div className="field-images">
            {project.descriptionImages.map((img, i) => (
              <figure key={i}>
                <img
                  className="field-image"
                  src={asset(img.src)}
                  alt={img.caption ?? `Afbeelding ${i + 1}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => lightbox.open(asset(img.src), img.caption)}
                />
                {img.caption ? (
                  <figcaption className="field-image-caption">
                    {img.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {project.tasks ? (
        <section className="project-field">
          <h3>Mijn taken</h3>
          <p>{project.tasks}</p>
          {project.tasksImages && project.tasksImages.length > 0 ? (
            <div className="field-images">
              {project.tasksImages.map((img, i) => (
                <figure key={i}>
                  <img
                    className="field-image"
                    src={asset(img.src)}
                    alt={img.caption ?? `Afbeelding ${i + 1}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => lightbox.open(asset(img.src), img.caption)}
                  />
                  {img.caption ? (
                    <figcaption className="field-image-caption">
                      {img.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {project.process ? (
        <section className="project-field">
          <h3>Proces</h3>
          <p>{project.process}</p>
          {project.processImages && project.processImages.length > 0 ? (
            <div className="field-images">
              {project.processImages.map((img, i) => (
                <figure key={i}>
                  <img
                    className="field-image"
                    src={asset(img.src)}
                    alt={img.caption ?? `Afbeelding ${i + 1}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => lightbox.open(asset(img.src), img.caption)}
                  />
                  {img.caption ? (
                    <figcaption className="field-image-caption">
                      {img.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}
      <div className="skill-grid" role="list">
        {project.technologies.map((tech) => {
          const Icon = techIcons[tech] ?? TanStackIcon;
          return (
            <span key={tech} role="listitem">
              <SkillChip label={tech} Icon={Icon} />
            </span>
          );
        })}
      </div>
    </Win95Window>
  );
}
