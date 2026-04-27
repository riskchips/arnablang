import { setVar } from "../runtime/environment.js"
import { evaluate } from "../utils/eval.js"

export function interpretLine(line) {
  line = line.trim()

  if (line.startsWith("ts ") || line.startsWith("fw ")) {
    let match = line.match(/^(ts|fw)\s+([a-zA-Z_]\w*)\s*=\s*(.*)$/)

    if (match) {
      const name = match[2]
      let value = match[3].trim()
      if (value === "") value = '""'
      setVar(name, evaluate(value))
      return
    }

    match = line.match(/^(ts|fw)\s+([a-zA-Z_]\w*)$/)

    if (match) {
      const name = match[2]
      setVar(name, null)
      return
    }

    throw new Error("Invalid declaration: " + line)
  }

  if (/^[a-zA-Z_]\w*\s*=/.test(line)) {
    const match = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.*)$/)

    if (!match) throw new Error("Invalid assignment: " + line)

    const name = match[1]
    let expr = match[2].trim()
    if (expr === "") expr = '""'

    setVar(name, evaluate(expr))
    return
  }

  if (line.startsWith("gugugaga")) {
    const exprMatch = line.match(/\((.*)\)/)
    if (!exprMatch) throw new Error("Invalid print syntax: " + line)
    const expr = exprMatch[1].trim()
    console.log(evaluate(expr))
    return
  }
}

function getBlock(lines, start) {
  const block = []
  let depth = 1

  for (let i = start; i < lines.length; i++) {
    let line = lines[i]

    if (line.includes("{")) depth++
    if (line.includes("}")) depth--

    if (depth === 0) {
      return { block, end: i }
    }

    block.push(line)
  }

  return { block, end: lines.length }
}

export function interpretBlock(lines) {
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim()

    if (line.startsWith("milk")) {
      const inside = line.match(/\((.*)\)/)[1]
      const [init, condition, increment] = inside.split(";")

      interpretLine(init.trim())

      const { block, end } = getBlock(lines, i + 1)
      i = end

      while (evaluate(condition.trim())) {
        interpretBlock(block)
        interpretLine(increment.trim())
      }

      continue
    }

    if (line.startsWith("lowk")) {
      const condition = line.match(/\((.*)\)/)[1]

      const { block, end } = getBlock(lines, i + 1)
      i = end

      if (evaluate(condition.trim())) {
        interpretBlock(block)
      }

      continue
    }

    if (line.startsWith("ngacontinue")) {
      const condition = line.match(/\((.*)\)/)[1]

      const { block, end } = getBlock(lines, i + 1)
      i = end

      if (evaluate(condition.trim())) {
        interpretBlock(block)
      }

      continue
    }

    if (line.startsWith("fr")) {
      const { block, end } = getBlock(lines, i + 1)
      i = end

      interpretBlock(block)
      continue
    }

    interpretLine(line)
  }
}