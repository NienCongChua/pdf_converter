import { Clock, FileText, Download, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const History = () => {
  const historyItems = [
    {
      id: 1,
      fileName: "contract_2024.pdf",
      outputFormat: "Word",
      date: "2024-01-15 14:30",
      status: "completed",
      size: "2.4 MB",
    },
    {
      id: 2,
      fileName: "invoice_december.pdf",
      outputFormat: "Excel",
      date: "2024-01-14 10:15",
      status: "completed",
      size: "1.8 MB",
    },
    {
      id: 3,
      fileName: "presentation_slides.pdf",
      outputFormat: "PowerPoint",
      date: "2024-01-13 16:45",
      status: "completed",
      size: "5.2 MB",
    },
    {
      id: 4,
      fileName: "meeting_notes.jpg",
      outputFormat: "Text",
      date: "2024-01-12 09:20",
      status: "completed",
      size: "850 KB",
    },
    {
      id: 5,
      fileName: "document_scan.pdf",
      outputFormat: "Word",
      date: "2024-01-11 13:00",
      status: "completed",
      size: "3.1 MB",
    },
  ];

  return (
    <div className="container mx-auto p-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Conversion History</h1>
        <p className="text-muted-foreground">
          View and manage your recent OCR conversions
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Conversions</CardTitle>
          <CardDescription>Your last 5 conversion activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {historyItems.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-all hover:scale-[1.01] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-2 bg-background rounded-lg">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium">{item.fileName}</p>
                      <Badge variant="secondary" className="text-xs">
                        {item.outputFormat}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.date}
                      </span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default History;
