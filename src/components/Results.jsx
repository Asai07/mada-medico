import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const metrics = [
    {
        id: 1,
        value: "450",
        suffix: "%",
        label: "ROAS Promedio",
        detail: "Retorno en campañas de alta especialidad.",
    },
    {
        id: 2,
        value: "12",
        suffix: "M+",
        label: "Ingresos Generados",
        detail: "Facturación auditada para clientes en 2024.",
    },
    {
        id: 3,
        value: "85",
        suffix: "%",
        label: "Retención",
        detail: "Pacientes que regresan a consulta.",
    },
    {
        id: 4,
        value: "40",
        suffix: "+",
        label: "Clínicas",
        detail: "Escaladas con nuestra metodología.",
    }
];

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { damping: 50, stiffness: 100, duration: 2000 });

    React.useEffect(() => {
        if (isInView) {
            const numericValue = parseInt(value.replace(/,/g, ''), 10);
            springValue.set(numericValue);
        }
    }, [isInView, value, springValue]);

    const displayValue = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString());

    return (
        <span ref={ref} className="flex items-baseline">
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
};

const ResultItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative flex-1 min-w-[250px] border-r border-[#fdfdfd]/10 last:border-r-0 py-12 px-6 flex flex-col justify-between hover:bg-[#fdfdfd]/5 transition-all duration-500 cursor-default"
        >
            <div className="flex justify-between items-start mb-8 relative z-10">
                <span className="font-mono text-xs text-[#e7f1ad] tracking-widest uppercase opacity-60">
                    Fig. 0{item.id}
                </span>
                <ArrowUpRight className="text-[#e7f1ad] opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
            </div>

            <div className="relative z-10">
                <h3 className="text-5xl md:text-6xl font-bold text-[#fdfdfd] tracking-tighter mb-2 group-hover:text-[#e7f1ad] transition-colors duration-300">
                    <Counter value={item.value} suffix={item.suffix} />
                </h3>
                <p className="text-lg text-[#fdfdfd] font-medium mb-1">
                    {item.label}
                </p>
                <p className="text-xs text-[#fdfdfd]/40 max-w-[200px]">
                    {item.detail}
                </p>
            </div>
        </motion.div>
    );
};

const Results = () => {
    return (
        // Fondo coincide con SocialProof (#374e86) sin bordes superiores para fusión perfecta
        <section className="bg-[#374e86] text-[#fdfdfd] relative z-20 pb-12">
            <div className="max-w-7xl mx-auto border-t border-[#fdfdfd]/10">
                <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#fdfdfd]/10">
                    {/* Label Lateral */}
                    <div className="lg:w-24 flex-shrink-0 flex items-center justify-center py-6 lg:py-0 bg-[#374e86]">
                        <span className="font-mono text-[#e7f1ad] text-[10px] tracking-widest uppercase lg:-rotate-90 whitespace-nowrap opacity-70">
                            Resultados Globales
                        </span>
                    </div>

                    {/* Métricas */}
                    {metrics.map((item, index) => (
                        <ResultItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results;