// Este archivo configura todas las rutas de API
export const runtime = "nodejs";
export const preferredRegion = "auto";

// Respuesta de ejemplo para la ruta /api
export async function GET() {
  return new Response(
    JSON.stringify({ message: "API funcionando correctamente" }),
    {
      headers: { "content-type": "application/json" },
    }
  );
}
