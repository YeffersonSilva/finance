"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Zap, Shield, Star } from "lucide-react";

export default function SubscriptionPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [currentPlan, setCurrentPlan] = useState("free");

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
            <h1 className="text-3xl font-bold tracking-tight">Suscripción</h1>
            <p className="text-muted-foreground">
              Gestiona tu plan de suscripción y método de pago
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Tu plan actual</CardTitle>
              <CardDescription>
                Información sobre tu suscripción actual
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">
                    Plan {currentPlan === "free" ? "Gratuito" : "Premium"}
                  </h3>
                  <Badge
                    variant={currentPlan === "free" ? "outline" : "default"}
                  >
                    {currentPlan === "free" ? "Activo" : "Premium"}
                  </Badge>
                </div>
                {currentPlan === "premium" && (
                  <p className="text-sm text-muted-foreground">
                    Renovación: 15/12/2023
                  </p>
                )}
              </div>

              {currentPlan === "free" ? (
                <div className="rounded-lg border p-4 bg-muted/50">
                  <p className="text-sm">
                    Estás utilizando el plan gratuito. Actualiza a Premium para
                    desbloquear todas las funcionalidades.
                  </p>
                </div>
              ) : (
                <div className="rounded-lg border p-4 bg-primary/10">
                  <p className="text-sm">
                    Estás disfrutando de todas las funcionalidades premium.
                    ¡Gracias por tu apoyo!
                  </p>
                </div>
              )}
            </CardContent>
            {currentPlan === "free" && (
              <CardFooter>
                <Button>Actualizar a Premium</Button>
              </CardFooter>
            )}
          </Card>

          <h2 className="text-2xl font-bold mt-6">Planes disponibles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className={currentPlan === "free" ? "border-primary" : ""}>
              <CardHeader>
                <CardTitle>Plan Gratuito</CardTitle>
                <CardDescription>
                  Funcionalidades básicas para comenzar tu camino FIRE
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold">
                  €0
                  <span className="text-base font-normal text-muted-foreground">
                    /mes
                  </span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Calculadora FIRE básica</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Seguimiento de objetivos financieros</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Acceso a estrategias FIRE</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full"
                  disabled={currentPlan === "free"}
                >
                  {currentPlan === "free" ? "Plan Actual" : "Seleccionar Plan"}
                </Button>
              </CardFooter>
            </Card>

            <Card className={currentPlan === "premium" ? "border-primary" : ""}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Plan Premium</CardTitle>
                  <Badge variant="default" className="bg-primary">
                    Recomendado
                  </Badge>
                </div>
                <CardDescription>
                  Todas las herramientas para optimizar tu camino FIRE
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold">
                  €9.99
                  <span className="text-base font-normal text-muted-foreground">
                    /mes
                  </span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Todo lo del plan gratuito</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="mr-2 h-4 w-4 text-primary" />
                    <span>Recomendaciones personalizadas</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="mr-2 h-4 w-4 text-primary" />
                    <span>Análisis de cartera avanzado</span>
                  </li>
                  <li className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4 text-primary" />
                    <span>Optimización de gastos</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="mr-2 h-4 w-4 text-primary" />
                    <span>Acceso a webinars exclusivos</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled={currentPlan === "premium"}>
                  {currentPlan === "premium"
                    ? "Plan Actual"
                    : "Actualizar Ahora"}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Plan Empresarial</CardTitle>
                <CardDescription>
                  Para asesores financieros y equipos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold">
                  €49.99
                  <span className="text-base font-normal text-muted-foreground">
                    /mes
                  </span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Todo lo del plan premium</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Gestión de múltiples clientes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Herramientas de colaboración</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Informes personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Soporte prioritario</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Contactar para más información
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Método de pago</CardTitle>
              <CardDescription>
                Gestiona tus métodos de pago para la suscripción
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-6 w-6" />
                    <div>
                      <p className="font-medium">Visa terminada en 4242</p>
                      <p className="text-sm text-muted-foreground">
                        Expira: 12/2025
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Añadir método de pago</Button>
              <Button variant="destructive">Cancelar suscripción</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
