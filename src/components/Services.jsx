import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Target, Compass, BarChart3, TrendingUp } from 'lucide-react';

// Datos que irán cambiando dentro de la tarjeta
const roleCards = [
    {
        icon: Target,
        title: "Claridad y Control",
        text: "El objetivo no es solo mover la agenda. Es ayudarte a crecer con decisiones mejor informadas.",
        color: "#e7f1ad"
    },
    {
        icon: Compass,
        title: "Estrategia a Medida",
        text: "No usamos fórmulas genéricas. Diseñamos un plan pensado exclusivamente para tu contexto y tus prioridades.",
        color: "#95b2ed"
    },
    {
        icon: BarChart3,
        title: "Resultados Reales",
        text: "Dejamos de lado la intuición para tomar decisiones basadas en datos que realmente impactan tu consulta.",
        color: "#bcb5ff"
    }
];

const RoleSection = () => {
    // Estado para controlar qué tarjeta se muestra
    const [activeIndex, setActiveIndex] = useState(0);

    // Ciclo automático cada 4.5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % roleCards.length);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    const CurrentIcon = roleCards[activeIndex].icon;

    return (
        <section id="servicios" className="py-24 md:py-32 px-6 md:px-12 bg-[#fdfdfd] relative z-10 font-sans overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">

                {/* COLUMNA 1: Contenido de Texto */}
                <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">

                    {/* Etiqueta */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <span className="w-8 h-[2px] bg-[#e7f1ad]"></span>
                        <span className="font-mono text-[#374e86]/60 text-xs tracking-widest uppercase">
                            Nuestro Rol
                        </span>
                    </motion.div>

                    {/* Titular */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#374e86] tracking-tight leading-[1.1] mb-6">
                        Actuamos como una <br />
                        <span className="font-serif italic font-medium text-[#4a63a3]">aliada estratégica</span> <br />
                        en el crecimiento de tu consulta.
                    </h2>

                    {/* Subtítulo resaltado */}
                    <div className="mb-8 relative inline-block self-start">
                        <div className="absolute inset-0 bg-[#e7f1ad]/40 -skew-x-6 rounded-sm transform scale-105"></div>
                        <p className="relative font-bold text-[#374e86] text-lg md:text-xl px-2">
                            No somos una agencia de marketing tradicional.
                        </p>
                    </div>

                    <p className="text-lg text-[#374e86]/70 font-light leading-relaxed mb-10 max-w-xl">
                        Nos involucramos para entender tu consulta como negocio, cómo llegan hoy tus pacientes y qué decisiones realmente impactan tu agenda.
                    </p>

                    {/* Lista Estática */}
                    <div className="space-y-6 mb-12">
                        <h3 className="font-bold text-[#374e86] text-sm uppercase tracking-widest border-b border-[#374e86]/10 pb-3 mb-6">
                            Nuestro trabajo comienza antes de lanzar anuncios:
                        </h3>

                        <ul className="space-y-5">
                            {[
                                "Analizamos tu consulta, su momento actual y sus prioridades reales.",
                                "Definimos qué tipo de paciente quieres atraer y por qué.",
                                "Diseñamos una estrategia pensada para tu contexto, no fórmulas genéricas.",
                                "Acompañamos las decisiones, medimos resultados y ajustamos con criterio."
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 flex-shrink-0 text-[#e7f1ad]">
                                        <CheckCircle2 size={20} fill="#374e86" className="text-[#e7f1ad]" />
                                    </div>
                                    <span className="text-[#374e86]/80 text-base md:text-lg font-medium leading-snug">
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative bg-[#374e86] text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden shadow-xl shadow-[#374e86]/20"
                        >
                            <div className="absolute inset-0 bg-[#e7f1ad] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-[#374e86] transition-colors duration-300">
                                Evaluar mi negocio
                                <ArrowRight size={20} />
                            </span>
                        </motion.button>

                        <div className="flex flex-col">
                            <span className="text-[#374e86] font-bold text-sm">¿Tu consulta está lista?</span>
                            <span className="text-[#374e86]/60 text-xs">Test de 3 minutos sin costo.</span>
                        </div>
                    </div>
                </div>

                {/* COLUMNA 2: Tarjeta Dinámica (Sketch Style) */}
                <div className="lg:col-span-5 order-1 lg:order-2 mb-12 lg:mb-0 relative flex justify-center">

                    {/* Flecha decorativa */}
                    <div className="hidden lg:block absolute top-10 -left-16 z-20 text-[#e7f1ad]">
                        <svg width="80" height="80" viewBox="0 0 100 100" className="transform rotate-12">
                            <path d="M90,10 Q50,50 10,80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                            <path d="M10,80 L20,75 M10,80 L15,70" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>

                    {/* Contenedor del Marco SVG */}
                    <div className="relative w-full max-w-md aspect-[4/5] lg:aspect-[3/4]">
                        <svg className="absolute inset-0 w-full h-full text-[#374e86]" viewBox="0 0 400 500" preserveAspectRatio="none">
                            <path
                                d="M10,10 Q200,5 390,15 Q395,250 385,485 Q200,495 15,490 Q5,250 10,10 Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Contenido Animado Interno */}
                        <div className="absolute inset-4 bg-[#fdfdfd] rounded-2xl flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                            {/* Fondo sutil */}
                            <div className="absolute inset-0 bg-[#e7f1ad]/5 rounded-2xl z-0"></div>

                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="relative z-10 flex flex-col items-center"
                                >
                                    {/* Icono Círculo */}
                                    <div className="w-32 h-32 bg-[#374e86] rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-[#374e86]/20">
                                        <CurrentIcon size={64} className="text-[#e7f1ad]" strokeWidth={1.5} />
                                    </div>

                                    {/* Título */}
                                    <h3 className="text-2xl font-serif italic text-[#374e86] mb-4 min-h-[3rem] flex items-center">
                                        {roleCards[activeIndex].title}
                                    </h3>

                                    {/* Texto */}
                                    <p className="text-[#374e86]/70 text-sm leading-relaxed max-w-xs mx-auto">
                                        "{roleCards[activeIndex].text}"
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Indicadores de posición (Puntitos) */}
                            <div className="absolute bottom-6 flex gap-2">
                                {roleCards.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-[#374e86]' : 'w-1.5 bg-[#374e86]/20'}`}
                                    />
                                ))}
                            </div>

                            {/* Decoración flotante esquina */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-6 right-6 text-[#95b2ed]/40"
                            >
                                <TrendingUp size={24} />
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RoleSection;