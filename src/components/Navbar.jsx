import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLenis } from './SmoothScroll';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Obtener la instancia de Lenis
    const lenis = useLenis();

    const navLinks = [
        { name: 'Manifiesto', id: 'manifiesto' },
        { name: 'Servicios', id: 'servicios' },
        { name: 'Proceso', id: 'proceso' },
        { name: 'Casos', id: 'casos' },
        { name: 'FAQ', id: 'faq' }
    ];

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (lenis) {
            lenis.scrollTo(`#${id}`, {
                offset: -50,
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        } else {
            const element = document.getElementById(id);
            if (element) {
                const y = element.getBoundingClientRect().top + window.pageYOffset - 50;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            {/* CAMBIOS APLICADOS:
               1. 'absolute': Se queda arriba y no baja con el scroll.
               2. 'top-0': Pegado al borde superior (sin margen top-6).
               3. Sin caja blanca: Se eliminaron las clases de background, shadow y border.
               4. 'max-w-7xl': Para alinearse con el contenido del Hero.
            */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }} // Animación suave solo de aparición (sin movimiento Y)
                className="absolute top-0 left-0 right-0 z-50 flex justify-center w-full"
            >
                <div className="w-full max-w-7xl px-6 md:px-12 py-8 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex-1 flex justify-start">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-center gap-1 cursor-pointer"
                        >
                            <span className="text-xl font-bold tracking-tighter text-[#374e86]">
                                MADA
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e7f1ad] mt-1"></span>
                        </a>
                    </div>

                    {/* Menú Central (Minimalista) */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.id}`}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className="text-sm font-medium text-[#374e86]/80 hover:text-[#374e86] transition-colors relative group"
                            >
                                {link.name}
                                {/* Pequeño punto verde al hacer hover en lugar de la línea completa, más discreto */}
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#e7f1ad] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>

                    {/* Botón CTA */}
                    <div className="flex-1 flex justify-end">
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={(e) => scrollToSection(e, 'contacto')}
                                className="group flex items-center gap-3 cursor-pointer"
                            >
                                <span className="text-sm font-bold text-[#374e86] group-hover:opacity-70 transition-opacity">
                                    Hablemos
                                </span>
                                <div className="w-10 h-10 rounded-full bg-[#e7f1ad] flex items-center justify-center text-[#374e86] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shadow-sm">
                                    <ArrowUpRight size={20} strokeWidth={2} />
                                </div>
                            </button>
                        </div>

                        {/* Hamburguesa Móvil */}
                        <button
                            className="md:hidden p-2 text-[#374e86] hover:bg-[#374e86]/5 rounded-full transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#fdfdfd]/95 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.id}`}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className="text-3xl font-serif italic text-[#374e86]"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={(e) => scrollToSection(e, 'contacto')}
                            className="mt-8 bg-[#e7f1ad] text-[#374e86] px-8 py-3 rounded-full text-lg font-bold flex items-center gap-2 shadow-lg shadow-[#e7f1ad]/20"
                        >
                            Hablemos <ArrowUpRight size={20} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;