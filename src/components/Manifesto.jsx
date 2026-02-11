import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CalendarSearch, HelpCircle, TrendingDown, ThumbsDown } from 'lucide-react';

// Datos de las tarjetas (Sin cambios)
const problemCards = [
    {
        id: 1,
        icon: CalendarSearch,
        text: "No saber cómo va a estar la agenda el próximo mes",
        highlight: "y vivir siempre con la sensación de que 'este mes sí salió... pero quién sabe el siguiente'.",
        bg: "bg-[#e0e7ff]",
        delay: 0
    },
    {
        id: 2,
        icon: HelpCircle,
        text: "Trabajar en más de un lugar, extender horarios o moverte entre ciudades",
        highlight: "para que los números sí cuadren... aunque el cuerpo y la cabeza ya estén cansados.",
        bg: "bg-[#e7f1ad]",
        delay: 0.1
    },
    {
        id: 3,
        icon: TrendingDown,
        text: "El crecimiento de la consulta no sigue un proceso claro,",
        highlight: "depende de hacer más promos, ofertas o descuentos cuando la agenda se siente floja.",
        bg: "bg-[#e0e7ff] md:bg-[#e7f1ad]",
        delay: 0.2
    },
    {
        id: 4,
        icon: ThumbsDown,
        text: "Haces de todo para que la consulta siga creciendo: anuncios, contenido, apoyo externo...",
        highlight: "pero no tienes claridad de qué sí funciona ni qué deberías repetir.",
        bg: "bg-[#e7f1ad] md:bg-[#e0e7ff]",
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
        className={`${item.bg} p-6 md:p-8 rounded-3xl flex flex-col gap-4 text-[#374e86] shadow-lg shadow-black/5 h-full min-h-[220px] justify-center`}
    >
        <div className="w-12 h-12 rounded-full bg-[#374e86]/10 flex items-center justify-center mb-1">
            <item.icon size={24} strokeWidth={2} className="text-[#374e86]" />
        </div>
        <p className="text-lg leading-snug font-medium font-['Wix_Madefor_Text']">
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

    const yText = useTransform(scrollYProgress, [0, 1], [0, -30]);

    // Configuración de transición (Igual a SocialProof para consistencia)
    const transitionConfig = { duration: 0.8, ease: "easeInOut" };

    return (
        <motion.section
            id="manifiesto"
            ref={containerRef}
            // 1. ANIMACIÓN DE FONDO: Blanco -> Azul Oscuro
            initial={{ backgroundColor: "#fdfdfd" }}
            whileInView={{ backgroundColor: "#374e86" }}
            viewport={{ margin: "-20%", once: true }} // Se activa cuando el 20% entra en pantalla
            transition={transitionConfig}
            className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 z-20 font-['Wix_Madefor_Display']"
        >

            {/* Background Texture (Sutil) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* 2. WRAPPER DE CONTENIDO: Invierte el color del texto (Azul -> Blanco) */}
            <motion.div
                initial={{ color: "#374e86" }}
                whileInView={{ color: "#fdfdfd" }}
                transition={transitionConfig}
                className="max-w-7xl mx-auto relative z-10"
            >

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                    {/* --- COLUMNA IZQUIERDA: EL PROBLEMA --- */}
                    <div className="lg:col-span-5 relative">
                        <motion.div style={{ y: yText }} className="relative z-10 sticky top-32">

                            {/* Badge Animado: Bordes y Texto cambian de color para contraste */}
                            <motion.div
                                initial={{ borderColor: "rgba(55, 78, 134, 0.2)", color: "#374e86" }}
                                whileInView={{ borderColor: "rgba(253, 253, 253, 0.2)", color: "#e7f1ad" }}
                                transition={transitionConfig}
                                className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs uppercase tracking-widest mb-8 font-mono"
                            >
                                <motion.div
                                    initial={{ backgroundColor: "#374e86" }}
                                    whileInView={{ backgroundColor: "#e7f1ad" }}
                                    transition={transitionConfig}
                                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                                />
                                Identificando el problema
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                                Si tu agenda es impredecible, <br />
                                {/* Span Animado: De Azul Oscuro a Azul Claro */}
                                <motion.span
                                    initial={{ color: "#374e86" }}
                                    whileInView={{ color: "#95b2ed" }}
                                    transition={transitionConfig}
                                    className="font-serif italic font-medium"
                                >
                                    el problema no es tu consulta.
                                </motion.span>
                            </h2>

                            <div className="space-y-6 text-lg md:text-xl font-light border-l-2 border-[#e7f1ad]/50 pl-6 font-['Wix_Madefor_Text'] opacity-90">
                                <p>
                                    Es la forma en la que hoy estás tomando decisiones para hacerla crecer.
                                </p>
                                <p className="font-medium">
                                    Falta una estructura clara que te permita atraer, filtrar y agendar pacientes con intención real.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- COLUMNA DERECHA: GRID DE TARJETAS --- */}
                    {/* Las tarjetas mantienen su estilo propio (son "cards" sólidas), así que se ven bien sobre cualquier fondo */}
                    <div className="lg:col-span-7 flex flex-col justify-end lg:pt-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {problemCards.map((card) => (
                                <ProblemCard key={card.id} item={card} />
                            ))}
                        </div>
                    </div>

                </div>

                {/* --- SECCIÓN INFERIOR: BANNER CTA --- */}
                {/* Este banner es oscuro por defecto, se mantendrá consistente */}
                <div className="bg-[#2a3c69] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-black/20">

                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#e7f1ad]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-40 text-[#ff6b6b]" viewBox="0 0 800 200">
                        <path d="M600,0 Q650,100 800,50" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10 text-[#fdfdfd]">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                                Una agenda constante <span className="text-[#e7f1ad] font-serif italic">no se construye con rachas.</span>
                            </h3>
                            <p className="opacity-70 leading-relaxed font-light font-['Wix_Madefor_Text']">
                                Se construye cuando cada decisión responde a un plan claro y no solo a lo urgente.
                            </p>
                        </div>

                        {/* CTA CONTAINER */}
                        <div className="flex flex-col items-center md:items-end w-full md:w-auto">

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#e7f1ad] text-[#374e86] px-6 py-4 md:px-8 rounded-full font-bold text-lg leading-tight flex items-center justify-center gap-3 shadow-lg shadow-[#e7f1ad]/10 hover:bg-[#dce895] transition-colors w-full md:w-auto text-center font-['Wix_Madefor_Display']"
                            >
                                Evaluar mi consulta
                                <ArrowRight size={20} strokeWidth={2.5} className="flex-shrink-0" />
                            </motion.button>

                            <p className="text-[#e7f1ad]/60 text-xs uppercase tracking-widest font-bold text-center mt-3">
                                Ver si mi consulta necesita estructura
                            </p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </motion.section>
    );
};

export default Manifesto;