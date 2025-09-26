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
    <div className="bg-gray-50 min-h-screen">
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
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Produkcja dzienna vs Plan</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={dailyProductionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "white", 
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "14px"
                  }} 
                />
                <Legend />
                <Bar dataKey="actual" fill="#3b82f6" name="Rzeczywista" />
                <Line 
                  type="monotone" 
                  dataKey="plan" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="Plan"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Defect Structure */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Struktura braków</h3>
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
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Efektywność maszyn (OEE)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={machineEfficiencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="machine" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "white", 
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "14px"
                  }} 
                />
                <Legend />
                <Bar dataKey="oee" fill="#10b981" name="OEE %" />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="Cel 80%"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Material Usage */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Zużycie materiałów vs Plan (%)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={materialUsageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="material" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "white", 
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "14px"
                  }} 
                />
                <Legend />
                <Bar dataKey="usage" fill="#f59e0b" name="Rzeczywiste zużycie %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;