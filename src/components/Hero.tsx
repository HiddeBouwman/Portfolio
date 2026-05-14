import { SITE } from "../siteContent";

export function Hero() {
  return (
    <header className="hero w95-desktop-pattern" id="top">
      <div>
        <h1 className="hero__name">{SITE.name}</h1>
        <p className="hero__subtitle">Full-Stack Web Developer</p>
      </div>
      <p className="hero__hint">Scroll naar beneden ▼</p>
    </header>
  );
}
