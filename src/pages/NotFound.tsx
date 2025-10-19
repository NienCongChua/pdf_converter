import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="text-center animate-fade-in">
        <div className="mb-8 animate-scale-in">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
            <Search className="w-12 h-12 text-primary animate-pulse" />
          </div>
          <h1 className="text-8xl font-bold text-primary mb-2">404</h1>
          <p className="text-2xl font-semibold text-foreground mb-2">Page Not Found</p>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button asChild size="lg" className="min-w-[150px]">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[150px]">
            <Link to="#" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Lost? Try searching from the <Link to="/" className="text-primary hover:underline">homepage</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
