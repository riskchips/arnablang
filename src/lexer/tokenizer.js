export function tokenize(code) {
  return code
    .replace(/\n/g, " ")
    .split(/\s+/)
    .filter(Boolean)
}