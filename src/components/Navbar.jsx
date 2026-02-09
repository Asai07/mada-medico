import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLenis } from './SmoothScroll'; // <--- IMPORTANTE: Importa el hook desde tu archivo

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

        // Si Lenis está listo, usamos su método scrollTo
        if (lenis) {
            lenis.scrollTo(`#${id}`, {
                offset: -100, // Compensación para que el header no tape el título
                duration: 1.5, // Duración suave
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Misma curva de suavidad
            });
        } else {
            // Fallback por si acaso (scroll nativo)
            const element = document.getElementById(id);
            if (element) {
                const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    };

    // ... El resto de tu JSX se mantiene igual ...
    return (
        // ...
        // Asegúrate de usar la función en los links:
        // <a href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)} ... >
        // ...
        // Y en el botón de contacto:
        // <button onClick={(e) => scrollToSection(e, 'contacto')} ... >
        // ...
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
            >
                {/* ... Contenido del Navbar ... */}
                <div className="bg-white rounded-2xl shadow-xl shadow-[#374e86]/5 w-full max-w-6xl px-6 py-4 border border-gray-100 flex items-center">

                    {/* Logo */}
                    <div className="flex-1 flex justify-start">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); // Evita que recargue la página o ponga el # en la URL
                                lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-center gap-1 z-50 cursor-pointer"
                        >
                            <span className="text-xl font-bold tracking-tighter text-[#374e86]">
                                MADA
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e7f1ad] mt-1"></span>
                        </a>
                    </div>

                    {/* Menú Central */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.id}`}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className="text-sm font-medium text-[#374e86] hover:text-[#95b2ed] transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e7f1ad] transition-all duration-300 group-hover:w-full"></span>
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
                                <span className="text-sm font-semibold text-[#374e86] group-hover:text-[#95b2ed] transition-colors">
                                    Hablemos
                                </span>
                                <div className="w-10 h-10 rounded-full bg-[#e7f1ad] flex items-center justify-center text-[#374e86] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shadow-sm">
                                    <ArrowUpRight size={20} strokeWidth={2} />
                                </div>
                            </button>
                        </div>
                        {/* Hamburguesa Móvil */}
                        <button
                            className="md:hidden p-2 text-[#374e86] bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                </div>
            </motion.nav>
            {/* ... Mobile Menu Overlay ... */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-[#fdfdfd] z-40 flex flex-col justify-center items-center gap-8 md:hidden"
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
                            className="mt-4 bg-[#e7f1ad] text-[#374e86] px-8 py-3 rounded-full text-lg font-bold flex items-center gap-2"
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