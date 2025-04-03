import ReactGA from "react-ga4";

// ID de Medição do Google Analytics
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

// Inicializa o Google Analytics
export const initializeAnalytics = () => {
  // Só inicializa em ambiente de produção ou se houver um ID válido
  if (MEASUREMENT_ID !== "G-XXXXXXXXXX") {
    ReactGA.initialize(MEASUREMENT_ID);
    console.log("Google Analytics inicializado com sucesso");
    return true;
  } else {
    console.log("Google Analytics não inicializado - ID de medição não configurado");
    return false;
  }
};

// Registra visualização de página
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Registra eventos personalizados
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value
  });
};

// Eventos específicos para o aplicativo
export const analytics = {
  // Acompanhar quando alguém acessa a guia de verificação de nível
  trackLevelCheckView: () => {
    trackEvent("Navegação", "Ver Verificação de Nível");
  },
  
  // Acompanhar quando alguém acessa a guia de agendamento
  trackScheduleView: () => {
    trackEvent("Navegação", "Ver Agendamento");
  },
  
  // Acompanhar quando alguém inicia o formulário de verificação de nível
  trackLevelCheckStart: () => {
    trackEvent("Engajamento", "Iniciar Verificação de Nível");
  },
  
  // Acompanhar quando alguém envia o formulário de verificação de nível
  trackLevelCheckSubmit: () => {
    trackEvent("Conversão", "Enviar Verificação de Nível");
  },
  
  // Acompanhar quando alguém inicia o processo de agendamento
  trackScheduleStart: () => {
    trackEvent("Engajamento", "Iniciar Agendamento");
  },
  
  // Acompanhar quando alguém completa um agendamento
  trackScheduleComplete: () => {
    trackEvent("Conversão", "Completar Agendamento");
  }
};