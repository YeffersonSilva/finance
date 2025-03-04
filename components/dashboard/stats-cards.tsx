"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Percent, DollarSign, TrendingUp, Wallet } from "lucide-react";

export function StatsCards() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ingresos Mensuales</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">€6.000</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-green-500 flex items-center mr-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              3.4%
            </span>
            vs mes anterior
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Gastos Mensuales</CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">€3.500</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-red-500 flex items-center mr-1">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              2.9%
            </span>
            vs mes anterior
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tasa de Ahorro</CardTitle>
          <Percent className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">41.7%</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-green-500 flex items-center mr-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              5.1%
            </span>
            vs mes anterior
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Patrimonio Neto</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">€187.500</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-green-500 flex items-center mr-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              12.3%
            </span>
            vs año anterior
          </p>
        </CardContent>
      </Card>
    </>
  );
}