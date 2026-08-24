import { KPIMetric, ContentPost, CalendarEvent, FunnelStep, TopicSuggestion, FormatComparison, HourlyActivity, AccountProfile } from '@/types'
import { generateSparklineData } from './utils'

// =============================================
// ACCOUNT PROFILE
// =============================================
export const mockProfile: AccountProfile = {
  username: '@arturito.digital',
  name: 'Arturito Digital',
  avatar: '',
  bio: '🚀 Marketing Digital & Contenido | Ayudo a emprendedores a escalar con Instagram',
  followers: 47832,
  following: 1243,
  posts: 892,
  category: 'Marketing Digital',
  verified: true,
}

// =============================================
// KPI METRICS
// =============================================
export const mockKPIs: KPIMetric[] = [
  {
    id: 'followers',
    label: 'Seguidores',
    value: 47832,
    previousValue: 46290,
    change: 3.33,
    format: 'number',
    icon: 'Users',
    color: '#8b5cf6',
    sparklineData: generateSparklineData(14, 45000, 48000, 'up'),
  },
  {
    id: 'reach',
    label: 'Alcance',
    value: 284500,
    previousValue: 251000,
    change: 13.3,
    format: 'number',
    icon: 'Eye',
    color: '#6366f1',
    sparklineData: generateSparklineData(14, 200000, 300000, 'up'),
  },
  {
    id: 'impressions',
    label: 'Impresiones',
    value: 523000,
    previousValue: 489000,
    change: 6.9,
    format: 'number',
    icon: 'BarChart3',
    color: '#3b82f6',
    sparklineData: generateSparklineData(14, 400000, 550000, 'up'),
  },
  {
    id: 'interactions',
    label: 'Interacciones',
    value: 18420,
    previousValue: 15800,
    change: 16.6,
    format: 'number',
    icon: 'Heart',
    color: '#ec4899',
    sparklineData: generateSparklineData(14, 14000, 19000, 'up'),
  },
  {
    id: 'profile-views',
    label: 'Visitas al Perfil',
    value: 12340,
    previousValue: 10900,
    change: 13.2,
    format: 'number',
    icon: 'UserCheck',
    color: '#06b6d4',
    sparklineData: generateSparklineData(14, 9000, 13000, 'up'),
  },
  {
    id: 'leads',
    label: 'Leads Hoy',
    value: 23,
    previousValue: 18,
    change: 27.8,
    format: 'number',
    icon: 'Target',
    color: '#10b981',
    sparklineData: generateSparklineData(14, 10, 30, 'up'),
  },
  {
    id: 'revenue',
    label: 'Revenue del Mes',
    value: 12450,
    previousValue: 9800,
    change: 27.0,
    format: 'currency',
    icon: 'DollarSign',
    color: '#f59e0b',
    sparklineData: generateSparklineData(14, 5000, 15000, 'up'),
  },
  {
    id: 'engagement-rate',
    label: 'Engagement Rate',
    value: 4.82,
    previousValue: 4.1,
    change: 17.6,
    format: 'percentage',
    icon: 'TrendingUp',
    color: '#f97316',
    sparklineData: generateSparklineData(14, 3, 6, 'up'),
  },
]

// =============================================
// REACH & IMPRESSIONS DATA (30 days)
// =============================================
function generateDailyData(days: number) {
  const data = []
  const now = new Date()
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    data.push({
      date: date.toISOString().split('T')[0],
      label: `${date.getDate()}/${date.getMonth() + 1}`,
      reach: Math.floor(7000 + Math.random() * 8000 + (days - i) * 100),
      impressions: Math.floor(14000 + Math.random() * 12000 + (days - i) * 150),
      followers: Math.floor(46000 + (days - i) * 60 + Math.random() * 200),
      engagement: Math.floor(400 + Math.random() * 500 + (days - i) * 10),
      profileViews: Math.floor(300 + Math.random() * 400),
    })
  }
  return data
}

export const mockDailyData = generateDailyData(30)

// =============================================
// ENGAGEMENT BREAKDOWN DATA
// =============================================
export const mockEngagementData = mockDailyData.map(d => ({
  date: d.label,
  likes: Math.floor(d.engagement * 0.55),
  comments: Math.floor(d.engagement * 0.15),
  shares: Math.floor(d.engagement * 0.12),
  saves: Math.floor(d.engagement * 0.18),
  engagementRate: +(3.5 + Math.random() * 2.5).toFixed(2),
}))

// =============================================
// CONTENT POSTS
// =============================================
const contentTypes: Array<'reel' | 'carousel' | 'image' | 'story'> = ['reel', 'carousel', 'image', 'story']
const captions = [
  '🚀 3 errores que te están costando seguidores',
  '💡 La estrategia que duplicó mis leads en 7 días',
  '📊 Análisis de mi último mes en Instagram',
  '🎯 Cómo crear contenido que vende sin vender',
  '⚡ Hook perfecto: la fórmula que nadie te cuenta',
  '🔥 Por qué los carruseles son el formato del 2024',
  '💰 De 0 a $10K/mes con contenido orgánico',
  '📱 Tutorial: Editar Reels como un profesional',
  '🧠 Psicología detrás del contenido viral',
  '✨ Mi rutina diaria de creación de contenido',
  '📈 Las métricas que realmente importan',
  '🎬 Detrás de cámaras de mi proceso creativo',
  '💪 5 hábitos de creadores exitosos',
  '🗓️ Cómo organizar tu calendario de contenido',
  '🎯 Storytelling: el arma secreta del engagement',
  '🔑 Los 3 pilares del crecimiento orgánico',
  '📲 Instagram Algorithm Update 2024',
  '💎 Contenido premium vs contenido masivo',
  '🎨 Diseño de carruseles que convierten',
  '🚀 Growth hacking para Instagram',
]

export const mockPosts: ContentPost[] = Array.from({ length: 20 }, (_, i) => {
  const type = contentTypes[i % 4]
  const daysAgo = i * 2
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  const baseReach = type === 'reel' ? 15000 : type === 'carousel' ? 8000 : type === 'story' ? 5000 : 6000
  const multiplier = 0.5 + Math.random() * 1.5

  return {
    id: `post-${i + 1}`,
    type,
    caption: captions[i],
    thumbnail: `/api/placeholder/${300 + i}/${300 + i}`,
    publishedAt: date,
    status: 'published' as const,
    metrics: {
      reach: Math.floor(baseReach * multiplier),
      impressions: Math.floor(baseReach * multiplier * 1.8),
      likes: Math.floor(baseReach * multiplier * 0.06),
      comments: Math.floor(baseReach * multiplier * 0.008),
      shares: Math.floor(baseReach * multiplier * 0.015),
      saves: Math.floor(baseReach * multiplier * 0.025),
      engagement: Math.floor(baseReach * multiplier * 0.1),
      engagementRate: +(3 + Math.random() * 4).toFixed(2),
      ...(type === 'reel' ? {
        watchTime: Math.floor(20 + Math.random() * 40),
        avgWatchTime: +(5 + Math.random() * 15).toFixed(1),
        plays: Math.floor(baseReach * multiplier * 2.5),
      } : {}),
    },
  }
})

// =============================================
// CALENDAR EVENTS
// =============================================
export const mockCalendarEvents: CalendarEvent[] = [
  { id: 'cal-1', title: 'Reel: 5 tips de engagement', date: new Date(2026, 7, 18), type: 'reel', status: 'published', time: '09:00' },
  { id: 'cal-2', title: 'Carrusel: Algoritmo 2026', date: new Date(2026, 7, 19), type: 'carousel', status: 'scheduled', time: '11:00' },
  { id: 'cal-3', title: 'Story: Q&A con seguidores', date: new Date(2026, 7, 19), type: 'story', status: 'scheduled', time: '18:00' },
  { id: 'cal-4', title: 'Reel: Mi proceso creativo', date: new Date(2026, 7, 20), type: 'reel', status: 'scheduled', time: '09:00' },
  { id: 'cal-5', title: 'Carrusel: Funnel de ventas', date: new Date(2026, 7, 21), type: 'carousel', status: 'draft', time: '11:00' },
  { id: 'cal-6', title: 'Reel: Errores al crear contenido', date: new Date(2026, 7, 22), type: 'reel', status: 'draft', time: '09:00' },
  { id: 'cal-7', title: 'Story: Behind the scenes', date: new Date(2026, 7, 22), type: 'story', status: 'draft', time: '15:00' },
  { id: 'cal-8', title: 'Carrusel: Copywriting tips', date: new Date(2026, 7, 23), type: 'carousel', status: 'draft', time: '11:00' },
  { id: 'cal-9', title: 'Reel: Análisis de métricas', date: new Date(2026, 7, 25), type: 'reel', status: 'draft', time: '09:00' },
  { id: 'cal-10', title: 'Imagen: Frase motivacional', date: new Date(2026, 7, 26), type: 'image', status: 'draft', time: '10:00' },
  { id: 'cal-11', title: 'Reel: Herramientas gratis 2026', date: new Date(2026, 7, 27), type: 'reel', status: 'draft', time: '09:00' },
  { id: 'cal-12', title: 'Carrusel: Estrategia de hashtags', date: new Date(2026, 7, 28), type: 'carousel', status: 'draft', time: '11:00' },
]

// =============================================
// FUNNEL DATA
// =============================================
export const mockFunnel: FunnelStep[] = [
  { label: 'Impresiones', value: 523000, percentage: 100, color: '#8b5cf6' },
  { label: 'Alcance', value: 284500, percentage: 54.4, color: '#6366f1' },
  { label: 'Engagement', value: 18420, percentage: 6.5, color: '#3b82f6' },
  { label: 'Guardados', value: 4230, percentage: 1.5, color: '#06b6d4' },
  { label: 'Leads', value: 342, percentage: 0.12, color: '#10b981' },
  { label: 'Revenue', value: 12450, percentage: 0.04, color: '#f59e0b' },
]

// =============================================
// TOPIC SUGGESTIONS
// =============================================
export const mockTopicSuggestions: TopicSuggestion[] = [
  {
    id: 'topic-1',
    topic: 'Cómo usar IA para crear contenido',
    category: 'Tecnología',
    score: 95,
    trend: 'up',
    avgEngagement: 8.2,
    potentialReach: 45000,
  },
  {
    id: 'topic-2',
    topic: 'Errores de principiantes en Instagram',
    category: 'Educación',
    score: 92,
    trend: 'up',
    avgEngagement: 7.8,
    potentialReach: 38000,
  },
  {
    id: 'topic-3',
    topic: 'Estrategias de monetización 2026',
    category: 'Negocios',
    score: 89,
    trend: 'up',
    avgEngagement: 6.9,
    potentialReach: 35000,
  },
  {
    id: 'topic-4',
    topic: 'Storytelling para vender sin vender',
    category: 'Marketing',
    score: 87,
    trend: 'stable',
    avgEngagement: 7.1,
    potentialReach: 32000,
  },
  {
    id: 'topic-5',
    topic: 'Reels vs Carruseles: qué funciona mejor',
    category: 'Contenido',
    score: 85,
    trend: 'up',
    avgEngagement: 6.5,
    potentialReach: 30000,
  },
  {
    id: 'topic-6',
    topic: 'Psicología del consumidor en redes',
    category: 'Psicología',
    score: 82,
    trend: 'stable',
    avgEngagement: 5.8,
    potentialReach: 28000,
  },
  {
    id: 'topic-7',
    topic: 'Automatización de marketing digital',
    category: 'Tecnología',
    score: 80,
    trend: 'up',
    avgEngagement: 5.5,
    potentialReach: 25000,
  },
  {
    id: 'topic-8',
    topic: 'Personal branding para emprendedores',
    category: 'Branding',
    score: 78,
    trend: 'stable',
    avgEngagement: 5.2,
    potentialReach: 22000,
  },
]

// =============================================
// FORMAT COMPARISON
// =============================================
export const mockFormatComparison: FormatComparison[] = [
  { format: 'Reels', reach: 18500, engagement: 1240, saves: 380, shares: 210, conversions: 45, revenue: 4800, color: '#8b5cf6' },
  { format: 'Carruseles', reach: 9200, engagement: 890, saves: 520, shares: 150, conversions: 38, revenue: 3900, color: '#6366f1' },
  { format: 'Posts', reach: 5800, engagement: 420, saves: 180, shares: 85, conversions: 18, revenue: 1800, color: '#3b82f6' },
  { format: 'Stories', reach: 6100, engagement: 380, saves: 45, shares: 120, conversions: 22, revenue: 1950, color: '#06b6d4' },
]

// =============================================
// BEST POSTING TIMES HEATMAP
// =============================================
export const mockHourlyActivity: HourlyActivity[] = [
  { day: 'Lun', hours: [2, 3, 2, 1, 1, 3, 5, 7, 9, 8, 7, 6, 5, 6, 7, 8, 9, 10, 9, 8, 7, 5, 4, 3] },
  { day: 'Mar', hours: [2, 2, 1, 1, 1, 3, 5, 8, 10, 9, 8, 7, 6, 6, 7, 8, 9, 10, 10, 8, 7, 5, 3, 2] },
  { day: 'Mié', hours: [2, 3, 2, 1, 1, 2, 5, 7, 9, 9, 8, 7, 6, 7, 8, 9, 10, 10, 9, 8, 6, 5, 4, 3] },
  { day: 'Jue', hours: [3, 2, 2, 1, 1, 3, 5, 8, 10, 9, 8, 7, 6, 6, 7, 8, 9, 10, 9, 8, 7, 5, 4, 2] },
  { day: 'Vie', hours: [2, 2, 2, 1, 1, 2, 4, 7, 8, 8, 7, 6, 6, 6, 7, 8, 9, 10, 10, 9, 8, 6, 5, 3] },
  { day: 'Sáb', hours: [3, 3, 2, 2, 1, 2, 3, 5, 7, 8, 9, 9, 8, 7, 7, 8, 8, 9, 9, 8, 7, 6, 5, 4] },
  { day: 'Dom', hours: [3, 3, 2, 2, 1, 2, 3, 5, 6, 8, 9, 10, 9, 8, 7, 7, 8, 9, 9, 8, 7, 6, 5, 4] },
]

// =============================================
// AI GENERATED SCRIPTS (mock)
// =============================================
export const mockAIScripts = {
  reel: {
    hook: '¿Sabías que el 90% de los creadores cometen este error?',
    script: [
      'HOOK (0-3s): "Pará todo. Si estás creando contenido sin hacer esto, estás perdiendo plata."',
      'PROBLEMA (3-8s): "La mayoría de los creadores publican sin estrategia. Publican por publicar."',
      'SOLUCIÓN (8-20s): "Lo que yo hago es simple: antes de crear, reviso qué contenido me generó más guardados la semana pasada. Los guardados son la métrica clave porque indican intención de compra."',
      'PRUEBA (20-30s): "Desde que empecé a hacer esto, mis leads se duplicaron. Mirá las métricas."',
      'CTA (30-35s): "Guardá este video y seguime para más estrategias que funcionan de verdad."',
    ],
    caption: '🚀 La métrica que nadie mira pero que genera más ventas\n\n¿Estás mirando likes? Error.\n¿Estás mirando seguidores? Error.\n\nLa métrica real es: GUARDADOS 📌\n\nTe explico por qué en el video ☝️\n\n💾 Guardá este post\n📤 Compartilo con alguien que lo necesite\n\n#marketingdigital #instagram #contenido #estrategia #emprendedor',
    hashtags: ['#marketingdigital', '#instagramtips', '#contenido', '#estrategia', '#emprendedor', '#creadordecontenido'],
    cta: 'Guardá este video y seguime para más',
  },
  carousel: {
    slides: [
      'Slide 1 (Cover): "5 MÉTRICAS que deberías revisar TODOS LOS DÍAS" - Diseño llamativo con gradiente',
      'Slide 2: "1. ENGAGEMENT RATE - Si está por debajo del 3%, tu contenido no conecta"',
      'Slide 3: "2. GUARDADOS - Cada guardado = una persona que quiere volver a tu contenido"',
      'Slide 4: "3. COMPARTIDOS - La métrica del crecimiento orgánico real"',
      'Slide 5: "4. VISITAS AL PERFIL - ¿Tu contenido genera curiosidad?"',
      'Slide 6: "5. CLICKS EN EL LINK - La conversión final. Lo que genera dinero"',
      'Slide 7 (CTA): "¿Cuál de estas métricas revisás? Contame en los comentarios 👇"',
    ],
    caption: '📊 Las 5 métricas que reviso TODOS LOS DÍAS\n\n(Y que me generaron +$10K este mes)\n\nDeslizá para ver cada una ➡️\n\n💾 Guardalo para revisarlo después\n📤 Enviáselo a alguien que necesite esto',
  },
  story: {
    text: '¿Qué tipo de contenido querés que haga mañana? 🤔',
    options: ['A) Tutorial de Reels', 'B) Tips de algoritmo', 'C) Q&A en vivo'],
    design: 'Fondo con gradiente púrpura, texto blanco grande, sticker de encuesta',
  },
}

// =============================================
// FOLLOWERS GROWTH DATA
// =============================================
export const mockFollowersGrowth = Array.from({ length: 90 }, (_, i) => {
  const date = new Date()
  date.setDate(date.getDate() - (89 - i))
  return {
    date: `${date.getDate()}/${date.getMonth() + 1}`,
    followers: Math.floor(38000 + i * 110 + Math.random() * 300),
    newFollowers: Math.floor(50 + Math.random() * 120),
    unfollows: Math.floor(10 + Math.random() * 30),
  }
})

// =============================================
// CONTENT PERFORMANCE BY FORMAT (radar)
// =============================================
export const mockRadarData = {
  categories: ['Alcance', 'Engagement', 'Guardados', 'Compartidos', 'Comentarios', 'Watch Time'],
  series: [
    { name: 'Reels', data: [90, 75, 60, 85, 55, 95] },
    { name: 'Carruseles', data: [55, 80, 92, 45, 70, 20] },
    { name: 'Posts', data: [40, 50, 45, 35, 60, 10] },
    { name: 'Stories', data: [35, 40, 15, 65, 30, 45] },
  ],
}
