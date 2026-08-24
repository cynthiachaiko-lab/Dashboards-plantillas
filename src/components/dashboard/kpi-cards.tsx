'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, BarChart3, Heart, UserCheck, Target, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { mockKPIs } from '@/lib/mock-data';
import { formatNumber, formatCurrency, formatPercentage, cn } from '@/lib/utils';
import { staggerContainer, fadeInUp, scrollViewport } from '@/lib/animations';

const iconMap: Record<string, React.ElementType> = {
  Users, Eye, BarChart3, Heart, UserCheck, Target, DollarSign, TrendingUp
};

const AnimatedCounter = ({ value, format }: { value: number; format: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1500;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easeProgress * value);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [value]);

  const formattedValue = 
    format === 'currency' ? formatCurrency(count) :
    format === 'percentage' ? formatPercentage(count) :
    formatNumber(Math.round(count));

  return <span>{formattedValue}</span>;
};

const Sparkline = ({ data, color }: { data: number[]; color: string }) => {
  if (!data || data.length === 0) return null;
  
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  
  const width = 100;
  const height = 40;
  
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((val - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full h-12 relative mt-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible preserve-aspect-ratio-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`gradient-${color.replace('#','')}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <polyline
          points={`0,${height} ${points} ${width},${height}`}
          fill={`url(#gradient-${color.replace('#','')})`}
          stroke="none"
        />
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export function KPICards() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
    >
      {mockKPIs.map((kpi, index) => {
        const Icon = iconMap[kpi.icon] || BarChart3;
        const isPositive = kpi.change >= 0;

        return (
          <motion.div
            key={kpi.id || index}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.15] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-dark-300 text-sm font-medium mb-1">{kpi.label}</p>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  <AnimatedCounter value={kpi.value} format={kpi.format} />
                </h3>
              </div>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-opacity-10"
                style={{ backgroundColor: `${kpi.color}20`, color: kpi.color }}
              >
                <Icon size={20} />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={cn("flex items-center text-sm font-medium", isPositive ? "text-green-400" : "text-red-400")}>
                {isPositive ? <ArrowUpRight size={16} className="mr-1" /> : <ArrowDownRight size={16} className="mr-1" />}
                {Math.abs(kpi.change)}%
              </span>
              <span className="text-dark-300 text-xs">vs mes anterior</span>
            </div>

            <Sparkline data={kpi.sparklineData} color={kpi.color} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
