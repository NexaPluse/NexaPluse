import { ThemeProvider } from "@/components/theming/theme-provider";
import LandingPage from "./containers/landing";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
