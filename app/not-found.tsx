'use client';

import Link from 'next/link';
import { FileQuestion, Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 animate-gradient" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* 404 illustration */}
        <div className="mb-8 relative">
          <div className="text-[12rem] font-black leading-none bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            404
          </div>
          <FileQuestion className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-purple-600 dark:text-purple-400 animate-bounce" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-gray-100 dark:via-purple-100 dark:to-gray-100 bg-clip-text text-transparent">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for seems to have wandered off into the digital void. Let's get you back on track!
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/docs"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
          >
            <Home className="w-4 h-4 group-hover:animate-bounce" />
            Go to Documentation
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-200 dark:border-purple-800 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950 transition-all duration-200 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
        
        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-muted-foreground mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link href="/docs/getting-started" className="text-blue-600 dark:text-blue-400 hover:underline">
              Getting Started
            </Link>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <Link href="/docs/account/account-settings" className="text-blue-600 dark:text-blue-400 hover:underline">
              Account Settings
            </Link>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <a href="https://fair.sakshamg.me/support" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Support
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-gradient { background-size: 200% 200%; animation: gradient 15s ease infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
