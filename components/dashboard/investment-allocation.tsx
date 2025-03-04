"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Acciones (ETFs)", value: 60 },
  { name: "Bonos", value: 15 },
  { name: "Inmobiliario", value: 15 },
  { name: "Efectivo", value: 10 },
];

export function InvestmentAllocation() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Distribución de Inversiones</CardTitle>
        <CardDescription>
          Asignación actual de tus activos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`hsl(var(--chart-${index + 1}))`} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value}%`, "Porcentaje"]}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}