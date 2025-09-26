import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BarChart3, FileText } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/" || location.pathname === "/dashboard";

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">
                Dashboard Produkcji – Fabryka Okien PVC & ALU
              </h1>
            </div>
            <div className="flex space-x-1">
              <Link
                to="/dashboard"
                className={cn(
                  "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isDashboard
                    ? "bg-blue-100 text-blue-700 border border-blue-200"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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