import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        client: "Dra. Elena V.",
        category: "Dermatología Avanzada",
        title: "Rediseño de identidad para clínica de alta gama.",
        year: "2024",
        imageGradient: "from-[#dce895] to-[#e7f1ad]", // Tono Lima
        textColor: "text-[#374e86]"
    },
    {
        id: 2,
        client: "Skin & Soul",
        category: "Medicina Estética",
        title: "Estrategia de lanzamiento y campaña High-Ticket.",
        year: "2023",
        imageGradient: "from-[#bcb5ff] to-[#95b2ed]", // Tono Lavanda/Azul
        textColor: "text-[#fdfdfd]"
    },
    {
        id: 3,
        client: "DermaCenter",
        category: "Clínica Capilar",
        title: "Rebranding y desarrollo web enfocado en conversión.",
        year: "2024",
        imageGradient: "from-[#374e86] to-[#1a2744]", // Tono Deep Blue
        textColor: "text-[#e7f1ad]"
    }
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="group relative w-full aspect-[4/5] md:aspect-[16/10] mb-12 last:mb-0 rounded-2xl overflow-hidden cursor-pointer"
        >
            {/* Background (Placeholder para imagen) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} transition-transform duration-700 group-hover:scale-105`} />

            {/* Ruido de textura */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* Contenido Overlay */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <span className={`px-4 py-1.5 rounded-full border border-current text-xs uppercase tracking-widest backdrop-blur-md ${project.textColor}`}>
                        {project.category}
                    </span>
                    <div className={`w-12 h-12 rounded-full border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 ${project.textColor}`}>
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                <div>
                    <div className="overflow-hidden mb-2">
                        <h3 className={`text-3xl md:text-5xl font-serif italic transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100 ${project.textColor}`}>
                            {project.client}
                        </h3>
                    </div>
                    <p className={`text-lg md:text-xl max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 ${project.textColor}`}>
                        {project.title}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const Work = () => {
    return (
        <section className="bg-[#fdfdfd] py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* COLUMNA IZQUIERDA (Sticky) */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32">
                            <span className="font-mono text-[#374e86]/60 text-sm tracking-widest uppercase mb-4 block">
                                — Selected Work
                            </span>
                            <h2 className="text-5xl md:text-6xl font-bold text-[#374e86] tracking-tight leading-none mb-8">
                                Casos de <br />
                                <span className="font-serif italic font-normal text-[#95b2ed]">Éxito.</span>
                            </h2>
                            <p className="text-[#374e86]/70 mb-8 max-w-xs leading-relaxed">
                                Una selección curada de proyectos donde la estética se encuentra con la estrategia médica.
                            </p>

                            <button className="hidden lg:flex items-center gap-2 text-[#374e86] font-semibold border-b border-[#374e86]/30 pb-0.5 hover:text-[#e7f1ad] hover:border-[#e7f1ad] transition-all">
                                Ver todo el portafolio
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA (Scrollable List) */}
                    <div className="lg:col-span-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}

                        {/* Botón móvil */}
                        <div className="mt-12 lg:hidden">
                            <button className="flex w-full justify-between items-center py-4 border-b border-[#374e86]/20 text-[#374e86] font-medium">
                                Ver todo el portafolio
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Work;