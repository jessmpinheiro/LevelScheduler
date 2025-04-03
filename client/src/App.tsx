import { Switch, Route, useLocation, useRoutes } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { initializeAnalytics, trackPageView } from "./lib/analytics";
import { useEffect } from "react";
import OnboardingTutorial from "./components/OnboardingTutorial";

// GitHub Pages uses the repo name in the URL path
// This helper function extracts the base path from the current URL
function useBasePath() {
  // Verificar se o BASE_PATH está definido no env.js
  if ((window as any).BASE_PATH) {
    return (window as any).BASE_PATH;
  }
  
  // Fallback para o método antigo, caso BASE_PATH não esteja disponível
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  if (!isGitHubPages) return "";
  
  // Extract repo name from path (for GitHub Pages)
  const pathSegments = window.location.pathname.split('/');
  if (pathSegments.length > 1) {
    return `/${pathSegments[1]}`;
  }
  
  return "";
}

// Componente customizado para roteamento que suporta base path
function Router() {
  const basePath = useBasePath();
  const [location] = useLocation();
  
  // Rastrear mudanças de página para o Google Analytics
  useEffect(() => {
    trackPageView(location);
  }, [location]);
  
  console.log('Current location:', location);
  console.log('Base Path:', basePath);
  
  // Determine se estamos no ambiente de desenvolvimento ou no GitHub Pages
  const isDevEnvironment = !window.location.hostname.includes('github.io');
  
  return (
    <Switch>
      {/* Caminho para desenvolvimento local */}
      {isDevEnvironment && <Route path="/" component={Home} />}
      
      {/* Caminhos para GitHub Pages */}
      <Route path={basePath} component={Home} />
      <Route path={`${basePath}/`} component={Home} />
      
      {/* Fallback para página 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Inicializar o Google Analytics quando o aplicativo carrega
  useEffect(() => {
    initializeAnalytics();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <OnboardingTutorial />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
