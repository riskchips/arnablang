import fs from "fs"
import { interpretBlock } from "./interpreter/interpreter.js"

const file = process.argv[2]

if (!file) {
  console.log("Usage: node src/index.js <file.al>")
  process.exit(1)
}

const code = fs.readFileSync(file, "utf-8")

const rawLines = code.split("\n")
const lines = []

let buffer = ""
let bracketCount = 0

for (let line of rawLines) {
  line = line.trim()
  if (!line) continue

  bracketCount += (line.match(/\[/g) || []).length
  bracketCount -= (line.match(/\]/g) || []).length

  buffer += " " + line

  if (bracketCount === 0) {
    lines.push(buffer.trim())
    buffer = ""
  }
}

interpretBlock(lines)