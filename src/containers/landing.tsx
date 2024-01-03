import { useTheme } from "@/components/theming/theme-provider";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Button onClick={handleToggleTheme}>NexaPulse</Button>
    </main>
  );
}
