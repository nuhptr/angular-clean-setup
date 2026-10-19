/** Capitalizes the first character of a string. */
export function capitalize(value: string): string {
  if (!value) return value;

  // simple explain: Capitalizes the first character of a string.
  return value.charAt(0).toUpperCase() + value.slice(1);
}
