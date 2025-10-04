import { useEffect, useState } from "react";
import { Shield, Heart, Sparkles } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary via-primary-glow to-secondary overflow-hidden">
      <div className="relative text-center px-6 animate-fade-in">
        {/* Logo Container */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-glow/20 blur-3xl rounded-full animate-pulse-glow" />
            <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl">
              <Shield className="w-24 h-24 text-white" strokeWidth={1.5} />
              <Heart className="w-12 h-12 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 animate-slide-up tracking-tight">
          NHIS<span className="text-accent">+</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up font-light tracking-wide">
          Your Health, Always Covered
        </p>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-center justify-center gap-3 animate-slide-up">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </div>
  );
};

export default Index;
