import { 
  ComposedChart,
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
  Line
} from "recharts";
import { 
  dailyProductionData, 
  defectStructureData, 
  machineEfficiencyData, 
  managementReportData 
} from "@/data/demoData";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, TrendingUp, Target } from "lucide-react";

const ManagementReport = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Report Header */}
        <div className="mb-8">
          <h1 className="report-title text-foreground">Raport Zarządczy</h1>
          <p className="text-muted-foreground mt-2">
            Miesięczny przegląd efektywności produkcyjnej - {new Date().toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Summary Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Podsumowanie linii produkcyjnych
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Linia</th>
                    <th className="text-left py-3 px-4 font-semibold">Produkcja (szt.)</th>
                    <th className="text-left py-3 px-4 font-semibold">Braki (%)</th>
                    <th className="text-left py-3 px-4 font-semibold">OEE (%)</th>
                    <th className="text-left py-3 px-4 font-semibold">Koszt energii (PLN)</th>
                    <th className="text-left py-3 px-4 font-semibold">Koszt jednostkowy (PLN)</th>
                  </tr>
                </thead>
                <tbody>
                  {managementReportData.summary.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium">{row.line}</td>
                      <td className="py-3 px-4">{row.production.toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <span className={row.defects > 2 ? "text-destructive" : "text-success"}>
                          {row.defects}%
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={row.oee < 75 ? "text-destructive" : "text-success"}>
                          {row.oee}%
                        </span>
                      </td>
                      <td className="py-3 px-4">{row.energyCost.toLocaleString()} PLN</td>
                      <td className="py-3 px-4">{row.unitCost} PLN</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Production vs Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Produkcja dzienna vs Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={dailyProductionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
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
            </CardContent>
          </Card>

          {/* Defects Structure */}
          <Card>
            <CardHeader>
              <CardTitle>Struktura braków</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>

        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* OEE Performance */}
          <Card>
            <CardHeader>
              <CardTitle>OEE na liniach vs cel</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={machineEfficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="machine" />
                  <YAxis />
                  <Tooltip />
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
            </CardContent>
          </Card>

          {/* Energy Cost Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Koszty energii – trend tygodniowy</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={managementReportData.energyCostTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="cost" 
                    stroke="hsl(var(--chart-primary))" 
                    strokeWidth={3}
                    name="Koszt (PLN)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

        </div>

        {/* KPI Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              KPI Terminowość dostaw
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-2xl font-bold">
                  {managementReportData.deliveryTimeliness.current}%
                </p>
                <p className="text-muted-foreground">Obecny wynik</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-primary">
                  Cel: {managementReportData.deliveryTimeliness.target}%
                </p>
              </div>
            </div>
            <Progress 
              value={managementReportData.deliveryTimeliness.current} 
              className="w-full h-3"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Brakuje {managementReportData.deliveryTimeliness.target - managementReportData.deliveryTimeliness.current}% do osiągnięcia celu
            </p>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              Rekomendacje zarządcze
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Zwiększyć konserwacje linii PVC B</strong> - Linia wykazuje najniższy OEE (72%). 
                  Zalecane zaplanowanie dodatkowych przegladów konserwacyjnych w celu poprawy wydajności.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Zoptymalizować proces cięcia profili ALU</strong> - Zauważalne przekroczenie 
                  zużycia materiałów ALU o 1%. Analiza procesu cięcia może przynieść oszczędności.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Poprawić kontrolę jakości pakowania</strong> - 12% udziału okuć w brakach 
                  wskazuje na problemy z kontrolą jakości w procesie montażu i pakowania.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  <strong>Podnieść terminowość dostaw powyżej 95%</strong> - Obecny poziom 92% 
                  wymaga usprawnienia planowania produkcji i logistyki wysyłek.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default ManagementReport;