import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Award, BookOpen, Globe, Microscope, Users, Download } from "lucide-react";
import rubulPortrait from "@/assets/rubul-portrait.jpg";

export const BiographyTab = () => {
  const timeline = [
    {
      year: "Education",
      title: "PhD at UMass Amherst",
      description: "Moved to the United States to pursue PhD from the University of Massachusetts, Amherst, developing the 'E-tag' method for intracellular protein delivery.",
      icon: GraduationCap
    },
    {
      year: "2017-2020",
      title: "University of Washington",
      description: "Washington Research Foundation Innovation Fellow at the Institute for Protein Design, working with 2024 Nobel Laureate David Baker.",
      icon: Microscope
    },
    {
      year: "Present",
      title: "Research Fellow - Harvard Medical School",
      description: "Currently Research Fellow at Harvard Medical School and Boston Children's Hospital, leading groundbreaking research in protein design and developing breakthrough therapies for immune system enhancement.",
      icon: Award
    }
  ];

  const achievements = [
    "Co-author of 40 research articles in leading scientific journals",
    "Inventor of numerous technologies with multiple patents",
    "Collaborated with Nobel Laureate David Baker on protein design",
    "Research featured in Nature magazine and numerous media outlets",
    "Bestselling author with 50,000+ books sold in Assamese language",
    "Founder of Uplift Libraries serving underprivileged students in rural India",
    "Weekly science activism reaching students worldwide"
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header with Portrait */}
      <div className="text-center animate-fade-in-up">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
          {/* Portrait */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-[#C41E3A]/50 shadow-2xl bg-gradient-to-br from-[#C41E3A]/20 to-[#C41E3A]/10 p-2">
                <img 
                  src={rubulPortrait} 
                  alt="Dr. Rubul Mout" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C41E3A]/20 to-[#C41E3A]/10 blur-xl -z-10"></div>
              
              {/* CV Download Button */}
              <div className="mt-4 text-center">
                <a
                  href="/cv-rubul-mout.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 border border-white/20 hover:border-white/40"
                >
                  <Download className="w-4 h-4" />
                  View CV
                </a>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl font-bold text-white mb-6">Dr. Rubul Mout</h2>
            <h3 className="text-2xl font-semibold text-white mb-4">Research Fellow</h3>
            <h4 className="text-xl text-gray-300 mb-6">Harvard Medical School & Boston Children's Hospital</h4>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <em>"From humble beginnings in rural India to groundbreaking research at Harvard Medical School, Dr. Rubul Mout exemplifies the transformative power of science and education. His journey from a poor peasant family to becoming a leading researcher in protein design and cell biology inspires countless students worldwide."</em>
            </p>
          </div>
        </div>
      </div>

                           {/* Main Bio */}
        <Card className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl p-8 md:p-12 hover:shadow-lg">
          <CardContent className="space-y-6 text-lg leading-relaxed">
            <p className="text-black font-bold">
              <strong>Dr. Rubul Mout</strong> is a Fellow (Research) at Harvard Medical School, Harvard University, 
              and the Stem Cell & Regenerative Biology Program, Boston Children's Hospital (BCH).
            </p>
            
            <p className="text-gray-900">
              Born, and educated in India, Dr. Mout moved to the United States to pursue his PhD 
              from the University of Massachusetts, Amherst. Prior to joining Harvard/BCH, he was a Washington 
              Research Foundation Innovation Fellow at the Institute for Protein Design, University of Washington.
            </p>
            
            <p className="text-gray-900">
              At Harvard/BCH, Dr. Mout developed soluble agonists for the Notch signaling pathway for T cell 
              development and function. These agonists promoted the development of T cells from bone marrow stem 
              cells and activated the Notch pathway in T cells during vaccination to boost cell-based immunity.
            </p>
            
            <p className="text-gray-900">
              Currently, Dr. Mout uses computational protein design technologies to modulate signaling in immune 
              development, function, and ageing. The ultimate goal of this research is to enhance T cell function 
              to better combat cancer, autoimmune diseases, and viral infections.
            </p>
            
            <p className="text-gray-900">
              Dr. Mout is the co-author of 40 research articles and the inventor of numerous
              technologies in gene editing, protein design, and T-cell engineering with multiple
              patents. During his PhD, he developed a technology for intracellular protein delivery and
              gene editing in mammalian cells, known as the 'E-tag' method, which was published in
              a series of multiple research papers and an approved patent. His work on protein
              design and Notch signaling in collaboration with his former postdoctoral mentor David
              Baker (2024 Nobel Laureate in Chemistry), George Daley (Dean, Harvard Medical
              School), and others was featured in Nature magazine. In addition, his research has
              been featured in numerous media, including a LabTV/NIH minidocumentary and an
              American Chemical Society (ACS) feature video.
            </p>
            
            <p className="text-gray-900">
              He is also the author of two books in Assamese. He founded Uplift Libraries, an
              initiative to create small-scale libraries for children in rural India, and the founder of
              Sunday Science Activism, and science outreach program to interact with college and
              university students from around the world.
            </p>
          </CardContent>
        </Card>

      {/* Timeline */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-10 text-white">Career Timeline</h3>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start gap-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-shrink-0 w-16 h-16 bg-red-900/20 rounded-lg flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

             {/* Books & Writing */}
       <Card className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl p-8 md:p-12 hover:shadow-lg">
         <CardContent className="space-y-6">
                                   <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-black">Literary Contributions</h3>
            </div>
           
           <div className="space-y-4 text-gray-900">
             <p>
               Dr. Mout is also the author of two books in Assamese, a memoir and a collection of short stories. His memoir depicts his journey from a poor 
               peasant's family in a far-remote corner of India, near the Assam-Arunachal border.
             </p>
             <p>
               The memoir, Moro Eta Sapon Ase, has been an instant bestseller, and since its first publication in 2017 it has 
               sold over 50,000 copies (as of January 2025), making it one of the highest-selling books 
               in the Assamese language. The book is also included in many school/college/university 
               curriculums across Assam.
             </p>
           </div>
         </CardContent>
       </Card>
    </div>
  );
};