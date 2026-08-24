'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Copy, Check, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { mockAIScripts } from '@/lib/mock-data';

type Format = 'Reel' | 'Carrusel' | 'Historia';
type Tone = 'Educativo' | 'Entretenido' | 'Inspirador' | 'Ventas';

export function AiScriptGenerator() {
  const [topic, setTopic] = useState('');
  const [format, setFormat] = useState<Format>('Reel');
  const [tone, setTone] = useState<Tone>('Educativo');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<any>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | string | null>(null);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    setGeneratedResult(null);
    
    // Simulate API call
    setTimeout(() => {
      const typeKey = format.toLowerCase() === 'carrusel' ? 'carousel' : 
                     format.toLowerCase() === 'historia' ? 'story' : 'reel';
      setGeneratedResult(mockAIScripts[typeKey as keyof typeof mockAIScripts]);
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = (text: string, id: number | string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-xl flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/20 rounded-xl">
          <Wand2 className="w-5 h-5 text-blue-400" />
        </div>
        <h2 className="text-xl font-bold text-white">Generador de Guiones IA</h2>
      </div>

      <div className="space-y-5 mb-6">
        {/* Topic Input */}
        <div>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ingresá un tema o idea..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-300 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
          />
        </div>

        {/* Format Chips */}
        <div>
          <div className="flex gap-2">
            {(['Reel', 'Carrusel', 'Historia'] as Format[]).map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  format === f
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-white/5 text-dark-300 border border-transparent hover:bg-white/10"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Tone Chips */}
        <div>
          <div className="flex flex-wrap gap-2">
            {(['Educativo', 'Entretenido', 'Inspirador', 'Ventas'] as Tone[]).map((t) => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                  tone === t
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    : "bg-white/5 text-dark-300 border border-transparent hover:bg-white/10"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={!topic.trim() || isGenerating}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Generando...
            </>
          ) : (
            <>
              <Wand2 className="w-4 h-4" />
              Generar Guion
            </>
          )}
        </button>
      </div>

      {/* Results Area */}
      <div className="flex-grow bg-dark-900/50 rounded-xl p-4 border border-white/5 overflow-y-auto custom-scrollbar min-h-[300px]">
        <AnimatePresence mode="wait">
          {!generatedResult && !isGenerating ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col items-center justify-center text-dark-300 space-y-3"
            >
              <Wand2 className="w-8 h-8 opacity-20" />
              <p className="text-sm text-center max-w-[200px]">Completá los campos de arriba para generar tu contenido mágico.</p>
            </motion.div>
          ) : generatedResult && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {format === 'Reel' && generatedResult.script && (
                <>
                  <motion.div variants={fadeInUp} className="mb-4">
                    <h4 className="text-sm font-bold text-white mb-2">Gancho Sugerido:</h4>
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-sm text-purple-200">
                      "{generatedResult.hook}"
                    </div>
                  </motion.div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white">Estructura del Guion:</h4>
                    {generatedResult.script.map((step: string, i: number) => {
                      const labels = ['HOOK', 'PROBLEMA', 'SOLUCIÓN', 'PRUEBA', 'CTA'];
                      return (
                        <motion.div key={i} variants={fadeInUp} className="group relative p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-bold text-blue-400">{labels[i] || `PASO ${i+1}`}</span>
                            <button onClick={() => handleCopy(step, i)} className="text-dark-300 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                              {copiedIndex === i ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                          <p className="text-sm text-dark-100">{step}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </>
              )}

              {format === 'Carrusel' && generatedResult.slides && (
                <div className="space-y-3">
                  {generatedResult.slides.map((slide: any, i: number) => (
                    <motion.div key={i} variants={fadeInUp} className="group p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-md bg-dark-800 border border-white/10 flex items-center justify-center text-xs font-bold text-dark-300">
                        {i + 1}
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm text-white mb-1">{slide.text || slide}</p>
                        {slide.imagePrompt && <p className="text-xs text-dark-300 italic">{slide.imagePrompt}</p>}
                      </div>
                      <button onClick={() => handleCopy(slide.text || slide, `c-${i}`)} className="flex-shrink-0 text-dark-300 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity self-start">
                        {copiedIndex === `c-${i}` ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}

              {format === 'Historia' && (
                <motion.div variants={fadeInUp} className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-white/10 to-transparent rounded-xl border border-white/10">
                    <p className="text-sm text-white leading-relaxed">{generatedResult.text}</p>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <button onClick={() => handleCopy(generatedResult.text, 'story')} className="flex items-center gap-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 py-2 px-4 rounded-lg transition-colors">
                      {copiedIndex === 'story' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      Copiar Historia
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Stats Preview */}
      {generatedResult && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-dark-300"
        >
          <div className="flex items-center gap-1">
            <Info className="w-3.5 h-3.5" />
            <span>Alcance estimado: <span className="text-white font-medium">~45K</span></span>
          </div>
          <div>
            <span>Eng. esperado: <span className="text-white font-medium">~8%</span></span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
