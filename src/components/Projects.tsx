import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Database, Gauge, Package, Users, FileSpreadsheet, BarChart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Flow Monitoring System (FMS)",
      description: "Custom-built production tracking system from scratch for enterprise manufacturing operations. Real-time workflow monitoring with automated alerts and reporting.",
      technologies: ["Google Apps Script", "Google Sheets", "Automation"],
      impact: "60% improved process visibility",
      type: "Enterprise System",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Inventory Management System (IMS)",
      description: "End-to-end inventory tracking solution with automated stock alerts, barcode integration, and real-time dashboard for manufacturing environments.",
      technologies: ["Google AppSheet", "Apps Script", "Data Modeling"],
      impact: "Eliminated manual tracking errors",
      type: "Full-Stack App",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Warehouse Management System",
      description: "Systematic warehouse management with unique coding schema for 500+ SKUs across multiple storage zones. Includes location-based tracking.",
      technologies: ["AppSheet", "Google Sheets", "Mobile App"],
      impact: "Instant item location for staff",
      type: "Mobile-First App",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Self-Service Analytics Platform",
      description: "Interactive data platform enabling 50+ authorized personnel to access latest business insights independently without IT intervention.",
      technologies: ["Power BI", "Looker Studio", "Data Visualization"],
      impact: "50+ users empowered",
      type: "BI Dashboard",
    },
    {
      icon: <FileSpreadsheet className="h-8 w-8" />,
      title: "Automated Reporting Suite",
      description: "Excel VBA automation suite for monthly reporting, eliminating manual data entry and reducing reporting cycle time significantly.",
      technologies: ["Excel VBA", "Macros", "Power Query"],
      impact: "40% time reduction",
      type: "Automation",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "KPI Dashboard System",
      description: "Dynamic dashboards for Sales, Production, and Dispatch teams providing real-time KPI visibility and actionable insights.",
      technologies: ["Power BI", "DAX", "Data Modeling"],
      impact: "Real-time KPI tracking",
      type: "Analytics",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Production-grade systems deployed in real manufacturing environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-background border-border hover:border-primary/50 transition-all hover:shadow-xl group cursor-pointer overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-foreground/70 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/30 text-foreground/80 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-primary">
                    📈 {project.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
