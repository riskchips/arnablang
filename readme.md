# 📘 ArnabLang (al)

A custom-built interpreted programming language written in JavaScript.  
ArnabLang supports variables, loops, conditionals, and expressions with a unique syntax.

---

# 🚀 Features

- Custom syntax (`ts`, `fw`, `gugugaga`, `milk`, etc.)
- Variables (with or without initialization)
- Arithmetic expressions
- If / Else If / Else conditions
- For loops
- Nested blocks support
- String handling
- Simple runtime environment

---

# 📂 Project Structure

```bash
arnablang/
├── src/
│   ├── interpreter/
│   │   └── interpreter.js
│   ├── runtime/
│   │   └── environment.js
│   ├── utils/
│   │   ├── eval.js
│   │   └── validator.js
│   └── index.js
├── examples/
│   └── test.al
├── package.json
└── README.md
```

---

# ⚙️ Installation

```bash
git clone <your-repo-link>
cd arnablang
npm install
```

---

# ▶️ Running ArnabLang Code

```bash
node src/index.js examples/test.al
```

---

# 🧠 Syntax Guide

## 🔹 Variables

```al
ts x = 10
fw y = 20
fw z
z = 30
```

---

## 🔹 Print

```al
gugugaga(x)
gugugaga("Hello World")
gugugaga(x + y)
```

---

## 🔹 If / Else If / Else

```al
lowk(x > 10){
  gugugaga("Greater")
}

ngacontinue(x == 10){
  gugugaga("Equal")
}

fr{
  gugugaga("Smaller")
}
```

---

## 🔹 Loop (For Loop)

```al
milk(i = 1; i <= 5; i = i + 1){
  gugugaga(i)
}
```

---

## 🔹 Nested Example

```al
ts n = 5

milk(i = 1; i <= n; i = i + 1){
  fw row = ""

  milk(j = 1; j <= i; j = j + 1){
    row = row + "* "
  }

  gugugaga(row)
}
```

---

# 🧪 Example Output

```txt
* 
* * 
* * * 
* * * * 
* * * * * 
```

---

# ⚠️ Error Handling

- Detects undefined variables
- Basic syntax validation
- Prevents invalid assignments

Example:

```txt
ArnabLang Error: Variable 'x' not declared
```

---

# 💡 Future Improvements

- Function support
- Arrays & objects
- Better error messages with line numbers
- Web-based IDE
- Removing `Function()` for full parser implementation

---

# 👨‍💻 Author

Built by you 🚀  
ArnabLang is a custom experimental programming language project.