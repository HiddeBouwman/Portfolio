export function asset(path: string | undefined | null) {
  const p = String(path || "").replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${p}`;
}
