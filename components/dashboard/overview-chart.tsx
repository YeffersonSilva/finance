"use client";

import { useState } from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data
const monthlyData = [
  { name: "Ene", income: 5000, expenses: 3200, savings: 1800 },
  { name: "Feb", income: 5000, expenses: 3000, savings: 2000 },
  { name: "Mar", income: 5200, expenses: 3100, savings: 2100 },
  { name: "Abr", income: 5200, expenses: 3300, savings: 1900 },
  { name: "May", income: 5500, expenses: 3200, savings: 2300 },
  { name: "Jun", income: 5500, expenses: 3400, savings: 2100 },
  { name: "Jul", income: 5500, expenses: 3100, savings: 2400 },
  { name: "Ago", income: 5800, expenses: 3300, savings: 2500 },
  { name: "Sep", income: 5800, expenses: 3200, savings: 2600 },
  { name: "Oct", income: 5800, expenses: 3400, savings: 2400 },
  { name: "Nov", income: 6000, expenses: 3300, savings: 2700 },
  { name: "Dic", income: 6000, expenses: 3500, savings: 2500 },
];

const yearlyData = [
  { name: "2020", income: 58000, expenses: 38000, savings: 20000 },
  { name: "2021", income: 62000, expenses: 40000, savings: 22000 },
  { name: "2022", income: 67000, expenses: 42000, savings: 25000 },
  { name: "2023", income: 72000, expenses: 44000, savings: 28000 },
  { name: "2024", income: 78000, expenses: 46000, savings: 32000 },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export function OverviewChart() {
  const [activeTab, setActiveTab] = useState("monthly");
  
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Resumen Financiero</CardTitle>
        <CardDescription>
          Seguimiento de ingresos, gastos y ahorros a lo largo del tiempo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly" onValueChange={setActiveTab}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="monthly">Mensual (2024)</TabsTrigger>
              <TabsTrigger value="yearly">Anual</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="monthly" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={monthlyData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.2}/>
                    </linearGradient>
                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.2}/>
                    </linearGradient>
                    <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis 
                    tickFormatter={formatCurrency}
                    className="text-xs"
                  />
                  <Tooltip 
                    formatter={(value: number) => [formatCurrency(value), ""]}
                    labelFormatter={(label) => `Mes: ${label}`}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="income"
                    name="Ingresos"
                    stroke="hsl(var(--chart-1))"
                    fillOpacity={1}
                    fill="url(#colorIncome)"
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    name="Gastos"
                    stroke="hsl(var(--chart-2))"
                    fillOpacity={1}
                    fill="url(#colorExpenses)"
                  />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    name="Ahorros"
                    stroke="hsl(var(--chart-3))"
                    fillOpacity={1}
                    fill="url(#colorSavings)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="yearly" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={yearlyData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorIncomeYearly" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.2}/>
                    </linearGradient>
                    <linearGradient id="colorExpensesYearly" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.2}/>
                    </linearGradient>
                    <linearGradient id="colorSavingsYearly" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis 
                    tickFormatter={formatCurrency}
                    className="text-xs"
                  />
                  <Tooltip 
                    formatter={(value: number) => [formatCurrency(value), ""]}
                    labelFormatter={(label) => `Año: ${label}`}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="income"
                    name="Ingresos"
                    stroke="hsl(var(--chart-1))"
                    fillOpacity={1}
                    fill="url(#colorIncomeYearly)"
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    name="Gastos"
                    stroke="hsl(var(--chart-2))"
                    fillOpacity={1}
                    fill="url(#colorExpensesYearly)"
                  />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    name="Ahorros"
                    stroke="hsl(var(--chart-3))"
                    fillOpacity={1}
                    fill="url(#colorSavingsYearly)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}