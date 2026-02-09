import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Quote, ArrowRight, MapPin, Users } from 'lucide-react';

const SocialProof = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const containerRef = useRef(null);

    // Parallax suave para elementos decorativos
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

    const handlePlayToggle = () => {
        setIsPlaying(!isPlaying);
        // Lógica del video real
    };

    // Configuración de la transición compartida
    const transitionConfig = { duration: 0.8, ease: "easeInOut" };

    return (
        <motion.section
            ref={containerRef}
            // --- ANIMACIÓN DE FONDO ---
            initial={{ backgroundColor: "#fdfdfd" }} // Comienza blanco
            whileInView={{ backgroundColor: "#374e86" }} // Termina azul oscuro
            viewport={{ margin: "-20%", once: true }} // Se activa cuando entra al 20% de la pantalla, una sola vez
            transition={transitionConfig}
            id="casos"
            className="py-24 md:py-32 px-6 md:px-12 relative z-20 font-sans overflow-hidden"
        >

            {/* --- TEXTURA DE CUADRÍCULA (Grid) --- */}
            {/* Son líneas blancas finas. Serán invisibles al inicio (sobre fondo blanco) y aparecerán al oscurecerse el fondo. */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}>
            </div>

            {/* Wrapper de contenido que anima el color del texto principal */}
            <motion.div
                initial={{ color: "#374e86" }} // Texto inicial oscuro
                whileInView={{ color: "#fdfdfd" }} // Texto final blanco
                transition={transitionConfig}
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10"
            >

                {/* --- COLUMNA 1: VIDEO (Estilo Sketch) --- */}
                <div className="lg:col-span-6 relative order-2 lg:order-1">

                    {/* Flecha decorativa */}
                    <motion.div style={{ y: yParallax }} className="hidden lg:block absolute -top-10 -right-10 z-20 text-[#e7f1ad]">
                        <svg width="70" height="70" viewBox="0 0 100 100" className="transform rotate-12">
                            <path d="M10,90 Q50,50 90,10" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5" />
                            <path d="M90,10 L80,15 M90,10 L85,25" fill="none" stroke="currentColor" strokeWidth="3" />
                        </svg>
                    </motion.div>

                    {/* Borde Sketch del Video (Anima su color también) */}
                    <div className="relative w-full aspect-[4/5] md:aspect-video lg:aspect-[4/5]">
                        <motion.svg
                            initial={{ color: "#374e86" }}
                            whileInView={{ color: "#fdfdfd" }}
                            transition={transitionConfig}
                            className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 500" preserveAspectRatio="none"
                        >
                            <path d="M10,10 Q200,2 390,15 Q398,250 385,485 Q200,495 15,490 Q2,250 10,10 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </motion.svg>

                        {/* MÁSCARA DEL VIDEO */}
                        <div className="absolute inset-3 md:inset-4 rounded-2xl overflow-hidden bg-[#2a3b66] group cursor-pointer shadow-2xl" onClick={handlePlayToggle}>
                            <div className="absolute inset-0 bg-[#374e86]">
                                <img src="/api/placeholder/800/1000" alt="Dr. Pedro Testimonial" className="w-full h-full object-cover opacity-70 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#e7f1ad] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(231,241,173,0.4)] transition-all duration-300 group-hover:scale-110 ${isPlaying ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
                                <Play size={32} className="text-[#374e86] ml-1" fill="currentColor" />
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 bg-[#374e86]/90 backdrop-blur-md border border-[#fdfdfd]/10 p-4 rounded-xl">
                                <p className="text-[#e7f1ad] text-xs font-bold uppercase tracking-widest mb-1">Dermatología Clínica</p>
                                <p className="text-white text-sm font-medium italic">"Antes dependía del boca a boca. Hoy mi agenda se llena sola."</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- COLUMNA 2: HISTORIA & RESULTADOS --- */}
                <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">

                    {/* Etiqueta */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-[#e7f1ad]/10 px-4 py-1.5 rounded-full mb-6 border border-[#e7f1ad]/30"
                    >
                        <span className="font-mono text-[#e7f1ad] text-xs font-bold tracking-widest uppercase">
                            Social Proof • Caso Real
                        </span>
                    </motion.div>

                    {/* Headline (Hereda el color animado) */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                        Historia real de crecimiento con <span className="font-serif italic font-medium text-[#95b2ed]">acompañamiento estratégico.</span>
                    </h2>

                    {/* Bloque Narrativo (Hereda color, usa opacidad) */}
                    <div className="space-y-6 mb-10 border-l-2 border-[#e7f1ad]/30 pl-6">
                        <div>
                            <h4 className="text-[#e7f1ad] font-bold text-lg mb-2">El Punto de Partida:</h4>
                            <p className="opacity-80 leading-relaxed font-light">
                                Cuando comenzamos, la consulta operaba en una zona residencial. Su crecimiento dependía 100% del boca a boca y esfuerzos aislados.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[#e7f1ad] font-bold text-lg mb-2">El Trabajo:</h4>
                            <p className="opacity-80 leading-relaxed font-light">
                                Ordenamos la captación, definimos prioridades claras y tomamos decisiones basadas en datos, no en corazonadas.
                            </p>
                        </div>
                    </div>

                    {/* CARDS DE RESULTADOS (Animan su fondo y borde para adaptarse) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ backgroundColor: "rgba(55, 78, 134, 0.05)", borderColor: "rgba(55, 78, 134, 0.1)" }} // Tono oscuro sobre blanco
                            whileInView={{ backgroundColor: "rgba(253, 253, 253, 0.05)", borderColor: "rgba(253, 253, 253, 0.1)" }} // Tono claro sobre oscuro
                            transition={transitionConfig}
                            className="border rounded-2xl p-6 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-2 mb-3 text-[#e7f1ad]">
                                <MapPin size={18} />
                                <span className="text-xs font-bold uppercase tracking-wider">Ubicación</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="opacity-60 text-sm line-through decoration-[#e7f1ad]/50">De Residencial</span>
                                <div className="flex items-center gap-2 font-bold text-lg">
                                    <ArrowRight size={16} className="text-[#e7f1ad]" />
                                    Plaza Comercial
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ backgroundColor: "rgba(55, 78, 134, 0.05)", borderColor: "rgba(55, 78, 134, 0.1)" }}
                            whileInView={{ backgroundColor: "rgba(253, 253, 253, 0.05)", borderColor: "rgba(253, 253, 253, 0.1)" }}
                            transition={transitionConfig}
                            className="border rounded-2xl p-6 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-2 mb-3 text-[#e7f1ad]">
                                <Users size={18} />
                                <span className="text-xs font-bold uppercase tracking-wider">Pacientes</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="opacity-60 text-sm line-through decoration-[#e7f1ad]/50">De "Cazadores de ofertas"</span>
                                <div className="flex items-center gap-2 font-bold text-lg">
                                    <ArrowRight size={16} className="text-[#e7f1ad]" />
                                    High Ticket
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Cita (Hereda color) */}
                    <blockquote className="mb-10 relative">
                        <Quote className="absolute -top-3 -left-2 text-[#e7f1ad] opacity-20 transform rotate-180" size={40} />
                        <p className="text-xl md:text-2xl font-serif italic opacity-90 leading-snug pl-6 relative z-10">
                            "Hoy los pacientes que llegan confían en mi trabajo, no buscan promociones y vienen mejor informados."
                        </p>
                    </blockquote>

                    {/* Disclaimer y CTA */}
                    <div>
                        <p className="text-xs opacity-40 italic mb-8 max-w-md">
                            *Cada consulta es distinta. Los resultados dependen del contexto y la constancia en la estrategia.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative w-full sm:w-auto bg-[#fdfdfd] text-[#374e86] px-10 py-5 rounded-full text-lg font-bold overflow-hidden shadow-xl shadow-black/20"
                        >
                            <div className="absolute inset-0 bg-[#e7f1ad] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[#374e86] transition-colors duration-300">
                                Evaluar mi negocio
                                <ArrowRight size={20} />
                            </span>
                        </motion.button>
                    </div>

                </div>

            </motion.div>
        </motion.section>
    );
};

export default SocialProof;