"use client";

import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogoutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Si no hay sesión, redirigir al inicio
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const handleCancel = () => {
    router.back();
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
    <div className="flex min-h-screen items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <LogOut className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">Cerrar Sesión</CardTitle>
          <CardDescription className="text-center">
            ¿Estás seguro de que deseas cerrar sesión?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {session?.user?.name && (
            <p className="text-center">
              Actualmente has iniciado sesión como{" "}
              <span className="font-semibold">{session.user.name}</span>
            </p>
          )}
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button onClick={handleCancel} variant="outline">
            Cancelar
          </Button>
          <Button onClick={handleLogout} variant="destructive">
            Cerrar Sesión
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
