import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function RecommendationsPage() {
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
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Recomendaciones Personalizadas
          </h2>
          <p className="text-muted-foreground">
            Basadas en tu perfil financiero y objetivos, estas son nuestras
            recomendaciones para acelerar tu camino hacia la independencia
            financiera.
          </p>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="investing">Inversión</TabsTrigger>
              <TabsTrigger value="savings">Ahorro</TabsTrigger>
              <TabsTrigger value="education">Educación</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <CardTitle>Optimiza tu Cartera</CardTitle>
                    </div>
                    <CardDescription>
                      Ajustes recomendados para mejorar el rendimiento de tus
                      inversiones
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">
                      Basado en tu perfil de riesgo y horizonte temporal,
                      recomendamos una distribución de activos más eficiente
                      para maximizar tus retornos.
                    </p>
                    <div className="pt-2">
                      <p className="text-sm font-medium">Potencial mejora:</p>
                      <p className="text-lg font-bold">
                        +1.5% rendimiento anual
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="#portfolio">
                        Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Lightbulb className="h-5 w-5 text-yellow-500" />
                      <CardTitle>Oportunidades de Ahorro</CardTitle>
                    </div>
                    <CardDescription>
                      Áreas donde puedes reducir gastos sin afectar tu calidad
                      de vida
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">
                      Hemos identificado categorías específicas donde tus gastos
                      son superiores a la media y podrías optimizar sin
                      sacrificar bienestar.
                    </p>
                    <div className="pt-2">
                      <p className="text-sm font-medium">Ahorro potencial:</p>
                      <p className="text-lg font-bold">€350/mes</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="#savings">
                        Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-blue-500" />
                      <CardTitle>Recursos Educativos</CardTitle>
                    </div>
                    <CardDescription>
                      Contenido personalizado para mejorar tus conocimientos
                      financieros
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">
                      Selección de libros, cursos y artículos adaptados a tu
                      nivel de conocimiento y objetivos específicos.
                    </p>
                    <div className="pt-2">
                      <p className="text-sm font-medium">Recomendaciones:</p>
                      <p className="text-lg font-bold">5 recursos clave</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="#education">
                        Explorar <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Impacto en tu Plan FIRE</CardTitle>
                  <CardDescription>
                    Cómo estas recomendaciones podrían acelerar tu camino hacia
                    la independencia financiera
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <p className="text-sm font-medium mb-1">Plan actual</p>
                        <p className="text-2xl font-bold">15 años</p>
                        <p className="text-xs text-muted-foreground">
                          hasta independencia financiera
                        </p>
                      </div>

                      <div className="bg-muted rounded-lg p-4 text-center">
                        <p className="text-sm font-medium mb-1">
                          Con recomendaciones
                        </p>
                        <p className="text-2xl font-bold text-green-500">
                          12 años
                        </p>
                        <p className="text-xs text-muted-foreground">
                          hasta independencia financiera
                        </p>
                      </div>

                      <div className="bg-muted rounded-lg p-4 text-center">
                        <p className="text-sm font-medium mb-1">
                          Tiempo ahorrado
                        </p>
                        <p className="text-2xl font-bold text-green-500">
                          3 años
                        </p>
                        <p className="text-xs text-muted-foreground">
                          de libertad adicional
                        </p>
                      </div>
                    </div>

                    <Button className="w-full">
                      Aplicar todas las recomendaciones
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="investing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recomendaciones de Inversión</CardTitle>
                  <CardDescription>
                    Optimizaciones sugeridas para tu estrategia de inversión
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">
                        Distribución de activos recomendada
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <p className="text-sm font-medium mb-2">Actual</p>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span>Renta variable</span>
                              <span className="font-medium">60%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Renta fija</span>
                              <span className="font-medium">30%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Efectivo</span>
                              <span className="font-medium">10%</span>
                            </li>
                          </ul>
                        </div>

                        <div className="border rounded-lg p-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                          <p className="text-sm font-medium mb-2">
                            Recomendada
                          </p>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span>Renta variable</span>
                              <span className="font-medium">70%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Renta fija</span>
                              <span className="font-medium">25%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Efectivo</span>
                              <span className="font-medium">5%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">
                        Fondos recomendados
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4">Fondo</th>
                              <th className="text-left py-3 px-4">Tipo</th>
                              <th className="text-left py-3 px-4">TER</th>
                              <th className="text-left py-3 px-4">
                                Rentabilidad 5 años
                              </th>
                              <th className="text-left py-3 px-4">
                                Asignación
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-medium">
                                Vanguard Global All-Cap
                              </td>
                              <td className="py-3 px-4">
                                Renta Variable Global
                              </td>
                              <td className="py-3 px-4">0.23%</td>
                              <td className="py-3 px-4">8.7%</td>
                              <td className="py-3 px-4">40%</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-medium">
                                iShares Core MSCI EM IMI
                              </td>
                              <td className="py-3 px-4">Mercados Emergentes</td>
                              <td className="py-3 px-4">0.18%</td>
                              <td className="py-3 px-4">6.2%</td>
                              <td className="py-3 px-4">15%</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-medium">
                                Vanguard Global Bond Index
                              </td>
                              <td className="py-3 px-4">Renta Fija Global</td>
                              <td className="py-3 px-4">0.15%</td>
                              <td className="py-3 px-4">2.8%</td>
                              <td className="py-3 px-4">25%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Aplicar recomendaciones de inversión
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="savings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Oportunidades de Ahorro</CardTitle>
                  <CardDescription>
                    Áreas donde puedes optimizar tus gastos para aumentar tu
                    tasa de ahorro
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-medium">Suscripciones</h3>
                          <span className="text-green-500 font-medium">
                            Ahorro potencial: €85/mes
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Tienes 8 suscripciones activas, de las cuales 3
                          muestran poco uso en los últimos 3 meses.
                        </p>
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-medium">
                            Gastos de alimentación
                          </h3>
                          <span className="text-green-500 font-medium">
                            Ahorro potencial: €120/mes
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Tus gastos en comida para llevar y restaurantes son un
                          40% superiores a la media de usuarios con perfil
                          similar.
                        </p>
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-medium">
                            Servicios financieros
                          </h3>
                          <span className="text-green-500 font-medium">
                            Ahorro potencial: €45/mes
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Estás pagando comisiones bancarias y de tarjetas que
                          podrían eliminarse con productos alternativos.
                        </p>
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-medium">
                            Suministros del hogar
                          </h3>
                          <span className="text-green-500 font-medium">
                            Ahorro potencial: €100/mes
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Existen tarifas más económicas para tus servicios de
                          electricidad, internet y telefonía.
                        </p>
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Aplicar plan de optimización de gastos
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <BookOpen className="h-5 w-5 text-purple-500" />
                      <CardTitle>Libros Recomendados</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-b pb-2">
                      <h4 className="font-medium">La Psicología del Dinero</h4>
                      <p className="text-sm text-muted-foreground">
                        Morgan Housel
                      </p>
                    </div>
                    <div className="border-b pb-2">
                      <h4 className="font-medium">
                        Un Paseo Aleatorio por Wall Street
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Burton G. Malkiel
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">El Inversor Inteligente</h4>
                      <p className="text-sm text-muted-foreground">
                        Benjamin Graham
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver lista completa
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-5 w-5 text-indigo-500" />
                      <CardTitle>Comunidades</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-b pb-2">
                      <h4 className="font-medium">r/financialindependence</h4>
                      <p className="text-sm text-muted-foreground">
                        Comunidad de Reddit sobre FIRE
                      </p>
                    </div>
                    <div className="border-b pb-2">
                      <h4 className="font-medium">Bogleheads</h4>
                      <p className="text-sm text-muted-foreground">
                        Foro sobre inversión pasiva
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">FIRE España</h4>
                      <p className="text-sm text-muted-foreground">
                        Grupo local de entusiastas FIRE
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Unirse a comunidades
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="h-5 w-5 text-orange-500" />
                      <CardTitle>Cursos Online</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-b pb-2">
                      <h4 className="font-medium">
                        Finanzas Personales Fundamentales
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Coursera - Universidad de Michigan
                      </p>
                    </div>
                    <div className="border-b pb-2">
                      <h4 className="font-medium">
                        Inversión para Principiantes
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Udemy - 4.8/5 (2,300 reseñas)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Planificación de la Jubilación
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        edX - Universidad de California
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Explorar cursos
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
