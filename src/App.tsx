import { ThemeProvider } from "@/components/theming/theme-provider";
import LandingPage from "./containers/landing-page";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
