import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';


const Hero = () => {
    return (
        // Aplicamos la fuente base 'Wix Madefor Display' a la sección
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gradient-to-br from-[#fdfcff] via-[#fbfaff] to-[#f4f0ff] font-['Wix_Madefor_Display']">

            {/* --- Background Elements --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#e0d4fc]/20 rounded-full blur-3xl"></div>
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-[#e7f1ad]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-12 items-center relative z-10">

                {/* --- COLUMNA IZQUIERDA (Texto) --- */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* --- HEADLINE --- */}
                        {/* CAMBIO ESPACIADO: mb-4 en móvil (antes mb-2) para dar esos ~5-8px extra de separación con el párrafo */}
                        <div className="mb-4 md:mb-6">

                            <h2 className="text-[1.3rem] xs:text-[1.5rem] sm:text-4xl lg:text-5xl text-[#374e86]/80 font-medium mb-2 tracking-tight whitespace-nowrap">
                                Cuando tu consulta ya <span className="font-serif italic text-[#4a63a3]">vende,</span> pero
                            </h2>

                            <h1 className="text-5xl sm:text-6xl lg:text-[5.2rem] leading-[1.1] tracking-tight text-[#374e86] font-bold">
                                tu agenda <br />
                                se sostiene de <br />
                                la
                                <span className="relative inline-block ml-3 md:ml-4">
                                    {/* Mantenemos font-serif italic aquí como pidió el cliente */}
                                    <span className="font-serif italic font-bold relative z-10">suerte.</span>
                                    <motion.span
                                        initial={{ width: 0 }}
                                        animate={{ width: '110%' }}
                                        transition={{ delay: 1, duration: 0.8 }}
                                        className="absolute bottom-1 -left-2 h-[0.5em] bg-[#e7f1ad]/90 -z-0 transform -rotate-2 mix-blend-multiply rounded-sm"
                                    />
                                </span>
                            </h1>
                        </div>

                        {/* --- PÁRRAFO --- */}
                        {/* CAMBIO FUENTE: Usamos 'Wix Madefor Text' para mejor legibilidad en bloques de texto */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-lg md:text-xl text-[#374e86] max-w-2xl leading-relaxed mb-6 md:mb-10 font-semibold border-l-4 border-[#e7f1ad] pl-4 font-['Wix_Madefor_Text']"
                        >
                            Cuando el flujo de tus pacientes depende de recomendaciones, rachas o plataformas médicas que funcionan... hasta que dejan de hacerlo.
                        </motion.p>

                        {/* --- CTA (DESKTOP) --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="hidden lg:flex flex-col items-start gap-5"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-[#374e86] text-white px-10 py-5 rounded-full text-lg font-semibold overflow-hidden shadow-xl shadow-[#374e86]/20 w-full sm:w-auto font-['Wix_Madefor_Display']"
                            >
                                <div className="absolute inset-0 bg-[#e7f1ad] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-[#374e86] transition-colors duration-300">
                                    Evaluar mi negocio
                                    <ArrowRight size={20} />
                                </span>
                            </motion.button>

                            <div className="flex items-center gap-2 text-[#374e86]/70 pl-2 font-['Wix_Madefor_Text']">
                                <span className="text-xl">⏱️</span>
                                <p className="text-sm font-medium">
                                    Test de 3 minutos para entender tu consulta.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* --- COLUMNA DERECHA (VIDEO + CTA MÓVIL) --- */}
                <div className="lg:col-span-5 relative flex flex-col items-center justify-center -mt-2 lg:mt-0">

                    {/* VIDEO CONTAINER */}
                    <div className="relative w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] flex items-center justify-center pointer-events-none scale-90 md:scale-100">
                        <motion.div
                            animate={{
                                borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-[#e0d4fc] to-[#dbeafe] border border-white shadow-2xl shadow-[#95b2ed]/20 opacity-60"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="relative z-20 w-[80%] h-[65%] bg-[#374e86] rounded-2xl overflow-hidden border-[6px] border-white shadow-lg flex items-center justify-center group pointer-events-auto cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#374e86]/40 to-transparent z-10"></div>
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/60 text-white z-30 shadow-lg"
                            >
                                <Play fill="currentColor" size={32} className="ml-1 opacity-100" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* --- CTA (MÓVIL) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex lg:hidden flex-col items-center gap-5 mt-2 w-full"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative bg-[#374e86] text-white px-10 py-5 rounded-full text-lg font-semibold overflow-hidden shadow-xl shadow-[#374e86]/20 w-full font-['Wix_Madefor_Display']"
                        >
                            <div className="absolute inset-0 bg-[#e7f1ad] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-[#374e86] transition-colors duration-300">
                                Evaluar mi negocio
                                <ArrowRight size={20} />
                            </span>
                        </motion.button>

                        <div className="flex items-center gap-2 text-[#374e86]/70 font-['Wix_Madefor_Text']">
                            <span className="text-xl">⏱️</span>
                            <p className="text-sm font-medium">
                                Test de 3 minutos para entender tu consulta.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;