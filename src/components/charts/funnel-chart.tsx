'use client';

import { motion } from 'framer-motion';
import { mockFunnel } from '@/lib/mock-data';
import { listStagger, listItem, scrollViewport } from '@/lib/animations';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export function FunnelChart() {
  const maxVal = mockFunnel?.[0]?.value || 1;

  return (
    <motion.div
      variants={listStagger}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 flex flex-col h-full"
    >
      <h3 className="text-white font-medium text-lg mb-6">Funnel de Conversión</h3>
      
      <div className="flex-1 flex flex-col items-center justify-center gap-1 w-full">
        {(mockFunnel || []).map((step, index) => {
          const widthPercent = Math.max((step.value / maxVal) * 100, 20);
          
          return (
            <motion.div key={step.label} variants={listItem} className="w-full flex flex-col items-center group">
              <div 
                className="relative flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300"
                style={{ 
                  width: `${widthPercent}%`, 
                  backgroundColor: step.color,
                  boxShadow: `0 0 0 rgba(0,0,0,0)` // base
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${step.color}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                }}
              >
                <span className="text-white font-medium text-sm drop-shadow-md z-10 w-1/3 text-left truncate">{step.label}</span>
                <span className="text-white font-bold text-base drop-shadow-md z-10 w-1/3 text-center">
                  {step.label === 'Revenue' ? formatCurrency(step.value) : formatNumber(step.value)}
                </span>
                <span className="text-white/90 text-xs font-medium drop-shadow-md z-10 w-1/3 text-right">
                  {index > 0 ? `${step.percentage}%` : '100%'}
                </span>
              </div>
              
              {index < mockFunnel.length - 1 && (
                <div className="text-white/20 py-1">
                  <ChevronDown className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div variants={listItem} className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-dark-300 uppercase tracking-wider">Impresiones → Lead</span>
          <span className="text-accent-blue font-bold text-lg">0.065%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-dark-300 uppercase tracking-wider">Lead → Venta</span>
          <span className="text-accent-purple font-bold text-lg">36.4%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-dark-300 uppercase tracking-wider">Revenue / Lead</span>
          <span className="text-accent-pink font-bold text-lg">$36.40</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
