import { useState } from "react";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { HomeTab } from "./HomeTab";
import { ResearchTab } from "./ResearchTab";
import { BiographyTab } from "./BiographyTab";
import { PublicationsTab } from "./PublicationsTab";
import { TeachingTab } from "./TeachingTab";
import { ContactTab } from "./ContactTab";
import { PatentsTab } from "./PatentsTab";
import { BooksTab } from "./BooksTab";
import { CoursesTab } from "./CoursesTab";
import { SundayScienceTab } from "./SundayScienceTab";
import { NewsTab } from "./NewsTab";
import { ChatBox } from "./ChatBox";
import proteinMoleculeBg from "@/assets/protein-molecule-ai.png";


export const RubulMoutSite = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab: string, section?: string) => {
    setActiveTab(tab);
    
    if (section && tab === 'research') {
      // Wait for the component to render, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      // Smooth scroll to top when changing tabs
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab onNavigate={handleTabChange} />;
      case 'research':
        return <ResearchTab />;
      case 'biography':
        return <BiographyTab />;
      case 'publications':
        return <PublicationsTab />;
      case 'patents':
        return <PatentsTab />;
      case 'books':
        return <BooksTab />;
      case 'teaching':
        return <TeachingTab onNavigate={handleTabChange} />;
      case 'contact':
        return <ContactTab />;
      case 'courses':
        return <CoursesTab />;
      case 'sundayScience':
        return <SundayScienceTab />;
      case 'news':
        return <NewsTab />;
      default:
        return <HomeTab onNavigate={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Background Image - Fixed to viewport for entire site (hidden on research page) */}
      {activeTab !== 'research' && (
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${proteinMoleculeBg})`,
          }}
        />
      )}
      
      {/* Fixed Black Overlay - 10% opacity for subtle background (hidden on research page) */}
      {activeTab !== 'research' && (
        <div className="fixed inset-0 bg-black/10" />
      )}
      
      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      {/* Hero Section - only show on home page */}
      {activeTab === 'home' && (
        <HeroSection onNavigate={handleTabChange} />
      )}
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 pt-20 relative z-10">
        {renderActiveTab()}
      </main>
      
      {/* Footer */}
      <footer className="relative border-t border-gray-800 bg-gray-800 py-12 mt-32">
        {/* Gradient overlay for home page - positioned at top of footer */}
        {activeTab === 'home' && (
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-t from-gray-800 via-gray-800/60 to-transparent pointer-events-none" style={{height: '100px', zIndex: 5}}></div>
        )}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Dr. Rubul Mout Section */}
            <div className="text-left">
              <h3 className="font-bold text-lg mb-4 text-[#ff4164]">
                Dr. Rubul Mout
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm text-left">
                Research Fellow at Harvard Medical School & Boston Children's Hospital, 
                advancing protein design and cell biology for therapeutic applications.
              </p>
            </div>
            
            {/* Quick Links - Left Aligned Section */}
            <div className="text-left">
              <div className="w-32">
                <h4 className="font-bold text-lg mb-4 text-[#ff4164]">
                  Quick Links
                </h4>
                <div className="space-y-2 text-left">
                  <button 
                    onClick={() => handleTabChange('research')}
                    className="block text-gray-300 hover:text-[#ff4164] transition-colors duration-300 text-sm relative group"
                  >
                    <span className="relative">
                      Research
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff4164] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <button 
                    onClick={() => handleTabChange('biography')}
                    className="block text-gray-300 hover:text-[#ff4164] transition-colors duration-300 text-sm relative group"
                  >
                    <span className="relative">
                      Biography
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff4164] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <button 
                    onClick={() => handleTabChange('publications')}
                    className="block text-gray-300 hover:text-[#ff4164] transition-colors duration-300 text-sm relative group"
                  >
                    <span className="relative">
                      Publications
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff4164] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <button 
                    onClick={() => handleTabChange('patents')}
                    className="block text-gray-300 hover:text-[#ff4164] transition-colors duration-300 text-sm relative group"
                  >
                    <span className="relative">
                      Patents
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff4164] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <button 
                    onClick={() => handleTabChange('teaching')}
                    className="block text-gray-300 hover:text-[#ff4164] transition-colors duration-300 text-sm relative group"
                  >
                    <span className="relative">
                      Science Activism
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff4164] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <button 
                    onClick={() => handleTabChange('contact')}
                    className="block text-gray-300 hover:text-[#ff4164] transition-colors duration-300 text-sm relative group"
                  >
                    <span className="relative">
                      Contact
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff4164] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* External Links - Left Aligned Section */}
            <div className="text-left">
              <div className="w-32">
                <h4 className="font-bold text-lg mb-4 text-[#ff4164]">
                  External Links
                </h4>
                <div className="space-y-2 text-left">
                  <a 
                    href="https://upliftlibraries.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-[#ff4164] transition-colors duration-300 text-sm relative group"
                  >
                    <span className="relative">
                      Uplift Libraries
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff4164] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                  <a 
                    href="https://research.childrenshospital.org/rubulmout/Science-activism" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-[#ff4164] transition-colors duration-300 text-sm relative group"
                  >
                    <span className="relative">
                      Sunday Science Activism
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff4164] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                  <a 
                    href="https://scholar.google.com/citations?user=NpMfqDUAAAAJ&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-[#ff4164] transition-colors duration-300 text-sm relative group"
                  >
                    <span className="relative">
                      Citations
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff4164] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative separator */}
          <div className="flex items-center justify-center my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-gradient-to-r from-[#ff4164] to-[#dbaf0d] rounded-full"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>
          
          <div className="text-center text-gray-400">
            <p className="text-sm">
              &copy; 2025 Dr. Rubul Mout. All rights reserved. | 
              <a 
                href="https://hms.harvard.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ff4164] font-medium hover:underline"
              >
                &nbsp;Harvard Medical School
              </a>
              &nbsp;&amp;&nbsp;
              <a 
                href="https://www.childrenshospital.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ff4164] font-medium hover:underline"
              >
                Boston Children's Hospital
              </a>
            </p>
          </div>
        </div>
      </footer>
      
      {/* ChatBox - Only visible on contact page */}
      <ChatBox isVisible={activeTab === 'contact'} />
    </div>
  );
};