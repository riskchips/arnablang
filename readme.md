# 📘 ArnabLang (al)

ArnabLang is a custom interpreted programming language built in JavaScript.  
It uses a unique syntax while supporting core programming concepts like variables, loops, conditions, and expressions.

---

# 🚀 Get Started

Clone the repository:

```bash
git clone https://github.com/riskchips/arnablang.git
cd arnablang
```

---

# 🧠 Core Syntax & Meaning

## 🔹 Variables

```al
ts x = 10
fw y = 20
fw z
z = 30
```

- `ts` → declares a variable (initial assignment)
- `fw` → declares a variable that can be changed later
- Variables can be declared without value and assigned later

---

## 🔹 Data Types

```al
fw a = 10
fw b = 3.14
fw c = "hello"
fw d = 'world'
fw e = [1,2,3]
```

- Integers
- Floats
- Strings (`""` or `''`)
- Arrays (`[value, value]`)

---

## 🔹 Expressions

```al
fw x = 10
fw y = 20
fw z = x + y * 2
```

- Supports `+ - * / %`
- Works with variables and values

---

## 🔹 Assignment

```al
fw x
x = 50
x = x + 10
```

---

## 🔹 Print

```al
gugugaga(x)
gugugaga("Hello")
gugugaga(x + 5)
```

- Outputs values or expressions

---

## 🔹 Conditions

```al
lowk(x > 10){
  gugugaga("greater")
}

ngacontinue(x == 10){
  gugugaga("equal")
}

fr{
  gugugaga("smaller")
}
```

- `lowk` → if  
- `ngacontinue` → else if  
- `fr` → else  

---

## 🔹 Loops

```al
milk(i = 1; i <= 5; i = i + 1){
  gugugaga(i)
}
```

- Works like a for loop

---

## 🔹 Nested Blocks

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

## 🔹 Strings

```al
fw name = "Arnab"
fw msg = 'Hello'
gugugaga(name + " " + msg)
```

---

## 🔹 Arrays

```al
fw arr = [1,2,3]
```

---

## 🔹 Logical Example

```al
lowk(i % 2 == 1){
  gugugaga("odd")
}

ngacontinue(i % 2 == 0){
  gugugaga("even")
}
```

---

## 🔹 Example Program

```al
ts n = 5

milk(i = 1; i <= n; i = i + 1){
  fw row = ""

  milk(j = 1; j <= i; j = j + 1){
    row = row + j + " "
  }

  gugugaga(row)
}
```

---

# 🚀 ArnabLang Philosophy

ArnabLang is designed to:
- Explore how programming languages work internally
- Provide a simplified interpreter model
- Allow experimentation with custom syntax

---

# 👨‍💻 Author

Built by chips
ArnabLang is a custom experimental programming language.