import { Switch, Route, useLocation, useRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// GitHub Pages uses the repo name in the URL path
// This helper function extracts the base path from the current URL
function useBasePath() {
  // When deployed to GitHub Pages, the site will be at /{repo-name}
  // In development or other deployments, it might be at the root "/"
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  if (!isGitHubPages) return "";
  
  // For GitHub Pages, hardcode the repo name to ensure correct path
  if (isGitHubPages) {
    return "/LevelScheduler";
  }
  
  return "";
}

function Router() {
  const basePath = useBasePath();
  
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
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
