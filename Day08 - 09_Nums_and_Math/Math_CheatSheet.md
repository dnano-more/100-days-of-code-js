# 📌 Math Object Cheat Sheet (JavaScript Beginner Edition)

## 🔹 Properties

| Property      | Value (approx) | Use |
|---------------|----------------|-----|
| `Math.PI`     | 3.14159…       | Circle calculations |
| `Math.E`      | 2.718…         | Natural log base |
| `Math.SQRT2`  | 1.414…         | √2 |
| `Math.LN2`    | 0.693…         | ln(2) |
| `Math.LOG10E` | 0.434…         | log₁₀(e) |

## 🔹 Rounding

| Method | Example | Result |
|--------|---------|--------|
| `Math.round(4.6)` | → 5 | Nearest integer |
| `Math.floor(4.6)` | → 4 | Always down |
| `Math.ceil(4.2)`  | → 5 | Always up |
| `Math.trunc(4.9)` | → 4 | Just cut decimals |

## 🔹 Random

| Method | Example | Range |
|--------|---------|-------|
| `Math.random()` | → 0 ≤ x < 1 | Random decimal |
| `Math.floor(Math.random() * 10)` | → 0–9 | Random int |
| `Math.floor(Math.random() * 10) + 1` | → 1–10 | Random int |

## 🔹 Power & Roots

| Method | Example | Result |
|--------|---------|--------|
| `Math.pow(2, 3)` | → 8 | Power |
| `Math.sqrt(25)`  | → 5 | Square root |

## 🔹 Absolute & Sign

| Method | Example | Result |
|--------|---------|--------|
| `Math.abs(-7)` | → 7 | Absolute value |
| `Math.sign(-7)` | → -1 | Negative |
| `Math.sign(0)`  | → 0 | Zero |
| `Math.sign(9)`  | → 1 | Positive |

## 🔹 Min & Max

| Method | Example | Result |
|--------|---------|--------|
| `Math.min(2, 5, 1)` | → 1 | Smallest |
| `Math.max(2, 5, 1)` | → 5 | Largest |

---
✅ This covers **all beginner-friendly Math methods** you’ll use in real-world JS projects.
