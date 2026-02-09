import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Activity, BrainCircuit, Search, ArrowRight, EyeOff, TrendingDown, LineChart } from 'lucide-react';

// Datos para los estados cambiantes de la tarjeta
const cardStates = [
    {
        icon: EyeOff, // Icono de "ojo tachado" para representar ceguera/desconocimiento
        title: "Inversión Ciega",
        description: "Gastas presupuesto sin saber qué canal trae pacientes reales.",
        color: "#e7f1ad"
    },
    {
        icon: TrendingDown,
        title: "Altibajos",
        description: "Agenda llena una semana, vacía la siguiente.",
        color: "#e7f1ad"
    },
    {
        icon: BrainCircuit,
        title: "Solo Intuición",
        description: "Decisiones tomadas por corazonadas, no por datos.",
        color: "#e7f1ad"
    }
];

const ProblemItem = ({ number, title, text, icon: Icon }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative border-t border-[#fdfdfd]/10 py-10 md:py-14 hover:bg-[#fdfdfd]/5 transition-colors duration-500"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Número / Icono */}
                <div className="md:col-span-2 flex flex-col justify-between h-full gap-4">
                    <span className="font-mono text-[#e7f1ad] text-sm tracking-widest block opacity-60">
                        ( 0{number} )
                    </span>
                    <div className="text-[#fdfdfd]/30 group-hover:text-[#e7f1ad] transition-colors duration-300">
                        <Icon size={28} strokeWidth={1.5} />
                    </div>
                </div>

                {/* Título */}
                <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-serif italic text-[#fdfdfd] group-hover:translate-x-2 transition-transform duration-500 ease-out">
                        {title}
                    </h3>
                </div>

                {/* Descripción */}
                <div className="md:col-span-6 md:pl-8">
                    <p className="text-[#fdfdfd]/70 font-sans font-light leading-relaxed text-lg max-w-lg group-hover:text-[#fdfdfd] transition-colors duration-300">
                        {text}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const ProblemSection = () => {
    const containerRef = useRef(null);
    const [currentStateIndex, setCurrentStateIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const rotateParallax = useTransform(scrollYProgress, [0, 1], [5, -5]);

    // Ciclo para cambiar el estado de la tarjeta cada 4 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStateIndex((prevIndex) => (prevIndex + 1) % cardStates.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const CurrentIcon = cardStates[currentStateIndex].icon;

    return (
        <section id="manifiesto" ref={containerRef} className="bg-[#374e86] text-[#fdfdfd] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 z-20 font-sans">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 border border-[#fdfdfd]/20 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-[#e7f1ad] mb-8"
                        >
                            <div className="w-1.5 h-1.5 bg-[#e7f1ad] rounded-full animate-pulse" />
                            Identificación del Problema
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                            Cuando tu agenda es impredecible, <br className="hidden md:block" />
                            <span className="text-[#95b2ed] font-serif italic font-medium">el problema no es tu consulta.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-[#fdfdfd]/60 font-light max-w-xl border-l-2 border-[#e7f1ad]/50 pl-6">
                            Es la forma en la que hoy estás tomando decisiones para hacerla crecer. Y cuando eso pasa, la agenda se vuelve inestable.
                        </p>
                    </div>

                    {/* Visual Element (Tarjeta Animada) */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
                        <motion.div
                            style={{ y: yParallax, rotate: rotateParallax }}
                            className="relative w-full max-w-md aspect-[4/3] border-2 border-[#fdfdfd]/20 rounded-[2rem] bg-[#374e86]/50 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8"
                        >
                            {/* Decoraciones de "sketch" */}
                            <div className="absolute -top-2 -left-2 w-full h-full border border-[#fdfdfd]/10 rounded-[2rem] -z-10"></div>
                            <div className="absolute -bottom-2 -right-2 w-full h-full border border-[#fdfdfd]/10 rounded-[2rem] -z-10"></div>

                            {/* Contenido Animado */}
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentStateIndex}
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <CurrentIcon
                                        size={80}
                                        strokeWidth={1}
                                        className="text-[#e7f1ad] mb-6 opacity-80"
                                    />
                                    <h4 className="text-3xl font-serif italic text-[#fdfdfd] mb-3">
                                        {cardStates[currentStateIndex].title}
                                    </h4>
                                    <p className="text-[#fdfdfd]/70 font-light leading-relaxed max-w-xs">
                                        {cardStates[currentStateIndex].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Flecha dibujada */}
                            <svg className="absolute -left-12 bottom-8 w-16 h-16 text-[#e7f1ad] opacity-60 hidden md:block transform rotate-12" viewBox="0 0 100 100">
                                <path d="M10,50 Q30,20 90,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                                <path d="M85,45 L90,50 L85,55" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </motion.div>
                    </div>
                </div>

                {/* List / Pillars */}
                <div className="border-b border-[#fdfdfd]/10 mb-16">
                    <ProblemItem
                        number="1"
                        icon={LineChart}
                        title="La Montaña Rusa"
                        text="Semanas con agenda llena... y otras inesperadamente tranquilas. Una inestabilidad que impide planificar el crecimiento real."
                    />
                    <ProblemItem
                        number="2"
                        icon={BrainCircuit}
                        title="Intuición vs. Datos"
                        text="Decisiones tomadas por corazonadas. Inviertes en anuncios o plataformas sin saber realmente qué es lo que trae pacientes."
                    />
                    <ProblemItem
                        number="3"
                        icon={Search}
                        title="El Desgaste"
                        text="La sensación constante de estar 'intentando cosas' nuevas cada mes, sin ver resultados acumulativos ni sostenibles."
                    />
                </div>

                {/* Footer */}
                <div className="bg-[#2a3c69] rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#e7f1ad]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Una agenda constante <span className="text-[#e7f1ad] font-serif italic">no se construye con rachas.</span>
                            </h3>
                            <p className="text-[#fdfdfd]/70 leading-relaxed">
                                Se construye cuando cada decisión responde a un plan claro y objetivos definidos.
                            </p>
                        </div>
                        <div className="flex justify-start md:justify-end">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#e7f1ad] text-[#374e86] px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-lg shadow-[#e7f1ad]/10"
                            >
                                Ver cómo lo hacemos
                                <ArrowRight size={20} />
                            </motion.button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProblemSection;