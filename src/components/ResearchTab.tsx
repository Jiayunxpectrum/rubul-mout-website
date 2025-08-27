import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import chatgptProteinImg from "@/assets/ChatGPT Image Aug 23, 2025, 02_35_32 PM.png";
import workImmunoageingImg from "@/assets/work-immunoageing.jpg";
import cancerTImg from "@/assets/CancerT.png";
import proteinMoleculeBg from "@/assets/protein-molecule-ai.png";

export const ResearchTab = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Background Image - Same as home page */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${proteinMoleculeBg})`,
        }}
      />
      
      {/* Fixed Black Overlay - 45% opacity for darker background */}
      <div className="fixed inset-0 bg-black/45" />
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
      {/* Header */}
      <div className="text-center space-y-6 animate-fade-in-up">
        <h1 className="text-5xl font-bold text-white leading-tight">My Research Focus</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Using computational protein design technologies to modulate signaling in immune development, function, and ageing
        </p>
      </div>

      {/* Detailed Research Sections */}
      <section className="space-y-16">
        {/* Protein Design & Engineering */}
        <div id="protein-design" className="space-y-6">
          <h2 className="text-3xl font-bold text-white border-b-2 border-primary pb-2">
            Protein Design & Engineering
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-primary-foreground leading-relaxed">
                Proteins are the workhorses of cellular function, performing a myriad of essential tasks
                from catalyzing biochemical reactions to providing structural support. Our research
                focuses on understanding and manipulating these molecular machines to uncover new
                biological functions and develop therapeutic applications.
              </p>
              <p className="text-primary-foreground leading-relaxed">
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
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Boosting Immune Cell Function in Cancer */}
        <div id="immune-cell-cancer" className="space-y-6">
          <h2 className="text-3xl font-bold text-white border-b-2 border-primary pb-2">
            Boosting Immune Cell Function in Cancer
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-primary-foreground leading-relaxed">
                T cells act as the immune system's frontline warriors, constantly patrolling the body to
                detect and eliminate abnormal cells, including cancer. Their ability to recognize tumor-
                associated antigens (TAAs) allows them to target and destroy cancer cells.
              </p>
              <p className="text-primary-foreground leading-relaxed">
                Unfortunately, cancer cells often escape detection because they are highly
                heterogeneous and may express TAAs at very low levels. In addition, tumors can
                actively suppress or manipulate T cells, weakening their killing ability and allowing the
                cancer to persist.
              </p>
              <p className="text-primary-foreground leading-relaxed">
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
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Immunology & Aging */}
        <div id="immunology-aging" className="space-y-6">
          <h2 className="text-3xl font-bold text-white border-b-2 border-primary pb-2">
            Immunology & Aging
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-primary-foreground leading-relaxed">
                The immune system undergoes significant changes as we age, leading to increased
                susceptibility to infections, reduced vaccine efficacy, and higher rates of chronic
                inflammatory diseases. Understanding these age-related changes is crucial for
                developing interventions that can promote healthier aging.
              </p>
              <p className="text-primary-foreground leading-relaxed">
                Our research focuses on characterizing the molecular and cellular changes that occur in
                the aging immune system. This includes studying factors associated with reduced
                lymphoid immune cell populations, alterations in cytokine production, and modifications
                in immune cell function.
              </p>
              <p className="text-primary-foreground leading-relaxed">
                We are particularly interested in developing protein design strategies to rejuvenate the
                aging lymphoid immune system. This includes investigating the potential of various
                designer protein-based interventions to regenerate lymphoid cells to restore immune
                function in elderly mice—and eventually in human populations—and improve their
                response to vaccines and other treatments.
              </p>
            </div>
            <div className="space-y-4">
              <img 
                src={workImmunoageingImg} 
                alt="Immunology & Aging Findings" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <br /><br/>
      <h1 className="text-5xl text-center font-bold text-white leading-tight">Mentors and Collaborators</h1>

      <div className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl hover:shadow-lg backdrop-blur-sm p-8">
        <h2 className="text-3xl text-primary mb-6">Mentors</h2>
        <p className="text-gray-900 leading-relaxed text-lg">
        <li>David Baker, Nobel laureate in Chemistry 2024, University of Washington</li>
        <li>George Daley, Dean of Harvard Medical School</li>
        </p>
      </div>

      <div className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl hover:shadow-lg backdrop-blur-sm p-8">
        <h2 className="text-3xl text-primary mb-6">Collaborators</h2>
        <p className="text-gray-900 leading-relaxed text-lg">
        <li>Stephen C. Blacklow, Chair, Department of Biological Chemistry and Molecular Pharmacology, Harvard University</li>
        <li>Urban Lendahl, Former Nobel Committee Chairman, Karolinska Institutet</li>
        </p>
      </div>
      </div>
    </div>
  );
};
