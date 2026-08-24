'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { mockFormatComparison } from '@/lib/mock-data';
import { chartReveal, scrollViewport } from '@/lib/animations';
import { formatCurrency } from '@/lib/utils';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function RevenueChart() {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        dataLabels: {
          position: 'center'
        },
        distributed: true,
      }
    },
    colors: mockFormatComparison?.map(item => item.color) || ['#8b5cf6', '#6366f1', '#3b82f6', '#06b6d4'],
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return formatCurrency(val);
      },
      style: {
        colors: ['#fff'],
        fontSize: '12px',
        fontWeight: 'bold',
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.5
      }
    },
    xaxis: {
      categories: mockFormatComparison?.map(item => item.format) || [],
      labels: {
        show: false
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#94a3b8',
          fontSize: '12px',
          fontWeight: 500,
          fontFamily: 'inherit',
        }
      }
    },
    grid: {
      show: false
    },
    legend: {
      show: false
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val: number) {
          return formatCurrency(val);
        }
      }
    }
  };

  const series = [{
    name: 'Revenue',
    data: mockFormatComparison?.map(item => item.revenue) || []
  }];

  const totalRevenue = mockFormatComparison?.reduce((acc, curr) => acc + curr.revenue, 0) || 12450;

  return (
    <motion.div
      variants={chartReveal}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      className="bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-medium text-lg">Revenue por Formato de Contenido</h3>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">{formatCurrency(totalRevenue)}</p>
          <p className="text-xs text-dark-300">Total Revenue</p>
        </div>
      </div>
      <div className="h-[280px]">
        <Chart
          options={options}
          series={series}
          type="bar"
          height="100%"
        />
      </div>
    </motion.div>
  );
}
