import { createContext, useContext, useState, ReactNode } from "react";

type LightboxContextType = {
  open: (src: string, caption?: string) => void;
  close: () => void;
};

const LightboxContext = createContext<LightboxContextType>({
  open: () => {},
  close: () => {},
});

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [caption, setCaption] = useState<string | undefined>(undefined);

  function open(imageSrc: string, imageCaption?: string) {
    setSrc(imageSrc);
    setCaption(imageCaption);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function close() {
    setIsOpen(false);
    setSrc(null);
    setCaption(undefined);
    document.body.style.overflow = "";
  }

  return (
    <LightboxContext.Provider value={{ open, close }}>
      {children}
      {isOpen && src ? (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close w95-button w95-button--icon-only"
              onClick={close}
              aria-label="Sluit afbeelding"
            >
              ×
            </button>
            <figure>
              <img
                src={src}
                alt={caption ?? "Uitvergrote afbeelding"}
                className="lightbox-img"
              />
              {caption ? (
                <figcaption className="lightbox-caption">{caption}</figcaption>
              ) : null}
            </figure>
          </div>
        </div>
      ) : null}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  return useContext(LightboxContext);
}
