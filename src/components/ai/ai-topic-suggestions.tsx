'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn, formatNumber } from '@/lib/utils';
import { listStagger, listItem, scrollViewport } from '@/lib/animations';
import { mockTopicSuggestions } from '@/lib/mock-data';

export function AiTopicSuggestions() {
  // Sort suggestions by score descending
  const sortedSuggestions = [...mockTopicSuggestions].sort((a, b) => b.score - a.score);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={listStagger}
      className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-purple-500/20 rounded-xl">
          <Sparkles className="w-5 h-5 text-purple-400" />
        </div>
        <h2 className="text-xl font-bold text-white">Temas Sugeridos por IA</h2>
      </div>
      <p className="text-dark-300 text-sm mb-6">Basado en el rendimiento de tu contenido y tendencias actuales</p>

      <div className="space-y-4">
        {sortedSuggestions.map((topic, index) => (
          <motion.div
            key={topic.id || index}
            variants={listItem}
            className="group relative bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.08] rounded-xl p-4 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-white font-bold mb-1 group-hover:text-purple-300 transition-colors">
                  {topic.topic}
                </h3>
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {topic.category}
                </span>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-lg font-bold text-white">{topic.score}</span>
                  {topic.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-400" />}
                  {topic.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-400" />}
                  {topic.trend === 'stable' && <Minus className="w-4 h-4 text-gray-400" />}
                </div>
                <span className="text-xs text-dark-300">Puntuación IA</span>
              </div>
            </div>

            {/* Score Bar */}
            <div className="h-1.5 w-full bg-dark-900 rounded-full overflow-hidden mb-4">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${topic.score}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex gap-4 text-xs text-dark-300">
                <span>Eng. promedio: <span className="text-white font-medium">{topic.avgEngagement}%</span></span>
                <span>Alcance: <span className="text-white font-medium">{formatNumber(topic.potentialReach)}</span></span>
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-purple-400 hover:text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 px-3 py-1.5 rounded-lg">
                Crear contenido
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
