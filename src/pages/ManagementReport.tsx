import { 
  ComposedChart,
  BarChart, 
  LineChart, 
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
  executiveKpis,
  revenueAndMarginData,
  productMixData,
  otifTrendData,
  backlogBySegmentData,
  energyCostTrendData,
  unitCostByProductData
} from "@/data/demoData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Gauge, 
  Zap, 
  Calendar, 
  Users, 
  Package,
  RotateCcw,
  Clock,
  BarChart3
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ManagementReport = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Raport Zarządczy – Fabryka Okien PVC & ALU
              </h1>
              <p className="text-gray-600 mt-1">Analiza biznesowa i wskaźniki finansowe</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-semibold text-blue-600">Tydzień 38 / 2025</div>
              <p className="text-sm text-gray-500">16-22 września 2024</p>
            </div>
          </div>
          
          {/* Filter Bar */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-6">
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <Button variant="outline" size="sm">Zakres dat</Button>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-500" />
                <Button variant="outline" size="sm">Segment klienta</Button>
              </div>
              <div className="flex items-center space-x-2">
                <Package className="w-4 h-4 text-gray-500" />
                <Button variant="outline" size="sm">Asortyment</Button>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset filtrów
              </Button>
            </div>
          </div>
        </div>

        {/* Executive KPIs Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600 mb-1">Przychód tygodniowy</p>
                  <p className="text-2xl font-bold text-blue-900">{executiveKpis.weeklyRevenue}</p>
                </div>
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600 mb-1">Marża brutto</p>
                  <p className="text-2xl font-bold text-green-900">{executiveKpis.grossMargin}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600 mb-1">Koszt jednostkowy</p>
                  <p className="text-2xl font-bold text-orange-900">{executiveKpis.unitCost}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600 mb-1">OTIF</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-2xl font-bold text-purple-900">{executiveKpis.otif}</p>
                    <Badge variant="outline" className="text-xs">Cel {executiveKpis.otifTarget}</Badge>
                  </div>
                </div>
                <Target className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-600 mb-1">Wykorzystanie mocy</p>
                  <p className="text-2xl font-bold text-indigo-900">{executiveKpis.capacityUtilization}</p>
                </div>
                <Gauge className="w-8 h-8 text-indigo-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-yellow-600 mb-1">Intensywność energii</p>
                  <p className="text-2xl font-bold text-yellow-900">{executiveKpis.energyIntensity}</p>
                </div>
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section A: Performance & Profitability */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Performance & Profitability
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* A1: Revenue and Margin - Week */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Przychód i marża – tydzień</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={revenueAndMarginData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="day" stroke="#6b7280" fontSize={12} />
                      <YAxis yAxisId="left" stroke="#6b7280" fontSize={12} />
                      <YAxis yAxisId="right" orientation="right" stroke="#6b7280" fontSize={12} />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="revenue" fill="#3b82f6" name="Przychód (mln PLN)" />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="margin" 
                        stroke="#10b981" 
                        strokeWidth={3}
                        name="Marża (%)"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            
            {/* A2: Product Mix and Margin */}
            <Card>
              <CardHeader>
                <CardTitle>Miks produktowy i marża</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={productMixData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis type="number" stroke="#6b7280" fontSize={11} />
                    <YAxis dataKey="category" type="category" stroke="#6b7280" fontSize={11} width={80} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="volume" fill="#f59e0b" name="Wolumen (szt.)" />
                    <Line dataKey="margin" stroke="#ef4444" strokeWidth={2} name="Marża (%)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
          </div>
          
          {/* A3: EBITDA Impact */}
          <Card className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">EBITDA – wpływ tygodniowy</h3>
                  <p className="text-3xl font-bold text-green-600">+0,6 mln PLN</p>
                  <p className="text-sm text-gray-600 mt-1">Efekt: optymalizacja odpadów i energii</p>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800">+4.8% vs poprzedni tydzień</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section B: Service Level & Backlog */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Service Level & Backlog
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* B1: OTIF Gauge */}
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
              <CardHeader>
                <CardTitle>OTIF (On-Time In-Full)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold text-purple-600 mb-2">93%</div>
                  <div className="text-sm text-gray-600 mb-4">Cel: 95%</div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{width: '93%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Brakuje 2% do celu</p>
                </div>
              </CardContent>
            </Card>
            
            {/* B2: OTIF Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Terminowość dostaw – trend 8 tygodni</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={otifTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="week" stroke="#6b7280" fontSize={10} />
                    <YAxis domain={[85, 100]} stroke="#6b7280" fontSize={12} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="otif" 
                      stroke="#8b5cf6" 
                      strokeWidth={3}
                      name="OTIF %"
                    />
                    <Line 
                      type="monotone" 
                      dataKey={() => 95} 
                      stroke="#ef4444" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Cel 95%"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            {/* B3: Backlog by Segment */}
            <Card>
              <CardHeader>
                <CardTitle>Backlog zamówień – dni realizacji</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={backlogBySegmentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="segment" stroke="#6b7280" fontSize={11} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="days" fill="#06b6d4" name="Dni realizacji" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
          </div>
        </div>

        {/* Section C: Cost & Efficiency */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2" />
            Cost & Efficiency
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* C1: Energy Cost Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Koszty energii – trend tygodniowy</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={energyCostTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="week" stroke="#6b7280" fontSize={10} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip formatter={(value) => [`${value.toLocaleString()} PLN`, 'Koszt']} />
                    <Line 
                      type="monotone" 
                      dataKey="cost" 
                      stroke="#f59e0b" 
                      strokeWidth={3}
                      name="Koszt energii (PLN)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            {/* C2: Unit Cost by Product */}
            <Card>
              <CardHeader>
                <CardTitle>Koszt jednostkowy wg produktu</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={unitCostByProductData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="product" stroke="#6b7280" fontSize={11} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip formatter={(value) => [`${value} PLN`, 'Koszt jednostkowy']} />
                    <Bar dataKey="cost" fill="#ef4444" name="Koszt (PLN)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
          </div>
        </div>

        {/* Strategic Summary */}
        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-gray-300">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Kluczowe działania strategiczne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Priorytet 1: Poprawa OTIF</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Skrócenie backlogu w segmencie eksportowym o 3 dni</li>
                  <li>• Wdrożenie predykcyjnego planowania dostaw</li>
                  <li>• Optymalizacja procesów logistycznych</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Priorytet 2: Optymalizacja kosztów</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Redukcja kosztów energii o 5% poprzez modernizację</li>
                  <li>• Wzrost marży produktów premium o 2pp</li>
                  <li>• Automatyzacja procesów w linii PVC</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default ManagementReport;