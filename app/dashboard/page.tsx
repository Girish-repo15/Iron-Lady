'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { NavBar } from '@/components/navigation'
import { Search, Users, MessageSquare, CheckCircle, Clock, ArrowRight } from 'lucide-react'

// Mock Data
const stats = [
    { title: 'Total Conversations', value: '1,234', change: '+12%', icon: MessageSquare, color: 'text-blue-500' },
    { title: 'Active Now', value: '42', change: '+5%', icon: Users, color: 'text-green-500' },
    { title: 'Resolved Today', value: '156', change: '+8%', icon: CheckCircle, color: 'text-purple-500' },
    { title: 'Avg. Response Time', value: '1m 42s', change: '-12%', icon: Clock, color: 'text-orange-500' },
]

const recentConversations = [
    { id: '1', name: 'Emma Johnson', company: 'TechFlow Inc', message: 'I have a question about the premium plan...', time: '12 min ago', status: 'Active' },
    { id: '2', name: 'Michael Chen', company: 'StartupGrind', message: 'Thanks for the help! usage limits?', time: '45 min ago', status: 'Resolved' },
    { id: '3', name: 'Sarah Williams', company: 'Design Co', message: 'How do I integrate with Slack?', time: '1 hour ago', status: 'Active' },
    { id: '4', name: 'James Wilson', company: 'Enterprise Ltd', message: 'Billing cycle question regarding...', time: '2 hours ago', status: 'Pending' },
]

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-muted/40">
            <NavBar />
            <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
                        <p className="text-muted-foreground mt-1">Overview of your AI agent's performance.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">Export Report</Button>
                        <Button>New Conversation</Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    {stats.map((stat, i) => (
                        <Card key={i}>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </CardTitle>
                                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    <span className={stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                                        {stat.change}
                                    </span> from last month
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Recent Conversations List */}
                    <div className="lg:col-span-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Recent Conversations</CardTitle>
                                <CardDescription>Manaage and monitor your active customer chats.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {/* Search and Filter */}
                                <div className="flex gap-2 mb-6">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input type="search" placeholder="Search customer or message..." className="pl-8" />
                                    </div>
                                    <Button variant="outline">Filter</Button>
                                </div>

                                <div className="space-y-4">
                                    {recentConversations.map((conv) => (
                                        <div key={conv.id} className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                    {conv.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground">{conv.name}</h4>
                                                    <p className="text-sm text-muted-foreground max-w-[200px] md:max-w-md truncate">
                                                        {conv.message}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right hidden md:block">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                                ${conv.status === 'Active' ? 'bg-green-100 text-green-800 border-green-200' :
                                                            conv.status === 'Resolved' ? 'bg-gray-100 text-gray-800 border-gray-200' :
                                                                'bg-yellow-100 text-yellow-800 border-yellow-200'}`}>
                                                        {conv.status}
                                                    </span>
                                                    <p className="text-xs text-muted-foreground mt-1">{conv.time}</p>
                                                </div>
                                                <Link href={`/dashboard/conversation/${conv.id}`}>
                                                    <Button variant="ghost" size="icon">
                                                        <ArrowRight className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Side Panel / Quick Actions */}
                    <div className="space-y-6">
                        {/* System Health */}
                        <Card>
                            <CardHeader>
                                <CardTitle>System Health</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-sm font-medium">AI Agent</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">Operational</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-sm font-medium">Database</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">Operational</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-sm font-medium">API Gateway</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">Operational</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Tips */}
                        <Card className="bg-primary/5 border-primary/20">
                            <CardHeader>
                                <CardTitle className="text-primary">Pro Tip</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    You can automate responses for common queries in the Settings tab. This can reduce agent workload by 40%.
                                </p>
                                <Button variant="link" className="px-0 mt-2 text-primary">Configure Automation &rarr;</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
