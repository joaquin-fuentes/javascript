# Guía de Práctica – JavaScript Básico

Esta guía contiene ejercicios para practicar conceptos fundamentales de JavaScript.  
Utilizaremos solamente: variables, tipos de datos (`number`, `string`, `boolean`), operadores y algunos métodos básicos de `String` y `Math`.

---

## Ejercicio 1 – Longitud del nombre

**Objetivo:** Practicar `.trim()` y `.length`.

**Instrucciones:**  
Pide al usuario su nombre completo y muestra cuántos caracteres tiene, sin contar espacios al principio ni al final.

**Ejemplo esperado:**
```
input:     "  María González  "
output:    "Tu nombre tiene 15 caracteres."
```

---

## Ejercicio 2 – Mayúsculas y minúsculas

**Objetivo:** Usar `.toUpperCase()` y `.toLowerCase()`.

**Instrucciones:**  
Pide un texto y muestra su versión en mayúsculas y en minúsculas.

**Ejemplo esperado:**
```
input:     "JavaScript es genial"
output:    "Mayúsculas: JAVASCRIPT ES GENIAL"
           "Minúsculas: javascript es genial"
```

---

## Ejercicio 3 – Verificar palabra clave

**Objetivo:** Usar `.includes()` y `.toLowerCase()`.

**Instrucciones:**  
Pide un texto y verifica si contiene la palabra "javascript", sin importar mayúsculas o minúsculas.

**Ejemplo esperado:**
```
input:     "Me encanta programar en JavaScript"
output:    "¿Incluye 'javascript'? true"
```

---

## Ejercicio 4 – Extraer parte del string

**Objetivo:** Aplicar `.slice()`.

**Instrucciones:**  
Pide un texto y muestra los primeros 5 caracteres.

**Ejemplo esperado:**
```
input:     "Hola mundo"
output:    "Los primeros 5 caracteres son: Hola "
```

---

## Ejercicio 5 – Reemplazar palabra

**Objetivo:** Usar `.replace()`.

**Instrucciones:**  
Pide una frase que contenga la palabra "malo" y reemplázala por "bueno".

**Ejemplo esperado:**
```
input:     "Este libro es malo"
output:    "Este libro es bueno"
```

---

## Ejercicio 6 – Redondeo aleatorio

**Objetivo:** Practicar `Math.random()`, `Math.floor()`, `Math.ceil()`, y `Math.round()`.

**Instrucciones:**  
Genera un número aleatorio entre 0 y 10, y muestra:
- El número original
- Su versión redondeada
- Redondeo hacia abajo y hacia arriba

**Ejemplo esperado:**
```
output:    Número original: 6.726
           Redondeado: 7
           Floor: 6
           Ceil: 7
```

---

## Ejercicio 7 – Comparar dos números

**Objetivo:** Usar `Math.max()`.

**Instrucciones:**  
Pide dos números y muestra cuál es el mayor.

**Ejemplo esperado:**
```
input:     12
input:     8
output:    "El mayor es: 12"
```

---

## Ejercicio 8 – Mínimo y máximo

**Objetivo:** Aplicar `Math.min()` y `Math.max()`.

**Instrucciones:**  
Pide tres números y muestra cuál es el menor y cuál es el mayor.

**Ejemplo esperado:**
```
input:     4, 15, 9
output:    "El menor es: 4"
           "El mayor es: 15"
```

---

## Ejercicio 9 – Validar contraseña

**Objetivo:** Usar `.length`.

**Instrucciones:**  
Pide una contraseña y muestra si tiene al menos 8 caracteres.

**Ejemplo esperado:**
```
input:     "abc123"
output:    "¿Contraseña válida (8+ caracteres)? false"
```

---

## Ejercicio 10 – Cortar correo

**Objetivo:** Usar `.indexOf()` y `.slice()`.

**Instrucciones:**  
Pide un correo electrónico y muestra solo el nombre de usuario (todo lo que está antes del @).

**Ejemplo esperado:**
```
input:     "usuario123@gmail.com"
output:    "Nombre de usuario: usuario123"
```

---

## Ejercicio 11 – Suma y promedio

**Objetivo:** Practicar operadores aritméticos: `+`, `/`.

**Instrucciones:**  
Pide tres números y muestra la suma total y el promedio.

**Ejemplo esperado:**
```
input:     5, 10, 15
output:    "Suma: 30"
           "Promedio: 10"
```

---

## Ejercicio 12 – Edad mínima

**Objetivo:** Usar operadores de comparación (`>=`) y booleanos (`&&`).

**Instrucciones:**  
Pide una edad y muestra si la persona puede votar (18 años o más) **y** si no supera los 100 años.

**Ejemplo esperado:**
```
input:     25
output:    "¿Puede votar y está dentro del rango válido? true"
```

---

## Ejercicio 13 – Verificar número par

**Objetivo:** Usar el operador `%` (módulo).

**Instrucciones:**  
Pide un número y muestra si es par (divisible por 2).

**Ejemplo esperado:**
```
input:     14
output:    "¿Es par? true"
```

---

## Ejercicio 14 – Comparación múltiple

**Objetivo:** Combinar varios operadores de comparación.

**Instrucciones:**  
Pide dos números y muestra si el primero es mayor, menor o igual al segundo.

**Ejemplo esperado:**
```
input:     8
input:     12
output:    "¿El primero es mayor? false"
           "¿El primero es menor? true"
           "¿Son iguales? false"
```

---

## Ejercicio 15 – Calcular descuento

**Objetivo:** Aplicar operaciones matemáticas básicas con lógica.

**Instrucciones:**  
Pide un precio y un porcentaje de descuento, y muestra el precio final.

**Ejemplo esperado:**
```
input:     Precio: 1000
input:     Descuento: 25
output:    "Precio con descuento: 750"
```

---