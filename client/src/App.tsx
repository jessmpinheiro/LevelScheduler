import { Switch, Route, useLocation, useRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { initializeAnalytics, trackPageView } from "./lib/analytics";
import { useEffect } from "react";

// GitHub Pages uses the repo name in the URL path
// This helper function extracts the base path from the current URL
function useBasePath() {
  // When deployed to GitHub Pages, the site will be at /{repo-name}
  // In development or other deployments, it might be at the root "/"
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  if (!isGitHubPages) return "";
  
  // Extract repo name from path (for GitHub Pages)
  const pathSegments = window.location.pathname.split('/');
  if (pathSegments.length > 1) {
    return `/${pathSegments[1]}`;
  }
  
  return "";
}

function Router() {
  const basePath = useBasePath();
  const [location] = useLocation();
  
  // Rastrear mudanças de página para o Google Analytics
  useEffect(() => {
    // Enviar o evento de visualização de página para o GA
    trackPageView(location);
  }, [location]);
  
  return (
    <Switch>
      <Route path={`${basePath}/`} component={Home} />
      <Route path={`${basePath}`} component={Home} />
      {/* Fallback to 404 */}
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
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
