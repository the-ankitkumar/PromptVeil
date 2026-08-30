import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PromptveilLogo } from '../components/Logo';
import { 
  ChevronRight, 
  CheckCircle2
} from 'lucide-react';

export default function SignUpPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Mode state: 'signup' or 'signin'
  const [mode, setMode] = useState(() => {
    return location.pathname === '/signin' ? 'signin' : 'signup';
  });

  useEffect(() => {
    if (location.pathname === '/signin') {
      setMode('signin');
    } else if (location.pathname === '/signup') {
      setMode('signup');
    }
  }, [location.pathname]);

  const toggleMode = (newMode) => {
    setMode(newMode);
    navigate(newMode === 'signin' ? '/signin' : '/signup', { replace: true });
  };

  // Form State (Clean empty initial values)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    country: '',
    copilotFree: false,
    emailPrefs: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-[85vh] py-10 px-4 flex flex-col items-center justify-center bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Toast Feedback */}
      {submitted && (
        <div className="fixed top-20 z-50 p-4 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-lg flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{mode === 'signup' ? 'Account created successfully!' : 'Signed in successfully!'}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SIGN UP LAYOUT */}
      {/* ========================================================================= */}
      {mode === 'signup' && (
        <div className="w-full max-w-[440px] mx-auto space-y-6">
          
          {/* Logo Header & Main Title */}
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <Link to="/" className="transition-transform hover:scale-105">
              <PromptveilLogo className="w-12 h-12 drop-shadow-sm" />
            </Link>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Sign up for Promptveil
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Pre-execution prompt injection defense for AI agents &amp; ChatGPT
              </p>
            </div>
          </div>

          {/* Social Login Button (Google Only) */}
          <div className="space-y-2.5">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Perfectly Centered Divider */}
          <div className="relative flex items-center justify-center py-2">
            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            <span className="absolute bg-white dark:bg-slate-950 px-3 text-xs text-slate-500 font-normal">
              or
            </span>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-900 dark:text-slate-100">
                Email<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-900 dark:text-slate-100">
                Password<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.
              </p>
            </div>

            {/* Username Field */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-900 dark:text-slate-100">
                Username<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Choose a username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Username may only contain alphanumeric characters or single hyphens.
              </p>
            </div>

            {/* Country/Region Field */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-900 dark:text-slate-100">
                Your Country/Region<span className="text-red-500 ml-0.5">*</span>
              </label>
              <select
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
              >
                <option value="">Select country/region</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
                <option value="Australia">Australia</option>
              </select>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                For compliance reasons, we're required to collect country information to send you occasional updates and announcements.
              </p>
            </div>

            {/* Checkbox 1: Promptveil Guard */}
            <div className="space-y-1 pt-1">
              <span className="font-bold text-slate-900 dark:text-white text-xs block">
                Promptveil Pre-Execution Guard
              </span>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.copilotFree}
                  onChange={(e) => setFormData({ ...formData, copilotFree: e.target.checked })}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 mt-0.5"
                />
                <span className="text-xs text-slate-700 dark:text-slate-300 leading-normal">
                  Sign up for Promptveil Free pre-execution protection on the web, in the extension, and CLI.{' '}
                  <span className="text-blue-600 dark:text-blue-400 underline cursor-pointer">See terms</span>
                </span>
              </label>
            </div>

            {/* Checkbox 2: Email Preferences */}
            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white text-xs block">
                Email preferences
              </span>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.emailPrefs}
                  onChange={(e) => setFormData({ ...formData, emailPrefs: e.target.checked })}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 mt-0.5"
                />
                <span className="text-xs text-slate-700 dark:text-slate-300 leading-normal">
                  Receive occasional product updates and announcements
                </span>
              </label>
            </div>

            {/* Website Brand Blue Create Account Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm py-2.5 px-4 rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-none"
              >
                <span>Create account</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Terms Disclaimer */}
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
              By creating an account, you agree to the{' '}
              <span className="text-blue-600 dark:text-blue-400 underline cursor-pointer">Terms of Service</span>. For more information about Promptveil's privacy practices, see the{' '}
              <span className="text-blue-600 dark:text-blue-400 underline cursor-pointer">Promptveil Privacy Statement</span>. We'll occasionally send you account-related emails.
            </p>

          </form>

          {/* Bottom Nav to Sign In */}
          <div className="pt-4 text-center text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
            Already have an account?{' '}
            <button
              onClick={() => toggleMode('signin')}
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Sign in
            </button>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SIGN IN LAYOUT */}
      {/* ========================================================================= */}
      {mode === 'signin' && (
        <div className="w-full max-w-[360px] mx-auto space-y-5 text-center">
          
          {/* Promptveil Shield Logo */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <Link to="/" className="transition-transform hover:scale-105">
              <PromptveilLogo className="w-12 h-12 drop-shadow-sm" />
            </Link>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Sign in to Promptveil
            </h1>
          </div>

          {/* Form Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 text-left space-y-4 shadow-none">
            
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Username or Email Address */}
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-900 dark:text-slate-100">
                  Username or email address
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter email or username"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              {/* Password & Forgot Link */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="font-semibold text-slate-900 dark:text-slate-100">
                    Password
                  </label>
                  <button type="button" className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-normal">
                    Forgot password?
                  </button>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              {/* Website Brand Blue Sign In Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm py-2.5 px-4 rounded-md transition-colors shadow-none mt-1"
              >
                Sign in
              </button>

            </form>

            {/* Perfectly Centered Divider */}
            <div className="relative flex items-center justify-center py-2">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
              <span className="absolute bg-white dark:bg-slate-900 px-3 text-xs text-slate-500 font-normal">
                or
              </span>
            </div>

            {/* Secondary Social Login (Google Only) */}
            <div className="space-y-2 text-xs">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>

          </div>

          {/* Bottom Switch Link */}
          <div className="pt-2 text-xs text-slate-600 dark:text-slate-400">
            New to Promptveil?{' '}
            <button
              onClick={() => toggleMode('signup')}
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Create an account
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
