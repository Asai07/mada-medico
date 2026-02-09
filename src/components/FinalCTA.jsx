import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Efecto Parallax sutil para el fondo
    const yBg = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-[#fdfdfd] relative z-20 overflow-hidden flex items-center justify-center">

            {/* 1. FONDO AMBIENTAL (Ruido + Gradiente Sutil) */}
            <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e7f1ad]/20 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            </motion.div>

            <div className="relative z-10 w-full max-w-5xl mx-auto">

                {/* 2. CONTENEDOR CON BORDE ANIMADO (Limpio y Preciso) */}
                <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">

                    {/* SVG que se "dibuja" solo (SIN FILTROS DE DISTORSIÓN) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none text-[#374e86]" preserveAspectRatio="none" viewBox="0 0 100 100">
                        {/* Usamos un 'rect' en lugar de un path complejo para asegurar líneas perfectas */}
                        <motion.rect
                            x="1" y="1" width="98" height="98" rx="4" ry="4" // Coordenadas relativas al viewBox 0-100 y bordes redondeados
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5" // Grosor relativo al viewBox
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </svg>

                    {/* Decoración Externa (Sparkles) */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                        className="absolute -top-6 -right-6 md:-top-8 md:-right-8 text-[#e7f1ad]"
                    >
                        <Sparkles size={48} strokeWidth={1.5} />
                    </motion.div>


                    {/* 3. CONTENIDO CENTRAL */}
                    <div className="relative z-10 flex flex-col items-center">

                        {/* Eyebrow */}
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-mono text-[#374e86]/60 text-xs tracking-widest uppercase mb-6 block"
                        >
                            ¿Es este el paso correcto?
                        </motion.span>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#374e86] leading-tight mb-8 max-w-4xl mx-auto">
                            Si llegaste hasta aquí, ya te diste cuenta que crecer no es hacer más, sino <br className="hidden md:block" />
                            <span className="relative inline-block px-2">
                                {/* Resaltador Amarillo Animado */}
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="absolute inset-0 bg-[#e7f1ad]/60 -skew-x-3 rounded-sm -z-10"
                                />
                                <span className="font-serif italic text-[#374e86]">tomar mejores decisiones.</span>
                            </span>
                        </h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-[#374e86]/60 text-sm md:text-base font-medium max-w-lg mb-10"
                        >
                            Antes de avanzar, evaluemos si nuestro enfoque de marketing médico de alto valor es el adecuado para el momento actual de tu consulta.
                        </motion.p>

                        {/* 4. CTA PRINCIPAL */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col items-center gap-6 w-full"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative bg-[#374e86] text-white px-12 py-6 rounded-full text-xl md:text-2xl font-bold overflow-hidden shadow-2xl shadow-[#374e86]/30"
                            >
                                <div className="absolute inset-0 bg-[#e7f1ad] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[#374e86] transition-colors duration-300">
                                    Evaluar mi negocio
                                    <ArrowRight size={24} strokeWidth={2.5} />
                                </span>
                            </motion.button>

                            {/* Microcopy & Disclaimer */}
                            <div className="text-center space-y-4">
                                <div className="bg-[#e7f1ad]/30 px-4 py-1.5 rounded-lg inline-block">
                                    <p className="text-xs md:text-sm font-bold text-[#374e86]">
                                        ⏱️ Test de 3 minutos para definir si esto es lo que necesitas.
                                    </p>
                                </div>

                                <p className="text-[#374e86]/40 text-xs max-w-md mx-auto leading-relaxed">
                                    Compromiso de honestidad: Si después de la evaluación vemos que no somos el enfoque adecuado, te lo diremos con total claridad.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;