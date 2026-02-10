import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Quote, ArrowRight, MapPin, Users } from 'lucide-react';

const SocialProof = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const containerRef = useRef(null);

    // Parallax suave
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

    const handlePlayToggle = () => {
        setIsPlaying(!isPlaying);
    };

    const transitionConfig = { duration: 0.8, ease: "easeInOut" };

    return (
        <motion.section
            ref={containerRef}
            initial={{ backgroundColor: "#fdfdfd" }}
            whileInView={{ backgroundColor: "#374e86" }}
            viewport={{ margin: "-20%", once: true }}
            transition={transitionConfig}
            id="casos"
            className="py-24 md:py-32 px-6 md:px-12 relative z-20 font-sans overflow-hidden"
        >
            {/* TEXTURA DE FONDO */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}>
            </div>

            <motion.div
                initial={{ color: "#374e86" }}
                whileInView={{ color: "#fdfdfd" }}
                transition={transitionConfig}
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10"
            >

                {/* --- COLUMNA 1: VIDEO (Ahora estilo limpio) --- */}
                {/* En móvil (order-2) va después del título, en desktop (order-1) va a la izquierda */}
                <div className="lg:col-span-6 relative order-2 lg:order-1">

                    {/* Flecha decorativa */}
                    <motion.div style={{ y: yParallax }} className="hidden lg:block absolute -top-6 -right-6 z-20 text-[#e7f1ad]">
                        <svg width="60" height="60" viewBox="0 0 100 100" className="transform rotate-12">
                            <path d="M10,90 Q50,50 90,10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" />
                            <path d="M90,10 L80,15 M90,10 L85,25" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </motion.div>

                    {/* Contenedor de Video Limpio (Sin SVG de sketch) */}
                    <div
                        className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20 group cursor-pointer border border-[#fdfdfd]/10"
                        onClick={handlePlayToggle}
                    >
                        {/* Imagen de fondo / Video */}
                        <div className="absolute inset-0 bg-[#2a3b66]">
                            <img
                                src="/api/placeholder/800/800"
                                alt="Dr. Pedro Testimonial"
                                className="w-full h-full object-cover opacity-80 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Botón Play Central */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#e7f1ad]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(231,241,173,0.3)] transition-all duration-300 group-hover:scale-110 ${isPlaying ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
                            <Play size={32} className="text-[#374e86] ml-1" fill="currentColor" />
                        </div>

                        {/* Overlay de Info (Abajo) */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000]/80 to-transparent p-6 pt-20">
                            <p className="text-[#e7f1ad] text-xs font-bold uppercase tracking-widest mb-1">Dermatología Clínica</p>
                            <p className="text-white text-sm font-medium italic">"Antes dependía del boca a boca. Hoy mi agenda se llena sola."</p>
                        </div>
                    </div>
                </div>


                {/* --- COLUMNA 2: HISTORIA & RESULTADOS --- */}
                {/* En móvil (order-1) el título va primero, luego el video (arriba), luego esto */}
                <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">

                    {/* Etiqueta */}
                    <div className="mb-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block bg-[#e7f1ad]/10 px-4 py-1.5 rounded-full border border-[#e7f1ad]/30"
                        >
                            <span className="font-mono text-[#e7f1ad] text-xs font-bold tracking-widest uppercase">
                                Social Proof • Caso Real
                            </span>
                        </motion.div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                        Historia real de crecimiento con <span className="font-serif italic font-medium text-[#95b2ed]">acompañamiento estratégico.</span>
                    </h2>

                    {/* El resto del contenido (Puntos, Cards, CTA) va en un bloque que en móvil queda debajo del video visualmente gracias al orden del grid padre, pero aquí lo estructuramos lógicamente */}

                    <div className="space-y-8">
                        {/* Puntos Clave */}
                        <div className="space-y-6 border-l-2 border-[#e7f1ad]/30 pl-6">
                            <div>
                                <h4 className="text-[#e7f1ad] font-bold text-lg mb-2">El Punto de Partida:</h4>
                                <p className="opacity-80 leading-relaxed font-light text-sm md:text-base">
                                    Cuando comenzamos, la consulta operaba en una zona residencial. Su crecimiento dependía 100% del boca a boca y esfuerzos aislados.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[#e7f1ad] font-bold text-lg mb-2">El Trabajo:</h4>
                                <p className="opacity-80 leading-relaxed font-light text-sm md:text-base">
                                    Ordenamos la captación, definimos prioridades claras y tomamos decisiones basadas en datos, no en corazonadas.
                                </p>
                            </div>
                        </div>

                        {/* Cards de Resultados */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-white/10 bg-white/5 rounded-2xl p-5">
                                <div className="flex items-center gap-2 mb-2 text-[#e7f1ad]">
                                    <MapPin size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Ubicación</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="opacity-50 text-xs line-through mb-1">De Residencial</span>
                                    <div className="flex items-center gap-2 font-bold text-base">
                                        <ArrowRight size={14} className="text-[#e7f1ad]" />
                                        Plaza Comercial
                                    </div>
                                </div>
                            </div>

                            <div className="border border-white/10 bg-white/5 rounded-2xl p-5">
                                <div className="flex items-center gap-2 mb-2 text-[#e7f1ad]">
                                    <Users size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Pacientes</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="opacity-50 text-xs line-through mb-1">De "Cazadores"</span>
                                    <div className="flex items-center gap-2 font-bold text-base">
                                        <ArrowRight size={14} className="text-[#e7f1ad]" />
                                        High Ticket
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Final (Ahora sí al final de todo el bloque en móvil) */}
                        <div className="pt-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative w-full sm:w-auto bg-[#fdfdfd] text-[#374e86] px-8 py-4 rounded-full text-lg font-bold overflow-hidden shadow-xl shadow-black/20"
                            >
                                <div className="absolute inset-0 bg-[#e7f1ad] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[#374e86] transition-colors duration-300">
                                    Evaluar mi negocio
                                    <ArrowRight size={20} />
                                </span>
                            </motion.button>
                            <p className="text-xs opacity-40 italic mt-4 max-w-md">
                                *Cada consulta es distinta. Los resultados dependen del contexto.
                            </p>
                        </div>
                    </div>

                </div>

            </motion.div>
        </motion.section>
    );
};

export default SocialProof;