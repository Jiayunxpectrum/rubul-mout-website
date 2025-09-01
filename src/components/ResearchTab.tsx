import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import chatgptProteinImg from "@/assets/ChatGPT Image Aug 23, 2025, 02_35_32 PM.png";
import workImmunoageingImg from "@/assets/work-immunoageing.jpg";
import cancerTImg from "@/assets/CancerT.png";
import proteinMoleculeBg from "@/assets/protein-molecule-ai.png";

export const ResearchTab = () => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    proteinDesign: true,
    immuneCellCancer: true,
    immunologyAging: true,
    callToAction: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen relative">
      
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">My Research Focus</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Using computational protein design technologies to modulate signaling in immune development, function, and ageing
          </p>
        </div>

        {/* Detailed Research Sections */}
        <section className="space-y-12 sm:space-y-16">
          {/* Protein Design & Engineering */}
          <div id="protein-design" className="space-y-4 sm:space-y-6">
            {/* Mobile Collapsible Header */}
            <div className="lg:hidden">
              <button
                onClick={() => toggleSection('proteinDesign')}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white border-b-2 border-primary pb-2">
                    Protein Design & Engineering
                  </h2>
                  {expandedSections.proteinDesign ? (
                    <ChevronUp className="h-6 w-6 text-white" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-white" />
                  )}
                </div>
              </button>
            </div>
            
            {/* Desktop Header */}
            <h2 className="hidden lg:block text-2xl sm:text-3xl font-bold text-white border-b-2 border-primary pb-2">
              Protein Design & Engineering
            </h2>
            
            {/* Content - Show based on expanded state on mobile */}
            <div className={`lg:block ${expandedSections.proteinDesign ? 'block' : 'hidden'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                  <p className="text-primary-foreground leading-relaxed text-sm sm:text-base">
                    Proteins are the workhorses of cellular function, performing a myriad of essential tasks
                    from catalyzing biochemical reactions to providing structural support. Our research
                    focuses on understanding and manipulating these molecular machines to uncover new
                    biological functions and develop therapeutic applications.
                  </p>
                  <p className="text-primary-foreground leading-relaxed text-sm sm:text-base">
                    We employ computational protein design approaches including Rosetta, RFdiffusion,
                    and AlphaFold2/3 to engineer novel protein structures with specific functions. This
                    includes designing proteins that can activate immune cells to target specific cancer cells
                    and help regenerate certain immune cells to fight off various diseases.
                    Our work involves interdisciplinary approaches in computational biology and wet lab
                    biochemistry. We use advanced structural biology techniques to validate our designs.
                  </p>
                </div>
                <div className="space-y-4">
                  <img 
                    src={chatgptProteinImg} 
                    alt="Protein Structure Design" 
                    className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Boosting Immune Cell Function in Cancer */}
          <div id="immune-cell-cancer" className="space-y-4 sm:space-y-6">
            {/* Mobile Collapsible Header */}
            <div className="lg:hidden">
              <button
                onClick={() => toggleSection('immuneCellCancer')}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white border-b-2 border-primary pb-2">
                    Boosting Immune Cell Function in Cancer
                  </h2>
                  {expandedSections.immuneCellCancer ? (
                    <ChevronUp className="h-6 w-6 text-white" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-white" />
                  )}
                </div>
              </button>
            </div>
            
            {/* Desktop Header */}
            <h2 className="hidden lg:block text-2xl sm:text-3xl font-bold text-white border-b-2 border-primary pb-2">
              Boosting Immune Cell Function in Cancer
            </h2>
            
            {/* Content - Show based on expanded state on mobile */}
            <div className={`lg:block ${expandedSections.immuneCellCancer ? 'block' : 'hidden'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                  <p className="text-primary-foreground leading-relaxed text-sm sm:text-base">
                    T cells act as the immune system's frontline warriors, constantly patrolling the body to
                    detect and eliminate abnormal cells, including cancer. Their ability to recognize tumor-
                    associated antigens (TAAs) allows them to target and destroy cancer cells.
                  </p>
                  <p className="text-primary-foreground leading-relaxed text-sm sm:text-base">
                    Unfortunately, cancer cells often escape detection because they are highly
                    heterogeneous and may express TAAs at very low levels. In addition, tumors can
                    actively suppress or manipulate T cells, weakening their killing ability and allowing the
                    cancer to persist.
                  </p>
                  <p className="text-primary-foreground leading-relaxed text-sm sm:text-base">
                    To overcome this, we apply breakthrough protein design technologies that create novel
                    molecules capable of guiding T cells toward otherwise "invisible" cancer cells. These
                    designed proteins simultaneously search for multiple, low-expressing TAAs, ensuring
                    more reliable and comprehensive tumor detection.
                  </p>
                </div>
                <div className="space-y-4">
                  <img 
                    src={cancerTImg} 
                    alt="Designed protein bridging T cell to cancer cell" 
                    className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Immunology & Aging */}
          <div id="immunology-aging" className="space-y-4 sm:space-y-6">
            {/* Mobile Collapsible Header */}
            <div className="lg:hidden">
              <button
                onClick={() => toggleSection('immunologyAging')}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white border-b-2 border-primary pb-2">
                    Immunology & Aging
                  </h2>
                  {expandedSections.immunologyAging ? (
                    <ChevronUp className="h-6 w-6 text-white" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-white" />
                  )}
                </div>
              </button>
            </div>
            
            {/* Desktop Header */}
            <h2 className="hidden lg:block text-2xl sm:text-3xl font-bold text-white border-b-2 border-primary pb-2">
              Immunology & Aging
            </h2>
            
            {/* Content - Show based on expanded state on mobile */}
            <div className={`lg:block ${expandedSections.immunologyAging ? 'block' : 'hidden'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                  <p className="text-primary-foreground leading-relaxed text-sm sm:text-base">
                    As we age, our immune system undergoes significant changes that can impact our ability
                    to fight infections and respond to vaccines. This phenomenon, known as immunosenescence,
                    is characterized by a decline in both innate and adaptive immune responses.
                  </p>
                  <p className="text-primary-foreground leading-relaxed text-sm sm:text-base">
                    Our research focuses on understanding the molecular mechanisms underlying these
                    age-related changes and developing strategies to rejuvenate or enhance immune function
                    in older individuals. We use protein design approaches to create molecules that can
                    stimulate specific immune pathways and restore immune cell function.
                  </p>
                  <p className="text-primary-foreground leading-relaxed text-sm sm:text-base">
                    This work has important implications for improving vaccine efficacy in elderly populations,
                    enhancing cancer immunotherapy outcomes, and developing treatments for age-related
                    inflammatory conditions.
                  </p>
                </div>
                <div className="space-y-4">
                  <img 
                    src={workImmunoageingImg} 
                    alt="Immunology and aging research" 
                    className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentors & Collaborators */}
        <section className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center border-b-2 border-primary pb-2">
            Mentors & Collaborators
          </h2>
          
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">David Baker</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                2024 Nobel Laureate in Chemistry, University of Washington
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">
                Collaborated on protein design and Notch signaling research. Former postdoctoral mentor.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">George Daley</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Dean, Harvard Medical School
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">
                Collaborated on Notch signaling research and T cell development studies.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Research Network</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Global Collaborators
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">
                Working with researchers worldwide on protein design, immunology, and stem cell biology.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-8 sm:py-12">
          {/* Mobile Collapsible Header */}
          <div className="lg:hidden">
            <button
              onClick={() => toggleSection('callToAction')}
              className="w-full text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Interested in Collaboration?
                </h3>
                {expandedSections.callToAction ? (
                  <ChevronUp className="h-6 w-6 text-white" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-white" />
                )}
              </div>
            </button>
          </div>
          
          {/* Desktop Header */}
          <h3 className="hidden lg:block text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Interested in Collaboration?
          </h3>
          
          {/* Content - Show based on expanded state on mobile */}
          <div className={`lg:block ${expandedSections.callToAction ? 'block' : 'hidden'}`}>
            <div className="max-w-4xl mx-auto bg-[#A51C30]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-[#A51C30]/30 backdrop-blur-sm shadow-[0_0_30px_#A51C3060]">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
                I'm always open to discussing research opportunities, scientific collaborations, 
                or speaking engagements in protein design, cancer, and immunobiology.
              </p>
              <Button 
                size="lg"
                className="bg-white/20 hover:bg-white/30 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
