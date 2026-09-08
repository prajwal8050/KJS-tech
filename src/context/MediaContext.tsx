import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { HeroSlide, CEOMetadata } from '../types';
import {
  getStoredCEO,
  saveStoredCEO,
  resetStoredCEO,
  getStoredHeroSlides,
  saveStoredHeroSlides,
  resetStoredHeroSlides,
  getStoredAdminAuth,
  setStoredAdminAuth,
} from '../utils/mediaStorage';

interface MediaContextType {
  ceo: CEOMetadata;
  updateCEOPhoto: (photoUrl: string) => void;
  resetCEOPhoto: () => void;
  heroSlides: HeroSlide[];
  addHeroSlide: (slide: HeroSlide) => void;
  updateHeroSlide: (id: string, updated: Partial<HeroSlide>) => void;
  deleteHeroSlide: (id: string) => void;
  reorderHeroSlides: (newSlides: HeroSlide[]) => void;
  resetHeroSlides: () => void;
  isAdmin: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  currentView: 'website' | 'admin';
  navigateTo: (view: 'website' | 'admin') => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ceo, setCeo] = useState<CEOMetadata>(getStoredCEO);
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(getStoredHeroSlides);
  const [isAdmin, setIsAdmin] = useState<boolean>(getStoredAdminAuth);
  const [currentView, setCurrentView] = useState<'website' | 'admin'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (path.includes('/admin') || hash.includes('#admin') || search.includes('admin=true')) {
        return 'admin';
      }
    }
    return 'website';
  });

  // Listen to URL popstate and hash change for navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (path.includes('/admin') || hash.includes('#admin') || search.includes('admin=true')) {
        setCurrentView('admin');
      } else {
        setCurrentView('website');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Listen for media update events (for cross-component or multi-tab sync)
  useEffect(() => {
    const handleStorageChange = () => {
      setCeo(getStoredCEO());
      setHeroSlides(getStoredHeroSlides());
    };

    window.addEventListener('kjs_media_updated', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('kjs_media_updated', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const navigateTo = (view: 'website' | 'admin') => {
    setCurrentView(view);
    if (typeof window !== 'undefined') {
      if (view === 'admin') {
        window.history.pushState({}, '', '/admin');
      } else {
        window.history.pushState({}, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const loginAdmin = (password: string): boolean => {
    const trimmed = password.trim();
    const validPasswords = [
      'Admin@KJS2025',
      'admin@kjs2025',
      'admin123',
      'kjs123',
      'prajwal123',
      'prajwal',
      'admin',
    ];
    if (validPasswords.includes(trimmed) || validPasswords.includes(trimmed.toLowerCase())) {
      setIsAdmin(true);
      setStoredAdminAuth(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    setStoredAdminAuth(false);
  };

  const updateCEOPhoto = (photoUrl: string) => {
    const updated = saveStoredCEO({ photoUrl });
    setCeo(updated);
  };

  const resetCEOPhoto = () => {
    const defaultCeo = resetStoredCEO();
    setCeo(defaultCeo);
  };

  const addHeroSlide = (newSlide: HeroSlide) => {
    const updated = [newSlide, ...heroSlides];
    saveStoredHeroSlides(updated);
    setHeroSlides(updated);
  };

  const updateHeroSlide = (id: string, changes: Partial<HeroSlide>) => {
    const updated = heroSlides.map((slide) => (slide.id === id ? { ...slide, ...changes } : slide));
    saveStoredHeroSlides(updated);
    setHeroSlides(updated);
  };

  const deleteHeroSlide = (id: string) => {
    if (heroSlides.length <= 1) {
      alert('You must have at least 1 slide in the Hero showcase.');
      return;
    }
    const updated = heroSlides.filter((slide) => slide.id !== id);
    saveStoredHeroSlides(updated);
    setHeroSlides(updated);
  };

  const reorderHeroSlides = (newSlides: HeroSlide[]) => {
    saveStoredHeroSlides(newSlides);
    setHeroSlides(newSlides);
  };

  const resetHeroSlides = () => {
    const defaults = resetStoredHeroSlides();
    setHeroSlides(defaults);
  };

  return (
    <MediaContext.Provider
      value={{
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
        currentView,
        navigateTo,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    // Return safe fallback defaults so app never crashes if rendered outside provider
    return {
      ceo: getStoredCEO(),
      updateCEOPhoto: () => {},
      resetCEOPhoto: () => {},
      heroSlides: getStoredHeroSlides(),
      addHeroSlide: () => {},
      updateHeroSlide: () => {},
      deleteHeroSlide: () => {},
      reorderHeroSlides: () => {},
      resetHeroSlides: () => {},
      isAdmin: false,
      loginAdmin: () => false,
      logoutAdmin: () => {},
      currentView: 'website' as const,
      navigateTo: () => {},
    };
  }
  return context;
};
