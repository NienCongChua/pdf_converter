import { useState } from "react";
import { FileText, FileSpreadsheet, Presentation, Type, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

type OutputFormat = "word" | "excel" | "powerpoint" | "txt";

const Convert = () => {
  const [selectedFormat, setSelectedFormat] = useState<OutputFormat>("word");
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);

  const formats = [
    {
      id: "word" as OutputFormat,
      name: "Microsoft Word",
      description: "Convert to .docx format",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      id: "excel" as OutputFormat,
      name: "Microsoft Excel",
      description: "Convert to .xlsx format",
      icon: FileSpreadsheet,
      color: "text-green-600",
    },
    {
      id: "powerpoint" as OutputFormat,
      name: "PowerPoint",
      description: "Convert to .pptx format",
      icon: Presentation,
      color: "text-orange-600",
    },
    {
      id: "txt" as OutputFormat,
      name: "Plain Text",
      description: "Convert to .txt format",
      icon: Type,
      color: "text-gray-600",
    },
  ];

  const handleConvert = () => {
    setIsConverting(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsConverting(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="container mx-auto p-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Convert Documents</h1>
        <p className="text-muted-foreground">
          Choose your preferred output format for OCR conversion
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle>Select Output Format</CardTitle>
            <CardDescription>Choose the format for your converted document</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedFormat}
              onValueChange={(value) => setSelectedFormat(value as OutputFormat)}
            >
              <div className="space-y-3">
                {formats.map((format) => (
                  <div
                    key={format.id}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-muted/50 ${
                      selectedFormat === format.id
                        ? "border-primary bg-primary/5"
                        : "border-border"
                    }`}
                    onClick={() => setSelectedFormat(format.id)}
                  >
                    <RadioGroupItem value={format.id} id={format.id} />
                    <div className="flex items-center gap-3 flex-1">
                      <format.icon className={`w-6 h-6 ${format.color}`} />
                      <div>
                        <Label htmlFor={format.id} className="cursor-pointer font-medium">
                          {format.name}
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          {format.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle>Conversion Settings</CardTitle>
            <CardDescription>Configure your conversion options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Selected format:</span>
                <span className="font-medium">
                  {formats.find((f) => f.id === selectedFormat)?.name}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Quality:</span>
                <span className="font-medium">High</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">OCR Language:</span>
                <span className="font-medium">Vietnamese & English</span>
              </div>
            </div>

            {isConverting && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Converting...</span>
                  <span className="font-medium">{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>
            )}

            <div className="pt-4 space-y-2">
              <Button
                className="w-full"
                onClick={handleConvert}
                disabled={isConverting}
              >
                {isConverting ? "Converting..." : "Start Conversion"}
              </Button>
              {progress === 100 && (
                <Button className="w-full animate-scale-in" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Result
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Convert;
