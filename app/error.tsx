'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, Bug, ChevronDown, ChevronUp } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12">
      {/* Animated background */}
      <div className="absolute inset-0 bg-linear-to-br from-red-50/50 via-orange-50/50 to-yellow-50/50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-yellow-950/20" />
      
      {/* Warning pulse effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-300/30 rounded-full filter blur-3xl animate-pulse" />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Error icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
            <div className="relative bg-linear-to-br from-red-500 to-orange-500 p-6 rounded-full">
              <AlertTriangle className="w-16 h-16 text-white animate-bounce" />
            </div>
          </div>
        </div>
        
        {/* Error content */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-red-200 dark:border-red-900">
          <h1 className="text-3xl font-bold mb-3 text-center bg-linear-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Oops! Something Went Wrong
          </h1>
          <p className="text-center text-muted-foreground mb-6">
            Don&apos;t worry, we&apos;re on it! This error has been logged and we&apos;ll investigate.
          </p>
          
          {/* Error info box */}
          {error.digest && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/50 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 text-sm">
                <Bug className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="font-mono text-red-600 dark:text-red-400">
                  Error ID: {error.digest}
                </span>
              </div>
            </div>
          )}
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <button
              onClick={() => window.location.reload()}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-red-600 to-orange-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
            >
              <RefreshCw className="w-4 h-4 group-hover:animate-spin" />
              Try Again
            </button>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-red-200 dark:border-red-800 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 transition-all duration-200 font-medium"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <Link
              href="https://github.com/fairarena/fairarena-docs/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-red-200 dark:border-red-800 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 transition-all duration-200 font-medium"
            >
              <Bug className="w-4 h-4" />
              Report Issue
            </Link>
          </div>
          
          {/* Error details (development only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full justify-center"
              >
                {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {showDetails ? 'Hide' : 'Show'} Technical Details
              </button>
              
              {showDetails && (
                <div className="mt-4 space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-xs font-medium text-red-600 dark:text-red-400 mb-2">Error Message:</p>
                    <pre className="text-xs overflow-auto max-h-32 text-gray-700 dark:text-gray-300">
                      {error.message}
                    </pre>
                  </div>
                  {error.stack && (
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <p className="text-xs font-medium text-red-600 dark:text-red-400 mb-2">Stack Trace:</p>
                      <pre className="text-xs overflow-auto max-h-48 text-gray-700 dark:text-gray-300">
                        {error.stack}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Help text */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          If this problem persists, please{' '}
          <a href="https://fair.sakshamg.me/support" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline font-medium">
            contact support
          </a>
        </p>
      </div>
    </div>
  );
}
