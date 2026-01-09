import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, BarChart3, Settings, Cpu, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Automation & Scripting",
      skills: ["Excel VBA", "Macros", "Power Query", "Google Apps Script", "Process Automation"],
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Application Development",
      skills: ["Google AppSheet", "No-Code/Low-Code", "JavaScript", "HTML/CSS"],
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Analytics & BI",
      skills: ["Microsoft Power BI", "Looker Studio", "Pivot Tables", "DAX", "Data Modeling"],
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Operations & Systems",
      skills: ["Inventory Management", "Warehouse Systems", "Production Tracking", "MIS Reporting"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Emerging Technologies",
      skills: ["AI-Assisted Development", "Prompt Engineering", "Continuous Learning"],
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Platforms",
      skills: ["Google Workspace", "Microsoft Office 365", "Data Visualization"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit for building automated solutions and data-driven systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
