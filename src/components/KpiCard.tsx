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
    <div
      className={cn(
        "flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 px-6 py-5 shadow-lg shadow-slate-950/40 transition-all",
        "hover:border-slate-700 hover:shadow-xl",
        className
      )}
    >
      <div className="flex items-center gap-3 text-slate-300">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
          <Icon className="h-5 w-5 text-indigo-300" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-400">{title}</p>
      </div>
      <p className="text-4xl font-bold leading-none text-slate-50">{value}</p>
      {trend && trendValue && (
        <div className="mt-2 flex items-center">
          <span
            className={cn(
              "flex items-center gap-1 rounded-full border px-3 py-1 text-sm font-semibold",
              trend === "up"
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                : trend === "down"
                  ? "border-rose-500/40 bg-rose-500/10 text-rose-300"
                  : "border-slate-500/40 bg-slate-500/10 text-slate-300"
            )}
          >
            {trend === "up" && <span aria-hidden>↗</span>}
            {trend === "down" && <span aria-hidden>↘</span>}
            {trend === "neutral" && <span aria-hidden>→</span>}
            <span>{trend === "up" ? `+${trendValue}` : trendValue}</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default KpiCard;