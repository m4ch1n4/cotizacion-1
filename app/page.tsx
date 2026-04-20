"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Boxes,
  MonitorSmartphone,
  PenTool,
  Clapperboard,
  Layers3,
  Headphones,
  Hand,
  Vote,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";
import DarkVeil from "@/components/DarkVeil";

const services = [
  {
    title: "Impresión digital y 3D",
    icon: Boxes,
    description:
      "Piezas y producciones físicas que resuelven presencia, escala, acabado y ejecución sin margen para improvisar.",
    items: ["Impresión digital", "Gran formato", "Impresión 3D"],
  },
  {
    title: "Diseño gráfico y marca",
    icon: PenTool,
    description:
      "Sistemas visuales que ordenan la comunicación del proyecto y dan coherencia a cada punto de contacto.",
    items: ["Diseño publicitario", "Diseño web", "Interfaces de software", "Imagen de marca"],
  },
  {
    title: "Producción audiovisual",
    icon: Clapperboard,
    description:
      "Recursos espaciales y audiovisuales que elevan la experiencia sin comprometer tiempos, operación ni lectura.",
    items: ["Escenarios", "Stands", "Mobiliario", "Streaming y formatos híbridos"],
  },
  {
    title: "Apps para eventos",
    icon: MonitorSmartphone,
    description:
      "Herramientas digitales que facilitan registro, interacción, seguimiento y operación en contextos de alta demanda.",
    items: ["Sistemas de registro", "Programación web y UX", "Desarrollo de apps"],
  },
  {
    title: "Interactivos y XR",
    icon: Layers3,
    description:
      "Tecnología inmersiva aplicada con intención: más participación, más recordación y una experiencia mejor resuelta.",
    items: ["Realidad aumentada", "Videos VR", "Ambientes 3D", "Aplicaciones interactivas"],
  },
  {
    title: "Silent Tech",
    icon: Headphones,
    description:
      "Soluciones silent que cuidan inteligibilidad, atmósfera y operación para eventos donde el detalle sí importa.",
    items: ["Reuniones silenciosas", "Fiestas silenciosas"],
  },
  {
    title: "Pantallas touch",
    icon: Hand,
    description:
      "Interfaces físicas de interacción para activar contenido, ordenar recorridos y extender la experiencia de marca.",
    items: ["Pantallas Blind-Touch", "Pantallas Multi-Touch"],
  },
  {
    title: "Feedback y votación",
    icon: Vote,
    description:
      "Sistemas de respuesta en vivo que convierten participación en información útil para la toma de decisiones.",
    items: ["Votación electrónica", "Encuestas", "Evaluaciones"],
  },
];

const capabilities = [
  "Eventos",
  "Experiencias de marca",
  "BTL interactivo",
  "Plataformas y apps",
  "Streaming",
  "Realidad aumentada",
  "Showrooms",
  "Stands",
  "Multitouch",
  "Foros",
];

const process = [
  {
    title: "Estrategia",
    text: "Alineamos objetivo, formato, audiencia y condicionantes para entender el problema completo antes de diseñar la respuesta.",
  },
  {
    title: "Diseño",
    text: "Damos forma a una solución coherente en narrativa, interfaz, espacio y experiencia para que todo tenga sentido como sistema.",
  },
  {
    title: "Producción",
    text: "Coordinamos materiales, contenido, tecnología y operación con estándar de detalle alto para reducir fricción y asegurar consistencia.",
  },
  {
    title: "Ejecución",
    text: "Implementamos con seguimiento real para que la experiencia funcione donde importa: en vivo, frente al cliente y frente a la gente.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="text-base leading-7 text-white/70 md:text-lg">{copy}</p>
    </div>
  );
}

export default function MakacoSiteRedesign() {
  const [dynamicHueShift, setDynamicHueShift] = useState(-155);

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicHueShift((prev) => (prev >= -145 ? -155 : prev + 0.15));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#inicio" className="flex flex-col items-start leading-none">
            <Image
              src="/bwo.svg"
              alt="BWO"
              width={50}
              height={20}
              className="h-10 w-auto md:h-12"
              priority
            />
            <div className="mt-1 text-[10px] uppercase tracking-[0.45em] text-white/45 md:text-xs">
              Think. we create
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#nosotros" className="transition hover:text-white">
              Nosotros
            </a>
            <a href="#proceso" className="transition hover:text-white">
              Proceso
            </a>
            <a href="#servicios" className="transition hover:text-white">
              Servicios
            </a>
            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
          >
            Hablemos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <section id="inicio" className="relative overflow-hidden pt-32">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-90">
          <DarkVeil
            hueShift={dynamicHueShift}
            noiseIntensity={0.07}
            scanlineIntensity={0.0}
            speed={2.2}
            scanlineFrequency={0.0}
            warpAmount={2.8}
          />
        </div>
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(180deg,rgba(17,17,17,0.72)_0%,rgba(10,10,10,0.86)_100%)]" />
        <div className="absolute left-1/2 top-24 z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-20 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-28">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
            >
              <Sparkles className="h-4 w-4" />
              Soluciones creativas, tecnológicas y operativas para proyectos que sí tienen que salir bien
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-6"
            >
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Nos buscan cuando un proyecto exige criterio, control y una solución que de verdad funcione.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                Makaco resuelve proyectos donde creatividad, tecnología, producción y operación tienen que trabajar sin fricción. Diseñamos e implementamos experiencias presenciales, híbridas y digitales con una sola prioridad: que todo se vea sólido, opere correcto y responda al objetivo del cliente sin improvisaciones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
              >
                Ver soluciones
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#nosotros"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Cómo resolvemos
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="grid gap-4 self-end"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-4xl font-semibold">12+</div>
                  <div className="mt-2 text-sm text-white/60">
                    años resolviendo experiencias, plataformas y soluciones interactivas para marcas, eventos y entornos de capacitación
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-4xl font-semibold">360°</div>
                  <div className="mt-2 text-sm text-white/60">de solución integral, del concepto a la ejecución</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 sm:col-span-2">
                  <div className="text-sm font-medium text-white/90">Confianza construida desde la ejecución</div>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Makaco entra donde otros solo prometen. No vendemos ocurrencias ni tecnología decorativa: resolvemos con criterio, anticipamos fricciones y alineamos diseño, producción y operación para que el proyecto funcione completo, no por partes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-6 lg:px-8">
          {capabilities.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
        <SectionTitle
          eyebrow="Servicios"
          title="Soluciones diseñadas para resolver proyectos complejos con claridad y control"
          copy="Makaco no organiza sus capacidades como un catálogo inflado, sino como un sistema de solución. Cada servicio existe para resolver una parte crítica del proyecto y, cuando se integran, reducen fricción, elevan la experiencia y dan mucha más certeza en la ejecución."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-medium tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="proceso" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-10">
          <SectionTitle
            eyebrow="Proceso"
            title="Así resolvemos: con método, criterio y control de punta a punta"
            copy="La confianza no se declara, se demuestra en cómo se trabaja. Por eso Makaco estructura cada proyecto con una metodología clara: entender bien el problema, diseñar una respuesta precisa, producir sin perder control y ejecutar con la calma de quien ya contempló lo importante antes de llegar al montaje."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <div className="text-sm text-white/45">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            eyebrow="Sobre Makaco"
            title="Un equipo al que se le busca para resolver, no para complicar más el proyecto."
            copy="Makaco funciona como un socio de ejecución creativa para clientes que necesitan respuestas serias, no proveedores fragmentados. Conecta concepto, interfaz, contenido, espacio, tecnología y operación bajo una sola visión para dar más confianza, más control y mejores resultados en proyectos donde muchas variables tienen que convivir al mismo tiempo."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Pensamos estratégicamente, pero aterrizamos con criterio operativo y sentido real de producción",
              "Diseñamos soluciones completas para que el cliente no tenga que coordinar piezas sueltas ni proveedores desconectados",
              "Trabajamos para reducir fricción, anticipar errores y elevar la calidad de la experiencia final",
              "Entramos a proyectos donde la confianza se gana resolviendo bien, no prometiendo de más",
            ].map((point) => (
              <div key={point} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <CheckCircle2 className="h-5 w-5 text-white/90" />
                <p className="mt-4 text-base leading-7 text-white/72">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">Contacto</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Si hay que resolverlo bien, conversemos desde el principio
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Muchos problemas se vuelven caros cuando se detectan tarde. Makaco trabaja mejor cuando entra a tiempo,
              ordena el proyecto y propone una solución completa. Si estás desarrollando una experiencia, activación,
              plataforma o evento, esta conversación puede darte mucha más claridad desde el arranque.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-white/80" />
                <div>
                  <div className="text-sm font-medium text-white/92">Ubicación</div>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Tlacoquemecatl 531, Col. del Valle Centro, C.P. 03100, Benito Juárez, Ciudad de México.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-white/80" />
                <div>
                  <div className="text-sm font-medium text-white/92">Teléfono</div>
                  <a
                    href="tel:+525567255576"
                    className="mt-2 block text-sm leading-6 text-white/65 transition hover:text-white"
                  >
                    +52 55 6725 5576
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white p-6 text-neutral-950">
              <div className="text-sm font-medium">Lo que sigue para cerrar una versión realmente premium</div>
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                Integrar casos de éxito, evidencia visual, métricas, clientes y una narrativa comercial más ambiciosa.
                Ahí es donde este sitio deja de verse bien y empieza a vender en serio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="caution-stage" aria-label="Caution marquee">
        <div className="caution-tape">
          <div className="caution-rail">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="caution-item">
                <span>CAUTION MOnkey Bussines</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/45 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>Makaco - estrategia, diseño, producción y tecnología aplicada para experiencias de marca.</div>
          <div>Home rediseñada con una narrativa más clara, más sólida y con mejor lectura comercial.</div>
        </div>
      </footer>
    </div>
  );
}
