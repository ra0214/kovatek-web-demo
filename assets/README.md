# assets/ — Imágenes

Esta carpeta está reservada para las imágenes propias del negocio cuando
se personalice la plantilla.

---

## Estado actual

**La carpeta está vacía a propósito.** En esta demo las imágenes se cargan
desde URLs externas (Unsplash) definidas en `js/main.js`.

Las imágenes actuales son de **interior de barbería, cortes, barba, herramientas
y estilismo masculino**. Se usan únicamente con fines ilustrativos y
**no representan al Barbería El Guapo** ni a ningún negocio real.

---

## Cómo agregar tus propias imágenes

### 1. Coloca los archivos aquí

```
assets/
├── hero.jpg          # Fondo de la sección Hero (horizontal, 1920x1280)
├── nosotros.jpg      # Sección Nosotros (vertical, 1000x1250)
├── galeria-1.jpg     # Galería 1 (cuadrada, 900x900)
├── galeria-2.jpg
├── galeria-3.jpg
├── galeria-4.jpg
├── galeria-5.jpg
└── galeria-6.jpg
```

### 2. Actualiza la configuración

Abre `js/main.js` y cambia el objeto `images`:

```js
const images = {
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
};
```

No necesitas tocar nada más: `index.html` ya apunta a esas rutas mediante
los atributos `data-img`.

### 3. Actualiza los textos alternativos

En `index.html`, cambia el `alt` de cada imagen para que describa la
fotografía real. Ejemplos:

```html
<img data-img="about" alt="Barbero perfilando la barba de un cliente" ...>
<img data-img="gallery.0" alt="Corte clásico con acabado al tijera" ...>
```

### 4. Actualiza la imagen de Open Graph

En el `<head>` de `index.html`:

```html
<meta property="og:image" content="assets/hero.jpg">
```

> Nota: las meta etiquetas de Open Graph requieren una **URL absoluta**
> cuando el sitio se publica en un dominio real
> (por ejemplo `https://misitio.com/assets/hero.jpg`).

---

## Especificaciones recomendadas

| Elemento | Medidas | Formato | Peso máximo |
|---|---|---|---|
| Hero (fondo) | 1920 × 1280 px | WebP o JPG | 250 KB |
| Nosotros | 1000 × 1250 px (4:5) | WebP o JPG | 180 KB |
| Galería (cada una) | 900 × 900 px (1:1) | WebP o JPG | 120 KB |
| Open Graph | 1200 × 630 px | JPG | 200 KB |

### Recomendaciones

* **Formato:** WebP ofrece el mejor peso con la misma calidad.
  JPG es compatible con todo. Evita PNG para fotografías.
* **Recorte:** el CSS ya aplica `object-cover`, así que
  las imágenes se adaptan al contenedor. Aun así, usa las proporciones
  indicadas para evitar cortes feos.
* **Foco de la imagen Hero:** el CSS posiciona el fondo en
  `center 30%` (ligeramente arriba del centro). Coloca el sujeto
  principal de la foto en esa zona.
* **Compresión:** usa [squoosh.app](https://squoosh.app) o
  [tinypng.com](https://tinypng.com) antes de subir las imágenes.
* **Nombres:** usa minúsculas, guiones y sin espacios
  (`galeria-1.jpg`, no `Galería 1 (final).jpg`).

---

## Sobre las imágenes de la demo

* Origen: [Unsplash](https://unsplash.com) (licencia de uso gratuito).
* Son fotografías genéricas de barbería.
* **No** muestran logos reales, no pertenecen al negocio de la demo
  y no deben presentarse como fotos del establecimiento.
* Al entregar el proyecto a un cliente, sustitúyelas por fotografías
  reales del negocio o con autorización explícita de uso.
