"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { BarChart, Clock, ShieldCheck, Star } from "lucide-react";

const stats = [
  {
    value: 500,
    label: "Hires",
    suffix: "+",
    icon: <BarChart className="w-5 h-5 text-neutral-700" />,
  },
  {
    value: 24,
    label: "Turnaround",
    suffix: "hr",
    icon: <Clock className="w-5 h-5 text-neutral-700" />,
  },
  {
    value: 100,
    label: "Compliance",
    suffix: "%",
    icon: <ShieldCheck className="w-5 h-5 text-neutral-700" />,
  },
  {
    value: 4.8,
    label: "Rating",
    suffix: "/5",
    icon: <Star className="w-5 h-5 text-neutral-700" />,
  },
];

const StatsSection = () => {
  return (
    <section className="bg-white text-neutral-900 py-12 px-4 border-b border-neutral-200">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Driving Results That Matter
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-white border border-neutral-200 rounded-lg px-4 py-6 text-center shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
          >
            <div className="flex justify-center mb-2">{stat.icon}</div>
            <div className="text-2xl font-semibold text-neutral-900">
              <AnimatedCount value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-1 text-xs text-neutral-500 uppercase tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const AnimatedCount = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1500;
    const steps = duration / 16;
    const increment = (value - current) / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        clearInterval(timer);
        current = value;
      }
      setCount(parseFloat(current.toFixed(value < 10 ? 1 : 0)));
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default dynamic(() => Promise.resolve(StatsSection), { ssr: false });
