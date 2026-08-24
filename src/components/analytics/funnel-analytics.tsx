'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';
import { cn, formatNumber, formatPercentage } from '@/lib/utils';
import { mockFormatComparison, mockFunnel } from '@/lib/mock-data';
import { listStagger, listItem, fadeInUp } from '@/lib/animations';

export function FunnelAnalytics() {
  const metrics = [
    {
      id: 'engagement',
      title: 'Engagement Rate',
      value: '4.82%',
      trend: '+1.2%',
      isPositive: true,
      chart: (
        <div className="relative w-12 h-12 rounded-full bg-dark-900/50 flex items-center justify-center">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #8b5cf6 0%, #8b5cf6 48%, transparent 48%, transparent 100%)'
            }}
          />
          <div className="absolute inset-1 bg-dark-800 rounded-full" />
          <span className="relative text-[10px] font-bold text-white">4.8%</span>
        </div>
      )
    },
    {
      id: 'saves',
      title: 'Tasa de Guardado',
      value: '2.3%',
      trend: '+0.5%',
      isPositive: true,
      chart: (
        <div className="relative w-12 h-12 rounded-full bg-dark-900/50 flex items-center justify-center">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #6366f1 0%, #6366f1 23%, transparent 23%, transparent 100%)'
            }}
          />
          <div className="absolute inset-1 bg-dark-800 rounded-full" />
          <span className="relative text-[10px] font-bold text-white">2.3%</span>
        </div>
      )
    },
    {
      id: 'conversion',
      title: 'Conversión a Lead',
      value: '0.065%',
      trend: '-0.01%',
      isPositive: false,
      chart: (
        <div className="relative w-12 h-12 rounded-full bg-dark-900/50 flex items-center justify-center">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #ec4899 0%, #ec4899 6.5%, transparent 6.5%, transparent 100%)'
            }}
          />
          <div className="absolute inset-1 bg-dark-800 rounded-full" />
          <span className="relative text-[10px] font-bold text-white">.06%</span>
        </div>
      )
    },
    {
      id: 'revenue',
      title: 'Revenue por Lead',
      value: '$36.40',
      trend: '+12.5%',
      isPositive: true,
      chart: (
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
          <TrendingUp className="w-5 h-5" />
        </div>
      )
    }
  ];

  const getFormatColor = (format: string) => {
    switch (format.toLowerCase()) {
      case 'reels': return 'bg-purple-500';
      case 'carruseles': return 'bg-blue-500';
      case 'stories': return 'bg-cyan-500';
      case 'imágenes':
      default: return 'bg-indigo-500';
    }
  };

  const getFormatBorder = (format: string) => {
    switch (format.toLowerCase()) {
      case 'reels': return 'border-l-purple-500';
      case 'carruseles': return 'border-l-blue-500';
      case 'stories': return 'border-l-cyan-500';
      case 'imágenes':
      default: return 'border-l-indigo-500';
    }
  };

  // Find max values for highlighting
  const maxReach = Math.max(...mockFormatComparison.map(f => f.reach));
  const maxEng = Math.max(...mockFormatComparison.map(f => f.engagement));
  const maxSaves = Math.max(...mockFormatComparison.map(f => f.saves));
  const maxShares = Math.max(...mockFormatComparison.map(f => f.shares));
  const maxConv = Math.max(...mockFormatComparison.map(f => f.conversions));
  const maxRev = Math.max(...mockFormatComparison.map(f => f.revenue));

  return (
    <div className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-xl flex flex-col hover:border-purple-500/20 transition-colors">
      <h2 className="text-xl font-semibold text-white mb-6">Analytics Avanzadas del Funnel</h2>
      
      {/* Top Section - Metric Cards */}
      <motion.div 
        variants={listStagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {metrics.map((metric) => (
          <motion.div
            key={metric.id}
            variants={listItem}
            className="bg-dark-900/60 border border-white/[0.04] rounded-xl p-4 flex items-center justify-between hover:bg-dark-900/80 transition-colors"
          >
            <div>
              <p className="text-sm text-dark-300 font-medium mb-1">{metric.title}</p>
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-white">{metric.value}</span>
                <span className={cn(
                  "flex items-center text-xs font-medium mb-1",
                  metric.isPositive ? "text-emerald-400" : "text-red-400"
                )}>
                  {metric.isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                  {metric.trend}
                </span>
              </div>
            </div>
            {metric.chart}
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Section - Comparison Table */}
      <div className="overflow-x-auto -mx-6 px-6 pb-2">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="text-xs uppercase tracking-wider text-dark-300 border-b border-white/[0.08]">
              <th className="pb-3 font-medium px-4">Formato</th>
              <th className="pb-3 font-medium px-2 text-right">Alcance</th>
              <th className="pb-3 font-medium px-2 text-right">Engagement</th>
              <th className="pb-3 font-medium px-2 text-right">Guardados</th>
              <th className="pb-3 font-medium px-2 text-right">Compartidos</th>
              <th className="pb-3 font-medium px-2 text-right">Conversiones</th>
              <th className="pb-3 font-medium px-2 text-right">Revenue</th>
            </tr>
          </thead>
          <motion.tbody
            variants={listStagger}
            initial="hidden"
            animate="visible"
            className="text-sm text-white"
          >
            {mockFormatComparison.map((format, idx) => (
              <motion.tr
                key={format.format}
                variants={listItem}
                className={cn(
                  "border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors group bg-dark-900/20",
                  "border-l-4", getFormatBorder(format.format)
                )}
              >
                <td className="py-4 px-4 flex items-center gap-2 font-medium">
                  <div className={cn("w-2 h-2 rounded-full shadow-glow", getFormatColor(format.format))} />
                  {format.format}
                </td>
                <td className={cn("py-4 px-2 text-right", format.reach === maxReach && "text-emerald-400 font-semibold bg-emerald-500/5")}>
                  {formatNumber(format.reach)}
                </td>
                <td className={cn("py-4 px-2 text-right", format.engagement === maxEng && "text-emerald-400 font-semibold bg-emerald-500/5")}>
                  {formatPercentage(format.engagement)}
                </td>
                <td className={cn("py-4 px-2 text-right", format.saves === maxSaves && "text-emerald-400 font-semibold bg-emerald-500/5")}>
                  {formatNumber(format.saves)}
                </td>
                <td className={cn("py-4 px-2 text-right", format.shares === maxShares && "text-emerald-400 font-semibold bg-emerald-500/5")}>
                  {formatNumber(format.shares)}
                </td>
                <td className={cn("py-4 px-2 text-right", format.conversions === maxConv && "text-emerald-400 font-semibold bg-emerald-500/5")}>
                  {formatNumber(format.conversions)}
                </td>
                <td className={cn("py-4 px-2 text-right", format.revenue === maxRev && "text-emerald-400 font-semibold bg-emerald-500/5")}>
                  ${formatNumber(format.revenue)}
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
}
