import { useState } from "react";
import { GitCompare, Upload, FileText, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Compare = () => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [isComparing, setIsComparing] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, fileNumber: 1 | 2) => {
    const file = e.target.files?.[0];
    if (file) {
      if (fileNumber === 1) setFile1(file);
      else setFile2(file);
    }
  };

  const handleCompare = () => {
    if (file1 && file2) {
      setIsComparing(true);
      setTimeout(() => setIsComparing(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Compare Documents</h1>
        <p className="text-muted-foreground">
          Compare two documents side by side to identify differences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle>Document 1</CardTitle>
            <CardDescription>Upload the first document</CardDescription>
          </CardHeader>
          <CardContent>
            <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
              {file1 ? (
                <div className="flex flex-col items-center">
                  <FileText className="w-12 h-12 mb-2 text-primary" />
                  <p className="text-sm font-medium">{file1.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {(file1.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="w-12 h-12 mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload document 1
                  </p>
                </div>
              )}
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileSelect(e, 1)}
              />
            </label>
          </CardContent>
        </Card>

        <Card className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <CardTitle>Document 2</CardTitle>
            <CardDescription>Upload the second document</CardDescription>
          </CardHeader>
          <CardContent>
            <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
              {file2 ? (
                <div className="flex flex-col items-center">
                  <FileText className="w-12 h-12 mb-2 text-primary" />
                  <p className="text-sm font-medium">{file2.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {(file2.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="w-12 h-12 mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload document 2
                  </p>
                </div>
              )}
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileSelect(e, 2)}
              />
            </label>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 animate-fade-in">
        <CardHeader>
          <CardTitle>Comparison Options</CardTitle>
          <CardDescription>Configure how documents should be compared</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!file1 || !file2 ? (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Please upload both documents to start comparison
              </AlertDescription>
            </Alert>
          ) : (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">File 1:</span>
                <span className="font-medium">{file1.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">File 2:</span>
                <span className="font-medium">{file2.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Comparison mode:</span>
                <span className="font-medium">Side by Side</span>
              </div>
            </div>
          )}

          <Button
            className="w-full"
            disabled={!file1 || !file2 || isComparing}
            onClick={handleCompare}
          >
            <GitCompare className="w-4 h-4 mr-2" />
            {isComparing ? "Comparing..." : "Compare Documents"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Compare;
