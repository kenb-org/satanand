import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Technical Consultant (Freelance)",
      company: "Unique Auto Products Private Limited",
      location: "New Delhi, India",
      period: "August 2025 – Present",
      type: "Consulting",
      description: [
        "Provide ongoing technical support and maintenance for custom-built FMS and IMS systems",
        "Troubleshoot and resolve system bugs using Google Apps Script",
        "Retained as consulting partner based on system quality and reliability",
      ],
    },
    {
      title: "MIS Executive",
      company: "Unique Auto Products Private Limited",
      location: "New Delhi, India",
      period: "February 2025 – August 2025",
      type: "Full-time",
      description: [
        "Architected and deployed custom Flow Monitoring System (FMS) and Inventory Management System (IMS)",
        "Built automated workflow solutions using Google Apps Script and Google Sheets",
        "Enhanced data-driven decision-making with automated dashboards improving process visibility by 60%",
      ],
    },
    {
      title: "Technical Consultant (Freelance)",
      company: "STB Technologies Private Limited",
      location: "Bahadurgarh, Haryana, India",
      period: "March 2025 – Present",
      type: "Consulting",
      description: [
        "Provide ongoing maintenance and feature enhancement for custom inventory management systems",
        "Support production-grade applications including location-based inventory tracking app",
        "Ensure system reliability for mission-critical manufacturing operations",
      ],
    },
    {
      title: "MIS Executive",
      company: "STB Technologies Private Limited",
      location: "Bahadurgarh, Haryana, India",
      period: "July 2021 – March 2025",
      type: "Full-time",
      description: [
        "Architected systematic warehouse management system with unique coding schema for 500+ SKUs",
        "Developed mobile-first inventory search application using Google AppSheet",
        "Reduced monthly reporting time by 40% through Excel VBA automation",
        "Built dynamic dashboards for Sales, Production, and Dispatch teams",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            4+ years of delivering automation solutions in manufacturing environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-8 md:mb-12 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

                <Card className={`ml-6 md:ml-0 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}>
                  <CardContent className="p-6">
                    <div className={`flex flex-wrap items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Badge variant="outline" className="border-primary/50 text-primary text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-foreground/60 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <ul className={`space-y-2 text-foreground/70 text-sm ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className={`text-primary mt-1 ${index % 2 === 0 ? "md:order-2" : ""}`}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
