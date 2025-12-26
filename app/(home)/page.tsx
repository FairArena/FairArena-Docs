import Link from 'next/link';
import { BookOpen, Rocket, Users, Shield, CreditCard, Zap, ArrowRight, Github, ExternalLink } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Complete Documentation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            FairArena Docs
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Everything you need to master FairArena - the modern collaboration platform for professionals.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/docs"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium text-lg"
            >
              <BookOpen className="w-5 h-5 group-hover:animate-bounce" />
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/docs/guides/quick-start"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-200 dark:border-purple-800 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950 transition-all duration-200 font-medium text-lg"
            >
              <Rocket className="w-5 h-5" />
              Quick Start
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Documentation Sections</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Explore our comprehensive guides and references</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/docs/guides" className="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Guides</h3>
              <p className="text-muted-foreground text-sm">Step-by-step tutorials to get you started quickly</p>
            </Link>

            <Link href="/docs/features" className="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">Features</h3>
              <p className="text-muted-foreground text-sm">Deep dive into powerful platform capabilities</p>
            </Link>

            <Link href="/docs/account" className="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">Account & Security</h3>
              <p className="text-muted-foreground text-sm">Manage settings and protect your data</p>
            </Link>

            <Link href="/docs/credits-and-pricing" className="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-yellow-500 dark:hover:border-yellow-500 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 transition-colors">Pricing</h3>
              <p className="text-muted-foreground text-sm">Understand credits and billing options</p>
            </Link>

            <a href="https://fair.sakshamg.me/support" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-pink-500 dark:hover:border-pink-500 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition-colors flex items-center gap-2">
                Support
                <ExternalLink className="w-4 h-4" />
              </h3>
              <p className="text-muted-foreground text-sm">Get help and create tickets</p>
            </a>

            <a href="https://github.com/FairArena/FairArena-Docs" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-gray-500 dark:hover:border-gray-500 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors flex items-center gap-2">
                Documentation
                <ExternalLink className="w-4 h-4" />
              </h3>
              <p className="text-muted-foreground text-sm">View docs source and contribute</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of professionals collaborating on FairArena</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium text-lg"
            >
              <Rocket className="w-5 h-5" />
              Start Learning
            </Link>
            <a
              href="https://fair.sakshamg.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 font-medium text-lg"
            >
              Visit FairArena
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
