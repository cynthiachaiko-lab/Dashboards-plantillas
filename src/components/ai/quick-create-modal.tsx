'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Images, CircleDot, X, Wand2, Copy, RefreshCw, Calendar, Loader2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  modalOverlay, 
  modalContent, 
  staggerContainer, 
  fadeInUp,
  scaleIn
} from '@/lib/animations';
import { mockAIScripts } from '@/lib/mock-data';

interface QuickCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ContentType = 'reel' | 'carousel' | 'story' | null;
type Tone = 'Educativo' | 'Entretenido' | 'Inspirador';
type Duration = '15s' | '30s' | '60s';

export function QuickCreateModal({ isOpen, onClose }: QuickCreateModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [type, setType] = useState<ContentType>(null);
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState<Tone>('Educativo');
  const [duration, setDuration] = useState<Duration>('30s');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setType(null);
      setTopic('');
      setTone('Educativo');
      setDuration('30s');
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleGenerate = () => {
    setStep(3);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(4);
    }, 2000);
  };

  const handleCopy = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const generatedContent = type ? mockAIScripts[type] : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-dark-800/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 w-full max-w-2xl relative my-auto shadow-[0_0_50px_rgba(139,92,246,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                  Crear Contenido con IA
                </h2>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-dark-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Step 1 & 2: Input */}
              {(step === 1 || step === 2) && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  {/* Content Type Selector */}
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-dark-300">¿Qué querés crear?</label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { id: 'reel', label: 'Reel', icon: Film, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-500/30' },
                        { id: 'carousel', label: 'Carrusel', icon: Images, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-500/30' },
                        { id: 'story', label: 'Historia', icon: CircleDot, color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-500/30' },
                      ].map((item) => (
                        <motion.button
                          key={item.id}
                          variants={scaleIn}
                          onClick={() => setType(item.id as ContentType)}
                          className={cn(
                            "flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300",
                            type === item.id 
                              ? `bg-white/10 border-white/20 shadow-[0_0_20px_rgba(139,92,246,0.2)] scale-105` 
                              : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                          )}
                        >
                          <div className={cn("p-3 rounded-full mb-3", item.bg)}>
                            <item.icon className={cn("w-6 h-6", item.color)} />
                          </div>
                          <span className="font-medium text-white">{item.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Topic and settings (shows when type is selected) */}
                  <AnimatePresence>
                    {type && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-dark-300">Describí el tema de tu contenido...</label>
                          <textarea
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Ej: 3 tips para mejorar el engagement en Instagram..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-dark-300 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none h-24"
                          />
                        </div>

                        <div className="flex flex-wrap gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-dark-300">Tono</label>
                            <div className="flex gap-2">
                              {(['Educativo', 'Entretenido', 'Inspirador'] as Tone[]).map((t) => (
                                <button
                                  key={t}
                                  onClick={() => setTone(t)}
                                  className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
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

                          {type === 'reel' && (
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-dark-300">Duración</label>
                              <div className="flex gap-2">
                                {(['15s', '30s', '60s'] as Duration[]).map((d) => (
                                  <button
                                    key={d}
                                    onClick={() => setDuration(d)}
                                    className={cn(
                                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                      duration === d
                                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                        : "bg-white/5 text-dark-300 border border-transparent hover:bg-white/10"
                                    )}
                                  >
                                    {d}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <motion.button
                          variants={scaleIn}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleGenerate}
                          disabled={!topic.trim()}
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          <Wand2 className="w-5 h-5" />
                          Generar con IA ✨
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* Step 3: Loading */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-20 flex flex-col items-center justify-center space-y-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full" />
                    <Loader2 className="w-12 h-12 text-purple-400 animate-spin relative z-10" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Generando magia...</h3>
                    <p className="text-dark-300">Analizando tu tema y creando el mejor contenido para tu audiencia.</p>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Result */}
              {step === 4 && generatedContent && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                    {type === 'reel' && (
                      <>
                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-xl p-5">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-bold text-purple-400 text-sm tracking-wider uppercase">Gancho (Hook)</h4>
                            <button onClick={() => handleCopy((generatedContent as any).hook, 'hook')} className="text-dark-300 hover:text-white">
                              {copiedSection === 'hook' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                          <p className="text-white text-lg font-medium leading-relaxed">{(generatedContent as any).hook}</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-xl p-5">
                          <h4 className="font-bold text-blue-400 text-sm tracking-wider uppercase mb-3">Guion</h4>
                          <div className="space-y-3">
                            {(generatedContent as any).script.map((item: any, i: number) => (
                              <div key={i} className="flex gap-3">
                                <span className="text-blue-500 font-mono text-sm mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                                <p className="text-dark-300 leading-relaxed">{item}</p>
                              </div>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-xl p-5">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-bold text-cyan-400 text-sm tracking-wider uppercase">Caption</h4>
                            <button onClick={() => handleCopy((generatedContent as any).caption, 'caption')} className="text-dark-300 hover:text-white">
                              {copiedSection === 'caption' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                          <p className="text-dark-300 whitespace-pre-wrap leading-relaxed">{(generatedContent as any).caption}</p>
                        </motion.div>
                      </>
                    )}

                    {type === 'carousel' && (
                      <div className="space-y-4">
                        {(generatedContent as any).slides?.map((slide: any, i: number) => (
                          <motion.div key={i} variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                              {i + 1}
                            </div>
                            <div>
                              <p className="text-white mb-2">{slide.text || slide}</p>
                              {slide.imagePrompt && (
                                <p className="text-sm text-dark-300 italic">Visual: {slide.imagePrompt}</p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {type === 'story' && (
                      <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center max-w-sm mx-auto aspect-[9/16] flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                        <p className="text-white text-xl font-bold leading-relaxed relative z-10">
                          {(generatedContent as any).text}
                        </p>
                        <div className="mt-8 space-y-3 relative z-10">
                          {['👍 Totalmente', '👎 No tanto'].map((opt, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md rounded-full py-3 px-6 text-white font-medium text-sm">
                              {opt}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Actions */}
                  <motion.div variants={fadeInUp} className="flex gap-3 pt-4 border-t border-white/10">
                    <button className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium flex items-center justify-center gap-2 transition-colors border border-white/10">
                      <RefreshCw className="w-4 h-4" />
                      Regenerar
                    </button>
                    <button className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium flex items-center justify-center gap-2 transition-colors border border-white/10">
                      <Copy className="w-4 h-4" />
                      Copiar Todo
                    </button>
                    <button className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all">
                      <Calendar className="w-4 h-4" />
                      Programar
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
