"use client";

import { useState } from "react";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function CalculatorPage() {
  const [currentAge, setCurrentAge] = useState(35);
  const [currentSavings, setCurrentSavings] = useState(187500);
  const [monthlyIncome, setMonthlyIncome] = useState(6000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(3500);
  const [annualReturnRate, setAnnualReturnRate] = useState(7);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [inflationRate, setInflationRate] = useState(2);

  // Calculations
  const monthlySavings = monthlyIncome - monthlyExpenses;
  const annualSavings = monthlySavings * 12;
  const savingsRate = (monthlySavings / monthlyIncome) * 100;
  
  const yearlyExpenses = monthlyExpenses * 12;
  const fireNumber = Math.round(yearlyExpenses * (100 / withdrawalRate));
  
  const calculateYearsToFire = () => {
    let savings = currentSavings;
    let years = 0;
    const realReturnRate = (annualReturnRate - inflationRate) / 100;
    
    while (savings < fireNumber && years < 100) {
      savings = savings * (1 + realReturnRate) + annualSavings;
      years++;
    }
    
    return years;
  };
  
  const yearsToFire = calculateYearsToFire();
  const retirementAge = currentAge + yearsToFire;
  
  // Generate projection data for chart
  const generateProjectionData = () => {
    const data = [];
    let savings = currentSavings;
    const realReturnRate = (annualReturnRate - inflationRate) / 100;
    
    for (let year = 0; year <= Math.min(yearsToFire + 5, 50); year++) {
      data.push({
        year: year,
        savings: Math.round(savings),
        fireTarget: fireNumber,
      });
      
      savings = savings * (1 + realReturnRate) + annualSavings;
    }
    
    return data;
  };
  
  const projectionData = generateProjectionData();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-6 md:gap-10">
            <h1 className="text-xl font-bold tracking-tight">FIRE Path</h1>
            <MainNav />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tight">Calculadora FIRE</h2>
          <p className="text-muted-foreground">
            Calcula cuánto tiempo necesitas para alcanzar tu independencia financiera basado en tus ingresos, gastos y ahorros actuales.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Datos Personales</CardTitle>
                <CardDescription>
                  Introduce tus datos financieros actuales
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentAge">Edad actual: {currentAge} años</Label>
                  <Slider 
                    id="currentAge" 
                    min={18} 
                    max={70} 
                    step={1} 
                    value={[currentAge]} 
                    onValueChange={(value) => setCurrentAge(value[0])} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="currentSavings">Ahorros/inversiones actuales</Label>
                  <Input
                    id="currentSavings"
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    placeholder="Patrimonio actual"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="monthlyIncome">Ingresos mensuales</Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    placeholder="Ingresos mensuales"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="monthlyExpenses">Gastos mensuales</Label>
                  <Input
                    id="monthlyExpenses"
                    type="number"
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                    placeholder="Gastos mensuales"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Parámetros FIRE</CardTitle>
                <CardDescription>
                  Ajusta los parámetros para tu estrategia FIRE
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="annualReturnRate">Rendimiento anual esperado: {annualReturnRate}%</Label>
                  <Slider 
                    id="annualReturnRate" 
                    min={1} 
                    max={12} 
                    step={0.5} 
                    value={[annualReturnRate]} 
                    onValueChange={(value) => setAnnualReturnRate(value[0])} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="withdrawalRate">Tasa de retirada segura: {withdrawalRate}%</Label>
                  <Slider 
                    id="withdrawalRate" 
                    min={2} 
                    max={6} 
                    step={0.25} 
                    value={[withdrawalRate]} 
                    onValueChange={(value) => setWithdrawalRate(value[0])} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inflationRate">Inflación estimada: {inflationRate}%</Label>
                  <Slider 
                    id="inflationRate" 
                    min={0} 
                    max={5} 
                    step={0.5} 
                    value={[inflationRate]} 
                    onValueChange={(value) => setInflationRate(value[0])} 
                  />
                </div>
                
                <div className="pt-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Tasa de ahorro</p>
                      <p className="text-2xl font-bold">{savingsRate.toFixed(1)}%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Ahorro anual</p>
                      <p className="text-2xl font-bold">{formatCurrency(annualSavings)}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-6 md:grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Resultados</CardTitle>
                <CardDescription>
                  Tu camino hacia la independencia financiera
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2 p-4 bg-muted rounded-lg">
                    <h3 className="font-medium">Número FIRE</h3>
                    <p className="text-3xl font-bold">{formatCurrency(fireNumber)}</p>
                    <p className="text-sm text-muted-foreground">
                      El patrimonio que necesitas para vivir de tus inversiones
                    </p>
                  </div>
                  
                  <div className="space-y-2 p-4 bg-muted rounded-lg">
                    <h3 className="font-medium">Años hasta FIRE</h3>
                    <p className="text-3xl font-bold">{yearsToFire}</p>
                    <p className="text-sm text-muted-foreground">
                      Tiempo estimado para alcanzar tu independencia financiera
                    </p>
                  </div>
                  
                  <div className="space-y-2 p-4 bg-muted rounded-lg">
                    <h3 className="font-medium">Edad de retiro</h3>
                    <p className="text-3xl font-bold">{retirementAge}</p>
                    <p className="text-sm text-muted-foreground">
                      Tu edad estimada cuando alcances la independencia financiera
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="font-medium mb-4">Proyección de patrimonio</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={projectionData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis 
                          dataKey="year" 
                          label={{ value: 'Años', position: 'insideBottomRight', offset: -10 }} 
                        />
                        <YAxis 
                          tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                          label={{ value: 'Euros (€)', angle: -90, position: 'insideLeft' }}
                        />
                        <Tooltip 
                          formatter={(value: number) => [formatCurrency(value), ""]}
                          labelFormatter={(label) => `Año ${label}`}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="savings" 
                          name="Patrimonio" 
                          stroke="hsl(var(--chart-1))" 
                          strokeWidth={2}
                          activeDot={{ r: 8 }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="fireTarget" 
                          name="Objetivo FIRE" 
                          stroke="hsl(var(--chart-2))" 
                          strokeWidth={2}
                          strokeDasharray="5 5" 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}