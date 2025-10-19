import { useState } from "react";
import { Upload as UploadIcon, FileText, Image as ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter(
      (file) =>
        file.type === "application/pdf" ||
        file.type.startsWith("image/")
    );

    if (validFiles.length !== newFiles.length) {
      toast({
        title: "Invalid files",
        description: "Only PDF and image files are supported",
        variant: "destructive",
      });
    }

    setFiles((prev) => [...prev, ...validFiles]);
    toast({
      title: "Files uploaded",
      description: `${validFiles.length} file(s) added successfully`,
    });
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Upload Files</h1>
        <p className="text-muted-foreground">
          Upload PDF or image files for OCR processing
        </p>
      </div>

      <div className="grid gap-6">
        <Card
          className={`transition-all duration-300 ${
            isDragging ? "border-primary shadow-lg scale-[1.02]" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CardHeader>
            <CardTitle>Upload Area</CardTitle>
            <CardDescription>
              Drag and drop files here or click to browse
            </CardDescription>
          </CardHeader>
          <CardContent>
            <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadIcon className="w-12 h-12 mb-4 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF, PNG, JPG, JPEG (MAX. 10MB)
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".pdf,image/*"
                multiple
                onChange={handleFileInput}
              />
            </label>
          </CardContent>
        </Card>

        {files.length > 0 && (
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle>Uploaded Files ({files.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors animate-fade-in"
                  >
                    <div className="flex items-center gap-3">
                      {file.type === "application/pdf" ? (
                        <FileText className="w-5 h-5 text-primary" />
                      ) : (
                        <ImageIcon className="w-5 h-5 text-primary" />
                      )}
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">Process Files</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Upload;
