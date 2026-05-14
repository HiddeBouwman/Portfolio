import { useNavigate, useLocation } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGithub, SiInstagram } from "react-icons/si";
import { SITE } from "../siteContent";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleStart() {
    if (location.pathname === "/" || location.pathname === "") {
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <div className="site-footer__left">
          <button
            className="w95-button"
            onClick={handleStart}
            aria-label="Start"
          >
            <span className="site-footer__label">Start</span>
          </button>
          {(() => {
            const href = SITE.cvHref;
            const hrefStr = String(href || "");
            if (hrefStr && hrefStr !== "#") {
              const parts = hrefStr.split("/").filter(Boolean);
              const filename = parts.length
                ? decodeURIComponent(parts[parts.length - 1])
                : "cv.pdf";
              return (
                <a
                  className="w95-button w95-button--primary"
                  href={hrefStr}
                  download={filename}
                  aria-label={`Download ${filename}`}
                >
                  CV downloaden
                </a>
              );
            }

            return (
              <a className="w95-button w95-button--primary" href={hrefStr}>
                CV downloaden
              </a>
            );
          })()}
        </div>
        <div className="site-footer__right">
          <span className="site-footer__label">Contact</span>
          <div className="site-footer__links">
            <a
              className="w95-button"
              href={SITE.social.email}
              aria-label="Stuur een e-mail"
            >
              <MdEmail aria-hidden />
              <span className="site-footer__link-text">E-mail</span>
            </a>
            <a
              className="w95-button"
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram (opent in nieuw tabblad)"
            >
              <SiInstagram aria-hidden />
              <span className="site-footer__link-text">Instagram</span>
            </a>
            <a
              className="w95-button"
              href={SITE.social.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub (opent in nieuw tabblad)"
            >
              <SiGithub aria-hidden />
              <span className="site-footer__link-text">GitHub</span>
            </a>
            <a
              className="w95-button"
              href={SITE.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn (opent in nieuw tabblad)"
            >
              <FaLinkedinIn aria-hidden />
              <span className="site-footer__link-text">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
