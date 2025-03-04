"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  PiggyBank,
  BookOpen,
  ArrowRight,
  DollarSign,
  Calendar,
  Target,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirigir si no está autenticado
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  // Mostrar pantalla de carga mientras se verifica la sesión
  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Bienvenido{session?.user?.name ? `, ${session.user.name}` : ""}.
              Aquí puedes ver un resumen de tu progreso hacia la independencia
              financiera.
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="progress">Progreso</TabsTrigger>
              <TabsTrigger value="goals">Objetivos</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Patrimonio Neto
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% desde el mes pasado
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Tasa de Ahorro
                    </CardTitle>
                    <PiggyBank className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">35%</div>
                    <p className="text-xs text-muted-foreground">
                      +5% desde el mes pasado
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Tiempo hasta FIRE
                    </CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12 años</div>
                    <p className="text-xs text-muted-foreground">
                      -1 año desde la última estimación
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Objetivo FIRE
                    </CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$750,000</div>
                    <p className="text-xs text-muted-foreground">
                      6% de progreso
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Recomendaciones</CardTitle>
                    <CardDescription>
                      Sugerencias personalizadas para optimizar tu camino hacia
                      FIRE
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        Optimiza tu cartera de inversiones
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <PiggyBank className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        Aumenta tu tasa de ahorro en 5%
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        Aprende sobre inversiones en ETFs
                      </span>
                    </div>
                  </CardContent>
                  <div className="px-6 pb-4">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/recommendations">
                        Ver todas las recomendaciones
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Estrategias FIRE</CardTitle>
                    <CardDescription>
                      Explora diferentes caminos hacia la independencia
                      financiera
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <BarChart3 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        Lean FIRE - Estilo de vida frugal
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <BarChart3 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        Fat FIRE - Estilo de vida abundante
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <BarChart3 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        Coast FIRE - Independencia gradual
                      </span>
                    </div>
                  </CardContent>
                  <div className="px-6 pb-4">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/strategies">
                        Explorar estrategias
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Calculadora FIRE</CardTitle>
                    <CardDescription>
                      Calcula tu número FIRE y planifica tu camino
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        Estima tu fecha de independencia
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <DollarSign className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        Calcula tu número FIRE personalizado
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Target className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        Simula diferentes escenarios
                      </span>
                    </div>
                  </CardContent>
                  <div className="px-6 pb-4">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/calculator">
                        Usar calculadora
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="progress" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Progreso hacia FIRE</CardTitle>
                  <CardDescription>
                    Seguimiento de tu avance hacia la independencia financiera
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Contenido del progreso (gráficos y métricas)</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="goals" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Objetivos Financieros</CardTitle>
                  <CardDescription>
                    Tus metas financieras y su progreso actual
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Contenido de objetivos (lista de metas y progreso)</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
