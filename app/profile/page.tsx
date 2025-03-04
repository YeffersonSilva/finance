"use client";

import { useState, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  // Datos del perfil
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    currentAge: 30,
    targetAge: 45,
    currentIncome: 50000,
    targetNetWorth: 1000000,
    selectedStrategy: "leanfire",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }

    if (session?.user) {
      // En un caso real, aquí cargaríamos los datos del perfil desde la API
      setProfileData({
        ...profileData,
        name: session.user.name || "",
        email: session.user.email || "",
      });
    }
  }, [session, status, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]:
        name === "currentAge" ||
        name === "targetAge" ||
        name === "currentIncome" ||
        name === "targetNetWorth"
          ? parseInt(value)
          : value,
    });
  };

  const handleStrategyChange = (value: string) => {
    setProfileData({
      ...profileData,
      selectedStrategy: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aquí iría la llamada a la API para actualizar el perfil
      // await fetch('/api/profile', { method: 'PUT', body: JSON.stringify(profileData) });

      // Simulamos una espera
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Perfil actualizado correctamente");
    } catch (error) {
      toast.error("Error al actualizar el perfil");
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
          <h2 className="text-3xl font-bold tracking-tight">Mi Perfil</h2>
          <p className="text-muted-foreground">
            Gestiona tu información personal y configura tus objetivos
            financieros.
          </p>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList>
              <TabsTrigger value="personal">Información Personal</TabsTrigger>
              <TabsTrigger value="financial">Objetivos Financieros</TabsTrigger>
              <TabsTrigger value="strategy">Estrategia FIRE</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Información Personal</CardTitle>
                  <CardDescription>
                    Actualiza tu información personal básica.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input
                        id="name"
                        name="name"
                        value={profileData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        disabled
                      />
                      <p className="text-xs text-muted-foreground">
                        El email no se puede cambiar.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Guardando..." : "Guardar Cambios"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="financial" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Objetivos Financieros</CardTitle>
                  <CardDescription>
                    Configura tus objetivos financieros para tu plan FIRE.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="currentAge">Edad Actual</Label>
                        <Input
                          id="currentAge"
                          name="currentAge"
                          type="number"
                          value={profileData.currentAge}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="targetAge">Edad Objetivo FIRE</Label>
                        <Input
                          id="targetAge"
                          name="targetAge"
                          type="number"
                          value={profileData.targetAge}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="currentIncome">
                          Ingreso Anual Actual (€)
                        </Label>
                        <Input
                          id="currentIncome"
                          name="currentIncome"
                          type="number"
                          value={profileData.currentIncome}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="targetNetWorth">
                          Patrimonio Neto Objetivo (€)
                        </Label>
                        <Input
                          id="targetNetWorth"
                          name="targetNetWorth"
                          type="number"
                          value={profileData.targetNetWorth}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Guardando..." : "Guardar Cambios"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="strategy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Estrategia FIRE</CardTitle>
                  <CardDescription>
                    Selecciona la estrategia FIRE que mejor se adapte a tus
                    objetivos.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="selectedStrategy">Estrategia FIRE</Label>
                      <Select
                        value={profileData.selectedStrategy}
                        onValueChange={handleStrategyChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una estrategia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="leanfire">Lean FIRE</SelectItem>
                          <SelectItem value="fatfire">Fat FIRE</SelectItem>
                          <SelectItem value="coastfire">Coast FIRE</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground mt-2">
                        {profileData.selectedStrategy === "leanfire" &&
                          "Lean FIRE: Enfocado en minimizar gastos y alcanzar la independencia financiera con un patrimonio más modesto."}
                        {profileData.selectedStrategy === "fatfire" &&
                          "Fat FIRE: Busca alcanzar la independencia financiera con un patrimonio más elevado para mantener un estilo de vida más cómodo."}
                        {profileData.selectedStrategy === "coastfire" &&
                          "Coast FIRE: Consiste en ahorrar lo suficiente en los primeros años para luego reducir o eliminar las contribuciones a la jubilación."}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Guardando..." : "Guardar Cambios"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
