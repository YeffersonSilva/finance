import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

// Rutas que requieren autenticación
const protectedRoutes = [
  "/dashboard",
  "/profile",
  "/settings",
  "/recommendations",
  "/strategies",
  "/calculator",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificar si la ruta actual es una ruta protegida
  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  // Si no es una ruta protegida, permitir el acceso
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // Obtener el token de sesión
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Si es una ruta protegida y no hay token, redirigir al login
  if (!token) {
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  // Si hay token, permitir el acceso a la ruta protegida
  return NextResponse.next();
}

// Configurar las rutas a las que se aplica el middleware
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/recommendations/:path*",
    "/strategies/:path*",
    "/calculator/:path*",
  ],
};
