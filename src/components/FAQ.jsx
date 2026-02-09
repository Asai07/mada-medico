import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, HelpCircle, Lightbulb } from 'lucide-react';

const faqData = [
    {
        id: 1,
        question: "¿Trabajan con todo tipo de profesionales?",
        answer: "Trabajamos principalmente con médicos y clínicas que ya tienen consulta activa y buscan crecer con mayor orden, claridad y criterio en sus decisiones."
    },
    {
        id: 2,
        question: "¿Ofrecen manejo de redes sociales o creación de contenido?",
        answer: "Sí trabajamos con anuncios y contenido cuando forman parte de una estrategia clara. No creamos contenido solo para 'llenar el mes'. Cada acción responde a objetivos específicos."
    },
    {
        id: 3,
        question: "¿Prometen resultados específicos?",
        answer: "Cada consulta es distinta. El crecimiento depende del contexto, del punto de partida y de las decisiones estratégicas que se toman a lo largo del proceso. Trabajamos con expectativas realistas."
    },
    {
        id: 4,
        question: "¿Cuánto tiempo toma ver cambios?",
        answer: "Depende del momento en el que se encuentre la consulta. Nuestro enfoque está pensado para construir resultados sólidos a mediano y largo plazo, no soluciones inmediatas."
    },
    {
        id: 5,
        question: "¿Cuál es la inversión?",
        answer: "La inversión se define según el contexto de cada consulta. Trabajamos con profesionales que entienden el crecimiento como una inversión estratégica y están dispuestos a construir con constancia."
    },
    {
        id: 6,
        question: "¿Tengo que grabar videos bailando en TikTok?",
        answer: "Absolutamente no. No trabajamos desde la viralidad ni desde formatos que no se alineen con tu perfil profesional. La estrategia se adapta a lo que tenga sentido para tu consulta."
    },
    {
        id: 7,
        question: "¿Cómo es el primer paso para trabajar juntos?",
        answer: "El primer paso es una evaluación breve para entender tu consulta, tu momento actual y definir si este enfoque es el adecuado para ti."
    }
];

const FAQItem = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-[#374e86]/10 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-start justify-between gap-4 text-left group transition-all"
            >
                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#374e86]' : 'text-[#374e86]/70 group-hover:text-[#374e86]'}`}>
                    {item.question}
                </span>
                <span className={`flex-shrink-0 mt-1 transition-colors duration-300 ${isOpen ? 'text-[#e7f1ad]' : 'text-[#374e86]/40 group-hover:text-[#374e86]'}`}>
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-[#374e86]/70 font-light leading-relaxed max-w-2xl text-base md:text-lg">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showIdea, setShowIdea] = useState(false);

    // Lógica para alternar el icono y reiniciar el dibujo cada 6 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setShowIdea(prev => !prev);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Configuración de animación para el dibujo de líneas
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.2, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay: i * 0.2, duration: 0.01 }
            }
        })
    };

    return (
        // NOTA: Quité 'overflow-hidden' de la section principal para evitar conflictos con sticky
        <section id="faq" className="py-24 md:py-32 px-6 md:px-12 bg-[#fdfdfd] relative z-20 font-sans">

            {/* Contenedor separado para el fondo/ruido que sí tiene overflow hidden */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Aquí irían tus blobs de fondo si los tuviera esta sección */}
            </div>

            {/* Grid SIN 'items-start'. Esto fuerza a que ambas columnas tengan la misma altura */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                {/* COLUMNA IZQUIERDA (Sticky Container) */}
                {/* Al no tener h-fit, esta columna ocupa toda la altura disponible */}
                <div className="lg:col-span-5 relative">

                    {/* Elemento Sticky: Se pegará al top-32 mientras su padre tenga altura */}
                    <div className="lg:sticky lg:top-32 transition-all duration-300">

                        {/* Etiqueta */}
                        <div className="mb-6 inline-block">
                            <span className="font-mono text-[#374e86]/60 text-xs tracking-widest uppercase border-b border-[#e7f1ad] pb-1">
                                Dudas Frecuentes
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#374e86] mb-12 leading-tight">
                            Algunas dudas comunes antes de dar el siguiente paso.
                        </h2>

                        {/* Visual Sketch Box Animado (Receta Médica) */}
                        <div className="relative w-full aspect-video lg:aspect-square max-w-sm mb-12">
                            <motion.svg
                                key={showIdea ? "idea" : "question"}
                                className="absolute inset-0 w-full h-full text-[#374e86]"
                                viewBox="0 0 400 400"
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Marco Exterior */}
                                <motion.rect
                                    x="5" y="5" width="390" height="390" rx="10" ry="10"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    variants={draw} custom={0}
                                />

                                {/* Líneas "Texto Receta" */}
                                <motion.path d="M40,60 Q100,55 160,60 T280,60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" variants={draw} custom={1} />
                                <motion.path d="M290,60 L350,60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" variants={draw} custom={1.5} />

                                <motion.path d="M40,120 Q200,115 360,120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" variants={draw} custom={2} />
                                <motion.path d="M40,160 Q150,155 260,160" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" variants={draw} custom={2.5} />
                                <motion.path d="M40,200 Q200,195 360,200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" variants={draw} custom={3} />
                                <motion.path d="M40,240 Q180,235 320,240" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" variants={draw} custom={3.5} />

                                <motion.path d="M250,340 Q300,320 350,340" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" variants={draw} custom={4} />
                            </motion.svg>

                            {/* Icono Cambiante */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <AnimatePresence mode='wait'>
                                    {showIdea ? (
                                        <motion.div
                                            key="idea"
                                            initial={{ scale: 0, rotate: -180, opacity: 0 }}
                                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                            exit={{ scale: 0, rotate: 180, opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                            className="bg-[#e7f1ad] p-5 rounded-full shadow-lg border-2 border-[#374e86]"
                                        >
                                            <Lightbulb size={60} strokeWidth={1.5} className="text-[#374e86]" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="question"
                                            initial={{ scale: 0, rotate: 180, opacity: 0 }}
                                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                            exit={{ scale: 0, rotate: -180, opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                            className="bg-[#fdfdfd]/90 backdrop-blur-sm p-5 rounded-full border border-[#374e86]/20"
                                        >
                                            <HelpCircle size={60} strokeWidth={1} className="text-[#374e86]" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#e7f1ad] rounded-full opacity-20 blur-xl"></div>
                        </div>

                        {/* CTA Block - Botón Cápsula */}
                        <div className="relative pl-6 border-l-2 border-[#e7f1ad]">
                            <h4 className="font-bold text-[#374e86] text-lg mb-2">
                                Si llegaste hasta aquí...
                            </h4>
                            <p className="text-[#374e86]/70 text-sm mb-6 leading-relaxed max-w-xs">
                                Probablemente estás buscando algo más claro que solo "intentar cosas".
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-[#374e86] text-white px-8 py-4 rounded-full text-sm md:text-base font-bold overflow-hidden shadow-lg shadow-[#374e86]/20"
                            >
                                <div className="absolute inset-0 bg-[#e7f1ad] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#374e86] transition-colors duration-300">
                                    Evaluar mi negocio
                                    <ArrowRight size={18} />
                                </span>
                            </motion.button>

                            <p className="mt-3 text-[10px] text-[#374e86]/40 uppercase tracking-widest font-bold">
                                ⏱️ Test de 3 minutos
                            </p>
                        </div>

                    </div>
                </div>

                {/* COLUMNA DERECHA (Lista Acordeón) */}
                <div className="lg:col-span-7">
                    <div className="border-t border-[#374e86]/10">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={item.id}
                                item={item}
                                isOpen={activeIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQ;