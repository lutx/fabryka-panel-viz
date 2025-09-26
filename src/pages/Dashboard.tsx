import KpiCard from "@/components/KpiCard";
import { 
  BarChart, 
  LineChart, 
  PieChart, 
  Pie,
  Cell, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  Bar,
  Line,
  ComposedChart
} from "recharts";
import { 
  Factory, 
  AlertTriangle, 
  Gauge, 
  Clock, 
  DollarSign, 
  Zap 
} from "lucide-react";
import { 
  kpiData, 
  dailyProductionData, 
  defectStructureData, 
  machineEfficiencyData, 
  materialUsageData 
} from "@/data/demoData";

const Dashboard = () => {
  return (
    <div className="dashboard-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <KpiCard
            title="Produkcja dzienna"
            value={kpiData.dailyProduction}
            icon={Factory}
            trend="up"
            trendValue="3.2%"
          />
          <KpiCard
            title="Braki"
            value={kpiData.defectRate}
            icon={AlertTriangle}
            trend="down"
            trendValue="0.3%"
          />
          <KpiCard
            title="OEE"
            value={kpiData.oee}
            icon={Gauge}
            trend="up"
            trendValue="2.1%"
          />
          <KpiCard
            title="Przestoje"
            value={kpiData.downtime}
            icon={Clock}
            trend="down"
            trendValue="1.5h"
          />
          <KpiCard
            title="Koszt jednostkowy"
            value={kpiData.unitCost}
            icon={DollarSign}
            trend="down"
            trendValue="8 PLN"
          />
          <KpiCard
            title="Zużycie energii"
            value={kpiData.energyConsumption}
            icon={Zap}
            trend="neutral"
            trendValue="0.5 MWh"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Daily Production vs Plan */}
          <div className="chart-container dashboard-card">
            <h3 className="section-title text-dashboard-text">Produkcja dzienna vs Plan</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={dailyProductionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--dashboard-border))" />
                <XAxis dataKey="day" stroke="hsl(var(--dashboard-muted))" />
                <YAxis stroke="hsl(var(--dashboard-muted))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--dashboard-card))", 
                    border: "1px solid hsl(var(--dashboard-border))",
                    borderRadius: "8px"
                  }} 
                />
                <Legend />
                <Bar dataKey="actual" fill="hsl(var(--chart-primary))" name="Rzeczywista" />
                <Line 
                  type="monotone" 
                  dataKey="plan" 
                  stroke="hsl(var(--chart-danger))" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Plan"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Defect Structure */}
          <div className="chart-container dashboard-card">
            <h3 className="section-title text-dashboard-text">Struktura braków</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={defectStructureData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {defectStructureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* Second Row of Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Machine Efficiency */}
          <div className="chart-container dashboard-card">
            <h3 className="section-title text-dashboard-text">Efektywność maszyn (OEE)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={machineEfficiencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--dashboard-border))" />
                <XAxis dataKey="machine" stroke="hsl(var(--dashboard-muted))" />
                <YAxis stroke="hsl(var(--dashboard-muted))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--dashboard-card))", 
                    border: "1px solid hsl(var(--dashboard-border))",
                    borderRadius: "8px"
                  }} 
                />
                <Legend />
                <Bar dataKey="oee" fill="hsl(var(--chart-secondary))" name="OEE %" />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="hsl(var(--chart-danger))" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Cel 80%"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Material Usage */}
          <div className="chart-container dashboard-card">
            <h3 className="section-title text-dashboard-text">Zużycie materiałów vs Plan (%)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={materialUsageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--dashboard-border))" />
                <XAxis dataKey="material" stroke="hsl(var(--dashboard-muted))" />
                <YAxis stroke="hsl(var(--dashboard-muted))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--dashboard-card))", 
                    border: "1px solid hsl(var(--dashboard-border))",
                    borderRadius: "8px"
                  }} 
                />
                <Legend />
                <Bar dataKey="usage" fill="hsl(var(--chart-tertiary))" name="Rzeczywiste zużycie %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;