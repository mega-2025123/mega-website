'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowserClient } from '../../../../src/lib/supabase/client';
import { Eye, EyeOff, Lock, Mail, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('mega.estd.2025@gmail.com');
  const [password, setPassword] = useState('Mega@2025');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [checkingAuth, setCheckingAuth] = useState(true);
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          router.replace('/admin');
        }
      } catch (err) {
        console.error('Auth check error:', err);
      } finally {
        setCheckingAuth(false);
      }
    };
    checkUser();
  }, [router, supabase]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (authError) {
        if (authError.message.includes('Invalid login credentials')) {
          setError('Invalid email or password. Please verify the credentials below.');
        } else {
          setError(authError.message);
        }
        setLoading(false);
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const redirect = params.get('redirect') || '/admin';
      router.replace(redirect);
    } catch {
      setError('An unexpected connection error occurred.');
      setLoading(false);
    }
  };

  const autofillCredentials = () => {
    setEmail('mega.estd.2025@gmail.com');
    setPassword('Mega@2025');
    setError('');
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-gray-400 text-xs tracking-wider uppercase">Loading CMS Portal...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center p-4 sm:p-6 relative overflow-hidden selection:bg-orange-500 selection:text-white">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:28px_28px] pointer-events-none opacity-60" />

      <div className="relative z-10 w-full max-w-lg space-y-6">
        
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 shadow-[0_0_50px_rgba(255,69,0,0.4)] border border-orange-400/30">
            <span className="text-white font-black text-2xl tracking-tighter" style={{ fontFamily: "'Outfit', sans-serif" }}>M</span>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              MEGA <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Admin CMS</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 font-light">
              NSRIET Mechanical Guild Management Portal
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#121212]/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Error Alert */}
            {error && (
              <div className="bg-red-950/40 border border-red-500/30 rounded-2xl p-4 flex items-start gap-3 text-red-200 text-xs sm:text-sm animate-fadeIn">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-red-300">Authentication Failed</p>
                  <p className="text-red-200/80 leading-relaxed">{error}</p>
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                Admin Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="mega.estd.2025@gmail.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-11 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_30px_rgba(255,69,0,0.4)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sign In to Admin Portal</span>
                </>
              )}
            </button>
          </form>

          {/* Credentials Helper Box */}
          <div className="mt-6 pt-5 border-t border-white/10 bg-orange-500/5 rounded-2xl p-4 border-orange-500/20 text-left space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Admin Credentials
              </span>
              <button
                type="button"
                onClick={autofillCredentials}
                className="text-[11px] text-gray-300 hover:text-orange-400 font-semibold underline underline-offset-2 transition-colors cursor-pointer"
              >
                Auto-fill
              </button>
            </div>

            <div className="space-y-1 text-xs font-mono bg-black/40 p-2.5 rounded-xl border border-white/5">
              <p className="text-gray-300"><span className="text-gray-500">Email:</span> mega.estd.2025@gmail.com</p>
              <p className="text-gray-300"><span className="text-gray-500">Password:</span> Mega@2025</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs font-light">
          MEGA Admin CMS · NSRIET Visakhapatnam ESTD 2025
        </p>

      </div>
    </div>
  );
}
