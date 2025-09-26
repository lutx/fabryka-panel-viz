import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BarChart3, FileText } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/" || location.pathname === "/dashboard";

  return (
    <nav className={cn(
      "border-b transition-colors",
      isDashboard ? "bg-dashboard-bg border-dashboard-border" : "bg-background border-border"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className={cn(
                "text-xl font-bold",
                isDashboard ? "text-dashboard-text" : "text-foreground"
              )}>
                Dashboard Produkcji – Fabryka Okien PVC & ALU
              </h1>
            </div>
            <div className="flex space-x-1">
              <Link
                to="/dashboard"
                className={cn(
                  "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isDashboard
                    ? "bg-dashboard-card text-dashboard-text border border-dashboard-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboard Produkcji
              </Link>
              <Link
                to="/raport"
                className={cn(
                  "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  !isDashboard
                    ? "bg-primary text-primary-foreground"
                    : isDashboard
                    ? "text-dashboard-muted hover:text-dashboard-text hover:bg-dashboard-card/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <FileText className="w-4 h-4 mr-2" />
                Raport Zarządczy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;