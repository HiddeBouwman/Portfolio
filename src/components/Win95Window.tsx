import { useState } from "react";
import type { ReactNode } from "react";

type Win95WindowProps = {
  title: string;
  titleAdornment?: ReactNode;
  children: ReactNode;
  className?: string;
  noTitlebar?: boolean;
  noToggle?: boolean;
  titleAction?: ReactNode;
};

export function Win95Window({
  title,
  titleAdornment,
  children,
  className = "",
  noTitlebar = false,
  noToggle = false,
  titleAction,
}: Win95WindowProps) {
  const [collapsed, setCollapsed] = useState(false);
  const collapsedState = noToggle ? false : collapsed;

  return (
    <section
      className={`w95-window ${className} ${collapsedState ? "is-collapsed" : ""}`.trim()}
      aria-label={title}
    >
      {!noTitlebar ? (
        <div className="w95-window__titlebar">
          {titleAdornment ?? null}
          <span className="w95-window__title">{title}</span>
          {titleAction ? (
            <div className="w95-window__title-action">{titleAction}</div>
          ) : !noToggle ? (
            <button
              type="button"
              className="w95-button w95-button--icon-only w95-window__toggle"
              aria-pressed={collapsedState}
              aria-label={collapsedState ? "Open sectie" : "Sluit sectie"}
              onClick={() => setCollapsed((s) => !s)}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 8 8"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                className="w95-window__toggle-icon"
              >
                <polygon points="0,2 4,6 8,2" fill="currentColor" />
              </svg>
            </button>
          ) : null}
        </div>
      ) : null}
      <div className="w95-window__body" aria-hidden={collapsedState}>
        {children}
      </div>
    </section>
  );
}
