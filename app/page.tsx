import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { OverviewChart } from "@/components/dashboard/overview-chart";
import { FireProgress } from "@/components/dashboard/fire-progress";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { InvestmentAllocation } from "@/components/dashboard/investment-allocation";

export default function Home() {
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
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCards />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <OverviewChart />
            <FireProgress />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            <RecentTransactions />
            <InvestmentAllocation />
          </div>
        </div>
      </main>
    </div>
  );
}