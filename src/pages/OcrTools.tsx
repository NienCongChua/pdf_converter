import { Scan, Languages, Sparkles, Zap, Brain, ImageIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const OcrTools = () => {
  const tools = [
    {
      title: "Multi-Language OCR",
      description: "Extract text from documents in multiple languages",
      icon: Languages,
      color: "text-blue-600",
      features: ["Vietnamese", "English", "Chinese", "Japanese"],
    },
    {
      title: "AI-Powered Enhancement",
      description: "Improve image quality before OCR processing",
      icon: Sparkles,
      color: "text-purple-600",
      features: ["Auto-correct", "Noise removal", "Contrast boost"],
    },
    {
      title: "Batch Processing",
      description: "Process multiple documents at once",
      icon: Zap,
      color: "text-yellow-600",
      features: ["Fast processing", "Queue management", "Auto-naming"],
    },
    {
      title: "Smart Detection",
      description: "Automatically detect tables, forms, and layouts",
      icon: Brain,
      color: "text-green-600",
      features: ["Table extraction", "Form detection", "Layout analysis"],
    },
    {
      title: "Image Pre-processing",
      description: "Advanced image optimization tools",
      icon: ImageIcon,
      color: "text-orange-600",
      features: ["Rotation", "Cropping", "Deskewing"],
    },
    {
      title: "Advanced OCR",
      description: "High-accuracy text recognition engine",
      icon: Scan,
      color: "text-red-600",
      features: ["Handwriting", "Low quality", "Complex layouts"],
    },
  ];

  return (
    <div className="container mx-auto p-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">OCR Tools</h1>
        <p className="text-muted-foreground">
          Advanced OCR features and tools for better text extraction
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all hover:scale-[1.02] animate-scale-in cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="p-2 bg-muted rounded-lg">
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <Badge variant="secondary">New</Badge>
              </div>
              <CardTitle className="mt-4">{tool.title}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                {tool.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full" variant="outline">
                Try Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OcrTools;
