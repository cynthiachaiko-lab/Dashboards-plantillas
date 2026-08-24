export interface KPIMetric {
  id: string
  label: string
  value: number
  previousValue: number
  change: number
  format: 'number' | 'currency' | 'percentage' | 'duration'
  icon: string
  color: string
  sparklineData: number[]
}

export interface ContentPost {
  id: string
  type: 'reel' | 'carousel' | 'image' | 'story'
  caption: string
  thumbnail: string
  publishedAt: Date
  metrics: PostMetrics
  status: 'published' | 'scheduled' | 'draft'
}

export interface PostMetrics {
  reach: number
  impressions: number
  likes: number
  comments: number
  shares: number
  saves: number
  engagement: number
  engagementRate: number
  watchTime?: number
  avgWatchTime?: number
  plays?: number
}

export interface CalendarEvent {
  id: string
  title: string
  date: Date
  type: 'reel' | 'carousel' | 'image' | 'story'
  status: 'published' | 'scheduled' | 'draft'
  time?: string
  caption?: string
}

export interface FunnelStep {
  label: string
  value: number
  percentage: number
  color: string
}

export interface TopicSuggestion {
  id: string
  topic: string
  category: string
  score: number
  trend: 'up' | 'down' | 'stable'
  avgEngagement: number
  potentialReach: number
}

export interface AIGeneratedContent {
  type: 'reel' | 'carousel' | 'story'
  hook: string
  script: string[]
  caption: string
  hashtags: string[]
  cta: string
  estimatedReach: number
  slides?: string[]
}

export interface FormatComparison {
  format: string
  reach: number
  engagement: number
  saves: number
  shares: number
  conversions: number
  revenue: number
  color: string
}

export interface HourlyActivity {
  day: string
  hours: number[]
}

export interface AccountProfile {
  username: string
  name: string
  avatar: string
  bio: string
  followers: number
  following: number
  posts: number
  category: string
  verified: boolean
}

export type DateRange = '7d' | '30d' | '90d'
export type ContentType = 'reel' | 'carousel' | 'image' | 'story' | 'all'
export type ViewMode = 'dashboard' | 'analytics' | 'calendar' | 'ai-studio' | 'content' | 'settings'
