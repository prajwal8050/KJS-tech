import React, { useState } from 'react';
import { Course } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { CourseModal } from './components/CourseModal';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PlacementsSection } from './components/PlacementsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { AdmissionModal } from './components/AdmissionForm';
import { NetlifyDeployGuide } from './components/NetlifyDeployGuide';
import { Footer } from './components/Footer';
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState<Course | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryCourseId, setInquiryCourseId] = useState<string | undefined>(undefined);
  const [netlifyGuideOpen, setNetlifyGuideOpen] = useState(false);

  const handleOpenInquiry = (courseId?: string) => {
    setInquiryCourseId(courseId);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#F3F4F6] flex flex-col selection:bg-amber-500 selection:text-black">
      {/* Navigation */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        onOpenNetlifyGuide={() => setNetlifyGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Flagship Coaching Programs (Java Full Stack, Python, Data Analyst) */}
        <CoursesSection
          onSelectCourseForSyllabus={(course) => setSelectedCourseForSyllabus(course)}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Why Choose KJS / High-Tech Lab & Campus */}
        <WhyChooseUs onBookDemo={() => handleOpenInquiry()} />

        {/* Enterprise Software & Tech Solutions */}
        <ServicesSection onContactServices={() => handleOpenInquiry('enterprise-software')} />

        {/* Placements, Testimonials & Hiring Partners */}
        <PlacementsSection />

        {/* FAQ Section */}
        <FAQSection onAskQuestion={() => handleOpenInquiry()} />

        {/* Campus & Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
        onOpenNetlifyGuide={() => setNetlifyGuideOpen(true)}
      />

      {/* Full Module Syllabus Modal */}
      <CourseModal
        course={selectedCourseForSyllabus}
        onClose={() => setSelectedCourseForSyllabus(null)}
        onEnroll={(courseId) => {
          setSelectedCourseForSyllabus(null);
          handleOpenInquiry(courseId);
        }}
      />

      {/* Admissions & Demo Session Modal */}
      <AdmissionModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedCourseId={inquiryCourseId}
      />

      {/* Netlify Deployment Helper Modal */}
      <NetlifyDeployGuide
        isOpen={netlifyGuideOpen}
        onClose={() => setNetlifyGuideOpen(false)}
      />

      {/* Floating Action Buttons (WhatsApp & Quick Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/919876543210?text=Hi%20KJS%20Technologies,%20I%20am%20interested%20in%20your%20coaching%20programs"
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
          title="Chat with Counselor on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
      </div>
    </div>
  );
}

