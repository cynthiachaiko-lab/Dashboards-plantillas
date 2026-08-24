'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { mockEngagementData } from '@/lib/mock-data';
import { fadeInUp, scrollViewport } from '@/lib/animations';
import { ApexOptions } from 'apexcharts';
import { formatNumber, formatPercentage } from '@/lib/utils';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function EngagementChart() {
  const options: ApexOptions = {
    chart: {
      type: 'line',
      stacked: true,
      fontFamily: 'inherit',
      toolbar: { show: false },
      background: 'transparent',
      animations: {
        enabled: true,
        speed: 600,
      }
    },
    colors: ['#ec4899', '#06b6d4', '#f97316', '#a855f7', '#ffffff'],
    stroke: {
      width: [0, 0, 0, 0, 2],
      curve: 'smooth',
      dashArray: [0, 0, 0, 0, 5]
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '40%',
      }
    },
    xaxis: {
      categories: mockEngagementData.map(d => d.date),
      labels: { style: { colors: '#64748b' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: [
      {
        seriesName: 'Likes',
        labels: {
          style: { colors: '#64748b' },
          formatter: (val) => formatNumber(val)
        },
      },
      {
        show: false,
        seriesName: 'Comments',
      },
      {
        show: false,
        seriesName: 'Shares',
      },
      {
        show: false,
        seriesName: 'Saves',
      },
      {
        opposite: true,
        seriesName: 'Engagement Rate',
        labels: {
          style: { colors: '#64748b' },
          formatter: (val) => formatPercentage(val)
        }
      }
    ],
    grid: {
      borderColor: 'rgba(255,255,255,0.04)',
      strokeDashArray: 4,
    },
    theme: { mode: 'dark' },
    legend: {
      position: 'bottom',
      labels: { colors: '#94a3b8' }
    },
    tooltip: {
      theme: 'dark',
      shared: true,
      intersect: false,
    }
  };

  const series = [
    { name: 'Likes', type: 'column', data: mockEngagementData.map(d => d.likes) },
    { name: 'Comments', type: 'column', data: mockEngagementData.map(d => d.comments) },
    { name: 'Shares', type: 'column', data: mockEngagementData.map(d => d.shares) },
    { name: 'Saves', type: 'column', data: mockEngagementData.map(d => d.saves) },
    { name: 'Engagement Rate', type: 'line', data: mockEngagementData.map(d => d.engagementRate) }
  ];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6"
    >
      <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
        Engagement por Tipo
      </h2>
      <div className="h-[350px] w-full">
        <Chart options={options} series={series} height="100%" width="100%" />
      </div>
    </motion.div>
  );
}
