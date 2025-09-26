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
    <div className={cn("dashboard-card kpi-card", className)}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="kpi-label text-dashboard-muted">{title}</p>
          <p className="kpi-value text-dashboard-text">{value}</p>
          {trend && trendValue && (
            <div className="flex items-center mt-2">
              <span className={cn(
                "text-xs font-medium",
                trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-dashboard-muted"
              )}>
                {trend === "up" ? "+" : trend === "down" ? "-" : ""}{trendValue}
              </span>
            </div>
          )}
        </div>
        <div className="ml-4">
          <Icon className="w-8 h-8 text-chart-primary" />
        </div>
      </div>
    </div>
  );
};

export default KpiCard;