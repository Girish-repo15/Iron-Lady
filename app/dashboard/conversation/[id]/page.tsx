'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Send, Flag, Archive, MoreVertical, Clock, User, CheckCircle } from 'lucide-react'

interface ConversationMessage {
  id: string
  role: 'customer' | 'ai' | 'agent'
  content: string
  timestamp: Date
  sentiment?: 'positive' | 'neutral' | 'negative'
}

const mockMessages: ConversationMessage[] = [
  {
    id: '1',
    role: 'customer',
    content: 'Hi, I have a question about the premium plan. What are the key differences compared to the basic plan?',
    timestamp: new Date(Date.now() - 3600000),
    sentiment: 'neutral',
  },
  {
    id: '2',
    role: 'ai',
    content:
      'Great question! The Premium plan includes: unlimited API calls, priority support, advanced analytics, and custom integrations. Here\'s a detailed comparison...',
    timestamp: new Date(Date.now() - 3550000),
    sentiment: 'positive',
  },
  {
    id: '3',
    role: 'customer',
    content: 'That sounds perfect for our needs. How much does it cost and can we upgrade immediately?',
    timestamp: new Date(Date.now() - 3500000),
    sentiment: 'positive',
  },
  {
    id: '4',
    role: 'ai',
    content:
      'The Premium plan is $99/month with a 14-day free trial. You can upgrade immediately in your account settings. I can walk you through the process if needed.',
    timestamp: new Date(Date.now() - 3450000),
    sentiment: 'positive',
  },
  {
    id: '5',
    role: 'customer',
    content: 'Awesome! I\'m ready to upgrade now. Can you help me with that?',
    timestamp: new Date(Date.now() - 3400000),
    sentiment: 'positive',
  },
  {
    id: '6',
    role: 'agent',
    content:
      'I\'m connecting you with Sarah from our team to complete your upgrade. She\'ll ensure everything is set up perfectly for your needs.',
    timestamp: new Date(Date.now() - 3350000),
    sentiment: 'positive',
  },
]

export default function ConversationDetailPage({ params }: { params: { id: string } }) {
  const [notes, setNotes] = useState('')

  const customerInfo = {
    name: 'Emma Johnson',
    email: 'emma@example.com',
    company: 'TechFlow Inc',
    joinDate: '2024-01-15',
    status: 'Premium Subscriber',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{customerInfo.name}</h1>
              <p className="text-sm text-muted-foreground">{customerInfo.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Flag className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Archive className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Conversation Thread */}
          <div className="lg:col-span-2">
            <Card className="border border-border overflow-hidden flex flex-col h-[600px]">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'customer' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-sm rounded-2xl px-4 py-3 ${
                        message.role === 'customer'
                          ? 'bg-primary text-primary-foreground rounded-br-none'
                          : message.role === 'agent'
                            ? 'bg-secondary/10 text-foreground border border-secondary rounded-bl-none'
                            : 'bg-card text-foreground border border-border rounded-bl-none'
                      }`}
                    >
                      {message.role === 'agent' && (
                        <p className="text-xs font-semibold text-secondary mb-1">Agent</p>
                      )}
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Status */}
              <div className="border-t border-border px-6 py-3 bg-background/50 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <p className="text-sm text-muted-foreground">Conversation resolved • 2 hours ago</p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Customer Info */}
            <Card className="border border-border p-6">
              <h3 className="font-bold text-foreground mb-4">Customer Info</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Name</p>
                  <p className="text-foreground">{customerInfo.name}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Email</p>
                  <p className="text-foreground break-all">{customerInfo.email}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Company</p>
                  <p className="text-foreground">{customerInfo.company}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Status</p>
                  <span className="inline-block mt-1 bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">
                    {customerInfo.status}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Member Since</p>
                  <p className="text-foreground">{customerInfo.joinDate}</p>
                </div>
              </div>
            </Card>

            {/* Conversation Stats */}
            <Card className="border border-border p-6">
              <h3 className="font-bold text-foreground mb-4">Conversation Stats</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Duration</p>
                  <p className="text-foreground">23 minutes</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Total Messages</p>
                  <p className="text-foreground">6 messages</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">AI Responses</p>
                  <p className="text-foreground">4 responses</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Resolution Time</p>
                  <p className="text-foreground">18 minutes</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Satisfaction</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-full" />
                    </div>
                    <span className="text-sm font-bold text-foreground">95%</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Internal Notes */}
            <Card className="border border-border p-6">
              <h3 className="font-bold text-foreground mb-4">Internal Notes</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add notes about this conversation..."
                className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none text-sm text-foreground placeholder-muted-foreground resize-none h-24"
              />
              <Button className="w-full mt-2 bg-primary hover:bg-primary/90" size="sm">
                Save Notes
              </Button>
            </Card>

            {/* Actions */}
            <div className="space-y-2">
              <Button className="w-full bg-primary hover:bg-primary/90">Send Follow-up Email</Button>
              <Button variant="outline" className="w-full bg-transparent">
                Add to CRM
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
