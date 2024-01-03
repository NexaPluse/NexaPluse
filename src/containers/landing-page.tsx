import { useTheme } from "@/components/theming/theme-provider";
import { Button } from "@/components/ui/button";
import Navigation from "./navigation";
import Hero from "./hero";
import AboutUs from "./about";
import Services from "./services";
import Achievement from "./achievement";
import Values from "./values";
import Portfolio from "./portfolio";
import Consultation from "./consultation";
import Footer from "./footer";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="flex flex-col min-h-screen">
        <div className="flex items-center justify-center">
          <Button onClick={handleToggleTheme}>NexaPulse</Button>
        </div>
        <Hero />
        <AboutUs />
        <Services />
        <Achievement />
        <Values />
        <Portfolio />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
