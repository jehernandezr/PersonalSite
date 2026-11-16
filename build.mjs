// Genera index.html (español) y en/index.html (inglés) desde un solo contenido.
// Uso: node build.mjs
import { writeFileSync, mkdirSync } from "node:fs";

const SITE = "https://jonatanhr.com";
const GITHUB = "https://github.com/jehernandezr";
const LINKEDIN = "https://www.linkedin.com/in/jonatan-hernandez-rubio/";
const YEAR = new Date().getFullYear();

const t = {
  es: {
    path: "/",
    other: { lang: "en", path: "/en/", label: "English" },
    title: "Jonatan Hernandez | Backend Squad Lead",
    description:
      "Backend Squad Lead en tyba (Bogotá). Lidero equipos backend para productos de fondos de inversión en Chile y Colombia. Maestría en Ingeniería de Software en Los Andes.",
    skip: "Saltar al contenido",
    nav: { experience: "Experiencia", projects: "Proyectos", education: "Formación", contact: "Contacto" },
    menu: { open: "Menú", title: "Menú del sitio", close: "Cerrar menú" },
    headline: "Construyo y lidero backends para productos de inversión.",
    lede: `Soy <strong>Backend Squad Lead en tyba</strong>, en Bogotá. Llevo a mi equipo de la planeación a producción en fondos de inversión para Chile y Colombia, y estudio la Maestría en Ingeniería de Software en Los Andes.`,
    email: "Escríbeme en LinkedIn",
    photoAlt: "Foto de Jonatan Hernandez",
    experience: {
      title: "Experiencia",
      tyba: {
        when: "2021 – hoy",
        rolesLabel: "Cargos en tyba",
        roles: [
          {
            title: "Backend Squad Lead",
            when: "May 2023 – hoy",
            start: "2023-05",
            points: [
              "Lidero el squad backend del producto de fondos mutuos en Chile y del producto FIC en Colombia.",
              "Acompaño a más de 5 ingenieros con feedback y planes de desarrollo; varios de ellos ya lideran sus propios squads.",
              "He entregado más de 5 proyectos entre equipos de punta a punta y mejoré en un 15 % los procesos transaccionales clave.",
              "Defino con negocio más de 12 épicas por planeación y uso LLMs para escribir alcances y criterios de aceptación más claros.",
            ],
          },
          {
            title: "Backend Engineer",
            when: "Ene 2022 – May 2023",
            start: "2022-01",
            points: ["Diseñé y entregué más de 5 funcionalidades clave usadas en 3 productos, y propuse más de 10 mejoras entre equipos."],
          },
          {
            title: "Software Engineer Intern",
            when: "Jul 2021 – Ene 2022",
            start: "2021-07",
            points: ["Desarrollo serverless en AWS: endpoints REST, funciones Lambda, cron jobs en Fargate y transacciones orquestadas entre servicios."],
          },
        ],
      },
      guruh: {
        role: "Cofundador",
        when: "2020 – 2022",
        text: `Cofundé una plataforma que ayuda a estudiantes de colegio a elegir carrera y universidad. Construí la API en Node.js, Express y MongoDB, y la desplegué con Docker en AWS y Google Cloud.`,
      },
    },
    projects: {
      title: "Proyectos",
      items: [
        {
          featured: true,
          name: "GurUh",
          text: "Plataforma de orientación vocacional para estudiantes de colegio, que conecta sus intereses con carreras y universidades.",
          note: "Primer lugar en Harvard WECode 2021",
          stack: "Node.js, Express, MongoDB, Docker",
          links: [["Visitar guruh.co", "https://guruh.co"]],
        },
        {
          name: "TypeORM Log Transformer",
          text: "Extensión de VS Code que convierte los logs de TypeORM en SQL legible, con formato e indentación.",
          stack: "TypeScript, API de VS Code",
          links: [
            ["Ver en el Marketplace", "https://marketplace.visualstudio.com/items?itemName=jehernandezr.typeorm-log-transformer"],
            ["Código", `${GITHUB}/typeorm-log-transformer`],
          ],
        },
        {
          name: "Plataforma backend",
          text: "Base reutilizable para backends de microservicios: NestJS con arquitectura hexagonal, sagas recuperables, mensajería con reintentos e infraestructura en AWS con Terraform. En construcción.",
          stack: "NestJS, TypeORM, Terraform, AWS, Flutter",
          links: [["Código", `${GITHUB}/node_template`]],
        },
        {
          name: "Match silencioso",
          text: "Concepto de funcionalidad para Spotify: si dos personas de tu círculo escuchan la misma canción en menos de 48 horas, a las dos les llega un aviso. Proyecto de Design Thinking en la maestría.",
          stack: "HTML, CSS, Node.js",
          links: [["Código", `${GITHUB}/match-silencioso`]],
        },
        {
          name: "Pruebas automatizadas sobre Ghost",
          text: "Estrategia de pruebas automatizadas sobre el CMS Ghost, con registro de las incidencias encontradas. Proyecto en equipo del curso de Pruebas Automatizadas de la maestría.",
          stack: "Pruebas E2E, Ghost",
          links: [
            ["Código", `${GITHUB}/202512-proyecto-equipo-4`],
            ["Incidencias", `${GITHUB}/incidencias-ghost/issues`],
          ],
        },
      ],
      more: "Más proyectos en GitHub",
    },
    education: {
      title: "Formación",
      items: [
        ["Maestría en Ingeniería de Software", "Universidad de los Andes, 2025 – 2027 (en curso)"],
        ["Ingeniería de Sistemas y Computación", "Universidad de los Andes, 2018 – 2022"],
      ],
      awardsTitle: "Reconocimientos",
      awards: [["Primer lugar, Harvard WECode Startup Competition", "Con GurUh, 2021"]],
      certsTitle: "Certificados",
      certs: [
        ["Full-Stack Web Development Specialization", "Coursera"],
        ["Google Cloud Computing Foundations Academy", "Coursera"],
      ],
    },
    stack: {
      title: "Tecnologías",
      groups: [
        ["Lenguajes", "Java, Python, TypeScript, JavaScript, SQL"],
        ["Backend", "Node.js, NestJS, Express, Spring, Django, Redis"],
        ["Frontend", "React, Angular, HTML y CSS"],
        ["Nube y herramientas", "AWS (Lambda, Fargate), Google Cloud, Docker, Terraform, Git"],
        ["Pruebas", "Jest, JUnit, pruebas E2E"],
      ],
    },
    contact: {
      title: "Contacto",
      text: "La forma más rápida de hablar conmigo es por LinkedIn.",
      link: "Escríbeme en LinkedIn",
      also: "Mis proyectos están en",
    },
    outside: {
      title: "Fuera del trabajo",
      text: "Me gusta explorar la inteligencia artificial, programar proyectos propios y ver series.",
    },
  },

  en: {
    path: "/en/",
    other: { lang: "es", path: "/", label: "Español" },
    title: "Jonatan Hernandez | Backend Squad Lead",
    description:
      "Backend Squad Lead at tyba (Bogotá). I lead backend teams for investment fund products in Chile and Colombia. M.Sc. in Software Engineering at Los Andes University.",
    skip: "Skip to content",
    nav: { experience: "Experience", projects: "Projects", education: "Education", contact: "Contact" },
    menu: { open: "Menu", title: "Site menu", close: "Close menu" },
    headline: "I build and lead backends for investment products.",
    lede: `I'm a <strong>Backend Squad Lead at tyba</strong> in Bogotá. I take my squad from planning to production on investment fund products for Chile and Colombia, and I'm pursuing an M.Sc. in Software Engineering at Los Andes University.`,
    email: "Message me on LinkedIn",
    photoAlt: "Photo of Jonatan Hernandez",
    experience: {
      title: "Experience",
      tyba: {
        when: "2021 – present",
        rolesLabel: "Roles at tyba",
        roles: [
          {
            title: "Backend Squad Lead",
            when: "May 2023 – present",
            start: "2023-05",
            points: [
              "I lead the backend squad for the mutual funds product in Chile and the FIC product in Colombia.",
              "I mentor 5+ engineers through feedback and development plans; several of them now lead their own squads.",
              "Delivered 5+ cross-team projects end to end and improved key transactional processes by 15%.",
              "I define 12+ epics per planning cycle with the business, and use LLMs to write clearer scopes and acceptance criteria.",
            ],
          },
          {
            title: "Backend Engineer",
            when: "Jan 2022 – May 2023",
            start: "2022-01",
            points: ["Designed and delivered 5+ key features used across 3 products, and proposed 10+ cross-team improvements."],
          },
          {
            title: "Software Engineer Intern",
            when: "Jul 2021 – Jan 2022",
            start: "2021-07",
            points: ["Serverless development on AWS: REST endpoints, Lambda functions, Fargate cron jobs and transactions orchestrated across services."],
          },
        ],
      },
      guruh: {
        role: "Co-founder",
        when: "2020 – 2022",
        text: `Co-founded a platform that helps high school students choose a degree and a university. I built the API with Node.js, Express and MongoDB, and deployed it with Docker on AWS and Google Cloud.`,
      },
    },
    projects: {
      title: "Projects",
      items: [
        {
          featured: true,
          name: "GurUh",
          text: "A career guidance platform for high school students that connects their interests with degrees and universities.",
          note: "1st place at Harvard WECode 2021",
          stack: "Node.js, Express, MongoDB, Docker",
          links: [["Visit guruh.co", "https://guruh.co"]],
        },
        {
          name: "TypeORM Log Transformer",
          text: "A VS Code extension that turns TypeORM logs into readable, formatted and indented SQL.",
          stack: "TypeScript, VS Code API",
          links: [
            ["View on the Marketplace", "https://marketplace.visualstudio.com/items?itemName=jehernandezr.typeorm-log-transformer"],
            ["Code", `${GITHUB}/typeorm-log-transformer`],
          ],
        },
        {
          name: "Backend platform",
          text: "A reusable foundation for microservice backends: NestJS with hexagonal architecture, recoverable sagas, messaging with retries and AWS infrastructure with Terraform. Work in progress.",
          stack: "NestJS, TypeORM, Terraform, AWS, Flutter",
          links: [["Code", `${GITHUB}/node_template`]],
        },
        {
          name: "Match silencioso",
          text: "A feature concept for Spotify: when two people in your circle play the same song within 48 hours, both get a notification. Built for a Design Thinking course in my master's.",
          stack: "HTML, CSS, Node.js",
          links: [["Code", `${GITHUB}/match-silencioso`]],
        },
        {
          name: "Automated testing on Ghost",
          text: "An automated testing strategy for the Ghost CMS, with a log of the issues we found. Team project for the Automated Software Testing course in my master's.",
          stack: "E2E testing, Ghost",
          links: [
            ["Code", `${GITHUB}/202512-proyecto-equipo-4`],
            ["Issues", `${GITHUB}/incidencias-ghost/issues`],
          ],
        },
      ],
      more: "More projects on GitHub",
    },
    education: {
      title: "Education",
      items: [
        ["M.Sc. in Software Engineering", "Los Andes University, 2025 – 2027 (in progress)"],
        ["B.S. in Systems and Computing Engineering", "Los Andes University, 2018 – 2022"],
      ],
      awardsTitle: "Awards",
      awards: [["1st place, Harvard WECode Startup Competition", "With GurUh, 2021"]],
      certsTitle: "Certificates",
      certs: [
        ["Full-Stack Web Development Specialization", "Coursera"],
        ["Google Cloud Computing Foundations Academy", "Coursera"],
      ],
    },
    stack: {
      title: "Technologies",
      groups: [
        ["Languages", "Java, Python, TypeScript, JavaScript, SQL"],
        ["Backend", "Node.js, NestJS, Express, Spring, Django, Redis"],
        ["Frontend", "React, Angular, HTML and CSS"],
        ["Cloud and tools", "AWS (Lambda, Fargate), Google Cloud, Docker, Terraform, Git"],
        ["Testing", "Jest, JUnit, E2E testing"],
      ],
    },
    contact: {
      title: "Contact",
      text: "LinkedIn is the fastest way to reach me.",
      link: "Message me on LinkedIn",
      also: "My projects are on",
    },
    outside: {
      title: "Outside work",
      text: "I like exploring artificial intelligence, building side projects and watching series.",
    },
  },
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const ext = (href) => (href.startsWith("http") ? ` href="${href}" rel="noopener"` : ` href="${href}"`);

function page(lang) {
  const c = t[lang];
  const root = lang === "es" ? "" : "../";
  const roles = c.experience.tyba.roles
    .map(
      (r, i) => `
              <ui-timeline-item value="${r.start}" status="${i === 0 ? "current" : "complete"}">
                <ui-timeline-marker></ui-timeline-marker>
                <ui-timeline-connector></ui-timeline-connector>
                <ui-timeline-title class="role-title">${r.title}</ui-timeline-title>
                <ui-timeline-time class="role-when"><time datetime="${r.start}">${r.when}</time></ui-timeline-time>
                ${r.points.length > 1 ? `<ul>${r.points.map((p) => `<li>${p}</li>`).join("")}</ul>` : `<p>${r.points[0]}</p>`}
              </ui-timeline-item>`
    )
    .join("");

  const sections = [
    ["#experience", c.nav.experience],
    ["#projects", c.nav.projects],
    ["#education", c.nav.education],
    ["#contact", c.nav.contact],
  ];
  const langLink = `<a class="lang" href="${c.other.path}" hreflang="${c.other.lang}" lang="${c.other.lang}">${c.other.label}</a>`;

  const projects = c.projects.items
    .map(
      (p) => `
            <li class="project${p.featured ? " featured" : ""}">
              <h3>${p.name}</h3>
              ${p.note ? `<span class="note">${p.note}</span>` : ""}
              <p>${p.text}</p>
              <p class="stack">${p.stack}</p>
              <div class="links">${p.links.map(([label, href]) => `<a${ext(href)}>${label}</a>`).join("")}</div>
            </li>`
    )
    .join("");

  const entries = (items) => items.map(([what, where]) => `<li><span class="what">${what}</span><span class="muted">${where}</span></li>`).join("");

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(c.title)}</title>
  <meta name="description" content="${esc(c.description)}">
  <link rel="canonical" href="${SITE}${c.path}">
  <link rel="alternate" hreflang="es" href="${SITE}/">
  <link rel="alternate" hreflang="en" href="${SITE}/en/">
  <link rel="alternate" hreflang="x-default" href="${SITE}/">
  <meta property="og:type" content="profile">
  <meta property="og:title" content="${esc(c.title)}">
  <meta property="og:description" content="${esc(c.description)}">
  <meta property="og:url" content="${SITE}${c.path}">
  <meta property="og:image" content="${SITE}/assets/jonatan-960.jpg">
  <meta property="og:locale" content="${lang === "es" ? "es_CO" : "en_US"}">
  <meta name="theme-color" content="#f2f4ef" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#141d18" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="${root}images/favicon.ico">
  <link rel="apple-touch-icon" href="${root}images/apple-icon-152x152.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..700&family=Public+Sans:wght@400;600&display=swap">
  <link rel="stylesheet" href="${root}styles.css">
  <script type="module" src="${root}vendor/ui-sdk/web.js"></script>
  <script type="module">
    matchMedia("(min-width: 52.01rem)").addEventListener("change", (event) => {
      if (event.matches) document.querySelector(".menu")?.api?.close();
    });
  </script>
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jonatan Hernandez",
    jobTitle: "Backend Squad Lead",
    worksFor: { "@type": "Organization", name: "tyba" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad de los Andes" },
    url: SITE,
    image: `${SITE}/assets/jonatan-960.jpg`,
    sameAs: [GITHUB, LINKEDIN],
  })}</script>
</head>
<body>
  <a class="skip" href="#main">${c.skip}</a>

  <header class="site-header">
    <div class="wrap">
      <a class="brand" href="${c.path}">Jonatan Hernandez</a>
      <nav class="site-nav" aria-label="${lang === "es" ? "Principal" : "Main"}">
        ${sections.map(([href, label]) => `<a href="${href}">${label}</a>`).join("\n        ")}
        ${langLink}
      </nav>
      <ui-drawer class="menu" side="end">
        <ui-drawer-trigger><button type="button" class="menu-button">${c.menu.open}</button></ui-drawer-trigger>
        <ui-drawer-backdrop hidden></ui-drawer-backdrop>
        <ui-drawer-content hidden>
          <div class="menu-head">
            <ui-drawer-title>${c.menu.title}</ui-drawer-title>
            <ui-drawer-close><button type="button" class="menu-close">${c.menu.close}</button></ui-drawer-close>
          </div>
          <ul class="menu-links">
            ${sections.map(([href, label]) => `<li><ui-drawer-close><a href="${href}">${label}</a></ui-drawer-close></li>`).join("\n            ")}
          </ul>
          <ui-drawer-close>${langLink}</ui-drawer-close>
        </ui-drawer-content>
      </ui-drawer>
    </div>
  </header>

  <main id="main">
    <section class="hero">
      <div class="wrap">
        <div>
          <h1>${c.headline}</h1>
          <p class="lede">${c.lede}</p>
          <div class="actions">
            <a class="button" href="${LINKEDIN}" rel="noopener">${c.email}</a>
            <a class="plain" href="${GITHUB}" rel="noopener">GitHub</a>
          </div>
        </div>
        <div class="portrait">
          <picture>
            <source type="image/webp" srcset="${root}assets/jonatan-480.webp 480w, ${root}assets/jonatan-960.webp 960w" sizes="(max-width: 52rem) 14rem, 22rem">
            <img src="${root}assets/jonatan-480.jpg" srcset="${root}assets/jonatan-480.jpg 480w, ${root}assets/jonatan-960.jpg 960w" sizes="(max-width: 52rem) 14rem, 22rem" width="480" height="480" alt="${c.photoAlt}">
          </picture>
        </div>
      </div>
    </section>

    <section class="section" id="experience" aria-labelledby="experience-title">
      <div class="wrap">
        <h2 id="experience-title">${c.experience.title}</h2>
        <div class="body">
          <div class="org">
            <div class="org-head"><h3>tyba</h3><span class="when">${c.experience.tyba.when}</span></div>
            <ui-timeline class="roles" aria-label="${c.experience.tyba.rolesLabel}">${roles}
            </ui-timeline>
          </div>
          <div class="org">
            <div class="org-head"><h3>GurUh</h3><span class="when">${c.experience.guruh.when}</span></div>
            <span class="role-title">${c.experience.guruh.role}</span>
            <p>${c.experience.guruh.text}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="projects" aria-labelledby="projects-title">
      <div class="wrap">
        <h2 id="projects-title">${c.projects.title}</h2>
        <div class="body">
          <ul class="projects">${projects}
          </ul>
          <p class="more"><a href="${GITHUB}?tab=repositories" rel="noopener">${c.projects.more}</a></p>
        </div>
      </div>
    </section>

    <section class="section" id="education" aria-labelledby="education-title">
      <div class="wrap">
        <h2 id="education-title">${c.education.title}</h2>
        <div class="body">
          <ul class="entries">${entries(c.education.items)}</ul>
          <h3 class="sub">${c.education.awardsTitle}</h3>
          <ul class="entries">${entries(c.education.awards)}</ul>
          <h3 class="sub">${c.education.certsTitle}</h3>
          <ul class="entries">${entries(c.education.certs)}</ul>
        </div>
      </div>
    </section>

    <section class="section" id="stack" aria-labelledby="stack-title">
      <div class="wrap">
        <h2 id="stack-title">${c.stack.title}</h2>
        <dl class="groups body">${c.stack.groups.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
      </div>
    </section>

    <section class="section contact" id="contact" aria-labelledby="contact-title">
      <div class="wrap">
        <h2 id="contact-title">${c.contact.title}</h2>
        <div class="body">
          <p>${c.contact.text}</p>
          <p class="big"><a href="${LINKEDIN}" rel="noopener">${c.contact.link}</a></p>
          <p>${c.contact.also} <a href="${GITHUB}" rel="noopener">GitHub</a>.</p>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="wrap">
      <p class="small"><strong>${c.outside.title}</strong></p>
      <p class="small muted">${c.outside.text}<br>© ${YEAR} Jonatan Hernandez</p>
    </div>
  </footer>
</body>
</html>
`;
}

writeFileSync("index.html", page("es"));
mkdirSync("en", { recursive: true });
writeFileSync("en/index.html", page("en"));
console.log("Generado: index.html, en/index.html");
