'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Plus } from 'lucide-react';
import { pulseGlow, fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { ViewMode } from '@/types';

interface HeaderProps {
  currentView: ViewMode;
  onCreateClick: () => void;
}

const viewTitles: Record<ViewMode, string> = {
  dashboard: 'Dashboard',
  analytics: 'Analytics',
  calendar: 'Calendario',
  'ai-studio': 'AI Studio',
  content: 'Contenido',
  settings: 'Configuración',
};

export function Header({ currentView, onCreateClick }: HeaderProps) {
  const [dateRange, setDateRange] = useState<'7D' | '30D' | '90D'>('30D');

  return (
    <motion.header 
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="fixed top-0 right-0 left-[240px] h-[72px] z-30 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.08]"
    >
      <div className="h-full px-8 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-dark-300">
            {viewTitles[currentView] || 'Dashboard'}
          </h2>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-300 group-focus-within:text-purple-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar métricas, contenido..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all shadow-inner"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
            {(['7D', '30D', '90D'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={cn(
                  "px-3 py-1 text-xs font-medium rounded-md transition-all duration-200",
                  dateRange === range
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-dark-300 hover:text-white hover:bg-white/5"
                )}
              >
                {range}
              </button>
            ))}
          </div>

          <button className="relative p-2 text-dark-300 hover:text-white transition-colors hover:bg-white/5 rounded-full">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-[#0a0a0f]" />
          </button>

          <motion.button
            variants={pulseGlow}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCreateClick}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-semibold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all border border-white/10"
          >
            <Plus className="w-4 h-4" />
            Crear Contenido
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
