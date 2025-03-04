"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function FireProgress() {
  const currentAmount = 187500;
  const targetAmount = 750000;
  const progressPercentage = Math.min(100, Math.round((currentAmount / targetAmount) * 100));
  
  const yearsRemaining = 12;
  const estimatedRetirementAge = 47;

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Progreso hacia FIRE</CardTitle>
        <CardDescription>
          Seguimiento de tu camino hacia la independencia financiera
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Patrimonio actual: €187.500</span>
            <span>Objetivo FIRE: €750.000</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{progressPercentage}% completado</span>
            <span>€{targetAmount - currentAmount} restantes</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="space-y-1">
            <p className="text-sm font-medium">Tiempo estimado hasta FIRE</p>
            <p className="text-2xl font-bold">{yearsRemaining} años</p>
            <p className="text-xs text-muted-foreground">
              Basado en tu tasa de ahorro actual y retornos de inversión proyectados
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Edad estimada de retiro</p>
            <p className="text-2xl font-bold">{estimatedRetirementAge} años</p>
            <p className="text-xs text-muted-foreground">
              Podrás alcanzar la independencia financiera antes que la mayoría
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}