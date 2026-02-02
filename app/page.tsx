'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Brain, BarChart3, Users, Lock, Sparkles } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">Iron Lady</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-primary hover:bg-primary/90">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance leading-tight">
            Automate Your Customer Interactions with AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Intelligent automation meets elegant design. Let AI handle customer support while you focus on growth.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link href="/chat">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-base px-8">
              Try AI Assistant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              View Admin Dashboard
            </Button>
          </Link>
        </div>

        {/* Feature Preview */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card rounded-2xl border border-border p-8 text-left">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Chat</h3>
            <p className="text-muted-foreground">
              Engage customers with intelligent conversations. Our AI learns your business to provide personalized responses instantly.
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-8 text-left">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
            <p className="text-muted-foreground">
              Track performance with real-time insights. Monitor conversations, customer satisfaction, and business metrics in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Built for Modern Teams
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: 'Lightning Fast', desc: 'Real-time responses powered by cutting-edge AI' },
            { icon: Users, title: 'Customer Focused', desc: 'Personalized interactions that build loyalty' },
            { icon: Lock, title: 'Enterprise Secure', desc: 'Bank-level security for your peace of mind' },
          ].map((feature, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-colors">
              <feature.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial-Style Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-12 text-center">
          <p className="text-xl text-foreground mb-6 text-balance">
            "We reduced customer support response time by 80% while improving satisfaction scores. Iron Lady made it effortless."
          </p>
          <p className="text-muted-foreground font-medium">Sarah Chen, Founder of TechFlow</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-border">
        <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Transform Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of entrepreneurs using AI to automate their customer interactions.
        </p>
        <Link href="/chat">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-base px-8">
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 backdrop-blur-sm py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-foreground">Iron Lady</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2026 Iron Lady Automation. Empowering entrepreneurs with AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
