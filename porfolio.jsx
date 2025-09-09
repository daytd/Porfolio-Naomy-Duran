import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold tracking-tight">Naomy Torres Durán</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-gray-600">Perfil</a>
            <a href="#skills" className="hover:text-gray-600">Habilidades</a>
            <a href="#experience" className="hover:text-gray-600">Experiencia</a>
            <a href="#projects" className="hover:text-gray-600">Proyectos</a>
            <a href="#solutions" className="hover:text-gray-600">Soluciones</a>
            <a href="#education" className="hover:text-gray-600">Educación</a>
            <a href="#certifications" className="hover:text-gray-600">Certificaciones</a>
            <a href="#contact" className="hover:text-gray-600">Contacto</a>
          </nav>
          <div className="flex gap-3 items-center">
            <a href="https://github.com/daytd" target="_blank" className="text-sm underline decoration-dotted underline-offset-4">GitHub</a>
            <a href="https://www.linkedin.com/in/naomy-durán-146421335" target="_blank" className="text-sm underline decoration-dotted underline-offset-4">LinkedIn</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"/>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Desarrolladora Web Junior orientada a resultados
          </motion.h1>
          <p className="mt-4 max-w-2xl text-gray-700">
            Experiencia sólida en HTML, CSS, JavaScript y Python. Interés en ciberseguridad y base en soporte técnico. Me enfoco en entregar interfaces limpias, código mantenible y mejoras medibles de rendimiento.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/daytd/Portfolio-Naomy-Torres/blob/main/CV-Naomy-Torres.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-2xl px-6">Ver CV completo</Button>
            </a>
            <a href="#projects">
              <Button variant="outline" className="rounded-2xl px-6">Ver proyectos</Button>
            </a>
          </div>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {label:"Mejoras de rendimiento", value:"20%–40%"},
              {label:"Bugs resueltos", value:"50+"},
              {label:"Entregas a tiempo", value:"100%"},
              {label:"Tecnologías", value:"10+"}
            ].map((m,i)=> (
              <Card key={i} className="shadow-sm">
                <CardContent className="p-5">
                  <div className="text-2xl font-bold">{m.value}</div>
                  <div className="text-sm text-gray-600">{m.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Habilidades técnicas</h2>
          <p className="text-gray-700 mt-2">Frontend, backend introductorio, control de versiones y fundamentos de UI/UX.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              title:"Frontend",
              items:["HTML5","CSS3","JavaScript","Figma"],
            },{
              title:"Backend / Datos",
              items:["Python","PHP (básico)","MySQL"],
            },{
              title:"Dev & Herramientas",
              items:["Git","GitHub","Integración de APIs","QuickSight"],
            }].map((col,idx)=> (
              <Card key={idx} className="shadow-sm">
                <CardContent className="p-6">
                  <div className="font-semibold mb-2">{col.title}</div>
                  <ul className="space-y-2 text-gray-700">
                    {col.items.map((t)=>(<li key={t} className="flex items-center justify-between">
                      <span>{t}</span>
                      <span className="h-1 w-20 bg-gray-200 rounded overflow-hidden">
                        <span className="block h-full bg-gray-700" style={{width: `${70 + Math.random()*20}%`}}/>
                      </span>
                    </li>))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Experiencia</h2>
          <div className="relative pl-6 border-l">
            <article className="mb-10">
              <h3 className="font-semibold">Amazon — Data Administration Assistant / Soporte Técnico</h3>
              <div className="text-sm text-gray-600">Octubre – Diciembre 2024</div>
              <ul className="mt-3 list-disc ml-5 text-gray-700 space-y-1">
                <li>Optimicé el uso de Excel y estructuré solicitudes de documentos para mejorar la coordinación del equipo.</li>
                <li>Mejoré la organización de datos con Excel y QuickSight.</li>
                <li>Entregas puntuales con altos estándares de calidad.</li>
              </ul>
            </article>
            <article>
              <h3 className="font-semibold">Innobovino — Junior Developer / Optimización de Aplicaciones</h3>
              <div className="text-sm text-gray-600">Octubre – Diciembre 2023</div>
              <ul className="mt-3 list-disc ml-5 text-gray-700 space-y-1">
                <li>Mejoré el rendimiento corrigiendo errores de código, diseño y contenido.</li>
                <li>Resolví bugs y pulí la interfaz para elevar la experiencia de usuario.</li>
                <li>Entregué optimizaciones con HTML, CSS y Figma.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Projects with tags */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name:"Sitio de Restaurante",
              desc:"Sitio responsive con navegación clara y tipografía legible.",
              stack:["HTML","CSS","UI"],
            },{
              name:"App de Filas del Comedor",
              desc:"Aplicación para reducir tiempos de espera y mejorar el flujo.",
              stack:["JS","UX","Optimización"],
            },{
              name:"Esencias Naturales — Emprendimiento",
              desc:"Landing y catálogo para visibilidad de marca.",
              stack:["HTML","CSS","Branding"],
            }].map((p, i)=> (
              <Card key={i} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="font-semibold text-lg">{p.name}</div>
                  <p className="text-gray-700 mt-2">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map(s=> <span key={s} className="text-xs bg-gray-100 border rounded px-2 py-1">{s}</span>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem > Cause > Fix > Impact */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Problemas comunes y cómo los resuelvo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[{
              title:"Rendimiento lento",
              cause:"Carga innecesaria de recursos y renders costosos.",
              fix:"Auditoría de Lighthouse, reducción de payload, optimización de CSS/JS y lazy loading.",
              impact:"Mejora de 20%–40% en métricas de tiempo de carga y percepción de velocidad.",
            },{
              title:"Datos desorganizados",
              cause:"Fuentes dispersas y procesos manuales.",
              fix:"Estandarización en Excel, dashboards con QuickSight y flujos de validación.",
              impact:"Visibilidad y decisiones más rápidas con menos errores.",
            },{
              title:"Riesgos de seguridad básicos",
              cause:"Validaciones insuficientes y manejo débil de credenciales.",
              fix:"Buenas prácticas de entrada/salida, variables de entorno y control de dependencias.",
              impact:"Reducción del riesgo y base más confiable para escalar.",
            },{
              title:"Experiencia inconsistente",
              cause:"Diseño no sistematizado y estilos duplicados.",
              fix:"Guía de estilos ligera, componentes reutilizables y revisión de accesibilidad.",
              impact:"Interfaz coherente, mantenible y accesible.",
            }].map((c, i)=> (
              <Card key={i} className="shadow-sm">
                <CardContent className="p-6">
                  <div className="font-semibold">{c.title}</div>
                  <div className="mt-2 text-sm text-gray-700">Causa: {c.cause}</div>
                  <div className="mt-1 text-sm text-gray-700">Solución: {c.fix}</div>
                  <div className="mt-1 text-sm text-gray-700">Impacto: {c.impact}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Educación</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="font-semibold">Bachillerato y Técnico Medio en Desarrollo Web</div>
                <div className="text-sm text-gray-600">2019–2024 — Colegio Técnico Profesional Mercedes Norte</div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="font-semibold">Ingeniería Informática — en curso</div>
                <div className="text-sm text-gray-600">Desde 2025 — UNED</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Certificaciones</h2>
          <div className="mt-6 grid md:grid-cols-4 gap-6">
            {["CCNA: Introduction to Networks — Cisco (2023)","Introduction to IoT — Cisco (2022)","PCAP: Programming Essentials in Python — OpenEDG (2023)","Mindshift — McMaster University (2023)"].map((c,i)=> (
              <Card key={i} className="shadow-sm">
                <CardContent className="p-6 text-sm text-gray-700">{c}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Contacto</h2>
          <p className="text-gray-300 mt-2">Disponible para prácticas y roles junior en desarrollo y soporte técnico.</p>
          <div className="mt-6 flex justify-center gap-6">
            <a href="mailto:naomydayan13@gmail.com" className="underline underline-offset-4">Correo</a>
            <a href="https://github.com/daytd" target="_blank" className="underline underline-offset-4">GitHub</a>
            <a href="https://www.linkedin.com/in/naomy-durán-146421335" target="_blank" className="underline underline-offset-4">LinkedIn</a>
          </div>
          <p className="mt-4 text-sm text-gray-400">Autorizada para trabajar en Costa Rica • Disponibilidad abierta • Idiomas: Español (nativo), Inglés (B2), Portugués (B1)</p>
        </div>
      </section>
    </div>
  );
}
