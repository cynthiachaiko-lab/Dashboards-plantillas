'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { mockFollowersGrowth } from '@/lib/mock-data';
import { formatNumber } from '@/lib/utils';
import { fadeInUp, scrollViewport } from '@/lib/animations';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function FollowersGrowth() {
  const data = mockFollowersGrowth.map(d => d.followers);
  const maxFollowers = Math.max(...data);
  const maxIndex = data.indexOf(maxFollowers);
  const maxDate = mockFollowersGrowth[maxIndex].date;
  
  const currentFollowers = data[data.length - 1] || 0;

  const options: ApexOptions = {
    chart: {
      type: 'area',
      fontFamily: 'inherit',
      toolbar: { show: false },
      background: 'transparent',
    },
    colors: ['#a855f7'],
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
        sizeOffset: 2
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.0,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: mockFollowersGrowth.map(d => d.date),
      labels: { style: { colors: '#64748b' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false }
    },
    yaxis: {
      labels: {
        style: { colors: '#64748b' },
        formatter: (val) => formatNumber(val)
      }
    },
    grid: {
      borderColor: 'rgba(255,255,255,0.04)',
      strokeDashArray: 4,
    },
    theme: { mode: 'dark' },
    annotations: {
      points: [
        {
          x: maxDate,
          y: maxFollowers,
          marker: {
            size: 6,
            fillColor: '#a855f7',
            strokeColor: '#fff',
            strokeWidth: 2,
          },
          label: {
            borderColor: '#a855f7',
            style: {
              color: '#fff',
              background: '#a855f7',
            },
            text: 'Máximo',
          }
        }
      ]
    },
    tooltip: {
      theme: 'dark',
      y: { formatter: (val) => formatNumber(val) }
    }
  };

  const series = [
    { name: 'Seguidores', data }
  ];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6"
    >
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold text-white">
          Crecimiento de Seguidores
        </h2>
        <div className="text-right">
          <p className="text-dark-300 text-sm mb-1">Total</p>
          <p className="text-2xl font-bold text-purple-400">
            {formatNumber(currentFollowers)}
          </p>
        </div>
      </div>
      <div className="h-[300px] w-full">
        <Chart options={options} series={series} type="area" height="100%" width="100%" />
      </div>
    </motion.div>
  );
}
