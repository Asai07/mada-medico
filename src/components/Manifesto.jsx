import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, BrainCircuit, Target, Repeat } from 'lucide-react';

// Datos de las tarjetas
const problemCards = [
    {
        id: 1,
        icon: Calendar,
        text: "Semanas con agenda llena...",
        highlight: "y otras inesperadamente tranquilas.",
        bg: "bg-[#e0e7ff]", // Lavanda
        delay: 0
    },
    {
        id: 2,
        icon: Repeat,
        text: "Sensación constante de estar 'intentando cosas'",
        highlight: "y no ver resultados sostenibles.",
        bg: "bg-[#e7f1ad]", // Lima
        delay: 0.1
    },
    {
        id: 3,
        icon: Target,
        text: "Anuncios, contenido o plataformas",
        highlight: "sin saber qué sí funciona.",
        bg: "bg-[#e7f1ad]", // Lima
        delay: 0.2
    },
    {
        id: 4,
        icon: BrainCircuit,
        text: "Decisiones tomadas por",
        highlight: "intuición.",
        bg: "bg-[#e0e7ff]", // Lavanda
        delay: 0.3
    }
];

const ProblemCard = ({ item }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: item.delay, duration: 0.5 }}
        whileHover={{ y: -5 }}
        className={`${item.bg} p-6 md:p-8 rounded-3xl flex flex-col gap-4 text-[#374e86] shadow-lg shadow-black/5 h-full min-h-[200px] justify-center`}
    >
        <div className="w-10 h-10 rounded-full bg-[#374e86]/10 flex items-center justify-center mb-1">
            <item.icon size={20} strokeWidth={2} className="text-[#374e86]" />
        </div>
        <p className="text-lg leading-snug font-medium">
            {item.text} <span className="font-bold">{item.highlight}</span>
        </p>
    </motion.div>
);

const Manifesto = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax suave para el texto
    const yText = useTransform(scrollYProgress, [0, 1], [0, -30]);

    return (
        <section id="manifiesto" ref={containerRef} className="bg-[#374e86] text-[#fdfdfd] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 z-20 font-sans">

            {/* Background Texture (Cuadrícula tenue restaurada) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                    {/* --- COLUMNA IZQUIERDA: EL PROBLEMA --- */}
                    <div className="lg:col-span-5 relative">
                        <motion.div style={{ y: yText }} className="relative z-10 sticky top-32">
                            <div className="inline-flex items-center gap-2 border border-[#fdfdfd]/20 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-[#e7f1ad] mb-8">
                                <div className="w-1.5 h-1.5 bg-[#e7f1ad] rounded-full animate-pulse" />
                                Identificación del Problema
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                                Cuando tu agenda es impredecible, <br />
                                <span className="text-[#95b2ed] font-serif italic font-medium">el problema no es tu consulta.</span>
                            </h2>

                            <div className="space-y-6 text-lg md:text-xl text-[#fdfdfd]/80 font-light border-l-2 border-[#e7f1ad]/50 pl-6">
                                <p>
                                    Es la forma en la que hoy estás tomando decisiones para hacerla crecer.
                                </p>
                                <p className="text-[#fdfdfd]">
                                    Y cuando eso pasa, la agenda se vuelve inestable.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- COLUMNA DERECHA: GRID DE TARJETAS --- */}
                    <div className="lg:col-span-7 flex flex-col justify-end lg:pt-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {problemCards.map((card) => (
                                <ProblemCard key={card.id} item={card} />
                            ))}
                        </div>
                    </div>

                </div>

                {/* --- SECCIÓN INFERIOR: BANNER CTA RESTAURADO (Estilo image_a2d820.png) --- */}
                <div className="bg-[#2a3c69] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-black/20">

                    {/* Decoración de fondo del banner */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#e7f1ad]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    {/* Líneas decorativas naranjas (estilo sketch) del banner original */}
                    <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-40 text-[#ff6b6b]" viewBox="0 0 800 200">
                        <path d="M600,0 Q650,100 800,50" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                                Una agenda constante <span className="text-[#e7f1ad] font-serif italic">no se construye con rachas.</span>
                            </h3>
                            <p className="text-[#fdfdfd]/70 leading-relaxed font-light">
                                Se construye cuando cada decisión responde a un plan claro y objetivos definidos.
                            </p>
                        </div>

                        <div className="flex justify-start md:justify-end">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#e7f1ad] text-[#374e86] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-lg shadow-[#e7f1ad]/10 hover:bg-[#dce895] transition-colors"
                            >
                                Evaluar mi negocio
                                <ArrowRight size={20} strokeWidth={2.5} />
                            </motion.button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Manifesto;