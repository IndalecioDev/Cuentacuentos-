# 📖 El Libro de las Sombras

Un cuentacuentos web de atmósfera oscura y misteriosa. Nueve historias cortas divididas en páginas, con estética de libro antiguo, velas animadas y cielo estrellado.

![Vista previa](https://img.shields.io/badge/HTML-CSS-JS-vanilla-black?style=flat-square)
![Sin dependencias](https://img.shields.io/badge/dependencias-ninguna-gold?style=flat-square)
![Licencia MIT](https://img.shields.io/badge/licencia-MIT-green?style=flat-square)

---

## ✨ Características

- 9 cuentos originales divididos en 3 páginas cada uno
- Navegación entre páginas con botones Anterior / Siguiente
- Letra capital decorativa al inicio de cada cuento
- Velas SVG animadas con efecto de parpadeo
- Fondo estrellado animado con efecto twinkle
- Diseño responsive para móvil y escritorio
- Sin frameworks, sin dependencias — HTML, CSS y JS puro

---

## 📁 Estructura

```
libro-de-las-sombras/
├── index.html   — estructura HTML y SVGs de las velas
├── styles.css   — estilos, animaciones y tipografía
├── app.js       — datos de los cuentos y lógica de navegación
└── README.md    — este archivo
```

---

## 🚀 Uso

No necesita servidor ni instalación. Solo abre `index.html` en cualquier navegador moderno:

```bash
# Opción 1 — abrir directamente
open index.html

# Opción 2 — servidor local con Python
python -m http.server 8000
# luego visita http://localhost:8000

# Opción 3 — servidor local con Node
npx serve .
```

---

## 📚 Los cuentos

| # | Título | Tema |
|---|--------|------|
| 1 | La Dama del Espejo | Un espejo que muestra una habitación desconocida |
| 2 | El Puente del Olvido | Cruzarlo cuesta un recuerdo |
| 3 | La Coleccionista de Últimas Palabras | Llega antes de que nadie la llame |
| 4 | El Relojero Sin Sombra | Relojes que interpretan el tiempo |
| 5 | La Casa que Respira | Una fachada que se mueve cada cuatro segundos |
| 6 | El Cartógrafo de lo Invisible | Mapas de lugares que aún no existen |
| 7 | El Jardín de los que No Duermen | Flores nocturnas con caras de muertos |
| 8 | La Niña que Contaba Pájaros | Cuervos que anuncian lo que viene |
| 9 | El Hombre que Coleccionaba Despedidas | Frascos con el eco de los últimos adioses |

---

## 🎨 Tipografía

- **Cinzel Decorative** — títulos y letra capital (Google Fonts)
- **EB Garamond** — cuerpo del texto (Google Fonts)

Ambas fuentes se cargan desde Google Fonts. Para uso offline, descárgalas e inclúyelas localmente con `@font-face`.

---

## 🛠️ Personalización

### Añadir un cuento nuevo

En `app.js`, añade un objeto al array `stories`:

```js
{
  title:  'El título del cuento',
  teaser: 'Una frase corta que aparece en la card.',
  icon:   '🕯️',           // emoji que aparece en la card
  accent: '#8b5a2b',      // color de acento de la card (hex)
  pages: [
    `<p>Primer párrafo de la página 1.</p><p>Segundo párrafo.</p>`,
    `<p>Página 2...</p>`,
    `<p>Página 3...</p>`
  ]
}
```

Cada elemento de `pages` es HTML. Puedes usar `<p>`, `<em>`, `<strong>` libremente.

### Cambiar colores globales

Los colores principales están en `styles.css`. Las referencias de oro son:

```css
color: #c9a86c;                              /* dorado principal */
text-shadow: 0 0 30px rgba(201,168,108,0.4); /* halo dorado */
background: #0a0608;                          /* fondo oscuro */
```

---



*Escoge un cuento. Apaga la luz. Escucha.*
