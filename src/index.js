import fs from "fs"
import { interpretBlock } from "./interpreter/interpreter.js"



const file = process.argv[2]

if (!file) {
  console.log("Usage: node src/index.js <file.al>")
  process.exit(1)
}

const code = fs.readFileSync(file, "utf-8")

const lines = code
  .split("\n")
  .map(l => l.trim())
  .filter(Boolean)

interpretBlock(lines)