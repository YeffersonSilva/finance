"use client";

import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Leaf, Sailboat, Zap } from "lucide-react";
import React from "react";

export default function StrategiesPage() {
  const [activeTab, setActiveTab] = React.useState("overview");

  const handleExplore = (tabValue: string) => {
    setActiveTab(tabValue);
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
          <h2 className="text-3xl font-bold tracking-tight">
            Estrategias FIRE
          </h2>
          <p className="text-muted-foreground">
            Explora diferentes enfoques para alcanzar tu independencia
            financiera y elige el que mejor se adapte a tus objetivos y estilo
            de vida.
          </p>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Visión General</TabsTrigger>
              <TabsTrigger value="leanfire">Lean FIRE</TabsTrigger>
              <TabsTrigger value="fatfire">Fat FIRE</TabsTrigger>
              <TabsTrigger value="coastfire">Coast FIRE</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Leaf className="h-5 w-5 text-green-500" />
                      <CardTitle>Lean FIRE</CardTitle>
                    </div>
                    <CardDescription>
                      Minimalismo y frugalidad para alcanzar la independencia
                      financiera más rápido
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">
                      Enfoque en reducir gastos al mínimo y mantener un estilo
                      de vida austero para alcanzar la independencia financiera
                      con un patrimonio más modesto.
                    </p>
                    <div className="pt-2">
                      <p className="text-sm font-medium">Objetivo típico:</p>
                      <p className="text-lg font-bold">€500.000 - €750.000</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handleExplore("leanfire")}
                    >
                      Explorar <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Flame className="h-5 w-5 text-orange-500" />
                      <CardTitle>Fat FIRE</CardTitle>
                    </div>
                    <CardDescription>
                      Independencia financiera sin sacrificar calidad de vida
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">
                      Enfoque en generar ingresos más altos para mantener un
                      estilo de vida cómodo después de alcanzar la independencia
                      financiera.
                    </p>
                    <div className="pt-2">
                      <p className="text-sm font-medium">Objetivo típico:</p>
                      <p className="text-lg font-bold">
                        €1.500.000 - €5.000.000
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handleExplore("fatfire")}
                    >
                      Explorar <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sailboat className="h-5 w-5 text-blue-500" />
                      <CardTitle>Coast FIRE</CardTitle>
                    </div>
                    <CardDescription>
                      Acumular lo suficiente temprano y dejar que crezca
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">
                      Enfoque en ahorrar agresivamente al principio de tu
                      carrera y luego &quot;navegar&quot; hacia la independencia
                      financiera mientras trabajas lo suficiente para cubrir
                      gastos.
                    </p>
                    <div className="pt-2">
                      <p className="text-sm font-medium">Objetivo inicial:</p>
                      <p className="text-lg font-bold">€250.000 - €500.000</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handleExplore("coastfire")}
                    >
                      Explorar <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      <CardTitle>Barista FIRE</CardTitle>
                    </div>
                    <CardDescription>
                      Combinar trabajo a tiempo parcial con inversiones
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">
                      Enfoque en acumular suficiente para cubrir la mayoría de
                      tus gastos, complementando con un trabajo a tiempo parcial
                      que puede proporcionar beneficios como seguro médico.
                    </p>
                    <div className="pt-2">
                      <p className="text-sm font-medium">Objetivo típico:</p>
                      <p className="text-lg font-bold">€400.000 - €750.000</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" disabled>
                      Próximamente <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Comparativa de Estrategias FIRE</CardTitle>
                  <CardDescription>
                    Análisis de las diferentes aproximaciones a la independencia
                    financiera
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Estrategia</th>
                          <th className="text-left py-3 px-4">
                            Objetivo Financiero
                          </th>
                          <th className="text-left py-3 px-4">
                            Estilo de Vida
                          </th>
                          <th className="text-left py-3 px-4">
                            Tiempo Estimado
                          </th>
                          <th className="text-left py-3 px-4">Ventajas</th>
                          <th className="text-left py-3 px-4">Desventajas</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Lean FIRE</td>
                          <td className="py-3 px-4">€500k - €750k</td>
                          <td className="py-3 px-4">Frugal, minimalista</td>
                          <td className="py-3 px-4">7-15 años</td>
                          <td className="py-3 px-4">Más rápido de alcanzar</td>
                          <td className="py-3 px-4">
                            Menos margen para imprevistos
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Fat FIRE</td>
                          <td className="py-3 px-4">€1.5M - €5M+</td>
                          <td className="py-3 px-4">
                            Cómodo, sin restricciones
                          </td>
                          <td className="py-3 px-4">15-25 años</td>
                          <td className="py-3 px-4">Mayor calidad de vida</td>
                          <td className="py-3 px-4">
                            Requiere ingresos más altos
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="leanfire" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Lean FIRE en Detalle</CardTitle>
                  <CardDescription>
                    La estrategia minimalista para alcanzar la independencia
                    financiera
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Principios Clave</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500" />
                          <span>Minimización de gastos mensuales</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500" />
                          <span>Estilo de vida frugal y sostenible</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500" />
                          <span>
                            Alto porcentaje de ahorro (50-70% de ingresos)
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500" />
                          <span>Inversiones de bajo coste</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Números Objetivo</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-sm">Patrimonio necesario:</span>
                          <span className="font-medium">
                            €500.000 - €750.000
                          </span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-sm">Gastos mensuales:</span>
                          <span className="font-medium">€1.250 - €1.875</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-sm">Tasa de retiro:</span>
                          <span className="font-medium">3-4%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Plan de Implementación
                    </h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Fase 1: Reducción</h4>
                        <p className="text-sm text-muted-foreground">
                          Auditoría completa de gastos y eliminación de gastos
                          innecesarios. Establecer presupuesto minimalista.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">
                          Fase 2: Optimización
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Maximizar ingresos y establecer sistema de inversión
                          automático. Aumentar tasa de ahorro.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Fase 3: Transición</h4>
                        <p className="text-sm text-muted-foreground">
                          Adaptación progresiva al estilo de vida minimalista.
                          Prueba de presupuesto FIRE.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fatfire" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fat FIRE en Detalle</CardTitle>
                  <CardDescription>
                    La estrategia para mantener un alto nivel de vida en la
                    independencia financiera
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Características Principales
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                          <span>
                            Mayor flexibilidad en gastos discrecionales
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                          <span>
                            Mantenimiento del estilo de vida actual o superior
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                          <span>Diversificación amplia de inversiones</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                          <span>Margen para gastos imprevistos y lujos</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Objetivos Financieros
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-sm">Patrimonio objetivo:</span>
                          <span className="font-medium">€1.5M - €5M+</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-sm">Gastos mensuales:</span>
                          <span className="font-medium">€5.000 - €15.000</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-sm">Tasa de retiro:</span>
                          <span className="font-medium">3-3.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Estrategias de Acumulación
                    </h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Ingresos Elevados</h4>
                        <p className="text-sm text-muted-foreground">
                          Desarrollo de carrera de alto nivel, emprendimiento o
                          múltiples fuentes de ingresos.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">
                          Inversiones Sofisticadas
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Cartera diversificada incluyendo acciones, bienes
                          raíces, capital privado y otros activos alternativos.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">
                          Gestión Patrimonial
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Planificación fiscal avanzada y estrategias de
                          preservación de patrimonio.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="coastfire" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Coast FIRE en Detalle</CardTitle>
                  <CardDescription>
                    La estrategia de acumulación temprana para una transición
                    gradual
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Conceptos Fundamentales
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>Ahorro agresivo en años tempranos</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>Aprovechamiento del interés compuesto</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>Reducción gradual de la carga laboral</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>
                            Flexibilidad en la transición a la jubilación
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Métricas Clave</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-sm">Inversión inicial:</span>
                          <span className="font-medium">
                            €250.000 - €500.000
                          </span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-sm">
                            Edad objetivo inicial:
                          </span>
                          <span className="font-medium">30-35 años</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-sm">
                            Años hasta FIRE completo:
                          </span>
                          <span className="font-medium">15-20 años</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Fases de Coast FIRE</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">
                          Acumulación Intensiva
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Maximizar ahorros e inversiones durante los primeros
                          años de carrera profesional.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Transición Laboral</h4>
                        <p className="text-sm text-muted-foreground">
                          Reducción progresiva de horas de trabajo mientras el
                          patrimonio crece por sí solo.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">
                          Independencia Total
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          El patrimonio alcanza el objetivo FIRE mientras se
                          mantiene un trabajo flexible o pasatiempo rentable.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
