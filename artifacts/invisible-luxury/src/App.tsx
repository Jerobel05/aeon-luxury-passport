import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Passport from "./pages/Passport";
import Resale from "./pages/Resale";
import Architecture from "./pages/Architecture";

const queryClient = new QueryClient();

// A simple fallback NotFound component just in case
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground flex-col gap-6">
      <h1 className="text-6xl font-serif">404</h1>
      <p className="text-muted-foreground tracking-widest uppercase text-sm">Page not found</p>
      <a href="/" className="px-6 py-3 border border-border hover:border-accent transition-colors tracking-widest uppercase text-xs">Return Home</a>
    </div>
  );
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/scan" component={Scan} />
          <Route path="/passport" component={Passport} />
          <Route path="/resale" component={Resale} />
          <Route path="/architecture" component={Architecture} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
