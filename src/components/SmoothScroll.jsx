import React, { createContext, useContext, useEffect, useState } from 'react';
import Lenis from 'lenis';

// 1. Creamos el contexto para poder usar 'lenis' en cualquier componente (como el Navbar)
const LenisContext = createContext();

// 2. Hook personalizado para consumir el contexto fácilmente
export const useLenis = () => useContext(LenisContext);

export const SmoothScroll = ({ children }) => {
    const [lenis, setLenis] = useState(null);

    useEffect(() => {
        // 3. Configuración "Premium"
        const lenisInstance = new Lenis({
            duration: 1.5, // Duración del scroll (más alto = más suave/pesado)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial suave
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false, // En móviles a veces es mejor dejar el nativo
        });

        setLenis(lenisInstance);

        // 4. Loop de animación (Request Animation Frame)
        function raf(time) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Limpieza al desmontar
        return () => {
            lenisInstance.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    );
};