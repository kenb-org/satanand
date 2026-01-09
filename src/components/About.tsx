import { Briefcase, MapPin, Phone, Mail, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "40% Faster Reporting",
      description: "Reduced monthly reporting time through VBA automation",
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "60% Better Visibility",
      description: "Improved process visibility with automated dashboards",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Technical Consultant",
      description: "Retained by two former employers for ongoing support",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Results-driven <span className="text-primary font-semibold">Operations Manager</span> and{" "}
              <span className="text-primary font-semibold">MIS Executive</span> with 4+ years of experience 
              transforming manual processes into automated, data-driven systems.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Expert in building scalable workflow automation, real-time dashboards, and inventory 
              management solutions using Excel VBA, Google Apps Script, Power BI, and Google AppSheet. 
              Specialized in architecting and deploying production-grade systems for resource-constrained 
              MSME manufacturing environments.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                New Delhi, India
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +91-9217168856
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                choubeysatanand79@gmail.com
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
