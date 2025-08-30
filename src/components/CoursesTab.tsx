import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp } from "lucide-react";

export const CoursesTab = () => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    immunoEngineering: true,
    modernMedicine: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const initiatives = [
    {
      id: 'immunoEngineering',
      title: "Immuno-Engineering (CLOSED)",
      description: (
        <>
          <br></br>
          description
        </>
      )
    },
    {
      id: 'modernMedicine',
      title: "A Six-Week Course on Modern Medicine (CLOSED)",
      description: (
        <>
          <br></br>
          <strong>Course update:</strong> 210 registered participants (undergraduate and postgraduate students) joined this course from many countries across the world. Most participants were from India, but there were significant numbers from countries such as Bangladesh, Jordan, Egypt, Australia, Gambia. Among Indian students, most came from places like Aligarh Muslim University, IISER-Trivandrum, Delhi University, Gauhati University, Tezpur University, and many other known and unknown places. Some of the lectures are now available online at:{" "}
          <a 
            href="https://www.youtube.com/channel/UCFa70atKObm0UEptWgp_38g" 
            className="text-primary font-medium hover:text-primary-glow transition-colors link-underline break-all"
          >
            https://www.youtube.com/channel/UCFa70atKObm0UEptWgp_38g
          </a>
          <br /><br />
          <strong>Lectures delivered by:</strong> Dr. Rubul Mout and Dr. Rajesh Gunage
          <br /><br />
          <strong>Dates/Time:</strong> 2/27/2022-3/3/2022
          <br /><br />
          <strong>Deadline for application:</strong> CLOSED.
          <br /><br />
          <strong>Who:</strong> College and university students with an interest in scientific career in Medicine.
          <br /><br />
          <strong>Objective:</strong> In the last two years, humanity has seen a great upheaval of health crisis, causing enormous economic loss to the world. But the good news is that we have had vaccines rolled out within a year after the first appearance of COVID-19, an incredible achievement of modern science and technology. Twenty years ago, it would have taken at least many years to develop such a vaccine. Thanks to all the science and technological development that happened in the last twenty years—from Next-generation sequencing to Cryo-electron microscopy to Protein engineering to RNA delivery. Breakthrough discoveries came from all reaches of scientists—Katalin Kariko, Drew Weissman, Sarah Gilbert, just to name a few.
          <br /><br />
          Yet participation in science by students is really low, especially from disadvantaged places and classes. This is primarily for most resources are centralized, and people who get good 'training' early on tend to get access to these resources. This course is an attempt to reach out to students from disadvantaged places to inform them about the science of modern medicine and encourage them to take a scientific career.
          <br /><br />
          College and university students from any discipline of sciences can apply for this course. To be considered for this course, they must send me an email with the following details: 1) applicant's name, affiliation, study level (college or university, which semester, etc), and study discipline; 2) a short paragraph on what is the applicant's dream and why he/she wants to participate in the course. Note, all these details are MUST—a mere email with 'please accept me into the course' is not enough and hence will not be considered. This is just to make sure that the applicants are serious about a science career. Please email your application to{" "}
          <a 
            href="mailto:rubulharvard@gmail.com" 
            className="text-primary font-medium hover:text-primary-glow transition-colors link-underline break-all"
          >
            rubulharvard@gmail.com
          </a>
          {" "}before February 15th, 2022 (application is now closed).
          <br /><br />
          Learn more at at my Harvard webpage:{" "}
          <a 
            href="https://scholar.harvard.edu/rubulmout/teaching" 
            className="text-primary font-medium hover:text-primary-glow transition-colors link-underline break-all"
          >
            https://scholar.harvard.edu/rubulmout/teaching
          </a>
          .
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">Courses</h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Courses designed for college and university students studying science
            </p>
          </div>

          {/* Main Initiatives - Expandable on mobile only */}
          <div className="lg:hidden space-y-4">
            {initiatives.map((initiative, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleSection(initiative.id)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground break-words border-b-2 border-primary pb-2">{initiative.title}</h3>
                    {expandedSections[initiative.id] ? (
                      <ChevronUp className="h-5 w-5 text-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-foreground" />
                    )}
                  </div>
                </button>
                {expandedSections[initiative.id] && (
                  <Card className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl p-4 sm:p-6 mt-2 hover:shadow-lg">
                    <CardContent className="p-4 sm:p-6">
                      <div className="text-base sm:text-lg text-gray-900 break-words">{initiative.description}</div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>

          {/* Main Initiatives - Desktop version (unchanged) */}
          <section className="hidden lg:block">
            <div className="space-y-6 sm:space-y-8">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl hover:shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl sm:text-2xl text-primary break-words border-b-2 border-primary pb-2">{initiative.title}</CardTitle>
                        <CardDescription className="text-base sm:text-lg text-gray-900 mt-1 break-words">{initiative.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};