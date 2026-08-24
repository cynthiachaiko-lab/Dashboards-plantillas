'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { mockDailyData } from '@/lib/mock-data';
import { formatNumber, cn } from '@/lib/utils';
import { fadeInUp, scrollViewport } from '@/lib/animations';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function ReachChart() {
  const [range, setRange] = useState('30D');

  const options: ApexOptions = {
    chart: {
      type: 'area',
      fontFamily: 'inherit',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      },
      background: 'transparent',
    },
    colors: ['#8b5cf6', '#3b82f6'],
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 2.5,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: mockDailyData.map(d => d.date),
      labels: {
        style: { colors: '#64748b' },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false }
    },
    yaxis: {
      labels: {
        style: { colors: '#64748b' },
        formatter: (val) => formatNumber(val),
      },
    },
    grid: {
      borderColor: 'rgba(255,255,255,0.04)',
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    theme: { mode: 'dark' },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      labels: { colors: '#94a3b8' }
    },
    tooltip: {
      theme: 'dark',
      y: { formatter: (val) => formatNumber(val) }
    }
  };

  const series = [
    { name: 'Alcance', data: mockDailyData.map(d => d.reach) },
    { name: 'Impresiones', data: mockDailyData.map(d => d.impressions) }
  ];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Alcance e Impresiones
        </h2>
        <div className="flex space-x-2 mt-4 sm:mt-0 bg-dark-900/50 p-1 rounded-lg border border-white/[0.05]">
          {['7D', '30D', '90D'].map((tab) => (
            <button
              key={tab}
              onClick={() => setRange(tab)}
              className={cn(
                "px-3 py-1 text-sm rounded-md transition-all duration-200",
                range === tab 
                  ? "bg-white/10 text-white shadow-sm" 
                  : "text-dark-300 hover:text-white hover:bg-white/5"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[350px] w-full">
        <Chart options={options} series={series} type="area" height="100%" width="100%" />
      </div>
    </motion.div>
  );
}
