import KpiCard from "@/components/KpiCard";
import {
  BarChart,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Line,
} from "recharts";
import {
  Factory,
  AlertTriangle,
  Gauge,
  Clock,
  DollarSign,
  Zap,
  TrendingUp,
  PackageSearch,
} from "lucide-react";
import {
  kpiData,
  dailyProductionData,
  machineEfficiencyData,
  materialUsageData,
} from "@/data/demoData";

const Dashboard = () => {
  return (
    <div className="h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="mx-auto flex h-full max-w-[1920px] flex-col gap-6 px-6 py-6">
        <header className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 px-8 py-4 shadow-lg shadow-slate-950/40">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Centrum Monitoringu Produkcji</p>
            <h1 className="mt-1 text-3xl font-bold text-white">Dashboard Produkcji – Fabryka Okien</h1>
          </div>
          <div className="flex items-center gap-4 text-right">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Data</p>
              <p className="text-lg font-semibold text-slate-100">26 września 2025</p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-indigo-500/50 bg-indigo-500/10">
              <TrendingUp className="h-7 w-7 text-indigo-300" />
            </div>
          </div>
        </header>

        <div className="grid h-full grid-rows-[auto,1fr] gap-6 overflow-hidden">
          <section className="grid grid-cols-12 gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 px-6 py-5 shadow-inner shadow-slate-950/30">
            <div className="col-span-6 xl:col-span-2">
              <KpiCard
                title="Produkcja dzienna"
                value={kpiData.dailyProduction}
                icon={Factory}
                trend="up"
                trendValue="3.2%"
              />
            </div>
            <div className="col-span-6 xl:col-span-2">
              <KpiCard
                title="Braki"
                value={kpiData.defectRate}
                icon={AlertTriangle}
                trend="down"
                trendValue="0.3%"
              />
            </div>
            <div className="col-span-6 xl:col-span-2">
              <KpiCard
                title="OEE"
                value={kpiData.oee}
                icon={Gauge}
                trend="up"
                trendValue="2.1%"
              />
            </div>
            <div className="col-span-6 xl:col-span-2">
              <KpiCard
                title="Przestoje"
                value={kpiData.downtime}
                icon={Clock}
                trend="down"
                trendValue="1.5h"
              />
            </div>
            <div className="col-span-6 xl:col-span-2">
              <KpiCard
                title="Koszt jednostkowy"
                value={kpiData.unitCost}
                icon={DollarSign}
                trend="down"
                trendValue="8 PLN"
              />
            </div>
            <div className="col-span-6 xl:col-span-2">
              <KpiCard
                title="Zużycie energii"
                value={kpiData.energyConsumption}
                icon={Zap}
                trend="neutral"
                trendValue="0.5 MWh"
              />
            </div>
          </section>

          <div className="grid h-full min-h-0 grid-cols-12 gap-6 overflow-hidden">
            <section className="col-span-7 grid min-h-0 grid-rows-2 gap-6">
              <div className="flex min-h-0 flex-col rounded-2xl border border-slate-800/80 bg-slate-900/60 px-6 py-5 shadow-lg shadow-slate-950/40">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-indigo-300">Realizacja vs Plan</p>
                    <h3 className="text-2xl font-semibold text-white">Produkcja dzienna</h3>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-200">
                    <PackageSearch className="h-4 w-4" />
                    Ostatnie 7 dni
                  </div>
                </div>
                <div className="min-h-0 flex-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={dailyProductionData}>
                      <CartesianGrid strokeDasharray="4 8" stroke="#1e293b" />
                      <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0f172a",
                          border: "1px solid #1e293b",
                          borderRadius: "12px",
                          color: "#e2e8f0",
                        }}
                      />
                      <Legend wrapperStyle={{ color: "#cbd5f5" }} />
                      <Bar dataKey="actual" fill="#6366f1" name="Rzeczywista" radius={[8, 8, 0, 0]} />
                      <Line
                        type="monotone"
                        dataKey="plan"
                        stroke="#f97316"
                        strokeWidth={3}
                        strokeDasharray="6 6"
                        dot={{ r: 3, fill: "#f97316" }}
                        name="Plan"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="flex min-h-0 flex-col rounded-2xl border border-slate-800/80 bg-slate-900/60 px-6 py-5 shadow-lg shadow-slate-950/40">
                <div className="mb-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Efektywność maszyn</p>
                  <h3 className="text-2xl font-semibold text-white">OEE vs cel</h3>
                </div>
                <div className="min-h-0 flex-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={machineEfficiencyData}>
                      <CartesianGrid strokeDasharray="4 8" stroke="#1e293b" />
                      <XAxis dataKey="machine" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0f172a",
                          border: "1px solid #1e293b",
                          borderRadius: "12px",
                          color: "#e2e8f0",
                        }}
                      />
                      <Legend wrapperStyle={{ color: "#cbd5f5" }} />
                      <Bar dataKey="oee" fill="#22d3ee" name="OEE %" radius={[8, 8, 0, 0]} />
                      <Line
                        type="monotone"
                        dataKey="target"
                        stroke="#f97316"
                        strokeWidth={3}
                        strokeDasharray="6 6"
                        dot={{ r: 3, fill: "#f97316" }}
                        name="Cel 80%"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>

            <section className="col-span-5 grid min-h-0 grid-rows-[minmax(0,1fr),minmax(0,1fr)] gap-6">
              <div className="flex min-h-0 flex-col rounded-2xl border border-slate-800/80 bg-slate-900/60 px-6 py-5 shadow-lg shadow-slate-950/40">
                <div className="mb-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Zużycie materiałów</p>
                  <h3 className="text-2xl font-semibold text-white">Realizacja vs plan</h3>
                </div>
                <div className="min-h-0 flex-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={materialUsageData}>
                      <CartesianGrid strokeDasharray="4 8" stroke="#1e293b" />
                      <XAxis dataKey="material" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0f172a",
                          border: "1px solid #1e293b",
                          borderRadius: "12px",
                          color: "#e2e8f0",
                        }}
                      />
                      <Legend wrapperStyle={{ color: "#cbd5f5" }} />
                      <Bar dataKey="usage" fill="#f97316" name="Rzeczywiste zużycie %" radius={[12, 12, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="grid min-h-0 grid-cols-2 gap-4">
                <div className="flex min-h-0 flex-col rounded-2xl border border-slate-800/80 bg-slate-900/60 px-6 py-5 shadow-lg shadow-slate-950/40">
                  <p className="text-xs uppercase tracking-[0.25em] text-rose-300">Top Alarmy</p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">Linia 3</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    <li className="flex items-center justify-between">
                      <span>Awaria czujnika</span>
                      <span className="rounded-full bg-rose-500/10 px-3 py-1 text-rose-200">12</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Brak materiału</span>
                      <span className="rounded-full bg-rose-500/10 px-3 py-1 text-rose-200">8</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Przestój planowany</span>
                      <span className="rounded-full bg-rose-500/10 px-3 py-1 text-rose-200">5</span>
                    </li>
                  </ul>
                </div>
                <div className="flex min-h-0 flex-col rounded-2xl border border-slate-800/80 bg-slate-900/60 px-6 py-5 shadow-lg shadow-slate-950/40">
                  <p className="text-xs uppercase tracking-[0.25em] text-indigo-300">Najbliższe zlecenia</p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">Harmonogram</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    <li className="flex items-center justify-between">
                      <span>Zlecenie #A102</span>
                      <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-indigo-200">12:30</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Zlecenie #B541</span>
                      <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-indigo-200">13:45</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Zlecenie #C773</span>
                      <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-indigo-200">15:10</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;