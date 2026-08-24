'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Images, Image as ImageIcon, CircleDot, ChevronUp, ChevronDown, Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { cn, formatNumber, formatPercentage, getRelativeTime } from '@/lib/utils';
import { mockPosts } from '@/lib/mock-data';
import { ContentPost } from '@/types';
import { listStagger, listItem } from '@/lib/animations';

type SortField = 'date' | 'reach' | 'engagementRate' | 'likes' | 'comments' | 'saves' | 'shares';
type SortOrder = 'asc' | 'desc';
type TabType = 'Todos' | 'Reels' | 'Carruseles' | 'Posts' | 'Stories';

export function ContentTable() {
  const [activeTab, setActiveTab] = useState<TabType>('Todos');
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const tabs: TabType[] = ['Todos', 'Reels', 'Carruseles', 'Posts', 'Stories'];

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortOrder === 'asc' ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />;
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'reel':
        return <div className="p-1.5 rounded-full bg-purple-500/20 text-purple-400"><Film className="w-4 h-4" /></div>;
      case 'carousel':
        return <div className="p-1.5 rounded-full bg-blue-500/20 text-blue-400"><Images className="w-4 h-4" /></div>;
      case 'story':
        return <div className="p-1.5 rounded-full bg-cyan-500/20 text-cyan-400"><CircleDot className="w-4 h-4" /></div>;
      case 'image':
      case 'post':
      default:
        return <div className="p-1.5 rounded-full bg-indigo-500/20 text-indigo-400"><ImageIcon className="w-4 h-4" /></div>;
    }
  };

  const getEngagementBadge = (rate: number) => {
    if (rate > 0.05) return <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400">{formatPercentage(rate)}</span>;
    if (rate >= 0.03) return <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400">{formatPercentage(rate)}</span>;
    return <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-400">{formatPercentage(rate)}</span>;
  };

  const filteredPosts = useMemo(() => {
    return mockPosts.filter((post) => {
      if (activeTab === 'Todos') return true;
      if (activeTab === 'Reels') return post.type === 'reel';
      if (activeTab === 'Carruseles') return post.type === 'carousel';
      if (activeTab === 'Stories') return post.type === 'story';
      if (activeTab === 'Posts') return post.type === 'image';
      return true;
    });
  }, [activeTab]);

  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      let valA: number;
      let valB: number;
      
      if (sortField === 'date') {
        valA = new Date(a.publishedAt).getTime();
        valB = new Date(b.publishedAt).getTime();
      } else {
        const metricMap: Record<string, keyof ContentPost['metrics']> = {
          reach: 'reach',
          engagementRate: 'engagementRate',
          likes: 'likes',
          comments: 'comments',
          saves: 'saves',
          shares: 'shares',
        };
        const key = metricMap[sortField] || 'reach';
        valA = a.metrics[key] as number;
        valB = b.metrics[key] as number;
      }

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    }).slice(0, 10);
  }, [filteredPosts, sortField, sortOrder]);

  return (
    <div className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-xl flex flex-col h-full hover:border-purple-500/20 transition-colors">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold text-white">Contenido Reciente</h2>
        <div className="flex bg-dark-900/50 p-1 rounded-lg overflow-x-auto w-full sm:w-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-all relative",
                activeTab === tab ? "text-white" : "text-dark-300 hover:text-white"
              )}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md -z-10"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto -mx-6 px-6 pb-2">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs uppercase tracking-wider text-dark-300 border-b border-white/[0.08]">
              <th className="pb-3 font-medium px-2">Tipo</th>
              <th className="pb-3 font-medium px-2">Título</th>
              <th className="pb-3 font-medium px-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('date')}>
                <div className="flex items-center">Fecha <SortIcon field="date" /></div>
              </th>
              <th className="pb-3 font-medium px-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('reach')}>
                <div className="flex items-center">Alcance <SortIcon field="reach" /></div>
              </th>
              <th className="pb-3 font-medium px-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('engagementRate')}>
                <div className="flex items-center">Eng. Rate <SortIcon field="engagementRate" /></div>
              </th>
              <th className="pb-3 font-medium px-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('likes')}>
                <div className="flex items-center"><Heart className="w-3.5 h-3.5 mr-1" /> <SortIcon field="likes" /></div>
              </th>
              <th className="pb-3 font-medium px-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('comments')}>
                <div className="flex items-center"><MessageCircle className="w-3.5 h-3.5 mr-1" /> <SortIcon field="comments" /></div>
              </th>
              <th className="pb-3 font-medium px-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('saves')}>
                <div className="flex items-center"><Bookmark className="w-3.5 h-3.5 mr-1" /> <SortIcon field="saves" /></div>
              </th>
              <th className="pb-3 font-medium px-2 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('shares')}>
                <div className="flex items-center"><Share2 className="w-3.5 h-3.5 mr-1" /> <SortIcon field="shares" /></div>
              </th>
            </tr>
          </thead>
          <motion.tbody
            variants={listStagger}
            initial="hidden"
            animate="visible"
            className="text-sm text-white"
          >
            <AnimatePresence mode="popLayout">
              {sortedPosts.map((post) => (
                <motion.tr
                  key={post.id}
                  variants={listItem}
                  layout
                  className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors group"
                >
                  <td className="py-3 px-2">{getFormatIcon(post.type)}</td>
                  <td className="py-3 px-2 font-medium truncate max-w-[200px]" title={post.caption}>
                    {post.caption.length > 50 ? post.caption.substring(0, 50) + '...' : post.caption}
                  </td>
                  <td className="py-3 px-2 text-dark-300 whitespace-nowrap">{getRelativeTime(post.publishedAt)}</td>
                  <td className="py-3 px-2 whitespace-nowrap">{formatNumber(post.metrics.reach)}</td>
                  <td className="py-3 px-2">{getEngagementBadge(post.metrics.engagementRate)}</td>
                  <td className="py-3 px-2">{formatNumber(post.metrics.likes)}</td>
                  <td className="py-3 px-2">{formatNumber(post.metrics.comments)}</td>
                  <td className="py-3 px-2">{formatNumber(post.metrics.saves)}</td>
                  <td className="py-3 px-2">{formatNumber(post.metrics.shares)}</td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </motion.tbody>
        </table>
        {sortedPosts.length === 0 && (
          <div className="text-center py-8 text-dark-300">
            No se encontró contenido para este filtro.
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center pt-2">
        <button className="text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors">
          Ver todo el contenido
        </button>
      </div>
    </div>
  );
}
