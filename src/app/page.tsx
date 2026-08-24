'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MainLayout, useAppContext } from '@/components/layout/main-layout'
import { KPICards } from '@/components/dashboard/kpi-cards'
import { ReachChart } from '@/components/charts/reach-chart'
import { EngagementChart } from '@/components/charts/engagement-chart'
import { FollowersGrowth } from '@/components/charts/followers-growth'
import { ContentPerformance } from '@/components/charts/content-performance'
import { BestPostingTimes } from '@/components/charts/best-posting-times'
import { RevenueChart } from '@/components/charts/revenue-chart'
import { FunnelChart } from '@/components/charts/funnel-chart'
import { ContentTable } from '@/components/content/content-table'
import { ContentCalendar } from '@/components/calendar/content-calendar'
import { FunnelAnalytics } from '@/components/analytics/funnel-analytics'
import { AiTopicSuggestions } from '@/components/ai/ai-topic-suggestions'
import { AiScriptGenerator } from '@/components/ai/ai-script-generator'
import { QuickCreateModal } from '@/components/ai/quick-create-modal'
import { staggerContainer, fadeInUp, pageTransition } from '@/lib/animations'

function DashboardView() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* KPI Cards */}
      <motion.div variants={fadeInUp}>
        <KPICards />
      </motion.div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <ReachChart />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <EngagementChart />
        </motion.div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div variants={fadeInUp}>
          <FunnelChart />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <BestPostingTimes />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <ContentPerformance />
        </motion.div>
      </div>

      {/* Charts Row 3 */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <FollowersGrowth />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <RevenueChart />
        </motion.div>
      </div>

      {/* Content Table */}
      <motion.div variants={fadeInUp}>
        <ContentTable />
      </motion.div>

      {/* Bottom Row: AI Suggestions + Calendar Preview */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <AiTopicSuggestions />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <ContentCalendar />
        </motion.div>
      </div>
    </motion.div>
  )
}

function AnalyticsView() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={fadeInUp}>
        <FunnelAnalytics />
      </motion.div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <ReachChart />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <EngagementChart />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div variants={fadeInUp}>
          <FunnelChart />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <RevenueChart />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <ContentPerformance />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <FollowersGrowth />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <BestPostingTimes />
        </motion.div>
      </div>
    </motion.div>
  )
}

function CalendarView() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={fadeInUp}>
        <ContentCalendar />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <ContentTable />
      </motion.div>
    </motion.div>
  )
}

function AIStudioView() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <AiScriptGenerator />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <AiTopicSuggestions />
        </motion.div>
      </div>
    </motion.div>
  )
}

function ContentView() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={fadeInUp}>
        <ContentTable />
      </motion.div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <ContentPerformance />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <BestPostingTimes />
        </motion.div>
      </div>
    </motion.div>
  )
}

function SettingsView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="glass-card p-8">
        <h2 className="text-2xl font-bold gradient-text mb-6">Configuración</h2>
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="flex items-center gap-6 p-6 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold">
              AD
            </div>
            <div>
              <h3 className="text-xl font-semibold">Arturito Digital</h3>
              <p className="text-dark-300">@arturito.digital</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm">Conectado</span>
              </div>
            </div>
          </div>

          {/* Settings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Cuenta de Instagram', value: '@arturito.digital', status: 'Conectada' },
              { label: 'Plan Actual', value: 'Premium Pro', status: 'Activo' },
              { label: 'API de IA', value: 'GPT-4 Turbo', status: 'Configurada' },
              { label: 'Notificaciones', value: 'Activadas', status: 'Email + Push' },
              { label: 'Zona Horaria', value: 'América/Buenos Aires', status: 'UTC-3' },
              { label: 'Idioma', value: 'Español', status: 'AR' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-purple-500/20 transition-all"
              >
                <p className="text-dark-300 text-sm">{item.label}</p>
                <p className="text-white font-medium mt-1">{item.value}</p>
                <span className="text-emerald-400 text-xs mt-1 inline-block">{item.status}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function AppContent() {
  const { activeView, showCreateModal, setShowCreateModal } = useAppContext()

  const renderView = () => {
    switch (activeView) {
      case 'dashboard': return <DashboardView />
      case 'analytics': return <AnalyticsView />
      case 'calendar': return <CalendarView />
      case 'ai-studio': return <AIStudioView />
      case 'content': return <ContentView />
      case 'settings': return <SettingsView />
      default: return <DashboardView />
    }
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>

      {/* Quick Create Modal */}
      <QuickCreateModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </>
  )
}

export default function Home() {
  return (
    <MainLayout>
      <AppContent />
    </MainLayout>
  )
}
