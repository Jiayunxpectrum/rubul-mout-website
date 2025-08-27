import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Building } from "lucide-react";

export const ContactTab = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rubul.mout@childrens.harvard.edu",
      link: "mailto:rubul.mout@childrens.harvard.edu"
    },
    {
      icon: Building,
      label: "Institution",
      value: "Harvard Medical School & Boston Children's Hospital",
      description: "Stem Cell & Regenerative Biology Program",
      links: [
        {
          text: "Harvard Medical School",
          url: "https://hms.harvard.edu/"
        },
        {
          text: "Boston Children's Hospital",
          url: "https://www.childrenshospital.org/"
        }
      ]
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Boston, Massachusetts",
      description: "Cambridge/Boston Area",
      mapLink: "https://maps.google.com/?q=Boston+Massachusetts"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-5xl font-bold text-white mb-4">Contact</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm always interested in meaningful collaborations, research opportunities, and 
          discussions about advancing science education. Feel free to reach out.
        </p>
      </div>

      {/* Contact Information */}
      <Card className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-black">
            Contact Information
          </CardTitle>
          <CardDescription className="text-gray-900">
            Primary contact details and institutional affiliation
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {contactInfo.map((contact, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <contact.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">{contact.label}</h4>
                {contact.link ? (
                  <a 
                    href={contact.link}
                    className="text-primary hover:text-primary-glow transition-colors link-underline text-lg"
                  >
                    {contact.value}
                  </a>
                ) : contact.links ? (
                  <div className="text-gray-900 text-lg">
                    {contact.links.map((link, linkIndex) => (
                      <span key={linkIndex}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-glow transition-colors link-underline"
                        >
                          {link.text}
                        </a>
                        {linkIndex < contact.links.length - 1 && " & "}
                      </span>
                    ))}
                  </div>
                ) : contact.mapLink ? (
                  <a 
                    href={contact.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-glow transition-colors link-underline text-lg"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-foreground text-lg">{contact.value}</p>
                )}
                {contact.description && (
                  <p className="text-gray-800 text-sm mt-1">{contact.description}</p>
                )}
                {/* Add Send Email button underneath the Email section */}
                {contact.label === "Email" && (
                  <div className="mt-4 flex gap-3">
                    <Button 
                      size="default"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <a href="mailto:rubul.mout@childrens.harvard.edu" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Send Email
                      </a>
                    </Button>
                    <Button 
                      size="default"
                      className="bg-[#A51C30] hover:bg-[#A51C30]/90 text-white"
                      onClick={() => {
                        // Find and click the Ask AI button to open the chatbox
                        const askAiButton = document.querySelector('[data-testid="ask-ai-button"]') as HTMLButtonElement;
                        if (askAiButton) {
                          askAiButton.click();
                        }
                       }}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Quick Contact
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* AI Assistant Note */}
      <Card className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl p-6">
        <CardHeader>
          <CardTitle className="text-xl text-black">
            AI Assistant Available
          </CardTitle>
          <CardDescription className="text-gray-900">
            Get instant help and automatically send emails to Dr. Mout
          </CardDescription>
        </CardHeader>
        <CardContent>
                     <p className="text-gray-800">
             Use the <strong>"Ask AI"</strong> button (bottom right) to get instant answers to your questions 
             about Dr. Mout's research, publications, or teaching. The AI can also automatically send 
             Dr. Mout an email with your contact information and inquiry on your behalf.
           </p>
        </CardContent>
      </Card>

      {/* Office Hours Note */}
      <div className="text-center text-muted-foreground">
        <p className="text-sm">
          <strong>Note:</strong> Due to the nature of scientific research and international collaborations, 
          I maintain flexible communication hours. Please allow adequate time for thoughtful responses 
          to complex research inquiries.
        </p>
      </div>
    </div>
  );
};