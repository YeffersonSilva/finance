"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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
import { toast } from "sonner";
import { Check, X } from "lucide-react";

export default function SubscriptionPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Datos de planes de suscripción
  const plans = [
    {
      id: "free",
      name: "Gratuito",
      price: "0€",
      period: "para siempre",
      description: "Plan básico para comenzar tu camino FIRE",
      features: [
        "Calculadora FIRE básica",
        "Seguimiento de objetivos limitado",
        "Acceso a estrategias básicas",
        "Soporte por email",
      ],
      limitations: [
        "Sin recomendaciones personalizadas",
        "Sin herramientas avanzadas",
        "Sin acceso a la comunidad premium",
      ],
      isPopular: false,
    },
    {
      id: "premium",
      name: "Premium",
      price: "9,99€",
      period: "por mes",
      description: "Para inversores serios en su camino FIRE",
      features: [
        "Todas las características del plan Gratuito",
        "Recomendaciones personalizadas",
        "Herramientas avanzadas de simulación",
        "Acceso a la comunidad premium",
        "Soporte prioritario",
        "Informes mensuales detallados",
      ],
      limitations: ["Sin asesoramiento personalizado"],
      isPopular: true,
    },
    {
      id: "pro",
      name: "Pro",
      price: "19,99€",
      period: "por mes",
      description: "La experiencia FIRE definitiva",
      features: [
        "Todas las características del plan Premium",
        "Asesoramiento personalizado",
        "Acceso a webinars exclusivos",
        "Herramientas de optimización fiscal",
        "Análisis de cartera avanzado",
        "Soporte 24/7",
      ],
      limitations: [],
      isPopular: false,
    },
  ];

  // Simulamos que el usuario tiene el plan gratuito
  const currentPlan = "free";

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleSubscribe = async () => {
    if (!selectedPlan) return;

    setLoading(true);

    try {
      // Aquí iría la llamada a la API para procesar la suscripción
      // await fetch('/api/subscription', { method: 'POST', body: JSON.stringify({ planId: selectedPlan }) });

      // Simulamos una espera
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(`Te has suscrito al plan ${selectedPlan} correctamente`);

      // Redirigir a una página de éxito o dashboard
      // router.push('/dashboard');
    } catch (error) {
      toast.error("Error al procesar la suscripción");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Cargando...
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/auth/login");
    return null;
  }

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
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Planes de Suscripción
          </h2>
          <p className="text-muted-foreground">
            Elige el plan que mejor se adapte a tus necesidades para alcanzar la
            independencia financiera.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative ${
                  plan.isPopular ? "border-primary" : ""
                } ${selectedPlan === plan.id ? "ring-2 ring-primary" : ""}`}
              >
                {plan.isPopular && (
                  <Badge className="absolute top-4 right-4" variant="default">
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Incluye:</h4>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {plan.limitations.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Limitaciones:</h4>
                      {plan.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-center">
                          <X className="mr-2 h-4 w-4 text-destructive" />
                          <span className="text-sm">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  {currentPlan === plan.id ? (
                    <Button className="w-full" variant="outline" disabled>
                      Plan Actual
                    </Button>
                  ) : (
                    <Button
                      className="w-full"
                      onClick={() => handleSelectPlan(plan.id)}
                      variant={selectedPlan === plan.id ? "default" : "outline"}
                    >
                      {selectedPlan === plan.id
                        ? "Seleccionado"
                        : "Seleccionar"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {selectedPlan && (
            <div className="flex justify-center mt-8">
              <Button size="lg" onClick={handleSubscribe} disabled={loading}>
                {loading ? "Procesando..." : "Suscribirse Ahora"}
              </Button>
            </div>
          )}

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Preguntas Frecuentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">
                  ¿Puedo cambiar de plan en cualquier momento?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sí, puedes actualizar o degradar tu plan en cualquier momento.
                  Los cambios se aplicarán al inicio del siguiente ciclo de
                  facturación.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">¿Hay un período de prueba?</h3>
                <p className="text-sm text-muted-foreground">
                  Ofrecemos una garantía de devolución de dinero de 14 días para
                  todos los planes de pago.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">
                  ¿Cómo puedo cancelar mi suscripción?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Puedes cancelar tu suscripción en cualquier momento desde la
                  configuración de tu cuenta. Seguirás teniendo acceso hasta el
                  final del período facturado.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
