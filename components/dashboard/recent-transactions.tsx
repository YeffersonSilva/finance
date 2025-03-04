"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownLeft, ArrowUpRight, Coffee, ShoppingCart, Home, Utensils, Car } from "lucide-react";

const transactions = [
  {
    id: "t1",
    description: "Hipoteca",
    amount: -850,
    date: "2024-05-01",
    category: "Vivienda",
    icon: Home,
  },
  {
    id: "t2",
    description: "Salario",
    amount: 3000,
    date: "2024-05-01",
    category: "Ingresos",
    icon: ArrowUpRight,
  },
  {
    id: "t3",
    description: "Supermercado",
    amount: -120,
    date: "2024-05-03",
    category: "Alimentación",
    icon: ShoppingCart,
  },
  {
    id: "t4",
    description: "Restaurante",
    amount: -45,
    date: "2024-05-05",
    category: "Ocio",
    icon: Utensils,
  },
  {
    id: "t5",
    description: "Gasolina",
    amount: -60,
    date: "2024-05-07",
    category: "Transporte",
    icon: Car,
  },
];

export function RecentTransactions() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Transacciones Recientes</CardTitle>
        <CardDescription>
          Últimos movimientos en tus cuentas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => {
            const Icon = transaction.icon;
            return (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-full ${
                    transaction.amount > 0 
                      ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400" 
                      : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
                  }`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{transaction.description}</p>
                    <p className="text-xs text-muted-foreground">{transaction.category} • {formatDate(transaction.date)}</p>
                  </div>
                </div>
                <div className={`text-sm font-medium ${
                  transaction.amount > 0 ? "text-green-600 dark:text-green-400" : ""
                }`}>
                  {formatCurrency(transaction.amount)}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}