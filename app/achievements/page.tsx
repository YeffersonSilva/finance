"use client";

import { useState } from "react";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Lock, TrendingUp, PiggyBank, Wallet, Building, LineChart, Zap } from "lucide-react";

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { id: "all", name: "Todos", icon: <Trophy className="h-5 w-5" /> },
    { id: "savings", name: "Ahorro", icon: <PiggyBank className="h-5 w-5" /> },
    { id: "investing", name: "Inversión", icon: <LineChart className="h-5 w-5" /> },
    { id: "milestones", name: "Hitos", icon: <Star className="h-5 w-5" /> },
  ];
  
  const achievements = [
    {
      id: 1,
      title: "Primer Mes de Ahorro",
      description: "Ahorra más del 30% de tus ingresos durante un mes completo.",
      category: "savings",
      icon: <PiggyBank className="h-10 w-10" />,
      progress: 100,
      completed: true,
      date: "15/01/2024",
      reward: "Insignia de Ahorrador Principiante",
    },
    {
      id: 2,
      title: "Fondo de Emergencia",
      description: "Acumula un fondo de emergencia equivalente a 6 meses de gastos.",
      category: "savings",
      icon: <Wallet className="h-10 w-10" />,
      progress: 100,
      completed: true,
      date: "10/03/2024",
      reward: "Insignia de Seguridad Financiera",
    },
    {
      id: 3,
      title: "Inversor Diversificado",
      description: "Invierte en al menos 3 clases de activos diferentes.",
      category: "investing",
      icon: <LineChart className="h-10 w-10" />,
      progress: 100,
      completed: true,
      date: "05/04/2024",
      reward: "Insignia de Diversificación",
    },
    {
      id: 4,
      title: "Primer €100K",
      description: "Alcanza un patrimonio neto de €100.000.",
      category: "milestones",
      icon: <TrendingUp className="h-10 w-10" />,
      progress: 100,
      completed: true,
      date: "20/12/2023",
      reward: "Insignia de Primer Hito",
    },
    {
      id: 5,
      title: "Tasa de Ahorro 50%",
      description: "Mantén una tasa de ahorro del 50% o más durante 3 meses consecutivos.",
      category: "savings",
      icon: <Zap className="h-10 w-10" />,
      progress: 75,
      completed: false,
      reward: "Insignia de Ahorrador Extremo",
    },
    {
      id: 6,
      title: "Inversor Inmobiliario",
      description: "Añade bienes raíces a tu cartera de inversiones.",
      category: "investing",
      icon: <Building className="h-10 w-10" />,
      progress: 0,
      completed: false,
      reward: "Insignia de Inversor Inmobiliario",
    },
    {
      id: 7,
      title: "Camino a €250K",
      description: "Alcanza un patrimonio neto de €250.000.",
      category: "milestones",
      icon: <TrendingUp className="h-10 w-10" />,
      progress: 75,
      completed: false,
      reward: "Insignia de Segundo Hito",
    },
    {
      id: 8,
      title: "Libertad Financiera 25%",
      description: "Alcanza el 25% de tu objetivo FIRE.",
      category: "milestones",
      icon: <Star className="h-10 w-10" />,
      progress: 100,
      completed: true,
      date: "15/04/2024",
      reward: "Insignia de Progreso FIRE",
    },
  ];
  
  const filteredAchievements = selectedCategory && selectedCategory !== "all"
    ? achievements.filter(a => a.category === selectedCategory)
    : achievements;
  
  const completedCount = achievements.filter(a => a.completed).length;
  const totalCount = achievements.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);
  
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
          <h2 className="text-3xl font-bold tracking-tight">Logros y Recompensas</h2>
          <p className="text-muted-foreground">
            Sigue tu progreso y desbloquea insignias a medida que avanzas en tu camino hacia la independencia financiera.
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle>Progreso General</CardTitle>
              <CardDescription>
                Has completado {completedCount} de {totalCount} logros
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={completionPercentage} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{completionPercentage}% completado</span>
                <span>{completedCount}/{totalCount} logros</span>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAchievements.map((achievement) => (
              <Card key={achievement.id} className={`overflow-hidden ${!achievement.completed ? "opacity-80" : ""}`}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-lg ${achievement.completed ? "bg-primary/10" : "bg-muted"}`}>
                      {achievement.icon}
                    </div>
                    {achievement.completed ? (
                      <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                        <Trophy className="h-4 w-4 mr-1" />
                        Completado
                      </div>
                    ) : (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Lock className="h-4 w-4 mr-1" />
                        En progreso
                      </div>
                    )}
                  </div>
                  <CardTitle className="mt-4">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  {!achievement.completed && (
                    <div className="space-y-2">
                      <Progress value={achievement.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">{achievement.progress}% completado</p>
                    </div>
                  )}
                  
                  {achievement.completed && achievement.date && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">Completado el: </span>
                      <span className="font-medium">{achievement.date}</span>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Recompensa: </span>
                    <span className="font-medium">{achievement.reward}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Próximos Desafíos</CardTitle>
              <CardDescription>
                Completa estos desafíos para acelerar tu camino hacia FIRE
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-muted p-2 rounded">
                    <Zap className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Desafío de 30 días sin gastos innecesarios</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Elimina todos los gastos no esenciales durante 30 días y aumenta tu tasa de ahorro al máximo.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Comenzar desafío
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-muted p-2 rounded">
                    <LineChart className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Desafío de educación financiera</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lee un libro sobre inversiones y aplica al menos tres conceptos nuevos a tu estrategia.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Comenzar desafío
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}