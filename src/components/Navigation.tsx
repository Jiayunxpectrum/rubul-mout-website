import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp, Lock, Unlock } from "lucide-react";
import medschoolLogo from "@/assets/medschool-logo.png";
import medschoolLogoCompact from "@/assets/medschool-logo-compact.png";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'biography', label: 'Biography' },
  { id: 'contact', label: 'Contact' },
];

const publicationTabs = [
  { id: 'publications', label: 'Publications' },
  { id: 'patents', label: 'Patents' },
  { id: 'books', label: 'Books' },
  { id: 'news', label: "News" },
];

const teachingTabs = [
  { id: 'teaching', label: 'Overview' },
  { id: 'courses', label: 'Courses' },
  { id: 'sundayScience', label: 'Sunday Science' }
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [publicationsOpen, setPublicationsOpen] = useState(false);
  const [teachingOpen, setTeachingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    // Prevent scrollbar shifts and layout shifts
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up body and html styles
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <>
      {/* Spacer div to prevent page shifting when navigation locks/unlocks */}
      {isLocked && (
        <div 
          className="w-full bg-transparent" 
          style={{ 
            height: '88px',
            minHeight: '88px',
            maxHeight: '88px',
            position: 'relative',
            zIndex: 0
          }} // 88px = py-4 (32px) + content height (56px)
        />
      )}
      
      <nav className={cn(
        "z-40 shadow-lg transition-all duration-300 w-full",
        isLocked ? "fixed top-0 left-0 right-0" : "sticky top-0 left-0 right-0",
        isScrolled 
          ? "bg-[#A51C30] shadow-xl" 
          : "bg-[#A51C30]",
        "box-border"
      )}>
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Dr. Mout Name - Responsive sizing */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => onTabChange('home')}
                className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white tracking-wider hover:text-white/80 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                DR. RUBUL MOUT
              </button>
            </div>
            
            {/* Center Navigation Area */}
            <div className="flex-1 flex items-center justify-center min-w-0">
              {/* Lock Toggle Button - Always visible */}
              <div className="flex-shrink-0 mr-2 sm:mr-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLock}
                  className="text-white hover:bg-white hover:text-[#A51C30] hover:scale-105 transition-all duration-300 p-1 sm:p-2 rounded-lg"
                  title={isLocked ? "Unlock navigation bar" : "Lock navigation bar to top of screen"}
                >
                  {isLocked ? (
                    <Lock className="h-3 w-3 sm:h-4 sm:w-4" />
                  ) : (
                    <Unlock className="h-3 w-3 sm:h-4 sm:w-4" />
                  )}
                </Button>
              </div>
              
              {/* Desktop Navigation - Hidden on small screens */}
              <div className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2 relative z-50 min-w-0">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant="ghost"
                    onClick={() => onTabChange(tab.id)}
                    className={cn(
                      "px-2 xl:px-4 py-2 transition-all duration-300 font-medium tracking-wide relative text-xs xl:text-sm",
                      activeTab === tab.id 
                        ? "bg-white text-[#A51C30] hover:bg-white/90 shadow-[0_0_20px_#A51C3080]" 
                        : "text-white hover:bg-white/10 hover:text-white hover:shadow-[0_0_15px_#A51C3060]"
                    )}
                  >
                    {tab.label}
                  </Button>
                ))}
                
                {/* Publications Dropdown */}
                <DropdownMenu modal={false} open={publicationsOpen} onOpenChange={setPublicationsOpen}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "px-2 xl:px-4 py-2 transition-all font-medium rounded-lg text-xs xl:text-sm",
                        publicationsOpen ? "transition-none" : "hover:scale-105",
                        ['publications', 'patents', 'books', 'news'].includes(activeTab)
                          ? "bg-white text-[#A51C30] hover:bg-white/90 hover:text-[#A51C30] shadow-[0_0_20px_#A51C3080]" 
                          : "text-white hover:bg-white/15 hover:text-white hover:shadow-[0_0_15px_#A51C3060]"
                      )}
                    >
                      <span className="hidden xl:inline">Publications</span>
                      <span className="xl:hidden">Pub.</span>
                      {publicationsOpen ? <ChevronUp className="ml-1 xl:ml-2 h-3 w-3 xl:h-4 xl:w-4" /> : <ChevronDown className="ml-1 xl:ml-2 h-3 w-3 xl:h-4 xl:w-4" />}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-white border border-gray-200"
                    sideOffset={0}
                    align="center"
                  >
                    {publicationTabs.map((tab, index) => (
                      <DropdownMenuItem
                        key={tab.id}
                        onClick={() => {
                          onTabChange(tab.id);
                          setPublicationsOpen(false);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onTabChange(tab.id);
                            setPublicationsOpen(false);
                          }
                        }}
                        className={cn(
                          "cursor-pointer transition-none px-3 py-2 focus:outline-none",
                          index === 0 ? "rounded-t-lg" : "",
                          index === publicationTabs.length - 1 ? "rounded-b-lg" : "",
                          activeTab === tab.id 
                            ? "bg-[#A51C30]/10 text-[#A51C30] font-medium" 
                            : "hover:bg-gray-50 text-gray-700"
                        )}
                      >
                        {tab.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Teaching Dropdown */}
                <DropdownMenu modal={false} open={teachingOpen} onOpenChange={setTeachingOpen}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "px-2 xl:px-4 py-2 transition-all font-medium rounded-lg text-xs xl:text-sm",
                        ['teaching', 'courses', 'sundayscience'].includes(activeTab)
                          ? "bg-white text-[#A51C30] hover:bg-white/90 hover:text-[#A51C30] shadow-[0_0_20px_#A51C3080]" 
                          : "text-white hover:bg-white/15 hover:text-white hover:shadow-[0_0_15px_#A51C3060]"
                      )}
                    >
                      <span className="hidden xl:inline">Teaching & Activism</span>
                      <span className="xl:hidden">Teaching</span>
                      {teachingOpen ? <ChevronUp className="ml-1 xl:ml-2 h-3 w-3 xl:h-4 xl:w-4" /> : <ChevronDown className="ml-1 xl:ml-2 h-3 w-3 xl:h-4 xl:w-4" />}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-white border border-gray-200"
                    sideOffset={0}
                    align="center"
                  >
                    {teachingTabs.map((tab, index) => (
                      <DropdownMenuItem
                        key={tab.id}
                        onClick={() => {
                          onTabChange(tab.id);
                          setTeachingOpen(false);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onTabChange(tab.id);
                            setTeachingOpen(false);
                          }
                        }}
                        className={cn(
                          "cursor-pointer transition-none px-3 py-2 focus:outline-none",
                          tab.id === 'teaching' && activeTab === 'teaching' ? "rounded-t-none" : index === 0 ? "rounded-t-lg" : "",
                          index === teachingTabs.length - 1 ? "rounded-b-lg" : "",
                          activeTab === tab.id 
                            ? "bg-[#A51C30]/10 text-[#A51C30] font-medium" 
                            : "hover:bg-gray-50 text-gray-700"
                        )}
                      >
                        {tab.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            {/* Med School Logo - Right side */}
            <div className="flex-shrink-0">
              <a 
                href="https://hms.harvard.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:bg-white/10 hover:scale-105 duration-300 rounded-lg p-1"
              >
                <img 
                  src={medschoolLogoCompact} 
                  alt="Harvard Medical School" 
                  className="h-6 w-auto sm:h-8 md:h-10 xl:hidden"
                  style={{minWidth: 'auto', maxWidth: 'none'}}
                />
                <img 
                  src={medschoolLogo} 
                  alt="Harvard Medical School" 
                  className="h-6 w-auto sm:h-8 md:h-10 hidden xl:block"
                  style={{minWidth: 'auto', maxWidth: 'none'}}
                />
              </a>
            </div>
          </div>
          
          {/* Mobile menu - Show on medium screens and below */}
          <div className="lg:hidden mt-4">
            <select 
              value={activeTab}
              onChange={(e) => onTabChange(e.target.value)}
              className="bg-white text-[#A51C30] hover:bg-white/90 shadow-[0_0_20px_#A51C3080] rounded-lg px-3 py-2 w-full text-sm"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>{tab.label}</option>
              ))}
              <optgroup label="Publications">
                {publicationTabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>{tab.label}</option>
                ))}
              </optgroup>
              <optgroup label="Teaching & Activism">
                {teachingTabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>{tab.label}</option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>
      </nav>
    </>
  );
};