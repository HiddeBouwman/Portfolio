import { SITE } from "../siteContent";
import { Win95Window } from "./Win95Window";

export function About() {
  return (
    <Win95Window title="Over mij">
      <p className="section-heading">Wie ben ik?</p>
      <div className="w95-sunken">
        {SITE.about
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean)
          .map((line, i) => (
            <p key={i} style={{ margin: i === 0 ? 0 : "0.65rem 0 0" }}>
              {line}
            </p>
          ))}
      </div>
    </Win95Window>
  );
}
