/* =============================================================================
   NERO BARBER STUDIO — Demo comercial de página web
   JavaScript vanilla (sin frameworks, sin dependencias)

   AVISO
   NERO Barber Studio es una marca ficticia creada como ejemplo.
   El número de WhatsApp configurado es el canal comercial de quien ofrece
   el servicio de creación de páginas web, no el contacto de la marca.

   CONTENIDO
   1. Configuración central del negocio
   2. Utilidades de formato
   3. Iconos SVG
   4. Render de contenido dinámico
   5. Imágenes
   6. SEO dinámico
   7. WhatsApp
   8. Menú móvil
   9. Scroll suave
   10. Navbar al hacer scroll
   11. Lightbox de galería
   12. Botón volver arriba
   13. Animaciones al aparecer las secciones
   14. Google Maps
   15. Inicialización

   PARA PERSONALIZAR
   Modifica únicamente la sección 1 (business, services, images, contactRows,
   socialLinks). El resto de la página se genera a partir de esos datos.

   REGLA DE ORO
   Cualquier campo vacío ('' o null) oculta automáticamente su bloque:
   dirección, horarios, redes sociales, mapa, precios, teléfono y logotipo.
   ============================================================================= */

(function () {
  'use strict';

  /* ===========================================================================
     1. CONFIGURACIÓN CENTRAL DEL NEGOCIO
     =========================================================================== */

  /**
   * Número de WhatsApp con clave de país, solo dígitos. ÚNICA fuente del número.
   * Es el canal comercial de quien ofrece el servicio de páginas web:
   * no pertenece a la marca ficticia NERO Barber Studio.
   */
  const whatsappNumber = '5219612165495';

  /**
   * En esta demo no se muestra ningún teléfono, para no atribuir un número
   * real a la marca ficticia. Con un negocio real, ponlo en true y el
   * teléfono se deriva automáticamente del número de WhatsApp.
   */
  const showPhone = false;

  const business = {
    name: 'NERO Barber Studio',
    brand: 'NERO',
    brandTagline: 'Barber Studio',
    category: 'Barbería',
    tagline: 'Estilo. Precisión. Presencia.',
    servicesSummary: 'Corte, barba e infantil',

    /* Sin datos de contacto reales: déjalos vacíos y el bloque se oculta solo. */
    city: '',
    address: '',
    hours: '',
    logo: '',
    heroImage: '',
    mapsUrl: '',
    instagramUrl: '',
    facebookUrl: '',
    tiktokUrl: '',
    siteUrl: '',

    /* El teléfono se deriva del número de WhatsApp: no lo escribas aquí. */
    phone: showPhone ? whatsappNumber.replace(/^52/, '') : '',
    phoneDisplay: showPhone ? formatPhoneDisplay(whatsappNumber) : '',

    whatsapp: whatsappNumber,
    whatsappMessage:
      'Hola, vi tu demostración de página web y me interesa saber cómo puedo tener una página para mi negocio.',
    mapsPendingMessage:
      'La ubicación se confirma directamente por WhatsApp. Escríbenos para recibir todos los detalles.',
    heroImageAlt: 'NERO Barber Studio',
    demoNote:
      'NERO Barber Studio es una marca ficticia creada como ejemplo de diseño web. Las imágenes son de referencia.',

    /* SEO: se escribe una sola vez aquí y se refleja en el HTML con JS. */
    seoTitle: 'NERO Barber Studio | Demo de página web',
    seoDescription: [
      'Una página web profesional para tu negocio.',
      'Presenta tus servicios, muestra tu trabajo y facilita que tus clientes te contacten por WhatsApp.'
    ]
  };

  /**
   * Servicios de la barbería ficticia NERO Barber Studio.
   * Contenido de demostración: descripciones genéricas, sin afirmaciones
   * sobre un negocio real.
   * - price: número para mostrarlo, o null para mostrar «Consultar».
   * - duration: texto opcional (por ejemplo '45 min'); vacío = no se muestra.
   * - icon: clave de ICONS.
   */
  const services = [
    {
      id: 'corte-clasico',
      name: 'Corte clásico',
      description: 'Corte de cabello a medida, con lavado y acabado final.',
      icon: 'scissors',
      price: null,
      currency: 'MXN',
      duration: ''
    },
    {
      id: 'corte-barba',
      name: 'Corte + barba',
      description: 'Corte de cabello y perfilado de barba en una sola visita.',
      icon: 'scissorsCircle',
      price: null,
      currency: 'MXN',
      duration: ''
    },
    {
      id: 'arreglo-barba',
      name: 'Arreglo de barba',
      description: 'Perfilado de barba con toalla caliente y acabado.',
      icon: 'scissors',
      price: null,
      currency: 'MXN',
      duration: ''
    },
    {
      id: 'corte-infantil',
      name: 'Corte infantil',
      description: 'Corte de cabello para los más pequeños. Consulta detalles por WhatsApp.',
      icon: 'person',
      price: null,
      currency: 'MXN',
      duration: ''
    }
  ];

  /**
   * Imágenes centralizadas. Sustituye estas URLs por las tuyas.
   * Puedes usar rutas locales: 'assets/galeria-1.jpg'
   * `alt` se aplica a la imagen y al lightbox de la galería.
   */
  const images = {
    hero: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1920&h=1280&q=70',
    heroAlt: 'Interior de una barbería',
    about: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&h=1250&q=70',
    aboutAlt: 'Barbero trabajando en un corte',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&h=900&q=70',
        alt: 'Corte de cabello en una barbería'
      },
      {
        src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&h=900&q=70',
        alt: 'Perfilado y arreglo de barba'
      },
      {
        src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&h=900&q=70',
        alt: 'Interior y sillones de una barbería'
      },
      {
        src: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=900&h=900&q=70',
        alt: 'Herramientas de barbería sobre una mesa'
      },
      {
        src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&h=900&q=70',
        alt: 'Acabado de estilo masculino'
      },
      {
        src: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&w=900&h=900&q=70',
        alt: 'Detalle de una máquina de corte'
      }
    ]
  };

  /**
   * Imagen principal del hero.
   * `business.heroImage` tiene prioridad; `images.hero` queda como fallback.
   * La misma resolución usa el hero visible y la etiqueta `og:image`.
   */
  const heroImage = business.heroImage || images.hero;

  /** Texto alternativo del hero, según la imagen que esté en uso. */
  const heroImageAlt = business.heroImage ? business.heroImageAlt : images.heroAlt;

  /**
   * Puntos de la sección Nosotros.
   * Describen la propuesta de la página, no la historia de un negocio real.
   */
  const aboutList = [
    'Diseño sobrio y atemporal',
    'Información clara y ordenada',
    'Contacto directo por WhatsApp'
  ];

  /** Filas de información de contacto. Las que estén vacías no se muestran. */
  const contactRows = [
    { key: 'category', label: 'Categoría', icon: 'scissors' },
    { key: 'servicesSummary', label: 'Servicios', icon: 'scissorsCircle' },
    { key: 'city', label: 'Ciudad', icon: 'map' },
    { key: 'address', label: 'Dirección', icon: 'map' },
    { key: 'phone', label: 'Teléfono', icon: 'phone' },
    { key: 'hours', label: 'Horarios', icon: 'clock' }
  ];

  /** Redes sociales. Si la URL está vacía, el icono no se muestra. */
  const socialLinks = [
    { key: 'instagramUrl', label: 'Instagram', icon: 'instagram' },
    { key: 'facebookUrl', label: 'Facebook', icon: 'facebook' },
    { key: 'tiktokUrl', label: 'TikTok', icon: 'tiktok' }
  ];

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HEADER_OFFSET = 72;

  /* ===========================================================================
     2. UTILIDADES DE FORMATO
     =========================================================================== */

  /** Arma el teléfono visible a partir del número de WhatsApp. */
  function formatPhoneDisplay(digits) {
    const local = String(digits).replace(/^52/, '');
    return local.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
  }

  /** Escapa texto que viene de la configuración antes de insertarlo en el HTML. */
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  /* ===========================================================================
     3. ICONOS SVG
     =========================================================================== */

  const ICONS = {
    scissors: '<path d="M6.5 9 4 6.5 6.5 4M17.5 15l2.5 2.5-2.5 2.5M4 4l16 16M20 4 4 20"/>',
    scissorsCircle:
      '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.1 8.1 20 20M8.1 15.9 20 4"/>',
    person: '<circle cx="12" cy="9" r="5"/><path d="M7 21a7 7 0 0 1 10 0"/>',
    map: '<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>',
    phone: '<path d="M6.5 3.5h3l1.6 4-2 1.4a11.5 11.5 0 0 0 5.5 5.5l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.2v5.2l3.4 2"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    instagram:
      '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>',
    facebook: '<path d="M14.5 8.5h2.2V5.6h-2.4c-2.2 0-3.6 1.4-3.6 3.6v1.6H8.4v3h2.3V21h3.1v-7.2h2.4l.4-3h-2.8V9.7c0-.8.3-1.2 1.1-1.2Z"/>',
    tiktok:
      '<path d="M14.5 3.5v10.8a3.4 3.4 0 1 1-3.4-3.4"/><path d="M14.5 3.5c.6 2.6 2.4 4.1 5 4.3"/>'
  };

  /** Devuelve un SVG inline con los traits de línea del diseño. */
  function icon(name, className) {
    const paths = ICONS[name] || '';
    return (
      '<svg class="' + className + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      paths +
      '</svg>'
    );
  }

  /* ===========================================================================
     4. RENDER DE CONTENIDO DINÁMICO
     =========================================================================== */

  /**
   * Campos de texto que se rellenan desde business y se ocultan si están vacíos.
   * El resto de [data-field] (mapa, etc.) los gestiona su propia función de render.
   */
  const MANAGED_FIELDS = ['brand', 'brandTagline', 'category', 'name', 'city', 'year'];

  /** Rellena los textos marcados con data-field y oculta los que están vacíos. */
  function renderFields() {
    document.querySelectorAll('[data-field]').forEach(function (element) {
      const key = element.getAttribute('data-field');
      if (MANAGED_FIELDS.indexOf(key) === -1) return;

      let value = business[key];
      if (key === 'year') value = String(new Date().getFullYear());

      if (value == null || value === '') {
        element.textContent = '';
        element.classList.add('hidden');
        return;
      }

      element.classList.remove('hidden');
      element.textContent = value;
    });
  }

  /** Logotipo: si no existe, se conserva el ícono de tijeras del encabezado. */
  function renderLogo() {
    function logoImage(className) {
      const img = document.createElement('img');
      img.src = business.logo;
      img.alt = business.name;
      img.className = className;
      img.loading = 'lazy';
      img.decoding = 'async';
      return img;
    }

    const header = document.querySelector('[data-logo="header"]');
    if (header && business.logo) {
      header.innerHTML = '';
      header.appendChild(logoImage('h-4 w-4 object-contain'));
    }

    const footer = document.querySelector('[data-logo="footer"]');
    if (footer) {
      if (business.logo) {
        footer.appendChild(logoImage('h-10 w-auto object-contain'));
      } else {
        footer.classList.add('hidden');
      }
    }
  }

  /** Datos del hero: ciudad, dirección, horarios y teléfono (solo los que existan). */
  function renderHeroMeta() {
    const container = document.querySelector('[data-render="heroMeta"]');
    if (!container) return;

    const items = [];
    if (business.city) items.push('<li>' + escapeHtml(business.city) + '</li>');
    if (business.address) items.push('<li>' + escapeHtml(business.address) + '</li>');
    if (business.hours) items.push('<li>' + escapeHtml(business.hours) + '</li>');
    if (business.phoneDisplay) {
      items.push(
        '<li><a href="tel:' + business.phone + '" class="inline-block py-1 transition-colors duration-300 hover:text-gold">' +
          escapeHtml(business.phoneDisplay) +
        '</a></li>'
      );
    }

    const separator = '<li class="hidden h-3 w-px bg-white/20 sm:block" aria-hidden="true"></li>';
    container.innerHTML = items.join(separator);
    container.classList.toggle('hidden', items.length === 0);
  }

  /** Tarjetas de servicios con precio opcional y CTA de reserva. */
  function renderServices() {
    const container = document.querySelector('[data-render="services"]');
    if (!container) return;

    const consultButton =
      '<button type="button" data-whatsapp class="inline-flex items-center gap-2 py-2.5 font-display text-sm font-semibold ' +
      'text-gold-deep transition-colors duration-300 hover:text-ink">' +
      'Consultar' + icon('arrow', 'h-4 w-4') + '</button>';

    container.innerHTML = services
      .map(function (service, index) {
        const price =
          typeof service.price === 'number' && isFinite(service.price)
            ? '<p class="font-display text-xl font-semibold text-ink">$' + service.price +
              ' <span class="text-sm font-medium text-charcoal/70">' + escapeHtml(service.currency || 'MXN') + '</span></p>'
            : consultButton;

        const duration = service.duration
          ? '<p class="mt-1 text-xs text-charcoal/55">' + escapeHtml(service.duration) + '</p>'
          : '';

        // Con un número impar de tarjetas, la última se centra en la fila de 2 columnas.
        const isLastOdd = index === services.length - 1 && services.length % 2 === 1;
        const columnClass = isLastOdd ? ' sm:col-start-2 lg:col-start-auto' : '';

        return (
          '<article data-reveal data-reveal-delay="' + ((index % 4) + 1) + '" ' +
          'class="group flex flex-col rounded-2xl border border-ink/8 bg-white p-7 transition-all duration-300 ' +
          'hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_28px_60px_-34px_rgba(17,24,39,0.45)]' + columnClass + '">' +
            '<span class="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-gold/8 text-gold-deep ' +
            'transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">' + icon(service.icon, 'h-6 w-6') + '</span>' +
            '<h3 class="mt-6 font-display text-lg font-semibold text-ink">' + escapeHtml(service.name) + '</h3>' +
            '<p class="mt-2.5 flex-1 text-sm leading-relaxed text-charcoal/65">' + escapeHtml(service.description) + '</p>' +
            duration +
            '<div class="mt-7 flex items-end justify-between border-t border-ink/8 pt-5">' + price + '</div>' +
          '</article>'
        );
      })
      .join('');
  }

  /** Lista de puntos con palomita dentro de la sección Nosotros. */
  function renderAboutList() {
    const container = document.querySelector('[data-render="aboutList"]');
    if (!container) return;

    const check =
      '<span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold/40 text-gold" aria-hidden="true">' +
        '<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5 9.5 18 20 6.5"/></svg>' +
      '</span>';

    container.innerHTML = aboutList
      .map(function (item, index) {
        return (
          '<li data-reveal data-reveal-delay="' + (index + 1) + '" class="flex items-start gap-3.5">' +
          check +
          '<span class="text-sm text-white/80 sm:text-base">' + escapeHtml(item) + '</span>' +
          '</li>'
        );
      })
      .join('');

    container.classList.toggle('hidden', aboutList.length === 0);
  }

  /** Dirección y horarios dentro de la sección Nosotros. */
  function renderAboutMeta() {
    const container = document.querySelector('[data-render="aboutMeta"]');
    if (!container) return;

    const blocks = [];
    if (business.address) {
      blocks.push(block('Dirección', business.address));
    }
    if (business.hours) {
      blocks.push(block('Horarios', business.hours));
    }

    container.innerHTML = blocks.join('');
    container.classList.toggle('hidden', blocks.length === 0);

    function block(label, value) {
      return (
        '<p class="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold/80">' + escapeHtml(label) + '</p>' +
        '<p class="mt-1.5 text-sm text-white/75">' + escapeHtml(value) + '</p>'
      );
    }
  }

  /** Información de contacto: filas con ícono, etiqueta y valor. */
  function renderContactInfo() {
    const container = document.querySelector('[data-render="contactInfo"]');
    if (!container) return;

    const rows = [];
    contactRows.forEach(function (row) {
      const value = row.key === 'phone' ? business.phoneDisplay : business[row.key];
      if (!value) return;

      const text =
        row.key === 'phone'
          ? '<a href="tel:' + business.phone + '" class="inline-block py-1 transition-colors duration-300 hover:text-gold-deep">' +
            escapeHtml(value) +
          '</a>'
          : escapeHtml(value);

      rows.push(
        '<div class="flex items-start gap-4">' +
          '<span class="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/8 text-gold-deep">' +
            icon(row.icon, 'h-5 w-5') +
          '</span>' +
          '<div>' +
            '<h3 class="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">' + escapeHtml(row.label) + '</h3>' +
            '<p class="mt-1.5 text-base text-charcoal/75">' + text + '</p>' +
          '</div>' +
        '</div>'
      );
    });

    container.innerHTML = rows.join('<div class="my-8 h-px bg-ink/8" aria-hidden="true"></div>');
  }

  /** Redes sociales en contacto y pie de página. Se ocultan si no hay URL. */
  function renderSocial() {
    const available = socialLinks.filter(function (item) {
      return Boolean(business[item.key]);
    });

    document.querySelectorAll('[data-render="social"]').forEach(function (container) {
      container.classList.toggle('hidden', available.length === 0);
      if (!available.length) {
        container.innerHTML = '';
        return;
      }

      const links = available
        .map(function (item) {
          const base =
            'inline-flex items-center justify-center rounded-full border border-white/20 text-white/70 ' +
            'transition-colors duration-300 hover:border-gold hover:text-gold';
          const size = container.getAttribute('data-render-size') === 'small' ? 'h-9 w-9' : 'h-11 w-11';

          return (
            '<a href="' + business[item.key] + '" target="_blank" rel="noopener noreferrer" ' +
            'class="' + base + ' ' + size + '" aria-label="' + escapeHtml(item.label) + '">' +
              icon(item.icon, 'h-4 w-4') +
            '</a>'
          );
        })
        .join('');

      container.innerHTML =
        '<h2 class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-white">Redes</h2>' +
        '<ul class="mt-4 flex items-center gap-3">' + links + '</ul>';
    });
  }

  /** Datos de contacto del pie de página. */
  function renderFooterContact() {
    const container = document.querySelector('[data-render="footerContact"]');
    if (!container) return;

    const items = [];
    if (business.city) items.push('<li class="py-1.5">' + escapeHtml(business.city) + '</li>');
    if (business.address) items.push('<li class="py-1.5">' + escapeHtml(business.address) + '</li>');
    if (business.hours) items.push('<li class="py-1.5">' + escapeHtml(business.hours) + '</li>');
    if (business.phoneDisplay) {
      items.push(
        '<li><a href="tel:' + business.phone + '" class="inline-block py-1.5 transition-colors duration-300 hover:text-gold">' +
          escapeHtml(business.phoneDisplay) +
        '</a></li>'
      );
    }
    items.push(
      '<li><button type="button" data-whatsapp class="inline-block py-1.5 text-left transition-colors duration-300 hover:text-gold">' +
        'Solicitar información</button></li>'
    );

    container.innerHTML = items.join('');
  }

  /** Descripción corta del pie de página: categoría y eslogan de la marca. */
  function renderFooterAbout() {
    const container = document.querySelector('[data-render="footerAbout"]');
    if (!container) return;

    const sentences = [];
    if (business.city) sentences.push('Barbería en ' + business.city + '.');
    if (business.category) sentences.push(business.category + '.');
    if (business.tagline) sentences.push(business.tagline);

    container.textContent = sentences.join(' ');
  }

  /** Aviso legal del pie: la marca es ficticia y las imágenes son de referencia. */
  function renderDemoNote() {
    const container = document.querySelector('[data-render="demoNote"]');
    if (!container) return;
    container.textContent = business.demoNote;
  }

  /** Tarjeta de mapa: neutra si no hay URL, con enlace a Google Maps si la hay. */
  function renderMapCard() {
    const hasMaps = Boolean(business.mapsUrl);
    const text = document.querySelector('[data-field="mapText"]');
    const badge = document.querySelector('[data-field="mapBadge"]');
    const address = document.querySelector('[data-field="mapAddress"]');

    if (address) {
      address.textContent = business.address || '';
      address.classList.toggle('hidden', !business.address);
    }
    if (text) {
      text.textContent = hasMaps
        ? 'Consulta nuestra ubicación en Google Maps y llega fácilmente.'
        : 'Escríbenos por WhatsApp y te ayudamos a confirmar tu cita.';
    }
    if (badge) {
      badge.textContent = hasMaps ? 'Google Maps' : 'Ubicación por confirmar';
    }

    document.querySelectorAll('[data-field="mapButtonLabel"]').forEach(function (label) {
      label.textContent = hasMaps ? 'Ver en Google Maps' : 'Consultar ubicación';
    });
  }

  /* ===========================================================================
     5. IMÁGENES
     =========================================================================== */

  /** Resuelve una clave con notación de punto: 'gallery.0' -> images.gallery[0] */
  function resolveImage(path) {
    const value = path.split('.').reduce(function (acc, key) {
      return acc == null ? acc : acc[key];
    }, images);

    if (value && typeof value === 'object') return value.src || '';
    return value || '';
  }

  /** Igual que resolveImage, pero devuelve el texto alternativo. */
  function resolveAlt(path) {
    const value = path.split('.').reduce(function (acc, key) {
      return acc == null ? acc : acc[key];
    }, images);

    if (value && typeof value === 'object') return value.alt || '';
    if (typeof value === 'string' && path.endsWith('Alt')) return '';
    return '';
  }

  /** Asigna las imágenes centralizadas a los elementos con data-img. */
  function initImages() {
    document.querySelectorAll('[data-img]').forEach(function (element) {
      const path = element.getAttribute('data-img');
      const isHero = path === 'hero';

      // El hero usa business.heroImage si está configurado; el resto, images.
      const src = isHero ? heroImage : resolveImage(path);
      if (!src) return;

      const alt = isHero ? heroImageAlt : resolveAlt(path);

      if (element.tagName === 'IMG') {
        element.src = src;
        if (alt) element.alt = alt;
      } else {
        element.style.setProperty('--hero-image', 'url("' + src + '")');
        element.setAttribute('aria-label', alt);
      }
    });
  }

  /* ===========================================================================
     6. SEO DINÁMICO
     =========================================================================== */

  function setMeta(attribute, key, value) {
    const selector = 'meta[' + attribute + '="' + key + '"]';
    const element = document.head.querySelector(selector);

    if (!value) {
      if (element) element.remove();
      return;
    }

    if (element) {
      element.setAttribute('content', value);
      return;
    }

    const created = document.createElement('meta');
    created.setAttribute(attribute, key);
    created.setAttribute('content', value);
    document.head.appendChild(created);
  }

  /**
   * Convierte la descripción SEO en un solo texto.
   * Acepta un array de frases (cada una en su línea) o una cadena suelta,
   * y siempre devuelve un párrafo limpio de una línea.
   */
  function seoDescriptionText() {
    const raw = Array.isArray(business.seoDescription)
      ? business.seoDescription
      : [business.seoDescription];

    return raw
      .filter(function (part) { return typeof part === 'string' && part.trim(); })
      .map(function (part) { return part.trim(); })
      .join(' ')
      .replace(/\s+/g, ' ');
  }

  /**
   * SEO: una sola fuente de verdad (business.seoTitle / business.seoDescription).
   * El HTML trae los mismos valores como fallback y JS los mantiene al día.
   * La imagen usa la misma resolución que el hero visible.
   */
  function initSeo() {
    const description = seoDescriptionText();

    document.title = business.seoTitle;
    setMeta('name', 'description', description);
    setMeta('name', 'author', business.name);
    setMeta('property', 'og:site_name', business.name);
    setMeta('property', 'og:title', business.seoTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', business.siteUrl);
    setMeta('property', 'og:image', heroImage);
    setMeta('property', 'og:image:alt', heroImageAlt);
  }

  /* ===========================================================================
     7. WHATSAPP
     =========================================================================== */

  /** Genera el enlace de WhatsApp con el mensaje configurado. */
  function getWhatsAppLink() {
    return (
      'https://wa.me/' +
      business.whatsapp +
      '?text=' +
      encodeURIComponent(business.whatsappMessage)
    );
  }

  /** Abre la conversación de WhatsApp. Usado por todos los botones data-whatsapp. */
  function openWhatsApp() {
    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
  }

  function initWhatsApp() {
    const buttons = document.querySelectorAll('[data-whatsapp]');
    buttons.forEach(function (button) {
      button.setAttribute('aria-label', 'Solicitar información por WhatsApp');
      button.addEventListener('click', openWhatsApp);
    });
  }

  /* ===========================================================================
     8. MENÚ MÓVIL
     =========================================================================== */

  function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const iconOpen = toggle ? toggle.querySelector('[data-icon="open"]') : null;
    const iconClose = toggle ? toggle.querySelector('[data-icon="close"]') : null;

    if (!toggle || !menu) return;

    function setOpen(isOpen) {
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
      menu.classList.toggle('is-open', isOpen);
      if (iconOpen) iconOpen.classList.toggle('hidden', isOpen);
      if (iconClose) iconClose.classList.toggle('hidden', !isOpen);
    }

    function isOpen() {
      return toggle.getAttribute('aria-expanded') === 'true';
    }

    toggle.addEventListener('click', function () {
      setOpen(!isOpen());
    });

    // Cierre al seleccionar un enlace del menú
    menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });

    // Cierre al hacer clic fuera del menú
    document.addEventListener('click', function (event) {
      if (!isOpen()) return;
      if (menu.contains(event.target) || toggle.contains(event.target)) return;
      setOpen(false);
    });

    // Cierre con ESC
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Reinicio al volver a escritorio
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) setOpen(false);
    });
  }

  /* ===========================================================================
     9. SCROLL SUAVE
     =========================================================================== */

  function scrollToTarget(target, offset) {
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: top,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        const id = link.getAttribute('href');
        if (!id || id === '#') return;

        const target = document.querySelector(id);
        if (!target) return;

        event.preventDefault();
        scrollToTarget(target, HEADER_OFFSET);

        if (history.replaceState) history.replaceState(null, '', id);
      });
    });
  }

  /* ===========================================================================
     10. NAVBAR AL HACER SCROLL
     =========================================================================== */

  function initHeaderOnScroll() {
    const header = document.getElementById('site-header');
    const backToTop = document.getElementById('back-to-top');
    if (!header) return;

    function onScroll() {
      const y = window.pageYOffset;
      header.classList.toggle('is-scrolled', y > 24);
      if (backToTop) backToTop.classList.toggle('is-visible', y > 600);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ===========================================================================
     11. LIGHTBOX DE GALERÍA
     =========================================================================== */

  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const image = document.getElementById('lightbox-image');
    const caption = document.getElementById('lightbox-caption');
    const closeButton = document.getElementById('lightbox-close');
    const triggers = document.querySelectorAll('[data-gallery-index]');

    if (!lightbox || !image || !caption || !closeButton || !triggers.length) return;

    let lastFocusedElement = null;

    function open(index) {
      const item = images.gallery[index];
      if (!item) return;

      const trigger = triggers[index];
      lastFocusedElement = trigger;

      const source = trigger ? trigger.querySelector('img') : null;

      image.src = typeof item === 'string' ? item : item.src;
      image.alt = (typeof item === 'string' ? '' : item.alt) || (source ? source.alt : 'Imagen de la galería');
      caption.textContent = 'Imagen ' + (index + 1) + ' de ' + triggers.length;

      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    }

    function close() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      if (lastFocusedElement) lastFocusedElement.focus();
    }

    triggers.forEach(function (trigger, index) {
      trigger.addEventListener('click', function () {
        open(index);
      });
    });

    // Cierre con el botón
    closeButton.addEventListener('click', close);

    // Cierre al hacer clic fuera de la imagen
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) close();
    });

    // Cierre con ESC
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close();
    });
  }

  /* ===========================================================================
     12. BOTÓN VOLVER ARRIBA
     =========================================================================== */

  function initBackToTop() {
    const button = document.getElementById('back-to-top');
    if (!button) return;

    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ===========================================================================
     13. ANIMACIONES AL APARECER LAS SECCIONES
     =========================================================================== */

  function initRevealAnimations() {
    const elements = document.querySelectorAll('[data-reveal]');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach(function (element) {
        element.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }

  /* ===========================================================================
     14. GOOGLE MAPS
     =========================================================================== */

  function initMaps() {
    const buttons = document.querySelectorAll('[data-maps]');
    const notice = document.getElementById('maps-notice');
    if (!buttons.length) return;

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Si se define business.mapsUrl, se abre Google Maps.
        if (business.mapsUrl) {
          window.open(business.mapsUrl, '_blank', 'noopener,noreferrer');
          return;
        }
        // Sin URL: la consulta se resuelve por WhatsApp.
        if (notice) {
          notice.textContent = business.mapsPendingMessage;
          notice.classList.remove('hidden');
        }
        openWhatsApp();
      });
    });
  }

  /* ===========================================================================
     15. INICIALIZACIÓN
     =========================================================================== */

  function renderAll() {
    renderFields();
    renderLogo();
    renderHeroMeta();
    renderServices();
    renderAboutList();
    renderAboutMeta();
    renderContactInfo();
    renderSocial();
    renderFooterContact();
    renderFooterAbout();
    renderDemoNote();
    renderMapCard();
  }

  function init() {
    renderAll();
    initImages();
    initSeo();
    initWhatsApp();
    initMobileMenu();
    initSmoothScroll();
    initHeaderOnScroll();
    initLightbox();
    initBackToTop();
    initRevealAnimations();
    initMaps();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expuesto para depuración: window.barberiaSite
  window.barberiaSite = {
    business: business,
    services: services,
    images: images,
    getWhatsAppLink: getWhatsAppLink,
    openWhatsApp: openWhatsApp
  };
})();
