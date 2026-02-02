'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Save, Bell, Lock, Users, Zap, Eye, EyeOff } from 'lucide-react'

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    companyName: 'TechFlow Inc',
    email: 'admin@techflow.com',
    aiTone: 'professional',
    responseLanguage: 'english',
    notificationsEmail: true,
    notificationsSms: false,
    autoArchive: true,
    escalationThreshold: 85,
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Settings</h1>
              <p className="text-sm text-muted-foreground">Manage your Iron Lady configuration</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Account Settings */}
        <Card className="border border-border p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Account Settings</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Company Name</label>
              <Input
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="bg-background border-border focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Admin Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-background border-border focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  defaultValue="••••••••••••"
                  className="bg-background border-border focus:border-primary pr-10"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Save className="w-4 h-4" />
              Save Account Settings
            </Button>
          </div>
        </Card>

        {/* AI Configuration */}
        <Card className="border border-border p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold text-foreground">AI Configuration</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">AI Tone</label>
              <select
                name="aiTone"
                value={formData.aiTone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none text-foreground"
              >
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Response Language</label>
              <select
                name="responseLanguage"
                value={formData.responseLanguage}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none text-foreground"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Escalation Threshold (%)</label>
              <Input
                name="escalationThreshold"
                type="number"
                min="0"
                max="100"
                value={formData.escalationThreshold}
                onChange={handleInputChange}
                className="bg-background border-border focus:border-primary"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Conversations with satisfaction below this threshold will be escalated to human agents
              </p>
            </div>

            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Save className="w-4 h-4" />
              Save AI Settings
            </Button>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="border border-border p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-bold text-foreground">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div>
                <p className="font-semibold text-foreground">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Get updates via email</p>
              </div>
              <div
                onClick={() =>
                  setFormData((prev) => ({ ...prev, notificationsEmail: !prev.notificationsEmail }))
                }
                className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                  formData.notificationsEmail ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    formData.notificationsEmail ? 'translate-x-6' : 'translate-x-0.5'
                  } mt-0.5`}
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div>
                <p className="font-semibold text-foreground">SMS Notifications</p>
                <p className="text-sm text-muted-foreground">Get urgent alerts via SMS</p>
              </div>
              <div
                onClick={() =>
                  setFormData((prev) => ({ ...prev, notificationsSms: !prev.notificationsSms }))
                }
                className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                  formData.notificationsSms ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    formData.notificationsSms ? 'translate-x-6' : 'translate-x-0.5'
                  } mt-0.5`}
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div>
                <p className="font-semibold text-foreground">Auto-Archive Resolved</p>
                <p className="text-sm text-muted-foreground">Automatically archive resolved conversations</p>
              </div>
              <div
                onClick={() =>
                  setFormData((prev) => ({ ...prev, autoArchive: !prev.autoArchive }))
                }
                className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                  formData.autoArchive ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    formData.autoArchive ? 'translate-x-6' : 'translate-x-0.5'
                  } mt-0.5`}
                />
              </div>
            </div>
          </div>

          <Button className="mt-6 bg-primary hover:bg-primary/90 gap-2">
            <Save className="w-4 h-4" />
            Save Notification Settings
          </Button>
        </Card>

        {/* Security Settings */}
        <Card className="border border-border p-8">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-destructive" />
            <h2 className="text-2xl font-bold text-foreground">Security</h2>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              Enable Two-Factor Authentication
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              View Active Sessions
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              Download Security Report
            </Button>
            <Button variant="outline" className="w-full justify-start text-destructive bg-transparent">
              Deactivate Account
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}
