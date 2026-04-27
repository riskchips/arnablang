export const env = {}

export function setVar(name, value) {
  env[name] = value
}

export function hasVar(name) {
  return name in env
}