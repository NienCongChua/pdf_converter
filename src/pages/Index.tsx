import { Upload, FileText, Table, Presentation, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const outputFormats = [
    { name: "Word", icon: FileText, description: "Convert to .docx format" },
    { name: "Excel", icon: Table, description: "Convert to .xlsx format" },
    { name: "PowerPoint", icon: Presentation, description: "Convert to .pptx format" },
    { name: "Text", icon: FileCode, description: "Convert to .txt format" },
  ];

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Welcome to NienOCR4Community
        </h2>
        <p className="text-muted-foreground">
          Convert your PDF files and images to editable documents with advanced OCR technology
        </p>
      </div>

      <Card className="mb-8 border-2 border-dashed border-border bg-muted/30 hover:bg-muted/50 transition-colors">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Upload className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Upload Your File</h3>
          <p className="text-muted-foreground mb-6 text-center max-w-md">
            Drop your PDF or image file here, or click to browse
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Select File
          </Button>
        </CardContent>
      </Card>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Choose Output Format</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {outputFormats.map((format) => (
            <Card
              key={format.name}
              className="hover:shadow-lg transition-shadow cursor-pointer border-border hover:border-primary"
            >
              <CardHeader>
                <format.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">{format.name}</CardTitle>
                <CardDescription>{format.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-sidebar-accent">
        <CardHeader>
          <CardTitle>Quick Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Supported formats: PDF, PNG, JPG, JPEG</li>
            <li>• Maximum file size: 50MB</li>
            <li>• For best results, use high-quality scans</li>
            <li>• Processing time varies based on file size and complexity</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
