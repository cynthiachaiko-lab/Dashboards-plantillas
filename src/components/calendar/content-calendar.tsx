'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn, MONTHS_FULL_ES, DAYS_ES } from '@/lib/utils';
import { mockCalendarEvents } from '@/lib/mock-data';
import { CalendarEvent } from '@/types';

// Helper to get days in month and padding days
const getCalendarDays = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  
  // 0 = Sunday, 1 = Monday. We want Monday as start.
  let startDayOfWeek = firstDayOfMonth.getDay();
  startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1; // Map Sun=6, Mon=0
  
  const days = [];
  
  // Previous month padding
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthLastDay - i),
      isCurrentMonth: false
    });
  }
  
  // Current month
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    days.push({
      date: new Date(year, month, i),
      isCurrentMonth: true
    });
  }
  
  // Next month padding
  const remainingCells = 42 - days.length; // 6 rows of 7
  for (let i = 1; i <= remainingCells; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      isCurrentMonth: false
    });
  }
  
  return days;
};

const getEventColor = (format: string) => {
  switch (format) {
    case 'reel': return 'bg-purple-500';
    case 'carousel': return 'bg-blue-500';
    case 'story': return 'bg-cyan-500';
    case 'image':
    case 'post':
    default: return 'bg-indigo-500';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'published': return 'bg-emerald-500 text-emerald-100';
    case 'scheduled': return 'bg-amber-500 text-amber-100';
    case 'draft':
    default: return 'bg-gray-500 text-gray-100';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'published': return 'Publicado';
    case 'scheduled': return 'Programado';
    case 'draft':
    default: return 'Borrador';
  }
};

export function ContentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [direction, setDirection] = useState(0);
  const [selectedEvents, setSelectedEvents] = useState<{date: Date, events: CalendarEvent[]} | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setDirection(-1);
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setDirection(1);
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const calendarDays = useMemo(() => getCalendarDays(year, month), [year, month]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getEventsForDate = (date: Date) => {
    return mockCalendarEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === date.getDate() &&
             eventDate.getMonth() === date.getMonth() &&
             eventDate.getFullYear() === date.getFullYear();
    });
  };

  const handleDayClick = (date: Date, events: CalendarEvent[]) => {
    if (events.length > 0) {
      setSelectedEvents({ date, events });
    } else {
      setSelectedEvents(null);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-xl relative overflow-hidden hover:border-purple-500/20 transition-colors h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Calendario de Contenido</h2>
        <div className="flex items-center gap-4">
          <div className="text-lg font-medium text-white capitalize w-40 text-center">
            {MONTHS_FULL_ES[month]} {year}
          </div>
          <div className="flex gap-1">
            <button 
              onClick={handlePrevMonth}
              className="p-1.5 rounded-lg bg-dark-900/50 text-dark-300 hover:text-white hover:bg-dark-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNextMonth}
              className="p-1.5 rounded-lg bg-dark-900/50 text-dark-300 hover:text-white hover:bg-dark-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-medium text-dark-300 uppercase tracking-wider">
        {DAYS_ES.map(day => (
          <div key={day} className="py-2">{day}</div>
        ))}
      </div>

      <div className="flex-1 relative min-h-[300px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`${year}-${month}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="grid grid-cols-7 gap-2 absolute inset-0"
          >
            {calendarDays.map((dayObj, idx) => {
              const dateStr = dayObj.date.toISOString();
              const events = getEventsForDate(dayObj.date);
              const isToday = dayObj.date.getTime() === today.getTime();
              const isPast = dayObj.date.getTime() < today.getTime();

              return (
                <div 
                  key={`${dateStr}-${idx}`}
                  onClick={() => handleDayClick(dayObj.date, events)}
                  className={cn(
                    "flex flex-col items-center rounded-xl p-2 h-16 sm:h-20 border transition-all cursor-pointer relative group",
                    dayObj.isCurrentMonth ? "bg-dark-900/40 border-white/[0.04]" : "bg-dark-900/20 border-transparent opacity-40",
                    isToday && "ring-2 ring-purple-500 border-transparent",
                    isPast && dayObj.isCurrentMonth && "opacity-70",
                    events.length > 0 && "hover:bg-dark-700/50 hover:border-white/[0.1]"
                  )}
                >
                  <span className={cn(
                    "text-xs font-medium mb-1",
                    isToday ? "text-purple-400" : (dayObj.isCurrentMonth ? "text-white" : "text-dark-300")
                  )}>
                    {dayObj.date.getDate()}
                  </span>
                  
                  <div className="flex flex-wrap gap-1 justify-center items-center mt-auto">
                    {events.slice(0, 3).map((ev, i) => (
                      <div 
                        key={i} 
                        className={cn("w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full", getEventColor(ev.type))}
                        title={ev.title}
                      />
                    ))}
                    {events.length > 3 && (
                      <span className="text-[9px] text-dark-300 leading-none">+{events.length - 3}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-dark-300 justify-center">
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-purple-500" /> Reel</div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500" /> Carrusel</div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-cyan-500" /> Story</div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-indigo-500" /> Post</div>
      </div>

      {/* Events Popup */}
      <AnimatePresence>
        {selectedEvents && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-800 border border-white/[0.1] shadow-2xl rounded-xl p-4 z-50 w-64 max-h-[80%] overflow-y-auto hide-scrollbar"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-white">
                {selectedEvents.date.getDate()} {MONTHS_FULL_ES[selectedEvents.date.getMonth()]}
              </h3>
              <button 
                onClick={() => setSelectedEvents(null)}
                className="text-dark-300 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {selectedEvents.events.map((ev, i) => (
                <div key={i} className="bg-dark-900/50 p-3 rounded-lg border border-white/[0.05]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={cn("w-2 h-2 rounded-full", getEventColor(ev.type))} />
                    <span className="text-xs font-medium text-white truncate">{ev.title}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[10px] text-dark-300">
                      {new Date(ev.date).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <span className={cn("text-[9px] px-1.5 py-0.5 rounded-full", getStatusColor(ev.status))}>
                      {getStatusText(ev.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {selectedEvents && (
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm z-40" 
          onClick={() => setSelectedEvents(null)}
        />
      )}
    </div>
  );
}
