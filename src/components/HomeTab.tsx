import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import chatgptProteinImg from "@/assets/ChatGPT Image Aug 23, 2025, 02_35_32 PM.png";
import workStemcellImg from "@/assets/work-stemcell.jpg";
import workImmunoageingImg from "@/assets/work-immunoageing.jpg";

interface HomeTabProps {
  onNavigate: (tab: string, section?: string) => void;
}

export const HomeTab = ({ onNavigate }: HomeTabProps) => {
  return (
    <div className="space-y-16">
      {/* Research Focus */}
      <section className="pt-32 pb-20 relative z-10">
        {/* RESEARCH FOCUS TITLE - MADE VISIBLE AND PROMINENT */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Research Focus
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          {/* Protein Design Card */}
          <div 
            className="relative rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 opacity-60 backdrop-blur-sm hover:opacity-100"
            onClick={() => onNavigate('research', 'protein-design')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate('research', 'protein-design');
              }
            }}
          >
            <div className="aspect-[4/3] relative">
              <img 
                src={chatgptProteinImg} 
                alt="Protein Design" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              />
              {/* Gradient overlay - default state */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-800/60 to-black/80 group-hover:opacity-0 transition-opacity duration-500" />
              {/* Pink gradient overlay - hover state */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF0F7B]/90 via-[#dbaf0d]/70 to-[#dbaf0d]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Protein Design</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Engineering and analyzing protein structures to uncover new biological functions.
                </p>
              </div>
            </div>
          </div>

          {/* Immune Cell Function in Cancer Card */}
          <div 
            className="relative rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 opacity-60 backdrop-blur-sm hover:opacity-100"
            onClick={() => onNavigate('research', 'immune-cell-cancer')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate('research', 'immune-cell-cancer');
              }
            }}
          >
            <div className="aspect-[4/3] relative">
              <img 
                src={workStemcellImg} 
                alt="Immune Cell Function in Cancer" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              />
              {/* Gradient overlay - default state */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-black/80 group-hover:opacity-0 transition-opacity duration-500" />
              {/* Pink gradient overlay - hover state */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF0F7B]/90 via-[#dbaf0d]/70 to-[#dbaf0d]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                                 <h3 className="text-3xl font-bold text-white mb-4">Enhancing Immune Cell Function in Cancer</h3>
                                 <p className="text-white/90 text-lg leading-relaxed">
                   Boosting T cell function through designed proteins to fight cancer.
                 </p>
              </div>
            </div>
          </div>

          {/* Immuno-Ageing Card */}
          <div 
            className="relative rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 opacity-60 backdrop-blur-sm hover:opacity-100"
            onClick={() => onNavigate('research', 'immunology-aging')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate('research', 'immunology-aging');
              }
            }}
          >
            <div className="aspect-[4/3] relative">
              <img 
                src={workImmunoageingImg} 
                alt="Immuno-Ageing" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              />
              {/* Gradient overlay - default state */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/60 to-black/80 group-hover:opacity-0 transition-opacity duration-500" />
              {/* Pink gradient overlay - hover state */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF0F7B]/90 via-[#dbaf0d]/70 to-[#dbaf0d]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Immuno‑Ageing</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Understanding age-associated immune changes to inform healthier longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto bg-[#ff4164]/40 rounded-3xl p-12 border border-[#ff4164]/30 backdrop-blur-sm shadow-[0_0_30px_#ff416460]">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interested in Collaboration?
          </h3>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            I'm always open to discussing research opportunities, scientific collaborations, 
            or speaking engagements in protein design and cell biology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-black hover:bg-black focus:bg-black active:bg-black border-2 border-white text-white px-8 py-4 text-lg font-medium group transition-transform duration-300 hover:scale-105"
            >
              <span className="group-hover:text-[#ff4164] flex items-center">
                Get In Touch
                
              </span>
            </Button>
            
            <Button 
              size="lg"
              onClick={() => onNavigate('publications')}
              className="bg-black hover:bg-black focus:bg-black active:bg-black border-2 border-white text-white px-8 py-4 text-lg font-medium group transition-transform duration-300 hover:scale-105"
            >
              <span className="group-hover:text-[#ff4164]">
                View Publications
              </span>
            </Button>
            
            <Button 
              size="lg"
              onClick={() => onNavigate('teaching')}
              className="bg-black hover:bg-black focus:bg-black active:bg-black border-2 border-white text-white px-8 py-4 text-lg font-medium group transition-transform duration-300 hover:scale-105"
            >
              <span className="group-hover:text-[#ff4164]">
                Join Science Activism
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};