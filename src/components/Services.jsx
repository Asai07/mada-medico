import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Target, CheckCircle2, MessageSquare } from 'lucide-react';

// Datos para el Grid de 4 tarjetas
const approachCards = [
    {
        id: 1,
        icon: BarChart3,
        text: "Analizamos tu consulta, su momento actual y sus prioridades reales.",
        bg: "bg-[#374e86]", // Azul oscuro destacado
        textColor: "text-white",
        iconColor: "text-[#e7f1ad]"
    },
    {
        id: 2,
        icon: Users,
        text: "Definimos qué tipo de paciente quieres atraer y por qué.",
        bg: "bg-[#e0e7ff]", // Lavanda claro
        textColor: "text-[#374e86]",
        iconColor: "text-[#374e86]"
    },
    {
        id: 3,
        icon: Target,
        text: "Diseñamos una estrategia pensada para tu contexto, no fórmulas genéricas.",
        bg: "bg-[#e0e7ff]",
        textColor: "text-[#374e86]",
        iconColor: "text-[#374e86]"
    },
    {
        id: 4,
        icon: MessageSquare,
        text: "Acompañamos las decisiones, medimos resultados y ajustamos con criterio.",
        bg: "bg-[#e0e7ff]",
        textColor: "text-[#374e86]",
        iconColor: "text-[#374e86]"
    }
];

const RoleSection = () => {
    return (
        <section id="servicios" className="py-24 md:py-32 px-6 md:px-12 bg-[#fdfdfd] relative z-10 font-sans overflow-hidden">

            {/* Background Texture (Sutil) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- PARTE 1: HEADER + IMAGEN --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-24">

                    {/* Texto Principal */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="w-8 h-[2px] bg-[#e7f1ad]"></span>
                            <span className="font-mono text-[#374e86]/60 text-xs tracking-widest uppercase">
                                Nuestro Rol
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#374e86] tracking-tight leading-[1.1] mb-8">
                            Actuamos como una <br />
                            <span className="font-serif italic font-medium text-[#4a63a3]">aliada estratégica</span> <br />
                            en el crecimiento de tu consulta.
                        </h2>

                        {/* Highlight Box */}
                        <div className="mb-8 relative inline-block">
                            <div className="absolute inset-0 bg-[#e7f1ad]/30 -skew-x-6 rounded-sm"></div>
                            <p className="relative font-bold text-[#374e86] text-lg md:text-xl px-4 py-1">
                                No somos una agencia de marketing tradicional.
                            </p>
                        </div>

                        <p className="text-lg text-[#374e86]/70 font-light leading-relaxed max-w-xl">
                            Nos involucramos para entender tu consulta como negocio, cómo llegan hoy tus pacientes y qué decisiones realmente impactan tu agenda.
                        </p>
                    </div>

                    {/* Imagen Derecha (Reemplaza al boceto animado) */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#374e86]/10 aspect-[4/5] lg:aspect-square group">
                            {/* Marco Decorativo */}
                            <div className="absolute inset-0 border-[6px] border-[#fdfdfd]/50 z-20 rounded-[2rem] pointer-events-none"></div>

                            {/* Imagen Real (Placeholder profesional) */}
                            <img
                                src="https://images.unsplash.com/photo-1555077292-22a4489e5897?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Estrategia Médica MADA"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Decoración Flotante */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#e7f1ad] rounded-full blur-2xl opacity-40 z-0"></div>
                        </div>
                    </div>
                </div>


                {/* --- PARTE 2: NUESTRO TRABAJO (Grid de 4) --- */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#374e86] mb-10 max-w-2xl leading-tight">
                        Nuestro trabajo comienza mucho antes de lanzar anuncios o crear contenido
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {approachCards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`${card.bg} p-8 md:p-10 rounded-3xl flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-md transition-shadow duration-300`}
                            >
                                <div className={`mb-6 ${card.iconColor}`}>
                                    <card.icon size={32} strokeWidth={1.5} />
                                </div>
                                <p className={`text-lg md:text-xl font-medium leading-snug ${card.textColor}`}>
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>


                {/* --- PARTE 3: CIERRE Y CTA (Centrado en Móvil) --- */}
                {/* CAMBIO: 'items-center' en el padre para centrar en móvil, 'lg:items-end' para desktop */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 lg:gap-10 border-t border-[#374e86]/10 pt-12">

                    {/* Puntos Clave Finales (Alineados a la izquierda siempre para lectura) */}
                    <div className="space-y-4 w-full lg:w-auto">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 size={24} className="text-[#374e86] flex-shrink-0 mt-0.5" fill="#e7f1ad" />
                            <p className="text-[#374e86] font-bold text-lg md:text-xl">
                                El objetivo no es solo mover la agenda.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 size={24} className="text-[#374e86] flex-shrink-0 mt-0.5" fill="#e7f1ad" />
                            <p className="text-[#374e86] font-bold text-lg md:text-xl max-w-xl">
                                Es ayudarte a crecer con claridad, control y decisiones mejor informadas.
                            </p>
                        </div>
                    </div>

                    {/* Botón CTA - CENTRADO EN MÓVIL */}
                    {/* flex-col (columna) para apilar botón y texto, items-center (centrado) */}
                    <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative bg-[#374e86] text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden shadow-xl shadow-[#374e86]/20 w-full sm:w-auto"
                        >
                            <div className="absolute inset-0 bg-[#e7f1ad] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-[#374e86] transition-colors duration-300">
                                Evaluar mi negocio
                                <ArrowRight size={20} />
                            </span>
                        </motion.button>

                        <div className="text-center lg:text-right">
                            <p className="text-[#374e86] font-bold text-xs">¿Tu consulta está lista?</p>
                            <p className="text-[#374e86]/60 text-[10px] uppercase tracking-wider">Test de 3 min sin costo</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
export default RoleSection;