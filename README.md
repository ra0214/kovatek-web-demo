# Demo Comercial — Barbería El Guapo

Demo de **sitio web profesional** para una barbería, creada para mostrar a posibles clientes
qué puede esperar de un trabajo real de diseño web.

> **Aviso importante**
> Este proyecto es una **demostración**. No contiene información verificada de un negocio real.
> Los precios, el texto de "Nosotros" y las imágenes son **contenido de ejemplo** y están
> marcados como tales en la página. No se han inventado dirección, horarios, reseñas,
> redes sociales ni datos reales del establecimiento.

---

## 1. Qué es el proyecto

Una página web de una sola página (*landing page*) con diseño premium, pensada para
pequeños negocios que hoy no tienen presencia en internet.

**Incluye:**

| Sección | Descripción |
|---|---|
| Navbar sticky | Logo, enlaces de navegación, botón **RESERVAR** con WhatsApp y menú móvil |
| Hero | Imagen de fondo, título, descripción y dos llamados a la acción |
| Servicios | 4 tarjetas con icono, nombre, descripción y precio (demo) |
| Nosotros | Dos columnas: imagen + texto con 3 características |
| Galería | Cuadrícula responsive de 6 imágenes con *lightbox* |
| Beneficios | 4 bloques numerados (01–04) |
| Llamada a la acción | Sección "¿Listo para tu próximo corte?" |
| Contacto | Ciudad, teléfono, botones de WhatsApp y "Cómo llegar" |
| Mapa | Bloque preparado para Google Maps (placeholder) |
| Footer | Marca, enlaces, contacto y aviso de demo |

**Tecnologías usadas** (solo frontend, sin backend ni base de datos):

* HTML5 semántico
* Tailwind CSS (CDN)
* JavaScript vanilla
* Google Fonts (Sora + Inter)
* Imágenes de demostración servidas desde Unsplash

**No se usa:** React, Angular, Vue, TypeScript, Node.js, npm, Firebase, API propias
ni ningún sistema de autenticación.

---

## 2. Cómo abrirlo

No requiere instalación, compilación ni servidor.

1. Abre la carpeta `demo-barberia`
2. Haz doble clic en **`index.html`**
3. Se abrirá en tu navegador

También puedes usar un servidor local opcional (si quieres ver el comportamiento
exacto de un hosting):

```bash
# con Python
python -m http.server 8000

# o con Node.js
npx serve .
```

Luego visita `http://localhost:8000`.

> La página carga Tailwind, las tipografías y las imágenes desde CDN, por lo que
> **necesita conexión a internet** para verse completa. El resto del código
> funciona siempre de forma local.

---

## 3. Cómo cambiar el nombre del negocio

Hay dos lugares. El primero es el más recomendado.

**A) Configuración de JavaScript** — `js/main.js`, bloque `business`:

```js
const business = {
  name: 'BARBERÍA EL GUAPO',
  brand: 'EL GUAPO',
  // ...
};
```

**B) Textos visibles en la página** — `index.html`:

| Qué cambiar | Dónde |
|---|---|
| Logo del navbar | `index.html` → busca `EL GUAPO` (dentro de `<header>`) |
| Marca del footer | `index.html` → busca `EL GUAPO` (dentro de `<footer>`) |
| Copyright | `index.html` → busca `© 2026 El Guapo` |
| Título del navegador (SEO) | `index.html` → `<title>` |
| Meta description | `index.html` → `<meta name="description">` |
| Open Graph | `index.html` → etiquetas `og:title`, `og:description`, `og:site_name` |

> Los textos que **no** debes olvidar al reutilizar la plantilla:
> el `<h1>` del hero, los `<h2>` de cada sección y el mensaje de WhatsApp.

---

## 4. Cómo cambiar el teléfono

**Archivo:** `js/main.js` → objeto `business`

```js
phone: '9511644012',        // solo dígitos, para el enlace tel:
phoneDisplay: '951 164 4012', // con espacios, como se muestra
```

**También en `index.html`**, los enlaces telefónicos usan el atributo `href`:

```html
<a href="tel:9511644012">951 164 4012</a>
```

Busca `tel:9511644012` y replaces por tu número (solo dígitos, con clave de país
y sin guiones: `tel:529511644012`).

---

## 5. Cómo cambiar WhatsApp

**Un solo lugar.** El número está centralizado en `js/main.js`:

```js
const whatsappNumber = '529511644012';
```

Este valor alimenta `business.whatsapp` y se usa en la función `openWhatsApp()`,
que a su vez está conectada a **todos** los botones con el atributo `data-whatsapp`.

Para cambiarlo:

1. Edita `const whatsappNumber` en `js/main.js`
2. Listo. No repitas el número en ningún otro archivo

**Formato:** solo números, con clave de país y sin `+`, espacios ni guiones.
Ejemplos:

| País | Valor |
|---|---|
| México | `529511644012` |
| España | `34600111222` |
| Colombia | `573001234567` |

**Mensaje inicial** (se puede personalizar):

```js
whatsappMessage: 'Hola, me gustaría solicitar información sobre sus servicios.',
```

**Agregar un botón de WhatsApp nuevo** — no necesitas JavaScript adicional,
solo agrega el atributo en cualquier elemento:

```html
<button type="button" data-whatsapp>Reservar</button>
```

---

## 6. Cómo cambiar los servicios

Existen dos lugares, porque las tarjetas están escritas directamente en el HTML
(para que la página funcione y sea indexable sin JavaScript).

**A) En la página** — `index.html` → sección `#servicios`.
Duplica o elimina un bloque `<article>` completo para añadir o quitar servicios.

**B) En la configuración** — `js/main.js` → array `services`.
Está preparado para la futura versión dinámica de la plantilla:

```js
const services = [
  { id: 'corte-clasico', name: 'Corte clásico', price: 150, currency: 'MXN', isDemo: true },
  { id: 'corte-barba',  name: 'Corte + barba', price: 220, currency: 'MXN', isDemo: true },
  { id: 'perfilado-barba', name: 'Perfilado de barba', price: 120, currency: 'MXN', isDemo: true },
  { id: 'corte-infantil', name: 'Corte infantil', price: 130, currency: 'MXN', isDemo: true }
];
```

> En esta versión el array es **documentación y punto de partida**: las tarjetas
> visibles siguen siendo las del HTML. Cuando se construya la versión dinámica,
> este array será la fuente de datos.

Para cambiar solo el **nombre** de un servicio, edita el `<h3>` de su tarjeta.
Para cambiar el **icono**, reemplaza el `<svg>` dentro del
`<span>` que lo contiene.

---

## 7. Cómo cambiar los precios

**Archivo:** `index.html` → sección `#servicios`

En cada tarjeta, el precio está en el bloque inferior:

```html
<div class="mt-7 flex items-end justify-between border-t border-ink/8 pt-5">
  <p class="font-display text-xl font-semibold text-ink">$150 <span class="text-sm font-medium text-charcoal/70">MXN</span></p>
  <span class="rounded-full border border-ink/12 bg-mist px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-charcoal/70">Demo</span>
</div>
```

* Cambia `150` por tu precio.
* Cambia `MXN` por tu moneda.
* **Cuando los precios sean reales, elimina la insignia `Demo`** y también la nota
  al pie de la sección:

```html
<p data-reveal class="mt-8 flex items-start gap-2 text-xs leading-relaxed text-charcoal/70">
  Precios y servicios mostrados únicamente con fines de demostración...
</p>
```

 Recuerda actualizar también el array `services` en `js/main.js`.

---

## 8. Cómo cambiar las imágenes

Todas las imágenes están **centralizadas** en `js/main.js`, dentro del objeto `images`:

```js
const images = {
  hero: 'https://images.unsplash.com/photo-...',
  about: 'https://images.unsplash.com/photo-...',
  gallery: [
    'https://images.unsplash.com/photo-...',  // 1
    'https://images.unsplash.com/photo-...',  // 2
    'https://images.unsplash.com/photo-...',  // 3
    'https://images.unsplash.com/photo-...',  // 4
    'https://images.unsplash.com/photo-...',  // 5
    'https://images.unsplash.com/photo-...'   // 6
  ]
};
```

Y se asignan a la página mediante atributos `data-img` en `index.html`:

| Atributo | Dónde se usa |
|---|---|
| `data-img="hero"` | Fondo de la sección Hero |
| `data-img="about"` | Imagen de la sección Nosotros |
| `data-img="gallery.0"` … `gallery.5` | Las 6 imágenes de la galería |

**Recomendación:** al usar imágenes reales, guárdalas en la carpeta `assets/`
y usa rutas locales (más rápido y sin depender de internet):

```js
hero: 'assets/hero.jpg',
about: 'assets/nosotros.jpg',
gallery: [
  'assets/galeria-1.jpg',
  'assets/galeria-2.jpg',
  'assets/galeria-3.jpg',
  'assets/galeria-4.jpg',
  'assets/galeria-5.jpg',
  'assets/galeria-6.jpg'
]
```

**Tips:**

* Formato recomendado: **WebP** o **JPG**, entre 1200 y 2000 px de ancho.
* Peso ideal por imagen: menos de **200 KB**.
* No olvides actualizar el `alt` de cada `<img>` en `index.html` (describe la
  imagen real; está vacío es un error de accesibilidad).
* Recuerda cambiar también la imagen de Open Graph en `index.html`
  (`og:image`).

Consulta `assets/README.md` para más detalles sobre imágenes.

---

## 9. Cómo cambiar la ciudad

**A) Configuración** — `js/main.js` → objeto `business`

```js
city: 'Oaxaca de Juárez, Oaxaca',
```

**B) Textos visibles** — `index.html`. Busca `Oaxaca de Juárez` y reemplázalo.
Aparece en 4 lugares:

1. Hero (barra inferior de información)
2. Sección Contacto
3. Footer
4. Meta description / Open Graph

---

## 10. Cómo cambiar los colores

La paleta está definida en **dos lugares synced**. Cambia ambos.

**A) Configuración de Tailwind** — `index.html`, dentro de `<script>`:

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#111827',        // fondo oscuro / texto principal
        charcoal: '#1F2937',   // fondo oscuro secundario
        mist: '#F9FAFB',       // fondo claro
        gold: '#C39717',       // color de acento
        'gold-deep': '#8A6A12',// dorado legible sobre fondo claro
        'gold-soft': '#E8D9A8' // dorado claro para hover
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],  // títulos
        body: ['Inter', 'sans-serif']     // texto
      }
    }
  }
};
```

**B) Variables CSS** — `index.html`, dentro de `<style>` (se usan en el navbar,
el lightbox, las animaciones y el hover del menú):

```css
:root {
  --c-ink: #111827;
  --c-charcoal: #1F2937;
  --c-mist: #F9FAFB;
  --c-gold: #C39717;
  --c-gold-deep: #8A6A12;
}
```

**Notas importantes:**

* `gold` (`#C39717`) se usa sobre fondos oscuros: botones, iconos, subrayados.
  Sobre fondos claros el texto dorado no cumple contraste, por eso existe
  `gold-deep`, que es el mismo dorado más oscuro.
* Si cambias el color de acento, verifica el contraste:
  **mínimo 4.5:1** para texto normal y **3:1** para texto grande.
* Para cambiar las tipografías, edita también el `<link>` de Google Fonts
  en `<head>` y las dos listas en `tailwind.config`.

---

## Bonus: otros datos personalizables

### Mapa de Google Maps

`js/main.js` → objeto `business`:

```js
mapsUrl: '',
```

Pega ahí el enlace de Google Maps y el botón **"Cómo llegar"** abrirá la ubicación
real. Mientras esté vacío, muestra un aviso indicando que la ubicación se
agregará al personalizar la página.

Para embeber el mapa directamente, reemplaza el bloque con marca
`"Mapa pendiente de configurar"` (en la sección `#contacto`) por:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  class="h-full min-h-[18rem] w-full rounded-2xl border-0"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Ubicación del negocio"></iframe>
```

### Etiquetas de "Demo"

Para que la página deje de ser una demo, elimina o reescribe estos elementos:

| Ubicación | Texto |
|---|---|
| Navbar | La palabra `Demo` debajo del logo |
| Servicios | Las insignias `Demo` en cada precio |
| Servicios | La nota "Precios y servicios mostrados únicamente con fines de demostración..." |
| Nosotros | "Texto de demostración. Sustituir por la información real..." |
| Galería | "Selección de imágenes de referencia para esta demostración." |
| Galería | La insignia "Imágenes de demostración" |
| Hero | "Imagen de demostración · Unsplash" |
| Contacto | "Este sitio es una demostración con datos de ejemplo." |
| Footer | "Demo de sitio web para negocio..." |
| Footer | "© 2026 El Guapo — Demo" |
| Footer | "Plantilla reutilizable · Sin datos reales verificados" |
| `index.html` head | `<meta name="robots" content="noindex, nofollow">` |

> Quita `noindex, nofollow` antes de publicar el sitio real, o no aparecerá
> en buscadores.

---

## Estructura del proyecto

```
demo-barberia/
│
├── index.html      # Estructura y contenido de la página
├── js/
│   └── main.js     # Configuración + toda la lógica
├── assets/
│   └── README.md   # Guía de imágenes
└── README.md       # Este archivo
```

### Resumen de `js/main.js`

| Sección | Contenido |
|---|---|
| 1 | Configuración central (`business`, `services`, `images`) |
| 2 | WhatsApp (`openWhatsApp`) |
| 3 | Menú móvil |
| 4 | Scroll suave |
| 5 | Navbar al hacer scroll |
| 6 | Lightbox de galería |
| 7 | Botón volver arriba |
| 8 | Animaciones al aparecer las secciones |
| 9 | Google Maps (placeholder) |
| 10 | Inicialización |

Todo está dentro de una función anónima (IIFE) en modo estricto, sin variables
globales salvo `window.demoSite`, que expone la configuración para facilitar
la depuración desde la consola del navegador.

---

## Funcionalidades incluidas

* Menú móvil con animación y cierre automático
* Scroll suave con compensación del navbar fijo
* Navbar que cambia de opacidad al hacer scroll
* Galería con *lightbox* (ESC, clic fuera y botón para cerrar)
* Botón de volver arriba
* Animaciones de entrada con `IntersectionObserver`
* Envío de mensajes por WhatsApp con un solo clic
* Respeto a `prefers-reduced-motion` (accesibilidad)
* Enlace "Saltar al contenido" para navegación por teclado

---

## Compatibilidad

Probado en Chrome, Edge y Firefox (versiones recientes), en anchos de
**320 px** a **1920 px**, sin scroll horizontal.

## Licencia y uso

Demo comercial creada para presentación de trabajos.
Las fotografías de Unsplash se usan únicamente con fines ilustrativos y
**no representan el negocio mostrado**. Sustitúyelas por fotografías propias
antes de entregar el sitio a un cliente.
