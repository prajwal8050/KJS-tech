import React, { useState, useRef } from 'react';
import { useMedia } from '../context/MediaContext';
import { HeroSlide } from '../types';
import { compressAndFormatImage } from '../utils/mediaStorage';
import { 
  ShieldCheck, 
  Upload, 
  Image as ImageIcon, 
  Trash2, 
  RotateCcw, 
  CheckCircle2, 
  ArrowLeft, 
  Eye, 
  Layers, 
  User, 
  Lock, 
  LogIn, 
  LogOut, 
  Key, 
  ChevronUp, 
  ChevronDown, 
  Plus, 
  Sparkles, 
  Building2, 
  ExternalLink,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';

export const AdminPortal: React.FC = () => {
  const {
    ceo,
    updateCEOPhoto,
    resetCEOPhoto,
    heroSlides,
    addHeroSlide,
    updateHeroSlide,
    deleteHeroSlide,
    reorderHeroSlides,
    resetHeroSlides,
    isAdmin,
    loginAdmin,
    logoutAdmin,
    navigateTo,
  } = useMedia();

  // Login form states
  const [usernameInput, setUsernameInput] = useState('admin@kjstechnologies.com');
  const [passwordInput, setPasswordInput] = useState('Admin@KJS2025');
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'ceo' | 'hero' | 'backup'>('ceo');

  // CEO Upload states
  const [ceoPreviewUrl, setCeoPreviewUrl] = useState<string | null>(null);
  const [ceoUploadLoading, setCeoUploadLoading] = useState(false);
  const [ceoSuccessMsg, setCeoSuccessMsg] = useState('');
  const ceoFileInputRef = useRef<HTMLInputElement | null>(null);

  // Hero Upload states
  const [newSlideImage, setNewSlideImage] = useState<string | null>(null);
  const [newSlideTitle, setNewSlideTitle] = useState('');
  const [newSlideSubtitle, setNewSlideSubtitle] = useState('');
  const [newSlideTag, setNewSlideTag] = useState('Coaching Center Lab');
  const [newSlideStat, setNewSlideStat] = useState('100+ Workstations');
  const [newSlideLocation, setNewSlideLocation] = useState('Bangalore Campus');
  const [heroUploadLoading, setHeroUploadLoading] = useState(false);
  const [heroSuccessMsg, setHeroSuccessMsg] = useState('');
  const heroFileInputRef = useRef<HTMLInputElement | null>(null);

  // Per-slide replacement ref
  const replaceSlideFileRef = useRef<HTMLInputElement | null>(null);
  const [replacingSlideId, setReplacingSlideId] = useState<string | null>(null);

  // Backup state
  const [copiedBackup, setCopiedBackup] = useState(false);

  // Handle Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const success = loginAdmin(passwordInput);
    if (!success) {
      setLoginError('Invalid password. Use the demo password shown below.');
    }
  };

  const handleQuickDemoLogin = () => {
    setUsernameInput('admin@kjstechnologies.com');
    setPasswordInput('Admin@KJS2025');
    loginAdmin('Admin@KJS2025');
  };

  // Handle CEO Image File Selection
  const handleCEOFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setCeoUploadLoading(true);
      setCeoSuccessMsg('');
      const compressed = await compressAndFormatImage(file, 1600, 0.88);
      setCeoPreviewUrl(compressed);
      updateCEOPhoto(compressed);
      setCeoSuccessMsg('CEO photo updated and saved successfully in browser storage!');
      setTimeout(() => setCeoSuccessMsg(''), 4000);
    } catch (err) {
      console.error('Failed to compress CEO image:', err);
      alert('Could not process image file. Please choose another JPEG/PNG.');
    } finally {
      setCeoUploadLoading(false);
      if (ceoFileInputRef.current) ceoFileInputRef.current.value = '';
    }
  };

  // Handle CEO Image Drag & Drop
  const handleCEODrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    try {
      setCeoUploadLoading(true);
      setCeoSuccessMsg('');
      const compressed = await compressAndFormatImage(file, 1600, 0.88);
      setCeoPreviewUrl(compressed);
      updateCEOPhoto(compressed);
      setCeoSuccessMsg('CEO photo updated and saved successfully in browser storage!');
      setTimeout(() => setCeoSuccessMsg(''), 4000);
    } catch (err) {
      console.error('Failed to upload dropped image:', err);
    } finally {
      setCeoUploadLoading(false);
    }
  };

  // Handle Hero Slide Image File Selection
  const handleHeroFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setHeroUploadLoading(true);
      const compressed = await compressAndFormatImage(file, 1600, 0.88);
      setNewSlideImage(compressed);
      if (!newSlideTitle) {
        setNewSlideTitle('New Coaching Centre Lab Facility');
      }
      if (!newSlideSubtitle) {
        setNewSlideSubtitle('State-of-the-art software development workstations and mentorship pod');
      }
    } catch (err) {
      console.error('Failed to compress hero image:', err);
      alert('Could not process image file. Please choose another JPEG/PNG.');
    } finally {
      setHeroUploadLoading(false);
      if (heroFileInputRef.current) heroFileInputRef.current.value = '';
    }
  };

  // Handle Hero Add Slide Submit
  const handleAddHeroSlide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSlideImage) {
      alert('Please upload a photo for the coaching centre slide.');
      return;
    }

    const newSlide: HeroSlide = {
      id: `custom-slide-${Date.now()}`,
      image: newSlideImage,
      title: newSlideTitle.trim() || 'Coaching Centre Facility',
      subtitle: newSlideSubtitle.trim() || 'High-performance software training and development labs',
      tag: newSlideTag.trim() || 'Coaching Center Lab',
      stat: newSlideStat.trim() || 'Modern Facility',
      location: newSlideLocation.trim() || 'KJS Bangalore Campus',
    };

    addHeroSlide(newSlide);
    setNewSlideImage(null);
    setNewSlideTitle('');
    setNewSlideSubtitle('');
    setHeroSuccessMsg('New coaching centre photo added to Hero slider!');
    setTimeout(() => setHeroSuccessMsg(''), 4000);
  };

  // Handle Replace Single Slide Photo
  const handleTriggerReplaceSlide = (slideId: string) => {
    setReplacingSlideId(slideId);
    if (replaceSlideFileRef.current) {
      replaceSlideFileRef.current.click();
    }
  };

  const handleReplaceFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !replacingSlideId) return;

    try {
      const compressed = await compressAndFormatImage(file, 1600, 0.88);
      updateHeroSlide(replacingSlideId, { image: compressed });
      setHeroSuccessMsg('Slide photo replaced successfully!');
      setTimeout(() => setHeroSuccessMsg(''), 4000);
    } catch (err) {
      console.error('Failed to replace slide image:', err);
    } finally {
      setReplacingSlideId(null);
      if (replaceSlideFileRef.current) replaceSlideFileRef.current.value = '';
    }
  };

  // Reordering Hero Slides
  const moveSlide = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= heroSlides.length) return;

    const copy = [...heroSlides];
    const temp = copy[index];
    copy[index] = copy[targetIndex];
    copy[targetIndex] = temp;
    reorderHeroSlides(copy);
  };

  // ==========================================
  // VIEW 1: LOGIN FORM (If not logged in)
  // ==========================================
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#07090E] text-white flex flex-col justify-center items-center px-4 py-12 selection:bg-amber-500 selection:text-black">
        {/* Subtle Background Radial */}
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

        <div className="w-full max-w-md relative z-10">
          {/* Top Bar Back Link */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => navigateTo('website')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Public Website</span>
            </button>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-amber-400 font-mono">
              URL: /admin
            </span>
          </div>

          {/* Login Card */}
          <div className="bg-[#0C0F17] rounded-3xl border border-white/10 p-7 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

            {/* Header */}
            <div className="text-center space-y-2 mb-6">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                <Lock className="w-7 h-7" />
              </div>
              <h1 className="text-2xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif]">
                KJS Admin & CEO Portal
              </h1>
              <p className="text-xs text-slate-400">
                Sign in to manage the CEO photo, coaching centre tour slides, and media assets.
              </p>
            </div>

            {/* Demo Credentials Alert Box */}
            <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                <span className="flex items-center gap-1.5">
                  <Key className="w-4 h-4 text-amber-500" />
                  Demo Admin Credentials
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500 text-black font-extrabold uppercase">
                  Ready
                </span>
              </div>
              <div className="text-xs text-slate-300 font-mono space-y-1 bg-black/40 p-2.5 rounded-xl border border-white/5">
                <div><span className="text-slate-500">Username:</span> admin@kjstechnologies.com</div>
                <div><span className="text-slate-500">Password:</span> <strong className="text-amber-400">Admin@KJS2025</strong></div>
              </div>
              <button
                type="button"
                onClick={handleQuickDemoLogin}
                className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>1-Click Quick Demo Login</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Email or Username
                </label>
                <input
                  type="text"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {loginError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In to Admin Portal</span>
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-white/10 text-center text-[11px] text-slate-500">
              KJS Technologies • Netlify Deploy Compatible • Browser Persistence Enabled
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD
  // ==========================================
  return (
    <div className="min-h-screen bg-[#07090E] text-white flex flex-col selection:bg-amber-500 selection:text-black">
      
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 bg-[#0C0F17]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black text-sm">
              PKS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm font-['Space_Grotesk',sans-serif]">
                  KJS Technologies Admin
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  Live Session
                </span>
              </div>
              <span className="text-xs text-slate-400">
                Logged in as Prajwal K S (CEO & Founder)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('website')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>View Public Website</span>
            </button>
            <button
              onClick={logoutAdmin}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 text-xs font-semibold transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Admin Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0C0F17] rounded-2xl border border-white/10 max-w-2xl">
          <button
            onClick={() => setActiveTab('ceo')}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'ceo'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <User className="w-4 h-4" />
            <span>1. CEO Photo Upload</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'hero'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>2. Hero Centre Slides ({heroSlides.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('backup')}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'backup'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>3. Netlify Sync & Backup</span>
          </button>
        </div>

        {/* Global Feedback Notifications */}
        {ceoSuccessMsg && (
          <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2.5 shadow-lg animate-fade-in">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span className="font-semibold">{ceoSuccessMsg}</span>
          </div>
        )}
        {heroSuccessMsg && (
          <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2.5 shadow-lg animate-fade-in">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span className="font-semibold">{heroSuccessMsg}</span>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 1: CEO PHOTO UPLOAD BOX & LIVE PROFILE PREVIEW        */}
        {/* ========================================================= */}
        {activeTab === 'ceo' && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk',sans-serif]">
                CEO & Founder Photo Management
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Upload your authentic portrait photo. It will automatically update the Executive Leadership card and the CEO direct desk in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Upload Box */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Drag and Drop Zone */}
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleCEODrop}
                  onClick={() => ceoFileInputRef.current?.click()}
                  className="border-2 border-dashed border-amber-500/40 hover:border-amber-500 rounded-3xl p-8 sm:p-12 text-center bg-[#0C0F17]/80 hover:bg-[#0C0F17] transition-all cursor-pointer group relative overflow-hidden"
                >
                  <input
                    ref={ceoFileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleCEOFileChange}
                    className="hidden"
                  />
                  
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 group-hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center transition-all group-hover:scale-110 shadow-inner">
                    <Upload className="w-8 h-8" />
                  </div>

                  <h3 className="mt-4 text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    Click to browse or drag & drop CEO photo here
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                    Supports JPG, PNG, WEBP. Photos are automatically optimized and formatted with zero distortion.
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold shadow-lg">
                    <span>Select Photo from Computer / Phone</span>
                  </div>

                  {ceoUploadLoading && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-amber-400 text-sm font-bold">
                      Compressing and saving photo...
                    </div>
                  )}
                </div>

                {/* Direct Action Controls */}
                <div className="p-5 rounded-2xl bg-[#0C0F17] border border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-white">Reset to Default Portrait</span>
                    <p className="text-[11px] text-slate-400">Restore the original high-resolution studio photo.</p>
                  </div>
                  <button
                    onClick={resetCEOPhoto}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-amber-500" />
                    <span>Reset Photo</span>
                  </button>
                </div>

                {/* Netlify Storage Guarantee */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1 text-xs text-slate-400">
                  <span className="font-bold text-slate-200 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    Netlify & Browser Storage Guarantee
                  </span>
                  <p>
                    Your uploaded photo is preserved directly inside browser local persistence storage. It will remain visible even after closing the tab, refreshing, or restarting.
                  </p>
                </div>

              </div>

              {/* Right: Live Preview of How it Looks on Website */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-amber-500" />
                    Live Website Preview
                  </span>
                  <span className="text-[11px] text-amber-400 font-mono">
                    Updated Live
                  </span>
                </div>

                {/* Preview Card */}
                <div className="bg-gradient-to-br from-[#101422] via-[#0D1117] to-black rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl relative">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    
                    {/* Avatar Frame */}
                    <div className="relative shrink-0">
                      <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-amber-500/30 via-slate-800 to-black border-2 border-amber-500/50 p-1.5 shadow-2xl overflow-hidden group">
                        <img
                          src={ceo.photoUrl}
                          alt="Prajwal K S, M.Tech - CEO Portrait Preview"
                          className="w-full h-full object-cover rounded-2xl"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-0.5 rounded-full bg-amber-500 text-black text-[11px] font-black shadow-lg">
                        Chief Executive Officer
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-2 text-center sm:text-left">
                      <div className="space-y-1">
                        <h4 className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk',sans-serif]">
                          {ceo.name}
                        </h4>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-bold">
                          <span>Qualification: {ceo.qualification}</span>
                        </div>
                        <p className="text-xs text-slate-400">
                          {ceo.role}, {ceo.organization}
                        </p>
                      </div>

                      <div className="pt-2 text-xs text-slate-300 space-y-1 font-mono">
                        <div>Direct Desk: <strong className="text-amber-400">{ceo.phone}</strong></div>
                        <div>Email: <strong className="text-slate-200">{ceo.email}</strong></div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Direct Desk preview */}
                <div className="bg-[#0C0F17] rounded-2xl border border-amber-500/20 p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 overflow-hidden shrink-0">
                    <img
                      src={ceo.photoUrl}
                      alt="Thumbnail Preview"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Contact Desk Thumbnail</span>
                    <span className="text-[11px] text-slate-400">Rendered in Bangalore Campus & Contact Section</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: HERO SECTION COACHING CENTRE SLIDES MANAGEMENT     */}
        {/* ========================================================= */}
        {activeTab === 'hero' && (
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk',sans-serif]">
                  Hero Coaching Centre Slides
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Upload your own coaching centre photos. They will rotate automatically on the home page hero showcase.
                </p>
              </div>
              <button
                onClick={resetHeroSlides}
                className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-amber-500" />
                <span>Reset to Default 5 Slides</span>
              </button>
            </div>

            {/* Hidden input for replacing an individual slide */}
            <input
              ref={replaceSlideFileRef}
              type="file"
              accept="image/*"
              onChange={handleReplaceFileChange}
              className="hidden"
            />

            {/* SECTION A: Upload New Coaching Centre Slide Box */}
            <div className="bg-[#0C0F17] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-400 uppercase tracking-wider">
                <Plus className="w-4 h-4 text-amber-500" />
                <span>Upload New Coaching Centre Photo</span>
              </div>

              <form onSubmit={handleAddHeroSlide} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Photo Drop/Upload Zone */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => heroFileInputRef.current?.click()}
                    className="border-2 border-dashed border-amber-500/40 hover:border-amber-500 rounded-2xl h-56 flex flex-col items-center justify-center p-4 text-center bg-black/40 hover:bg-black/60 transition-all cursor-pointer relative overflow-hidden group"
                  >
                    <input
                      ref={heroFileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleHeroFileChange}
                      className="hidden"
                    />

                    {newSlideImage ? (
                      <>
                        <img
                          src={newSlideImage}
                          alt="Slide preview"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-white">
                          Click to Change Photo
                        </div>
                      </>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-white block">
                          Click to select Coaching Centre Photo
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          PNG, JPG, WEBP • Max quality preserved
                        </span>
                      </div>
                    )}

                    {heroUploadLoading && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-amber-400 text-xs font-bold">
                        Processing image...
                      </div>
                    )}
                  </div>
                </div>

                {/* Form Fields for Title & Subtitle */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Facility / Lab Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bangalore Advanced AI & Cloud Lab"
                      value={newSlideTitle}
                      onChange={(e) => setNewSlideTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Subtitle / Description
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Air-conditioned arena with multi-monitor dev setups"
                      value={newSlideSubtitle}
                      onChange={(e) => setNewSlideSubtitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Category Tag
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Coding Arena"
                        value={newSlideTag}
                        onChange={(e) => setNewSlideTag(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Metric / Stat
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 100+ Workstations"
                        value={newSlideStat}
                        onChange={(e) => setNewSlideStat(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Campus Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bangalore Campus"
                        value={newSlideLocation}
                        onChange={(e) => setNewSlideLocation(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!newSlideImage}
                    className={`w-full py-3 px-5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      newSlideImage
                        ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                        : 'bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add This Photo to Hero Slider</span>
                  </button>
                </div>

              </form>
            </div>

            {/* SECTION B: Current Hero Slides List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Active Hero Slides ({heroSlides.length} total)
                </span>
                <span className="text-xs text-slate-400">
                  Use Up/Down arrows to reorder slides
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="bg-[#0C0F17] rounded-2xl border border-white/10 p-4 flex flex-col justify-between gap-3 relative group overflow-hidden"
                  >
                    <div className="flex gap-3 items-start">
                      
                      {/* Thumbnail with quick change overlay */}
                      <div className="relative w-28 h-20 sm:w-32 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <button
                          type="button"
                          onClick={() => handleTriggerReplaceSlide(slide.id)}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] font-bold text-amber-400 cursor-pointer"
                          title="Click to replace this image"
                        >
                          Replace Photo
                        </button>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-black">
                            #{index + 1}
                          </span>
                          <span className="text-[10px] font-bold text-amber-400 truncate">
                            {slide.tag}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            • {slide.stat}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                          {slide.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-2">
                          {slide.subtitle}
                        </p>
                      </div>

                    </div>

                    {/* Bottom Slide Action Bar */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-2.5 mt-1 text-xs">
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => moveSlide(index, 'up')}
                          disabled={index === 0}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 hover:text-white transition-colors"
                          title="Move Slide Up"
                        >
                          <ChevronUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => moveSlide(index, 'down')}
                          disabled={index === heroSlides.length - 1}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 hover:text-white transition-colors"
                          title="Move Slide Down"
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleTriggerReplaceSlide(slide.id)}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-semibold text-amber-400 transition-colors"
                        >
                          Change Photo
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => deleteHeroSlide(slide.id)}
                        className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1"
                        title="Delete this slide"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: NETLIFY SYNC, EXPORT & BACKUP                      */}
        {/* ========================================================= */}
        {activeTab === 'backup' && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk',sans-serif]">
                Netlify Hosting & Data Synchronization
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                How your photos and custom uploads work on Netlify and across different browsers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: How it Works */}
              <div className="bg-[#0C0F17] rounded-3xl border border-white/10 p-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-base font-bold text-white">
                  Zero-Backend Netlify Architecture
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Netlify is a static hosting platform with fast global CDN delivery. Because your site uses our client-side storage architecture, any CEO photo or Coaching Centre photo you upload in this Admin Portal is saved in the browser and will immediately appear on the website without needing a complex backend database.
                </p>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-amber-400 font-mono">
                  SPA Routing: /admin redirects to /index.html cleanly.
                </div>
              </div>

              {/* Card 2: Backup & Export */}
              <div className="bg-[#0C0F17] rounded-3xl border border-white/10 p-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-base font-bold text-white">
                  Export / Backup Media Setup
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You can copy your full configuration including your active CEO photo and all coaching centre slides to transfer to another computer or device.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      const data = {
                        ceo,
                        heroSlides,
                        exportedAt: new Date().toISOString(),
                      };
                      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
                      setCopiedBackup(true);
                      setTimeout(() => setCopiedBackup(false), 3000);
                    }}
                    className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    {copiedBackup ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedBackup ? 'Configuration Copied!' : 'Copy Media Backup (JSON)'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const data = {
                        ceo,
                        heroSlides,
                        exportedAt: new Date().toISOString(),
                      };
                      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `kjs_media_backup_${new Date().toISOString().slice(0, 10)}.json`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                    className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Download JSON File
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Actions Footer */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/15 via-[#0C0F17] to-black border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Ready to check your live updates?
                </h4>
                <p className="text-xs text-slate-400">
                  Switch to the public website view to see your changes in action.
                </p>
              </div>
              <button
                onClick={() => navigateTo('website')}
                className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs sm:text-sm shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View Public Website</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </main>

    </div>
  );
};
