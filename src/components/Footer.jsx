import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Facebook } from 'lucide-react';

const Footer = () => {

    // Función para el botón gigante (Aquí iría el link a tu formulario/Typeform)
    const handleCTAClick = () => {
        // Ejemplo: window.open("https://tu-link-al-formulario.com", "_blank");
        console.log("Navegar al formulario");
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#374e86] text-[#fdfdfd] pt-20 pb-8 px-6 md:px-12 relative overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 z-30 font-sans">

            {/* TEXTURA DE FONDO */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between min-h-[400px]">

                {/* --- 1. TOP SECTION (Logo & Socials) --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 md:mb-20">

                    {/* Logo / Marca */}
                    <div onClick={scrollToTop} className="cursor-pointer group">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
                            MADA
                        </h2>
                        <div className="h-1.5 w-8 bg-[#e7f1ad] mt-1 group-hover:w-full transition-all duration-500 ease-out rounded-full"></div>
                    </div>

                    {/* Redes Sociales (Solo IG y FB) */}
                    <div className="flex gap-6 md:gap-8">
                        {[
                            { name: 'Instagram', icon: Instagram, url: '#' },
                            { name: 'Facebook', icon: Facebook, url: '#' }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.url}
                                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#fdfdfd]/60 hover:text-[#e7f1ad] transition-colors"
                            >
                                <social.icon size={18} />
                                <span className="hidden sm:inline">{social.name}</span>
                                <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* --- 2. MIDDLE SECTION (Massive CTA Button) --- */}
                {/* Mismo diseño que les gustó, pero ahora es un botón de acción */}
                <div className="mb-20">
                    <motion.div
                        onClick={handleCTAClick}
                        whileHover="hover"
                        whileTap={{ scale: 0.99 }}
                        initial="initial"
                        className="group relative w-full border-t border-b border-[#fdfdfd]/20 py-16 md:py-24 cursor-pointer overflow-hidden"
                    >
                        {/* Fondo Hover animado (Sube desde abajo color Lima) */}
                        <motion.div
                            variants={{
                                initial: { y: "100%" },
                                hover: { y: "0%" }
                            }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 bg-[#e7f1ad]"
                        />

                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 px-4">

                            {/* Texto CTA */}
                            <div className="flex flex-col items-center md:items-start transition-colors duration-300 group-hover:text-[#374e86]">
                                <span className="font-mono text-xs font-bold uppercase tracking-widest mb-2 opacity-60 group-hover:opacity-100">
                                    ¿Listo para escalar?
                                </span>
                                <h2 className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-center md:text-left leading-tight">
                                    Evaluar mi negocio
                                </h2>
                            </div>

                            {/* Icono de Acción (Flecha) */}
                            <div className="w-20 h-20 rounded-full border border-[#fdfdfd]/30 group-hover:border-[#374e86]/30 flex items-center justify-center transition-colors">
                                <ArrowUpRight
                                    size={32}
                                    strokeWidth={1.5}
                                    className="text-[#fdfdfd] group-hover:text-[#374e86] group-hover:rotate-45 transition-all duration-300"
                                />
                            </div>

                        </div>
                    </motion.div>
                </div>

                {/* --- 3. BOTTOM SECTION (Legal & Credits) --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[#fdfdfd]/40 text-[10px] md:text-xs font-mono uppercase tracking-widest">

                    {/* Izquierda */}
                    <p>© {new Date().getFullYear()} MADA Medical Marketing.</p>

                    {/* Centro: Links Legales */}
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#fdfdfd] transition-colors">Aviso de Privacidad</a>
                        <a href="#" className="hover:text-[#fdfdfd] transition-colors">Términos</a>
                    </div>

                    {/* Derecha: Créditos */}
                    <div className="flex items-center gap-2">
                        <p className="hidden md:block">Monterrey, N.L.</p>
                        <span className="hidden md:block text-[#e7f1ad]">•</span>
                        <a
                            href="#"
                            className="hover:text-[#e7f1ad] transition-colors duration-300"
                        >
                            Design by SomosMada
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;