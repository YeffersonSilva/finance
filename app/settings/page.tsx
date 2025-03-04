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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  AlertCircle,
  Bell,
  Lock,
  Mail,
  Shield,
  Smartphone,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("account");

  // Estados para los diferentes ajustes
  const [accountSettings, setAccountSettings] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    monthlyReports: true,
    goalAlerts: true,
    marketUpdates: false,
  });

  const [privacySettings, setPrivacySettings] = useState({
    dataSharing: false,
    analyticsConsent: true,
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountSettings({
      ...accountSettings,
      [name]: value,
    });
  };

  const handleNotificationToggle = (setting: string) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]:
        !notificationSettings[setting as keyof typeof notificationSettings],
    });
  };

  const handlePrivacyToggle = (setting: string) => {
    setPrivacySettings({
      ...privacySettings,
      [setting]: !privacySettings[setting as keyof typeof privacySettings],
    });
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (accountSettings.newPassword !== accountSettings.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    try {
      // Aquí iría la llamada a la API para cambiar la contraseña
      // await fetch('/api/user/password', { method: 'PUT', body: JSON.stringify(accountSettings) });

      // Simulamos una espera
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setAccountSettings({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      toast.success("Contraseña actualizada correctamente");
    } catch (error) {
      toast.error("Error al actualizar la contraseña");
    } finally {
      setLoading(false);
    }
  };

  const handleNotificationsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aquí iría la llamada a la API para actualizar las notificaciones
      // await fetch('/api/user/notifications', { method: 'PUT', body: JSON.stringify(notificationSettings) });

      // Simulamos una espera
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Preferencias de notificaciones actualizadas");
    } catch (error) {
      toast.error("Error al actualizar las preferencias");
    } finally {
      setLoading(false);
    }
  };

  const handlePrivacySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aquí iría la llamada a la API para actualizar la privacidad
      // await fetch('/api/user/privacy', { method: 'PUT', body: JSON.stringify(privacySettings) });

      // Simulamos una espera
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Configuración de privacidad actualizada");
    } catch (error) {
      toast.error("Error al actualizar la configuración");
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
          <h2 className="text-3xl font-bold tracking-tight">Configuración</h2>
          <p className="text-muted-foreground">
            Gestiona tu cuenta, preferencias de notificaciones y privacidad.
          </p>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList>
              <TabsTrigger value="account">Cuenta</TabsTrigger>
              <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
              <TabsTrigger value="privacy">Privacidad</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Seguridad de la Cuenta</CardTitle>
                  <CardDescription>
                    Actualiza tu contraseña y configura la seguridad de tu
                    cuenta.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handlePasswordSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Contraseña Actual</Label>
                      <Input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        value={accountSettings.currentPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nueva Contraseña</Label>
                      <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        value={accountSettings.newPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">
                        Confirmar Contraseña
                      </Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={accountSettings.confirmPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Seguridad</AlertTitle>
                      <AlertDescription>
                        Usa una contraseña segura que no utilices en otros
                        sitios.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Actualizando..." : "Actualizar Contraseña"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Preferencias de Notificaciones</CardTitle>
                  <CardDescription>
                    Configura cómo y cuándo quieres recibir notificaciones.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleNotificationsSubmit}>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between space-x-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <Label htmlFor="emailNotifications">
                          Notificaciones por Email
                        </Label>
                      </div>
                      <Switch
                        id="emailNotifications"
                        checked={notificationSettings.emailNotifications}
                        onCheckedChange={() =>
                          handleNotificationToggle("emailNotifications")
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="h-4 w-4" />
                        <Label htmlFor="pushNotifications">
                          Notificaciones Push
                        </Label>
                      </div>
                      <Switch
                        id="pushNotifications"
                        checked={notificationSettings.pushNotifications}
                        onCheckedChange={() =>
                          handleNotificationToggle("pushNotifications")
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <div className="flex items-center space-x-2">
                        <Bell className="h-4 w-4" />
                        <Label htmlFor="monthlyReports">
                          Informes Mensuales
                        </Label>
                      </div>
                      <Switch
                        id="monthlyReports"
                        checked={notificationSettings.monthlyReports}
                        onCheckedChange={() =>
                          handleNotificationToggle("monthlyReports")
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <div className="flex items-center space-x-2">
                        <Bell className="h-4 w-4" />
                        <Label htmlFor="goalAlerts">Alertas de Objetivos</Label>
                      </div>
                      <Switch
                        id="goalAlerts"
                        checked={notificationSettings.goalAlerts}
                        onCheckedChange={() =>
                          handleNotificationToggle("goalAlerts")
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <div className="flex items-center space-x-2">
                        <Bell className="h-4 w-4" />
                        <Label htmlFor="marketUpdates">
                          Actualizaciones del Mercado
                        </Label>
                      </div>
                      <Switch
                        id="marketUpdates"
                        checked={notificationSettings.marketUpdates}
                        onCheckedChange={() =>
                          handleNotificationToggle("marketUpdates")
                        }
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Guardando..." : "Guardar Preferencias"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración de Privacidad</CardTitle>
                  <CardDescription>
                    Gestiona cómo se utiliza tu información.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handlePrivacySubmit}>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between space-x-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4" />
                        <Label htmlFor="dataSharing">
                          Compartir Datos Anónimos
                        </Label>
                      </div>
                      <Switch
                        id="dataSharing"
                        checked={privacySettings.dataSharing}
                        onCheckedChange={() =>
                          handlePrivacyToggle("dataSharing")
                        }
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Permite compartir datos anónimos para mejorar nuestros
                      servicios.
                    </p>
                    <div className="flex items-center justify-between space-x-2">
                      <div className="flex items-center space-x-2">
                        <Lock className="h-4 w-4" />
                        <Label htmlFor="analyticsConsent">
                          Consentimiento de Análisis
                        </Label>
                      </div>
                      <Switch
                        id="analyticsConsent"
                        checked={privacySettings.analyticsConsent}
                        onCheckedChange={() =>
                          handlePrivacyToggle("analyticsConsent")
                        }
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Permite el uso de cookies y análisis para mejorar tu
                      experiencia.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Guardando..." : "Guardar Configuración"}
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
