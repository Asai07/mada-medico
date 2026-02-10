import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, UserCheck, UserX } from 'lucide-react';

const TargetAudience = () => {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#fdfdfd] relative z-10 font-['Wix_Madefor_Display'] overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- HEADER --- */}
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-[#e7f1ad] px-6 py-2 rounded-full transform -rotate-1 mb-6 shadow-sm"
                    >
                        <span className="font-mono text-[#374e86] text-xs md:text-sm tracking-widest uppercase font-bold">
                            ¿Somos para ti?
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#374e86] tracking-tight leading-[1.1]">
                        Este enfoque es para médicos <br className="hidden md:block" />
                        que quieren crecer su agenda <br className="hidden md:block" />
                        <span className="font-serif italic font-medium text-[#4a63a3]">con claridad, control y estrategia.</span>
                    </h2>
                </div>

                {/* --- CONTENEDOR PRINCIPAL --- */}
                <div className="relative w-full max-w-6xl mx-auto p-2 md:p-4 border-2 border-dashed border-[#374e86]/20 rounded-[2.5rem]">

                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 bg-white rounded-[2rem] overflow-hidden shadow-sm">

                        {/* --- TARJETA IZQUIERDA: ES PARA TI (VERDE TENUE) --- */}
                        {/* Fondo: Verde muy pálido */}
                        <div className="flex-1 bg-[#fafdeb] border-b-2 lg:border-b-0 lg:border-r-2 border-[#e7f1ad]/30 p-8 md:p-12 relative overflow-hidden group">

                            {/* Decoración Fondo */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e7f1ad]/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-full bg-[#e7f1ad] flex items-center justify-center text-[#374e86]">
                                            <UserCheck size={24} strokeWidth={2} />
                                        </div>
                                        <h3 className="text-3xl font-serif italic text-[#374e86]">
                                            Es para ti si...
                                        </h3>
                                    </div>

                                    <ul className="space-y-6">
                                        {[
                                            { text: "Ya tienes consulta activa y ventas, aunque hoy sean irregulares.", bold: "aunque hoy sean irregulares" },
                                            { text: "Buscas crecer tu agenda con orden y control, no solo con volumen.", bold: "orden y control" },
                                            { text: "Quieres entender qué está funcionando y qué no en la captación.", bold: "entender qué está funcionando" },
                                            { text: "Prefieres tomar decisiones con información clara, no a ciegas.", bold: "información clara" },
                                            { text: "Estás dispuesto a invertir de forma consciente para escalar.", bold: "invertir de forma consciente" }
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-[#374e86]/80 text-lg leading-snug">
                                                <div className="mt-1 flex-shrink-0 text-[#374e86]">
                                                    <Check size={20} strokeWidth={3} />
                                                </div>
                                                <span className="font-['Wix_Madefor_Text']">
                                                    {item.text.split(item.bold).map((part, i, arr) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {/* CAMBIO: Highlight Verde Lima Sólido (bg-[#e7f1ad]) para mayor contraste */}
                                                            {i < arr.length - 1 && <strong className="font-bold text-[#374e86] bg-[#e7f1ad] px-1 rounded">{item.bold}</strong>}
                                                        </React.Fragment>
                                                    ))}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* BOTÓN FIJO */}
                                <div className="mt-10 pt-6 border-t border-[#374e86]/10">
                                    <button className="text-sm font-bold text-[#374e86] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all duration-300 group-hover:text-[#4a63a3]">
                                        ¡Hagamos Match! <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>


                        {/* --- TARJETA DERECHA: NO ES PARA TI (ROJO SUAVE) --- */}
                        <div className="flex-1 bg-[#fff5f5]/50 p-8 md:p-12 relative overflow-hidden">

                            {/* Decoración Fondo Rojo Sutil */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/30 rounded-full blur-3xl"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                        <UserX size={24} strokeWidth={2} />
                                    </div>
                                    <h3 className="text-3xl font-serif italic text-[#374e86]">
                                        No es para ti si...
                                    </h3>
                                </div>

                                <ul className="space-y-6">
                                    {[
                                        "Buscas viralidad o likes sin impacto real en ventas.",
                                        "Solo quieres 'manejo de redes sociales' básico.",
                                        "Esperas resultados inmediatos sin respetar un proceso.",
                                        "Esperas delegar todo sin involucrarte en las decisiones clave.",
                                        "Buscas fórmulas genéricas o replicar a otros.",
                                        "Comparas agencias únicamente por precio."
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-[#374e86]/70 text-lg leading-snug">
                                            <div className="mt-1 flex-shrink-0 text-red-400">
                                                <X size={20} strokeWidth={3} />
                                            </div>
                                            <span className="font-['Wix_Madefor_Text']">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* --- FOOTER / CTA --- */}
                <div className="mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex flex-col items-center"
                    >
                        <svg className="w-12 h-12 text-[#e7f1ad] mb-4 transform -rotate-12" viewBox="0 0 100 100">
                            <path d="M50,10 Q80,40 50,90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            <path d="M40,70 L50,90 L70,80" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative bg-[#374e86] text-white px-10 py-5 rounded-full text-xl font-semibold overflow-hidden shadow-2xl shadow-[#374e86]/30"
                        >
                            <div className="absolute inset-0 bg-[#e7f1ad] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#374e86] transition-colors duration-300">
                                Evaluar mi negocio
                                <ArrowRight size={24} className="text-[#e7f1ad] group-hover:text-[#374e86] transition-colors duration-300" />
                            </span>
                        </motion.button>

                        <div className="mt-4 bg-[#e7f1ad]/40 px-4 py-1 rounded-md transform rotate-1">
                            <p className="text-xs md:text-sm font-bold text-[#374e86]">
                                ⏱️ Test de 3 minutos para entender tu consulta.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default TargetAudience;