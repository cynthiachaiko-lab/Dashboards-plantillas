'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { mockRadarData } from '@/lib/mock-data';
import { chartReveal, scrollViewport } from '@/lib/animations';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function ContentPerformance() {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'radar',
      toolbar: { show: false },
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    stroke: {
      width: 2,
      colors: ['#8b5cf6', '#6366f1', '#3b82f6', '#06b6d4'],
    },
    fill: {
      opacity: 0.15
    },
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColors: ['#8b5cf6', '#6366f1', '#3b82f6', '#06b6d4'],
      strokeWidth: 2,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      categories: mockRadarData?.categories || ['Reels', 'Carruseles', 'Posts', 'Stories', 'Lives'],
      labels: {
        style: {
          colors: ['#94a3b8', '#94a3b8', '#94a3b8', '#94a3b8', '#94a3b8'],
          fontSize: '12px',
          fontFamily: 'inherit',
        }
      }
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: 'rgba(255,255,255,0.08)',
          connectorColors: 'rgba(255,255,255,0.08)',
          fill: {
            colors: ['transparent']
          }
        }
      }
    },
    colors: ['#8b5cf6', '#6366f1', '#3b82f6', '#06b6d4'],
    legend: {
      show: true,
      position: 'bottom',
      labels: {
        colors: '#fff'
      },
      markers: {
        size: 6,
        shape: 'circle',
      }
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val: number) {
          return val.toString();
        }
      }
    }
  };

  return (
    <motion.div
      variants={chartReveal}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6"
    >
      <h3 className="text-white font-medium text-lg mb-6">Performance por Formato</h3>
      <div className="h-[350px]">
        <Chart
          options={options}
          series={mockRadarData?.series || []}
          type="radar"
          height="100%"
        />
      </div>
    </motion.div>
  );
}
