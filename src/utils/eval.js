import { env } from "../runtime/environment.js"

export function evaluate(expr) {
  expr = expr.trim()

  if (/^[a-zA-Z_]\w*$/.test(expr)) {
    if (expr in env) return env[expr]
    throw new Error(`Undefined variable: ${expr}`)
  }

  try {
    const keys = Object.keys(env)
    const values = Object.values(env)

    return Function(...keys, `return (${expr})`)(...values)
  } catch (e) {
    throw new Error(`Evaluation Error: ${expr}`)
  }
}