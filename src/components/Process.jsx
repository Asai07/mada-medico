import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, FileText, Zap, BarChart3 } from 'lucide-react';

const steps = [
    {
        id: "01",
        icon: Search,
        // CAMBIO: Título y Descripción actualizados
        title: "Consulta de valoración",
        subtitle: "Auditoría Profunda",
        desc: "Analizamos la salud digital de tu consulta: Cómo llega hoy el paciente, qué decisiones estás tomando y qué está influyendo realmente en tu agenda. Nada se define sin esta etapa.",
        color: "group-hover:text-[#374e86]",
        bg: "group-hover:bg-[#374e86]/5"
    },
    {
        id: "02",
        icon: FileText,
        // CAMBIO: Título y Descripción actualizados
        title: "Tratamiento",
        subtitle: "Estrategia a Medida",
        desc: "Con base en la valoración, diseñamos un protocolo a tu medida: estrategia, canales, mensajes y presupuesto alineados a tus objetivos reales, no a fórmulas genéricas ni acciones aisladas.",
        color: "group-hover:text-[#95b2ed]",
        bg: "group-hover:bg-[#95b2ed]/10"
    },
    {
        id: "03",
        icon: Zap,
        // CAMBIO: Título y Descripción actualizados
        title: "Aplicación",
        subtitle: "Ejecución Visual",
        desc: "Implementamos el tratamiento con criterio: campañas y contenido alineados para transmitir confianza y atraer al paciente correcto, no solo más volumen.",
        color: "group-hover:text-[#bcb5ff]",
        bg: "group-hover:bg-[#bcb5ff]/10"
    },
    {
        id: "04",
        icon: BarChart3,
        // CAMBIO: Título y Descripción actualizados
        title: "Seguimiento",
        subtitle: "Optimización ROAS",
        desc: "Acompañamos el proceso, medimos lo que importa y ajustamos decisiones para que el crecimiento sea sostenible y tu agenda deje de depender de rachas.",
        color: "group-hover:text-[#e7f1ad]",
        bg: "group-hover:bg-[#e7f1ad]/20"
    }
];

const ProcessCard = ({ step, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative border-r border-b border-[#374e86]/10 bg-transparent p-8 md:p-12 flex flex-col justify-between min-h-[300px] transition-all duration-500 hover:shadow-xl hover:shadow-[#374e86]/5 hover:bg-white z-10 ${step.bg}`}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-full bg-[#fdfdfd] border border-[#374e86]/10 flex items-center justify-center transition-colors duration-300 shadow-sm ${step.color}`}>
                    <step.icon size={20} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-4xl font-light text-[#374e86]/10 group-hover:text-[#374e86] transition-colors duration-300">
                    {step.id}
                </span>
            </div>

            {/* Content */}
            <div>
                <h3 className="text-xl font-bold text-[#374e86] mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {step.title}
                </h3>
                <span className="text-xs font-mono uppercase tracking-widest text-[#374e86]/50 mb-3 block">
                    {step.subtitle}
                </span>
                {/* Fuente de lectura 'Wix Madefor Text' */}
                <p className="text-[#374e86]/70 font-light leading-relaxed text-sm font-['Wix_Madefor_Text']">
                    {step.desc}
                </p>
            </div>

            {/* Hover Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#374e86] group-hover:w-full transition-all duration-700 ease-out" />
        </motion.div>
    );
};

const Process = () => {
    return (
        // Fuente base 'Wix Madefor Display'
        <section id="proceso" className="bg-[#fdfdfd] py-24 px-6 md:px-12 relative z-30 rounded-t-[3rem] md:rounded-t-[5rem] -mt-12 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] font-['Wix_Madefor_Display']">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block border border-[#374e86]/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        <span className="font-mono text-[#374e86]/60 text-xs tracking-widest uppercase">
                            ¿Cómo logramos estos resultados?
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold text-[#374e86] tracking-tight mb-6">
                        Proceso <span className="font-serif italic font-normal text-[#95b2ed]">Clínico.</span>
                    </h2>

                    {/* CAMBIO: Texto descriptivo actualizado */}
                    <p className="text-[#374e86]/70 text-lg font-light leading-relaxed max-w-2xl mx-auto font-['Wix_Madefor_Text']">
                        Eliminamos la improvisación. Trabajamos con un protocolo claro de 4 fases para <strong>fortalecer</strong> la salud comercial de tu marca.
                    </p>
                </div>

                {/* Grid Layout - Clean & Minimal */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#374e86]/10 overflow-hidden rounded-2xl">
                    {steps.map((step, index) => (
                        <ProcessCard key={step.id} step={step} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center flex flex-col items-center">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative bg-[#374e86] text-white px-10 py-5 rounded-full text-lg font-bold overflow-hidden shadow-xl shadow-[#374e86]/20"
                    >
                        <div className="absolute inset-0 bg-[#e7f1ad] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[#374e86] transition-colors duration-300">
                            Evaluar mi negocio
                            <ArrowRight size={20} />
                        </span>
                    </motion.button>

                    <div className="mt-4 bg-[#e7f1ad]/40 px-4 py-1 rounded-md">
                        <p className="text-xs md:text-sm font-bold text-[#374e86] font-['Wix_Madefor_Text']">
                            ⏱️ Test de 3 minutos para entender tu consulta.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Process;