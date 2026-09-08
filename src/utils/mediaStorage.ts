import { ASSETS } from '../assets/imagesMap';
import { HeroSlide, CEOMetadata } from '../types';

const STORAGE_KEY_CEO = 'kjs_ceo_media_v1';
const STORAGE_KEY_HERO_SLIDES = 'kjs_hero_slides_v1';
const STORAGE_KEY_ADMIN_AUTH = 'kjs_admin_auth_v1';

export const DEFAULT_CEO_METADATA: CEOMetadata = {
  name: 'Prajwal K S',
  qualification: 'M.Tech',
  role: 'Founder & Chief Executive Officer',
  organization: 'KJS Technologies',
  photoUrl: ASSETS.ceoPortrait,
  email: 'prajwalsiddaraju44@gmail.com',
  phone: '+91 80500 70508',
};

export const DEFAULT_HERO_SLIDES: HeroSlide[] = [
  {
    id: 'seminar-lab',
    image: ASSETS.campusSeminarLab,
    title: 'High-Tech Coding Lab & Seminar Hall',
    subtitle: 'Air-conditioned development arena with multi-screen setups for live code architecture',
    tag: 'Main Coaching Floor',
    stat: '100+ Workstations',
    location: 'KJS Bangalore Campus',
  },
  {
    id: 'lecture-studio',
    image: ASSETS.learningLab,
    title: 'Smart Interactive Lecture Studio',
    subtitle: 'Instructor-led system design masterclasses, microservices teardowns, and interactive projection',
    tag: 'Smart Classrooms',
    stat: 'Digital Displays',
    location: 'Bangalore Tech Center',
  },
  {
    id: 'collab-pods',
    image: ASSETS.studentsCollaborating,
    title: 'Peer Sprints & Full-Stack Collaboration Pods',
    subtitle: 'Students architecting real enterprise applications together in agile sprint teams',
    tag: 'Agile Team Labs',
    stat: 'Pair Programming',
    location: 'Collaboration Bay',
  },
  {
    id: 'workstations',
    image: ASSETS.studentWorkstation,
    title: 'Individual High-Performance Dev Desks',
    subtitle: 'Dedicated dual-monitor setups, mechanical keyboards, and zero-lag gigabit ethernet',
    tag: 'Developer Workstations',
    stat: 'Dual Monitors',
    location: 'Deep Focus Lab',
  },
  {
    id: 'campus-center',
    image: ASSETS.heroBanner,
    title: 'Bangalore Campus & Corporate Learning Center',
    subtitle: 'ISO 9001:2015 certified tech training academy located in Bangalore IT corridor',
    tag: 'Corporate Campus',
    stat: 'ISO 9001:2015',
    location: 'Central Metro Corridor',
  },
];

/**
 * Image compression utility using HTML Canvas
 * Resizes any image file to max 1600px width/height and quality 0.85
 * Returns a fast, lightweight base64 data URL
 */
export async function compressAndFormatImage(file: File, maxDim = 1600, quality = 0.88): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Failed to load image data'));
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          return resolve(e.target?.result as string);
        }

        // Draw with high quality interpolation
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Get CEO photo and metadata from localStorage or default
 */
export function getStoredCEO(): CEOMetadata {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CEO);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_CEO_METADATA,
        ...parsed,
      };
    }
  } catch (err) {
    console.warn('Failed to load CEO from storage:', err);
  }
  return DEFAULT_CEO_METADATA;
}

/**
 * Save CEO photo and metadata to localStorage
 */
export function saveStoredCEO(ceo: Partial<CEOMetadata>): CEOMetadata {
  const current = getStoredCEO();
  const updated = { ...current, ...ceo };
  try {
    localStorage.setItem(STORAGE_KEY_CEO, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('kjs_media_updated', { detail: { type: 'ceo' } }));
  } catch (err) {
    console.error('Failed to save CEO to storage:', err);
  }
  return updated;
}

/**
 * Reset CEO photo to original
 */
export function resetStoredCEO(): CEOMetadata {
  try {
    localStorage.removeItem(STORAGE_KEY_CEO);
    window.dispatchEvent(new CustomEvent('kjs_media_updated', { detail: { type: 'ceo' } }));
  } catch (err) {
    console.warn('Failed to reset CEO storage:', err);
  }
  return DEFAULT_CEO_METADATA;
}

/**
 * Get Hero slides from storage or defaults
 */
export function getStoredHeroSlides(): HeroSlide[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_HERO_SLIDES);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Failed to load Hero slides from storage:', err);
  }
  return DEFAULT_HERO_SLIDES;
}

/**
 * Save Hero slides to storage
 */
export function saveStoredHeroSlides(slides: HeroSlide[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_HERO_SLIDES, JSON.stringify(slides));
    window.dispatchEvent(new CustomEvent('kjs_media_updated', { detail: { type: 'hero_slides' } }));
  } catch (err) {
    console.error('Failed to save Hero slides to storage:', err);
  }
}

/**
 * Reset Hero slides to defaults
 */
export function resetStoredHeroSlides(): HeroSlide[] {
  try {
    localStorage.removeItem(STORAGE_KEY_HERO_SLIDES);
    window.dispatchEvent(new CustomEvent('kjs_media_updated', { detail: { type: 'hero_slides' } }));
  } catch (err) {
    console.warn('Failed to reset Hero slides in storage:', err);
  }
  return DEFAULT_HERO_SLIDES;
}

/**
 * Check if admin is currently authenticated
 */
export function getStoredAdminAuth(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY_ADMIN_AUTH) === 'true';
  } catch {
    return false;
  }
}

/**
 * Set admin authentication status
 */
export function setStoredAdminAuth(status: boolean): void {
  try {
    if (status) {
      localStorage.setItem(STORAGE_KEY_ADMIN_AUTH, 'true');
    } else {
      localStorage.removeItem(STORAGE_KEY_ADMIN_AUTH);
    }
  } catch (err) {
    console.warn('Admin auth storage error:', err);
  }
}
