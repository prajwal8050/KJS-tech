export interface CourseModule {
  moduleNumber: number;
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  hours: string;
  mode: string;
  level: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  iconName: string;
  gradient: string;
  accentColor: string;
  tools: string[];
  features: string[];
  keyOutcomes: string[];
  syllabus: CourseModule[];
  careerRoles: string[];
  nextBatch: string;
}

export interface TechService {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  package: string;
  course: string;
  avatarUrl?: string;
  quote: string;
  badge?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  mode: 'classroom' | 'online' | 'weekend';
  experienceLevel: 'student' | 'fresher' | 'working_pro' | 'career_switch';
  message: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tag: string;
  stat: string;
  location: string;
}

export interface CEOMetadata {
  name: string;
  qualification: string;
  role: string;
  organization: string;
  photoUrl: string;
  email: string;
  phone: string;
}
