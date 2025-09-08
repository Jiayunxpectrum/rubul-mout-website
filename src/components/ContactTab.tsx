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
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Contact</h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
          I'm always interested in meaningful collaborations, research opportunities, and 
          discussions about advancing science education. Feel free to reach out.
        </p>
      </div>

      {/* Contact Information */}
      <Card className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl p-4 sm:p-6 hover:shadow-lg">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl text-black">
            Contact Information
          </CardTitle>
          <CardDescription className="text-gray-900">
            Primary contact details and institutional affiliation
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
          {contactInfo.map((contact, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-primary/10 rounded-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{contact.label}</h4>
                {contact.link ? (
                  <a 
                    href={contact.link}
                    className="text-primary hover:text-primary-glow transition-colors link-underline text-base sm:text-lg break-all"
                  >
                    {contact.value}
                  </a>
                ) : contact.links ? (
                  <div className="text-gray-900 text-base sm:text-lg">
                    {contact.links.map((link, linkIndex) => (
                      <span key={linkIndex}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-glow transition-colors link-underline break-words"
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
                    className="text-primary hover:text-primary-glow transition-colors link-underline text-base sm:text-lg break-words"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-foreground text-base sm:text-lg">{contact.value}</p>
                )}
                {contact.description && (
                  <p className="text-gray-800 text-xs sm:text-sm mt-1">{contact.description}</p>
                )}
                {/* Add Send Email button underneath the Email section */}
                {contact.label === "Email" && (
                  <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button 
                      size="default"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-2 sm:px-3 md:px-4 text-xs sm:text-sm"
                      asChild
                    >
                      <a href="mailto:rubul.mout@childrens.harvard.edu" className="flex items-center justify-center gap-1 sm:gap-2">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="whitespace-nowrap">Send Email</span>
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>


      {/* Office Hours Note */}
      <div className="text-center text-muted-foreground px-4">
        <p className="text-xs sm:text-sm">
          <strong>Note:</strong> Due to the nature of scientific research and international collaborations, 
          I maintain flexible communication hours. Please allow adequate time for thoughtful responses 
          to complex research inquiries.
        </p>
      </div>
    </div>
  );
};