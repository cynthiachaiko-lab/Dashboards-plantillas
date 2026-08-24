'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BarChart3, 
  Calendar, 
  Sparkles, 
  FileText, 
  Settings 
} from 'lucide-react';
import { ViewMode } from '@/types';
import { cn } from '@/lib/utils';
import { listStagger, listItem } from '@/lib/animations';

interface SidebarProps {
  activeView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const navItems: { id: ViewMode; label: string; icon: React.ElementType }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'calendar', label: 'Calendario', icon: Calendar },
  { id: 'ai-studio', label: 'AI Studio', icon: Sparkles },
  { id: 'content', label: 'Contenido', icon: FileText },
  { id: 'settings', label: 'Configuración', icon: Settings },
];

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 h-screen w-[240px] flex flex-col bg-white/5 backdrop-blur-xl border-r border-white/[0.08] z-40">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            ContentOS
          </h1>
        </div>
      </div>

      <div className="flex-1 px-4 py-4 overflow-y-auto">
        <motion.nav 
          variants={listStagger}
          initial="hidden"
          animate="visible"
          className="space-y-1"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <motion.button
                key={item.id}
                variants={listItem}
                onClick={() => onViewChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative group",
                  isActive 
                    ? "text-white bg-white/10" 
                    : "text-dark-300 hover:text-white hover:bg-white/5"
                )}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                  />
                )}
                
                <Icon className={cn(
                  "w-5 h-5 relative z-10 transition-colors",
                  isActive ? "text-purple-400" : "text-dark-300 group-hover:text-purple-400"
                )} />
                
                <span className="font-medium text-sm relative z-10">{item.label}</span>
                
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-r-full" />
                )}
              </motion.button>
            );
          })}
        </motion.nav>
      </div>

      <div className="p-4 mt-auto border-t border-white/[0.08]">
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg border border-white/10">
              AD
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#12121a] rounded-full"></div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold text-white">Arturito</span>
            <span className="text-xs text-dark-300">@arturito.digital</span>
          </div>
        </div>
      </div>
    </div>
  );
}
