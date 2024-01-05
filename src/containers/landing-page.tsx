import { useTheme } from "@/components/theming/theme-provider";
import { Button } from "@/components/ui/button";
import Navigation from "./navigation";
import Hero from "./hero";
import AboutUs from "./about";
import Services from "./services";
import Achievement from "./achievement";
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
        {/* DELETE BELOW */}
        <div className="flex flex-col items-center gap-4 justify-center">
          <Button onClick={handleToggleTheme} variant={"primary"}>
            Switch Theme
          </Button>
          <div className="flex items-center  gap-3 justify-center">
            <Button>Default Button</Button>
            <Button variant={"primary"}>Primary Button</Button>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-primary font-heading text-3xl">Heading</h2>
            <p className="w-[400px] text-center text-foreground ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              provident debitis. Eum, quas dolores distinctio obcaecati culpa
              tenetur explicabo quae?
            </p>
          </div>
        </div>
        {/* DELETE ABOVE */}
        <Hero />
        <AboutUs />
        <Services />
        <Achievement />
        <Portfolio />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
