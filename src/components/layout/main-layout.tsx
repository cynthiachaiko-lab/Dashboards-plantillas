'use client';

import React, { useState, createContext, useContext } from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { ViewMode } from '@/types';

interface AppContextType {
  activeView: ViewMode;
  setActiveView: (view: ViewMode) => void;
  showCreateModal: boolean;
  setShowCreateModal: (show: boolean) => void;
  dateRange: '7d' | '30d' | '90d';
  setDateRange: (range: '7d' | '30d' | '90d') => void;
}

export const AppContext = createContext<AppContextType>({
  activeView: 'dashboard',
  setActiveView: () => {},
  showCreateModal: false,
  setShowCreateModal: () => {},
  dateRange: '30d',
  setDateRange: () => {},
});

export const useAppContext = () => useContext(AppContext);

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [activeView, setActiveView] = useState<ViewMode>('dashboard');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('30d');

  return (
    <AppContext.Provider value={{ activeView, setActiveView, showCreateModal, setShowCreateModal, dateRange, setDateRange }}>
      <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden relative selection:bg-purple-500/30">
        {/* Ambient background glow effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[150px] animate-float" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/15 blur-[150px] animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-cyan-900/10 blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <Sidebar 
          activeView={activeView} 
          onViewChange={setActiveView} 
        />
        
        <Header 
          currentView={activeView}
          onCreateClick={() => setShowCreateModal(true)}
        />

        <main className="pl-[240px] pt-[72px] min-h-screen relative z-10">
          <div className="h-[calc(100vh-72px)] overflow-y-auto p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </AppContext.Provider>
  );
}
