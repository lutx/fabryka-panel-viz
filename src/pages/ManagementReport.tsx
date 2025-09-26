import { 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Bar,
  Line,
  ComposedChart,
  BarChart,
  LineChart,
} from "recharts";
import { 
  kpiData,
  dailyProductionData,
  revenueAndMarginData,
  machineEfficiencyData,
  backlogBySegmentData,
  materialUsageData,
  energyCostTrendData,
  unitCostByProductData,
  managementReportData,
} from "@/data/demoData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Gauge, Package, Zap } from "lucide-react";

const sum = (values: number[]) => values.reduce((acc, value) => acc + value, 0);
const formatNumber = (value: number, options?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat("pl-PL", options).format(value);
const formatWithSign = (
  value: number,
  options?: Intl.NumberFormatOptions,
) => {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "±";
  return `${sign}${formatNumber(Math.abs(value), options)}`;
};
const cardBase = "rounded-lg border border-gray-200 bg-white shadow-sm";
const cardTitleClass = "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500";

const ManagementReport = () => {
  const totalRevenue = sum(revenueAndMarginData.map((item) => item.revenue));
  const avgMargin =
    sum(revenueAndMarginData.map((item) => item.margin)) /
    revenueAndMarginData.length;
  const productionActual = sum(dailyProductionData.map((item) => item.actual));
  const productionPlan = sum(dailyProductionData.map((item) => item.plan));
  const productionDelta = productionActual - productionPlan;
  const productionDeltaPct = (productionDelta / productionPlan) * 100;
  const oeeAverage =
    sum(machineEfficiencyData.map((item) => item.oee)) /
    machineEfficiencyData.length;
  const oeeTarget = machineEfficiencyData[0]?.target ?? 0;
  const backlogAverage =
    sum(backlogBySegmentData.map((item) => item.days)) /
    backlogBySegmentData.length;
  const latestEnergyCost =
    energyCostTrendData[energyCostTrendData.length - 1]?.cost ?? 0;
  const previousEnergyCost =
    energyCostTrendData[energyCostTrendData.length - 2]?.cost ??
    latestEnergyCost;
  const energyDelta = latestEnergyCost - previousEnergyCost;
  const averageUnitCost =
    sum(unitCostByProductData.map((item) => item.cost)) /
    unitCostByProductData.length;
  const avgMaterialUsage =
    sum(materialUsageData.map((item) => item.usage)) /
    materialUsageData.length;
  const planBaseline = materialUsageData[0]?.plan ?? 100;
  const materialVariance = avgMaterialUsage - planBaseline;

  return (
    <div className="min-h-screen bg-slate-100 py-6">
      <div className="mx-auto max-w-[1500px] px-6">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-slate-500">
              Raport zarządczy
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-900">
              Kokpit wyników tygodniowych
              </h1>
            <p className="text-sm text-slate-500">
              Zestawienie KPI produkcji i finansów dla zarządu
            </p>
            </div>
          <div className={`${cardBase} px-5 py-3`}>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Okres raportowy
            </p>
            <p className="text-lg font-semibold text-slate-900">
              22–28 września 2025
            </p>
            <p className="text-xs text-slate-500">
              Aktualizacja: {new Date().toLocaleDateString("pl-PL")}
            </p>
            </div>
        </header>

        <section className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <div className={`${cardBase} p-4`}>
              <h2 className={cardTitleClass}>Przychód i marża – tydzień</h2>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={revenueAndMarginData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="day" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis yAxisId="left" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis yAxisId="right" orientation="right" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip
                      formatter={(value: number, name) => [
                        name === "margin" ? `${value}%` : `${value.toFixed(2)} mln PLN`,
                        name === "margin" ? "Marża" : "Przychód",
                      ]}
                    />
                    <Bar yAxisId="left" dataKey="revenue" fill="#60a5fa" radius={[6, 6, 0, 0]} name="Przychód" />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="margin" 
                        stroke="#10b981" 
                        strokeWidth={3}
                      name="Marża %"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
              </div>
            </div>
            <div className={`${cardBase} p-4`}>
              <h2 className={cardTitleClass}>Produkcja dzienna vs plan</h2>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={dailyProductionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="day" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip formatter={(value: number, name) => [`${value} szt.`, name === "actual" ? "Rzeczywista" : "Plan"]} />
                    <Bar dataKey="actual" fill="#38bdf8" radius={[6, 6, 0, 0]} name="Rzeczywista" />
                    <Line type="monotone" dataKey="plan" stroke="#f97316" strokeWidth={3} strokeDasharray="6 6" name="Plan" />
                  </ComposedChart>
                </ResponsiveContainer>
                </div>
                </div>
              </div>
          <div className="space-y-4">
            <div className={`${cardBase} p-4`}>
              <h2 className={cardTitleClass}>Efektywność maszyn (OEE)</h2>
              <div className="mt-4 h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={machineEfficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="machine" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip formatter={(value: number, name) => [`${value}%`, name === "oee" ? "OEE" : "Cel"]} />
                    <Bar dataKey="oee" fill="#22d3ee" radius={[6, 6, 0, 0]} name="OEE" />
                    <Line type="monotone" dataKey="target" stroke="#f97316" strokeWidth={3} strokeDasharray="6 6" name="Cel" />
                  </ComposedChart>
                </ResponsiveContainer>
        </div>
                  </div>
            <div className={`${cardBase} p-4`}>
              <h2 className={cardTitleClass}>Backlog i zużycie</h2>
              <div className="mt-4 h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={backlogBySegmentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="segment" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip formatter={(value: number) => [`${value} dni`, "Backlog"]} />
                    <Bar dataKey="days" fill="#818cf8" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 h-40 border-t border-gray-200 pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={materialUsageData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="material" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip formatter={(value: number) => [`${value}%`, "Zużycie"]} />
                    <Bar dataKey="usage" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
                    <Line type="monotone" dataKey="plan" stroke="#334155" strokeWidth={2} strokeDasharray="5 5" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
          </div>
        </div>
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-[2fr,1fr]">
          <div className={`${cardBase} p-4`}>
            <h2 className={cardTitleClass}>Wyniki linii produkcyjnych</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full table-fixed border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-[0.2em] text-slate-500">
                    <th className="px-3 py-2">Linia</th>
                    <th className="px-3 py-2">Produkcja</th>
                    <th className="px-3 py-2">Braki</th>
                    <th className="px-3 py-2">OEE</th>
                    <th className="px-3 py-2">Koszt energii</th>
                    <th className="px-3 py-2">Koszt jednostkowy</th>
                  </tr>
                </thead>
                <tbody>
                  {managementReportData.summary.map((row) => (
                    <tr key={row.line} className="rounded-md bg-slate-50">
                      <td className="px-3 py-2 font-semibold text-slate-700">{row.line}</td>
                      <td className="px-3 py-2 text-slate-600">{formatNumber(row.production)} szt.</td>
                      <td className="px-3 py-2 text-slate-600">{row.defects}%</td>
                      <td className="px-3 py-2 text-slate-600">{row.oee}%</td>
                      <td className="px-3 py-2 text-slate-600">{formatNumber(row.energyCost)} PLN</td>
                      <td className="px-3 py-2 text-slate-600">{row.unitCost} PLN</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>

          <div className={`${cardBase} p-4 space-y-4`}>
            <h2 className={cardTitleClass}>Najważniejsze wnioski</h2>
            <div className="rounded-md border border-emerald-100 bg-emerald-50 p-3">
              <p className="text-sm font-semibold text-emerald-700">Produkcja powyżej planu</p>
              <p className="mt-1 text-xs text-emerald-700">
                +{formatNumber(productionDelta)} szt. ({productionDeltaPct.toFixed(1)}%) dzięki stabilnej pracy linii PVC.
              </p>
            </div>
            <div className="rounded-md border border-indigo-100 bg-indigo-50 p-3">
              <p className="text-sm font-semibold text-indigo-700">Marża utrzymana</p>
              <p className="mt-1 text-xs text-indigo-700">
                Średnia marża {avgMargin.toFixed(1)}% przy przychodzie {formatNumber(totalRevenue, {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })} mln PLN.
              </p>
              </div>
            <div className="rounded-md border border-amber-100 bg-amber-50 p-3">
              <p className="text-sm font-semibold text-amber-700">Koszty energii</p>
              <p className="mt-1 text-xs text-amber-700">
                {formatNumber(latestEnergyCost)} PLN / tydzień ({formatWithSign(energyDelta)} vs tydzień wcześniej).
              </p>
              <p className="mt-1 text-[0.65rem] text-amber-600">
                Zużycie materiałów średnio {materialVariance.toFixed(1)} pp odchylone od planu – monitoruj zapasy.
              </p>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default ManagementReport;