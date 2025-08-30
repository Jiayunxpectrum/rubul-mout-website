import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import chatgptProteinImg from "@/assets/ChatGPT Image Aug 23, 2025, 02_35_32 PM.png";
import workStemcellImg from "@/assets/work-stemcell.jpg";
import workImmunoageingImg from "@/assets/work-immunoageing.jpg";
import cancerTImg from "@/assets/CancerT.png";
import { BookOpen } from "lucide-react";

interface HomeTabProps {
  onNavigate: (tab: string, section?: string) => void;
}

export const HomeTab = ({ onNavigate }: HomeTabProps) => {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Research Focus */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10">
        {/* RESEARCH FOCUS TITLE - MADE VISIBLE AND PROMINENT */}
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
            Research Focus
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Protein Design Card */}
          <div 
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 opacity-70 backdrop-blur-sm hover:opacity-80"
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
              {/*<div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-800/60 to-black/80 group-hover:opacity-0 transition-opacity duration-500" />
              {/* Pink gradient overlay - hover state */}
              {/*<div className="absolute inset-0 bg-gradient-to-br from-[#FF0F7B]/90 via-[#dbaf0d]/70 to-[#dbaf0d]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">Protein Design</h3>
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                  Engineering and analyzing protein structures to uncover new biological functions.
                </p>
              </div>
            </div>
          </div>

          {/* Immune Cell Function in Cancer Card */}
          <div 
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 opacity-70 backdrop-blur-sm hover:opacity-80"
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
                src={cancerTImg} 
                alt="Immune Cell Function in Cancer" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              />
              {/* Gradient overlay - default state */}
              {/*<div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-black/80 group-hover:opacity-0 transition-opacity duration-500" />
              {/* Pink gradient overlay - hover state */}
              {/*<div className="absolute inset-0 bg-gradient-to-br from-[#FF0F7B]/90 via-[#dbaf0d]/70 to-[#dbaf0d]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                                 <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">Enhancing Immune Cell Function in Cancer</h3>
                                 <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                   Boosting T cell function through designed proteins to fight cancer.
                 </p>
              </div>
            </div>
          </div>

          {/* Immuno-Aging Card */}
          <div 
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 opacity-70 backdrop-blur-sm hover:opacity-80 md:col-span-2 lg:col-span-1"
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
                alt="Immuno-Aging" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              />
              {/* Gradient overlay - default state */}
              {/*<div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/60 to-black/80 group-hover:opacity-0 transition-opacity duration-500" />
              {/* Pink gradient overlay - hover state */}
              {/*<div className="absolute inset-0 bg-gradient-to-br from-[#FF0F7B]/90 via-[#dbaf0d]/70 to-[#dbaf0d]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">Immuno-Aging</h3>
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                  Understanding and combating age-related immune system decline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="space-y-8 sm:space-y-12 px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
            Featured Research Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Stem Cell Research */}
          <Card 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            onClick={() => onNavigate('research')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate('research');
              }
            }}
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
              <img 
                src={workStemcellImg} 
                alt="Stem Cell Research" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Stem Cell & Regenerative Biology</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                Advancing our understanding of stem cell biology and developing regenerative therapies.
              </p>
              <div className="flex items-center text-primary group-hover:text-primary-glow transition-colors">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>

          {/* Publications */}
          <Card 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            onClick={() => onNavigate('publications')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate('publications');
              }
            }}
          >
            <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Publications & Research</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Explore my published research in leading scientific journals and conferences.
                </p>
                <div className="flex items-center justify-center text-primary group-hover:text-primary-glow transition-colors">
                  <span className="text-sm font-medium">View Publications</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="text-center space-y-6 sm:space-y-8 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Get Started
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button 
            size="lg"
            onClick={() => onNavigate('biography')} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-transform duration-300 hover:scale-105"
          >
            Learn About Me
          </Button>
          <Button 
            size="lg"
            onClick={() => onNavigate('contact')} 
            className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-transform duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};