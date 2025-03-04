"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // Obtener el error de los parámetros de búsqueda
    const error = searchParams.get("error");

    // Mapear códigos de error a mensajes amigables
    switch (error) {
      case "CredentialsSignin":
        setErrorMessage("Las credenciales proporcionadas son incorrectas.");
        break;
      case "OAuthSignin":
      case "OAuthCallback":
      case "OAuthCreateAccount":
      case "OAuthAccountNotLinked":
        setErrorMessage(
          "Hubo un problema con la autenticación social. Por favor, intenta con otro método."
        );
        break;
      case "EmailCreateAccount":
      case "EmailSignin":
        setErrorMessage(
          "Hubo un problema con la autenticación por correo electrónico."
        );
        break;
      case "SessionRequired":
        setErrorMessage("Necesitas iniciar sesión para acceder a esta página.");
        break;
      case "Default":
      default:
        setErrorMessage(
          "Se produjo un error durante la autenticación. Por favor, intenta nuevamente."
        );
        break;
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
          <CardTitle className="text-2xl text-center">
            Error de autenticación
          </CardTitle>
          <CardDescription className="text-center">
            {errorMessage}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Por favor, intenta nuevamente o contacta con soporte si el problema
            persiste.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button asChild variant="outline">
            <Link href="/auth/login">Volver al inicio de sesión</Link>
          </Button>
          <Button asChild>
            <Link href="/">Ir al inicio</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
