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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Bell, Globe, Lock, Eye, Moon, Sun, Languages } from "lucide-react";

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Estados para las configuraciones
  const [settings, setSettings] = useState({
    // Notificaciones
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,

    // Apariencia
    theme: "system",
    fontSize: "medium",

    // Privacidad
    profileVisibility: "public",
    shareData: true,

    // Preferencias
    language: "es",
    currency: "EUR",
  });

  // Redirigir si no está autenticado
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  // Manejar cambios en los switches
  const handleSwitchChange = (setting: string) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting as keyof typeof settings],
    });
  };

  // Manejar cambios en los selects
  const handleSelectChange = (setting: string, value: string) => {
    setSettings({
      ...settings,
      [setting]: value,
    });
  };

  // Guardar configuraciones
  const handleSaveSettings = async () => {
    setIsLoading(true);

    try {
      // Aquí iría la lógica para guardar las configuraciones
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Configuración guardada correctamente");
    } catch (error) {
      toast.error("Error al guardar la configuración");
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
            <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
            <p className="text-muted-foreground">
              Personaliza tu experiencia en FIRE Path
            </p>
          </div>

          <Tabs defaultValue="notifications" className="space-y-4">
            <TabsList>
              <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
              <TabsTrigger value="appearance">Apariencia</TabsTrigger>
              <TabsTrigger value="privacy">Privacidad</TabsTrigger>
              <TabsTrigger value="preferences">Preferencias</TabsTrigger>
            </TabsList>

            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notificaciones
                  </CardTitle>
                  <CardDescription>
                    Configura cómo y cuándo quieres recibir notificaciones
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">
                        Notificaciones por email
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe actualizaciones importantes por email
                      </p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={settings.emailNotifications}
                      onCheckedChange={() =>
                        handleSwitchChange("emailNotifications")
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-notifications">
                        Notificaciones push
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones en tiempo real en tu navegador
                      </p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={settings.pushNotifications}
                      onCheckedChange={() =>
                        handleSwitchChange("pushNotifications")
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="weekly-reports">Informes semanales</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe un resumen semanal de tu progreso FIRE
                      </p>
                    </div>
                    <Switch
                      id="weekly-reports"
                      checked={settings.weeklyReports}
                      onCheckedChange={() =>
                        handleSwitchChange("weeklyReports")
                      }
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveSettings} disabled={isLoading}>
                    {isLoading ? "Guardando..." : "Guardar cambios"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Apariencia
                  </CardTitle>
                  <CardDescription>
                    Personaliza la apariencia de la aplicación
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="theme">Tema</Label>
                    <div className="flex items-center gap-2">
                      <Select
                        value={settings.theme}
                        onValueChange={(value) =>
                          handleSelectChange("theme", value)
                        }
                      >
                        <SelectTrigger id="theme" className="w-full">
                          <SelectValue placeholder="Selecciona un tema" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">
                            <div className="flex items-center gap-2">
                              <Sun className="h-4 w-4" />
                              <span>Claro</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="dark">
                            <div className="flex items-center gap-2">
                              <Moon className="h-4 w-4" />
                              <span>Oscuro</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="system">Sistema</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="font-size">Tamaño de fuente</Label>
                    <Select
                      value={settings.fontSize}
                      onValueChange={(value) =>
                        handleSelectChange("fontSize", value)
                      }
                    >
                      <SelectTrigger id="font-size" className="w-full">
                        <SelectValue placeholder="Selecciona un tamaño de fuente" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Pequeño</SelectItem>
                        <SelectItem value="medium">Mediano</SelectItem>
                        <SelectItem value="large">Grande</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveSettings} disabled={isLoading}>
                    {isLoading ? "Guardando..." : "Guardar cambios"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Privacidad
                  </CardTitle>
                  <CardDescription>
                    Gestiona la privacidad y seguridad de tu cuenta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="profile-visibility">
                      Visibilidad del perfil
                    </Label>
                    <Select
                      value={settings.profileVisibility}
                      onValueChange={(value) =>
                        handleSelectChange("profileVisibility", value)
                      }
                    >
                      <SelectTrigger id="profile-visibility" className="w-full">
                        <SelectValue placeholder="Selecciona la visibilidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Público</SelectItem>
                        <SelectItem value="private">Privado</SelectItem>
                        <SelectItem value="friends">Solo amigos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="share-data">
                        Compartir datos anónimos
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Ayúdanos a mejorar compartiendo datos anónimos de uso
                      </p>
                    </div>
                    <Switch
                      id="share-data"
                      checked={settings.shareData}
                      onCheckedChange={() => handleSwitchChange("shareData")}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveSettings} disabled={isLoading}>
                    {isLoading ? "Guardando..." : "Guardar cambios"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Preferencias
                  </CardTitle>
                  <CardDescription>
                    Configura tus preferencias regionales y de idioma
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="language"
                      className="flex items-center gap-2"
                    >
                      <Languages className="h-4 w-4" />
                      Idioma
                    </Label>
                    <Select
                      value={settings.language}
                      onValueChange={(value) =>
                        handleSelectChange("language", value)
                      }
                    >
                      <SelectTrigger id="language" className="w-full">
                        <SelectValue placeholder="Selecciona un idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currency">Moneda</Label>
                    <Select
                      value={settings.currency}
                      onValueChange={(value) =>
                        handleSelectChange("currency", value)
                      }
                    >
                      <SelectTrigger id="currency" className="w-full">
                        <SelectValue placeholder="Selecciona una moneda" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EUR">Euro (€)</SelectItem>
                        <SelectItem value="USD">
                          Dólar estadounidense ($)
                        </SelectItem>
                        <SelectItem value="GBP">Libra esterlina (£)</SelectItem>
                        <SelectItem value="JPY">Yen japonés (¥)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveSettings} disabled={isLoading}>
                    {isLoading ? "Guardando..." : "Guardar cambios"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
