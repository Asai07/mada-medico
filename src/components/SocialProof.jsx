import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight, MapPin, Users } from 'lucide-react';

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
            className="py-24 md:py-32 px-6 md:px-12 relative z-20 font-['Wix_Madefor_Display'] overflow-hidden"
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
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center relative z-10"
            >

                {/* --- BLOQUE 1: CABECERA MÓVIL (Solo visible en Móvil) --- */}
                {/* Order-1 en móvil para que salga arriba de todo */}
                <div className="lg:hidden col-span-1 order-1 mb-4">
                    <div className="mb-6">
                        <div className="inline-block bg-[#e7f1ad]/10 px-4 py-1.5 rounded-full border border-[#e7f1ad]/30">
                            <span className="font-mono text-[#e7f1ad] text-xs font-bold tracking-widest uppercase">
                                Social Proof • Caso Real
                            </span>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold leading-tight">
                        Historia real de crecimiento con <span className="font-serif italic font-medium text-[#95b2ed]">acompañamiento estratégico.</span>
                    </h2>
                </div>


                {/* --- BLOQUE 2: VIDEO --- */}
                {/* Order-2 en móvil (debajo del título), Order-1 en Desktop (Izquierda) */}
                <div className="lg:col-span-6 relative order-2 lg:order-1">

                    {/* Flecha decorativa (Solo desktop) */}
                    <motion.div style={{ y: yParallax }} className="hidden lg:block absolute -top-6 -right-6 z-20 text-[#e7f1ad]">
                        <svg width="60" height="60" viewBox="0 0 100 100" className="transform rotate-12">
                            <path d="M10,90 Q50,50 90,10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" />
                            <path d="M90,10 L80,15 M90,10 L85,25" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </motion.div>

                    {/* Contenedor de Video */}
                    <div
                        className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20 group cursor-pointer border border-[#fdfdfd]/10"
                        onClick={handlePlayToggle}
                    >
                        {/* Imagen de fondo / Placeholder */}
                        <div className="absolute inset-0 bg-[#2a3b66]">
                            <img
                                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Dr. Pedro Testimonial"
                                className="w-full h-full object-cover opacity-80 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Botón Play */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#e7f1ad]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(231,241,173,0.3)] transition-all duration-300 group-hover:scale-110 ${isPlaying ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
                            <Play size={32} className="text-[#374e86] ml-1" fill="currentColor" />
                        </div>

                        {/* Overlay de Info (Abajo) */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000]/90 to-transparent p-6 pt-24">
                            {/* TEXTO ACTUALIZADO: Dr. Pedro Rojas */}
                            <p className="text-[#e7f1ad] text-xs font-bold uppercase tracking-widest mb-1">
                                Dr. Pedro Rojas - Médico estético
                            </p>
                            {/* CITA ACTUALIZADA */}
                            <p className="text-white text-sm font-medium italic font-serif">
                                "Antes dependía del boca a boca. Hoy mi agenda crece con mayor constancia."
                            </p>
                        </div>
                    </div>
                </div>


                {/* --- BLOQUE 3: CUERPO DE TEXTO (Desktop: Título + Texto / Móvil: Solo Texto) --- */}
                {/* Order-3 en móvil (abajo del video), Order-2 en Desktop (Derecha) */}
                <div className="lg:col-span-6 flex flex-col justify-center order-3 lg:order-2">

                    {/* CABECERA DESKTOP (Oculta en móvil porque ya la mostramos arriba) */}
                    <div className="hidden lg:block mb-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block bg-[#e7f1ad]/10 px-4 py-1.5 rounded-full border border-[#e7f1ad]/30 mb-6"
                        >
                            <span className="font-mono text-[#e7f1ad] text-xs font-bold tracking-widest uppercase">
                                Social Proof • Caso Real
                            </span>
                        </motion.div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Historia real de crecimiento con <span className="font-serif italic font-medium text-[#95b2ed]">acompañamiento estratégico.</span>
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {/* Puntos Clave */}
                        <div className="space-y-6 border-l-2 border-[#e7f1ad]/30 pl-6">
                            <div>
                                <h4 className="text-[#e7f1ad] font-bold text-lg mb-2">El Punto de Partida:</h4>
                                <p className="opacity-80 leading-relaxed font-light text-sm md:text-base font-['Wix_Madefor_Text']">
                                    Cuando comenzamos, la consulta operaba en una zona residencial. Su crecimiento dependía 100% del boca a boca y esfuerzos aislados.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[#e7f1ad] font-bold text-lg mb-2">El Trabajo:</h4>
                                <p className="opacity-80 leading-relaxed font-light text-sm md:text-base font-['Wix_Madefor_Text']">
                                    Ordenamos la captación, definimos prioridades claras y tomamos decisiones basadas en datos, no en corazonadas.
                                </p>
                            </div>
                        </div>

                        {/* Cards de Resultados ACTUALIZADAS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Card 1: Ubicación */}
                            <div className="border border-white/10 bg-white/5 rounded-2xl p-5">
                                <div className="flex items-center gap-2 mb-2 text-[#e7f1ad]">
                                    <MapPin size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Ubicación</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="opacity-50 text-xs line-through mb-1">De Residencial</span>
                                    <div className="flex items-center gap-2 font-bold text-base">
                                        <ArrowRight size={14} className="text-[#e7f1ad]" />
                                        A Plaza Comercial
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Pacientes (Texto Cambiado) */}
                            <div className="border border-white/10 bg-white/5 rounded-2xl p-5">
                                <div className="flex items-center gap-2 mb-2 text-[#e7f1ad]">
                                    <Users size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Pacientes</span>
                                </div>
                                <div className="flex flex-col">
                                    {/* Texto tachado actualizado según nota */}
                                    <span className="opacity-50 text-xs line-through mb-1">De atraer por precio</span>
                                    <div className="flex items-center gap-2 font-bold text-base leading-tight">
                                        <ArrowRight size={14} className="text-[#e7f1ad] flex-shrink-0" />
                                        Atraer por decisión y valor
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Final */}
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

                            {/* SUBLINE AGREGADO */}
                            <div className="mt-4 space-y-1">
                                <p className="text-[#fdfdfd] text-sm font-medium font-['Wix_Madefor_Text']">
                                    Evaluar si este crecimiento es posible en mi consulta
                                </p>
                                <p className="text-xs opacity-40 italic font-['Wix_Madefor_Text']">
                                    *Cada consulta es distinta. Los resultados dependen del contexto.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </motion.div>
        </motion.section>
    );
};

export default SocialProof;