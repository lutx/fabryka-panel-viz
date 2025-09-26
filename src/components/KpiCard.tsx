import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
}

const KpiCard = ({ title, value, icon: Icon, trend, trendValue, className }: KpiCardProps) => {
  return (
    <div className={cn("bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all", className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-3">
            <Icon className="w-5 h-5 text-blue-600 mr-2" />
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
          {trend && trendValue && (
            <div className="flex items-center">
              <span className={cn(
                "text-sm font-semibold px-2 py-1 rounded-full",
                trend === "up" ? "text-green-700 bg-green-100" : 
                trend === "down" ? "text-red-700 bg-red-100" : 
                "text-gray-600 bg-gray-100"
              )}>
                {trend === "up" ? "↗ +" : trend === "down" ? "↘ " : "→ "}{trendValue}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KpiCard;