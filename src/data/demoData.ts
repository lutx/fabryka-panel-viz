// Static demo data for the production dashboard

export const kpiData = {
  dailyProduction: "1,820 szt.",
  defectRate: "1,9%",
  oee: "76%",
  downtime: "10h/tydz",
  unitCost: "415 PLN/okno",
  energyConsumption: "72,5 MWh/tydz",
  energyCostWeekly: 54500,
};

export const dailyProductionData = [
  { day: "Pn", actual: 1650, plan: 1750 },
  { day: "Wt", actual: 1780, plan: 1750 },
  { day: "Śr", actual: 1820, plan: 1750 },
  { day: "Cz", actual: 1690, plan: 1750 },
  { day: "Pt", actual: 1900, plan: 1750 },
  { day: "So", actual: 1720, plan: 1750 },
  { day: "Nd", actual: 1580, plan: 1750 }
];

export const defectStructureData = [
  { name: "Pęknięcie szyb", value: 27, color: "#ef4444" },
  { name: "Profile PVC", value: 23, color: "#f97316" },
  { name: "Profile ALU", value: 18, color: "#eab308" },
  { name: "Okucia", value: 12, color: "#3b82f6" },
  { name: "Inne", value: 20, color: "#8b5cf6" }
];

export const machineEfficiencyData = [
  { machine: "PVC A", oee: 78, target: 80 },
  { machine: "PVC B", oee: 72, target: 80 },
  { machine: "ALU", oee: 77, target: 80 }
];

export const materialUsageData = [
  { material: "Szkło", usage: 98.5, plan: 100 },
  { material: "PVC", usage: 102, plan: 100 },
  { material: "ALU", usage: 101, plan: 100 },
  { material: "Okucia", usage: 99, plan: 100 },
  { material: "Uszczelki", usage: 100.5, plan: 100 }
];

export const heatmapData = [
  { line: "PVC A", hour: 0, intensity: 0 },
  { line: "PVC A", hour: 1, intensity: 0 },
  { line: "PVC A", hour: 2, intensity: 0 },
  { line: "PVC A", hour: 3, intensity: 0 },
  { line: "PVC A", hour: 4, intensity: 0 },
  { line: "PVC A", hour: 5, intensity: 1 },
  { line: "PVC A", hour: 6, intensity: 5 },
  { line: "PVC A", hour: 7, intensity: 8 },
  { line: "PVC A", hour: 8, intensity: 9 },
  { line: "PVC A", hour: 9, intensity: 9 },
  { line: "PVC A", hour: 10, intensity: 8 },
  { line: "PVC A", hour: 11, intensity: 7 },
  { line: "PVC A", hour: 12, intensity: 6 },
  { line: "PVC A", hour: 13, intensity: 8 },
  { line: "PVC A", hour: 14, intensity: 9 },
  { line: "PVC A", hour: 15, intensity: 4 },
  { line: "PVC A", hour: 16, intensity: 2 },
  { line: "PVC A", hour: 17, intensity: 1 },
  { line: "PVC A", hour: 18, intensity: 0 },
  { line: "PVC A", hour: 19, intensity: 0 },
  { line: "PVC A", hour: 20, intensity: 0 },
  { line: "PVC A", hour: 21, intensity: 0 },
  { line: "PVC A", hour: 22, intensity: 0 },
  { line: "PVC A", hour: 23, intensity: 0 },
  // Similar data for PVC B and ALU lines
  { line: "PVC B", hour: 6, intensity: 4 },
  { line: "PVC B", hour: 7, intensity: 6 },
  { line: "PVC B", hour: 8, intensity: 7 },
  { line: "PVC B", hour: 9, intensity: 8 },
  { line: "PVC B", hour: 10, intensity: 7 },
  { line: "PVC B", hour: 11, intensity: 6 },
  { line: "PVC B", hour: 12, intensity: 5 },
  { line: "PVC B", hour: 13, intensity: 7 },
  { line: "PVC B", hour: 14, intensity: 8 },
  { line: "ALU", hour: 6, intensity: 6 },
  { line: "ALU", hour: 7, intensity: 8 },
  { line: "ALU", hour: 8, intensity: 9 },
  { line: "ALU", hour: 9, intensity: 8 },
  { line: "ALU", hour: 10, intensity: 7 },
  { line: "ALU", hour: 11, intensity: 8 },
  { line: "ALU", hour: 12, intensity: 7 },
  { line: "ALU", hour: 13, intensity: 9 },
  { line: "ALU", hour: 14, intensity: 8 }
];

export const managementReportData = {
  summary: [
    {
      line: "PVC A",
      production: 8420,
      defects: 2.1,
      oee: 78,
      energyCost: 12500,
      unitCost: 405
    },
    {
      line: "PVC B",
      production: 7850,
      defects: 2.8,
      oee: 72,
      energyCost: 11200,
      unitCost: 425
    },
    {
      line: "ALU",
      production: 6200,
      defects: 1.2,
      oee: 77,
      energyCost: 9800,
      unitCost: 445
    }
  ],
  energyCostTrend: [
    { week: "Tydz 1", cost: 31500 },
    { week: "Tydz 2", cost: 33200 },
    { week: "Tydz 3", cost: 35100 },
    { week: "Tydz 4", cost: 33500 }
  ],
  deliveryTimeliness: {
    current: 92,
    target: 95
  }
};

// Executive Dashboard Data
export const executiveKpis = {
  weeklyRevenue: "12,4 mln PLN",
  grossMargin: "28,6%",
  unitCost: "415 PLN/okno",
  otif: "93%",
  otifTarget: "95%",
  capacityUtilization: "82%",
  energyIntensity: "2,3 kWh/okno"
};

export const revenueAndMarginData = [
  { day: "Pn", revenue: 1.8, margin: 28.2 },
  { day: "Wt", revenue: 2.1, margin: 29.1 },
  { day: "Śr", revenue: 2.3, margin: 28.8 },
  { day: "Cz", revenue: 1.9, margin: 27.5 },
  { day: "Pt", revenue: 2.2, margin: 30.2 },
  { day: "So", revenue: 1.6, margin: 26.8 },
  { day: "Nd", revenue: 0.5, margin: 24.5 }
];

export const productMixData = [
  { category: "PVC okna", volume: 1240, margin: 32.1 },
  { category: "PVC drzwi", volume: 380, margin: 28.5 },
  { category: "ALU okna", volume: 620, margin: 25.8 },
  { category: "ALU drzwi", volume: 180, margin: 22.3 }
];

export const otifTrendData = [
  { week: "Tydz 31", otif: 89 },
  { week: "Tydz 32", otif: 91 },
  { week: "Tydz 33", otif: 88 },
  { week: "Tydz 34", otif: 92 },
  { week: "Tydz 35", otif: 94 },
  { week: "Tydz 36", otif: 93 },
  { week: "Tydz 37", otif: 95 },
  { week: "Tydz 38", otif: 93 }
];

export const backlogBySegmentData = [
  { segment: "Detaliczny", days: 8 },
  { segment: "Deweloperski", days: 12 },
  { segment: "Eksport", days: 15 }
];

export const energyCostTrendData = [
  { week: "Tydz 31", cost: 51500 },
  { week: "Tydz 32", cost: 53700 },
  { week: "Tydz 33", cost: 54900 },
  { week: "Tydz 34", cost: 52800 },
  { week: "Tydz 35", cost: 52100 },
  { week: "Tydz 36", cost: 50800 },
  { week: "Tydz 37", cost: 49900 },
  { week: "Tydz 38", cost: 50200 }
];

export const unitCostByProductData = [
  { product: "PVC std", cost: 385 },
  { product: "PVC premium", cost: 465 },
  { product: "ALU std", cost: 445 },
  { product: "ALU premium", cost: 525 }
];

export const capexOpexData = [
  { category: "CAPEX", q1: 2.8, q2: 3.2, q3: 2.1, q4: 4.5 },
  { category: "OPEX", q1: 8.4, q2: 8.9, q3: 9.2, q4: 8.7 }
];