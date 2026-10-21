import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Home, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Star, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function PageBanner({ 
  title, 
  subtitle, 
  breadcrumb,
  categoryBadge = "Verified 24/7 Car Travels • Kakinada",
  showCta = true 
}) {
  // Format title with gold gradient on last word
  const renderStyledTitle = (text) => {
    if (!text) return null;
    const words = text.trim().split(' ');
    if (words.length <= 1) {
      return <span className="text-gradient-gold">{text}</span>;
    }
    const firstPart = words.slice(0, -1).join(' ');
    const lastWord = words[words.length - 1];
    return (
      <>
        {firstPart} <span className="text-gradient-gold">{lastWord}</span>
      </>
    );
  };

  const whatsappMessage = `Hi Sri Prakash Car Travels, I am enquiring about ${title || 'your services'}. Please share details and best rates.`;

  return (
    <div className="relative bg-gradient-to-br from-[#040B17] via-[#08172C] to-[#0C2340] text-white pt-10 sm:pt-14 pb-12 sm:pb-16 overflow-hidden border-b border-amber-400/20">
      {/* Decorative Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-amber-400/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[250px] bg-[#0C2340]/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Bar: Breadcrumb + Status Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          {/* Breadcrumb Glass Pill */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-semibold text-slate-300">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-amber-400 truncate max-w-[200px] sm:max-w-xs">{breadcrumb || title}</span>
          </nav>

          {/* 24/7 Live Status Pill */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-bold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>24/7 Instant Cab Booking Open</span>
          </div>
        </div>

        {/* Main Hero Grid: Left Content + Right Trust Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (7 cols): Badges, Title, Subtitle, CTA buttons */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{categoryBadge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight leading-[1.15]">
              {renderStyledTitle(title)}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-sm sm:text-base text-slate-300 font-jakarta leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}

            {/* Action Buttons */}
            {showCta && (
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={createWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ref-btn-primary group !py-3 !px-5 text-xs sm:text-sm shadow-gold-glow"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-navy-950" />
                  <span>Book via WhatsApp</span>
                </a>

                <a
                  href={`tel:${businessInfo.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-bold transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {businessInfo.formattedPhone}</span>
                </a>
              </div>
            )}
          </div>

          {/* Right Column (5 cols): Premium Trust Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-white/15 shadow-2xl relative overflow-hidden group">
              {/* Corner Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gold-gradient text-navy-950 flex items-center justify-center font-black shadow-gold-glow">
                    <Award className="w-5 h-5 text-navy-950" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sri Prakash Travels</h4>
                    <p className="text-[11px] text-amber-400 font-medium">15+ Years Trusted Excellence</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-400/15 border border-amber-400/30 px-2.5 py-1 rounded-full text-xs font-bold text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5</span>
                </div>
              </div>

              {/* 4 Trust Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">15-Min Pickup in Kakinada</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">Verified Highway Drivers</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">Sanitized Chilled AC Fleet</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">Transparent Fixed Billing</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>📍 Doorstep Pickup All Over Kakinada</span>
                <span className="text-amber-400 font-semibold">10,000+ Happy Riders</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
