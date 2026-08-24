'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockHourlyActivity } from '@/lib/mock-data';
import { fadeInUp, scrollViewport } from '@/lib/animations';
import { cn } from '@/lib/utils';

export function BestPostingTimes() {
  const [hoveredCell, setHoveredCell] = useState<{day: string, hour: number, value: number, index: number} | null>(null);

  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const hourLabels = [0, 6, 9, 12, 15, 18, 21];

  const getColorClass = (value: number) => {
    if (value === 0) return 'bg-dark-700/50';
    if (value <= 3) return 'bg-purple-900/40';
    if (value <= 6) return 'bg-purple-600/60';
    if (value <= 8) return 'bg-purple-500/80';
    return 'bg-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.6)]';
  };

  const getMockValue = (dayIndex: number, hour: number) => {
    if (Array.isArray(mockHourlyActivity) && Array.isArray(mockHourlyActivity[dayIndex])) {
        return mockHourlyActivity[dayIndex][hour] || 0;
    }
    // Fallback if data structure is different
    return Math.floor(Math.random() * 11);
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden"
    >
      <h3 className="text-white font-medium text-lg mb-6">Mejores Horarios para Publicar</h3>
      
      <div className="flex flex-col gap-1 w-full overflow-x-auto pb-4">
        {/* Header hours */}
        <div className="flex items-center mb-2 pl-10">
          {hours.map((hour) => (
            <div key={`header-${hour}`} className="w-[28px] flex-shrink-0 flex justify-center">
              {hourLabels.includes(hour) && (
                <span className="text-[10px] text-dark-300">{hour}h</span>
              )}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-[3px]">
          {days.map((day, dayIndex) => (
            <div key={day} className="flex items-center gap-[3px]">
              <div className="w-8 text-[11px] text-dark-300 font-medium mr-2">{day}</div>
              {hours.map((hour, hourIndex) => {
                const value = getMockValue(dayIndex, hour);
                const cellIndex = dayIndex * 24 + hourIndex;
                
                return (
                  <motion.div
                    key={`${day}-${hour}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: cellIndex * 0.005, duration: 0.2 }}
                    viewport={scrollViewport}
                    className={cn(
                      "w-[28px] h-[28px] rounded flex-shrink-0 cursor-pointer transition-all duration-200",
                      getColorClass(value),
                      hoveredCell?.index === cellIndex ? 'ring-2 ring-white/50 z-10 scale-110' : ''
                    )}
                    onMouseEnter={() => setHoveredCell({ day, hour, value, index: cellIndex })}
                    onMouseLeave={() => setHoveredCell(null)}
                  />
                );
              })}
            </div>
          ))}
        </div>
        
        {/* Tooltip */}
        <AnimatePresence>
          {hoveredCell && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-6 right-6 bg-dark-900 border border-white/10 px-3 py-1.5 rounded-lg shadow-xl text-xs pointer-events-none z-20"
            >
              <span className="text-white font-medium">{hoveredCell.day} {hoveredCell.hour}:00</span>
              <span className="text-dark-300 ml-2">- Actividad: {hoveredCell.value}/10</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-6">
          <span className="text-[10px] text-dark-300">Baja</span>
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded-sm bg-dark-700/50"></div>
            <div className="w-4 h-4 rounded-sm bg-purple-900/40"></div>
            <div className="w-4 h-4 rounded-sm bg-purple-600/60"></div>
            <div className="w-4 h-4 rounded-sm bg-purple-500/80"></div>
            <div className="w-4 h-4 rounded-sm bg-accent-purple"></div>
          </div>
          <span className="text-[10px] text-dark-300">Alta</span>
        </div>
      </div>
    </motion.div>
  );
}
