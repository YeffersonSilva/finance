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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { User, Mail, Calendar, Upload } from "lucide-react";

export default function ProfilePage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Redirigir si no está autenticado
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  // Cargar datos del usuario cuando la sesión esté disponible
  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || "",
        email: session.user.email || "",
      });
    }
  }, [session]);

  // Obtener las iniciales del nombre del usuario para el avatar fallback
  const getInitials = (name: string) => {
    if (!name) return "FI";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Aquí iría la lógica para actualizar el perfil del usuario
      // Por ahora, solo simulamos una actualización exitosa
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Actualizar la sesión con los nuevos datos
      await update({
        ...session,
        user: {
          ...session?.user,
          name: formData.name,
        },
      });

      toast.success("Perfil actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      toast.error("Error al actualizar el perfil");
    } finally {
      setIsLoading(false);
    }
  };

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
            <h1 className="text-3xl font-bold tracking-tight">Perfil</h1>
            <p className="text-muted-foreground">
              Gestiona tu información personal y preferencias
            </p>
          </div>

          <Tabs defaultValue="personal" className="space-y-4">
            <TabsList>
              <TabsTrigger value="personal">Información Personal</TabsTrigger>
              <TabsTrigger value="security">Seguridad</TabsTrigger>
              <TabsTrigger value="preferences">Preferencias</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Información Personal</CardTitle>
                  <CardDescription>
                    Actualiza tu información personal y foto de perfil
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-24 w-24">
                        <AvatarImage
                          src={session?.user?.image || ""}
                          alt={session?.user?.name || "Usuario"}
                        />
                        <AvatarFallback className="text-2xl">
                          {getInitials(session?.user?.name || "FI")}
                        </AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm" className="mt-2">
                        <Upload className="mr-2 h-4 w-4" />
                        Cambiar foto
                      </Button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex-1 space-y-4">
                      <div className="grid gap-2">
                        <Label
                          htmlFor="name"
                          className="flex items-center gap-2"
                        >
                          <User className="h-4 w-4" />
                          Nombre
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre completo"
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label
                          htmlFor="email"
                          className="flex items-center gap-2"
                        >
                          <Mail className="h-4 w-4" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@ejemplo.com"
                          disabled
                        />
                        <p className="text-xs text-muted-foreground">
                          El email no se puede cambiar
                        </p>
                      </div>

                      <div className="grid gap-2">
                        <Label
                          htmlFor="joined"
                          className="flex items-center gap-2"
                        >
                          <Calendar className="h-4 w-4" />
                          Fecha de registro
                        </Label>
                        <Input id="joined" value="01/01/2023" disabled />
                      </div>

                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Guardando..." : "Guardar cambios"}
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Seguridad</CardTitle>
                  <CardDescription>
                    Gestiona tu contraseña y la seguridad de tu cuenta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="current-password">
                        Contraseña actual
                      </Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="new-password">Nueva contraseña</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">
                        Confirmar contraseña
                      </Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button>Cambiar contraseña</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Preferencias</CardTitle>
                  <CardDescription>
                    Personaliza tu experiencia en la plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Contenido de preferencias (próximamente)</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
