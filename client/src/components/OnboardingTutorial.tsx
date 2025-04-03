import { useEffect, useState } from 'react';
import { driver, DriveStep } from 'driver.js';
import 'driver.js/dist/driver.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Info } from 'lucide-react';
import { analytics } from '../lib/analytics';

// Tutorial steps
const tutorialSteps: DriveStep[] = [
  {
    element: '.logo-container',
    popover: {
      title: 'Bem-vindo(a) à Jessica English Assessment',
      description: 'Este é o serviço de avaliação de nível de inglês da Teacher Jessica.',
      side: 'bottom' as const,
      align: 'start' as const,
    }
  },
  {
    element: '.tabs-container',
    popover: {
      title: 'Navegação Simples',
      description: 'Você pode alternar entre a avaliação de nível e o agendamento usando estas abas.',
      side: 'bottom' as const,
      align: 'center' as const,
    }
  },
  {
    element: '.level-check-tab',
    popover: {
      title: 'Avaliação de Nível',
      description: 'Faça uma avaliação aproximada do seu nível de inglês em apenas 10-15 minutos. Os resultados serão enviados para seu email.',
      side: 'bottom' as const,
      align: 'start' as const,
    }
  },
  {
    element: '.schedule-tab',
    popover: {
      title: 'Agende uma Consulta',
      description: 'Reserve uma consulta gratuita e sem compromisso para obter uma avaliação completa e precisa.',
      side: 'bottom' as const,
      align: 'end' as const,
    }
  },
  {
    element: '.testimonials-section',
    popover: {
      title: 'Depoimentos',
      description: 'Veja o que outros alunos dizem sobre os serviços da Teacher Jessica.',
      side: 'top' as const,
      align: 'center' as const,
    }
  },
  {
    element: '.contact-footer',
    popover: {
      title: 'Entre em Contato',
      description: 'Você pode encontrar todas as informações de contato da Teacher Jessica aqui.',
      side: 'top' as const,
      align: 'center' as const,
    }
  }
];

// Welcome card component
const WelcomeCard = ({ onStart, onSkip }: { onStart: () => void; onSkip: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
    >
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gradient">Bem-vindo(a)!</h2>
            <Button variant="ghost" size="icon" onClick={onSkip} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-4">
            <p>Parece que esta é sua primeira visita! Gostaria de conhecer as principais funcionalidades do site?</p>
            
            <div className="grid gap-2">
              <Button 
                onClick={onStart}
                className="w-full bg-gradient-primary text-white"
              >
                Iniciar tour
              </Button>
              <Button 
                variant="outline" 
                onClick={onSkip}
                className="w-full"
              >
                Pular por enquanto
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Progress indicator component
const TutorialProgress = ({ 
  currentStep, 
  totalSteps,
  onNext,
  onPrev,
  onClose
}: { 
  currentStep: number; 
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[60] bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2"
    >
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-full"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>

      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-full"
        onClick={onPrev}
        disabled={currentStep === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <div className="flex gap-1 mx-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div 
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === currentStep ? 'bg-primary w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-full"
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      
      <span className="text-xs font-medium ml-1">
        {currentStep + 1}/{totalSteps}
      </span>
    </motion.div>
  );
};

// Completion card component
const CompletionCard = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
    >
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gradient">Tour Completo!</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-4">
            <p>Agora você conhece as principais funcionalidades do site. Pronto para começar?</p>
            
            <div className="flex justify-center my-6">
              <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                <ChevronRight className="h-8 w-8" />
              </div>
            </div>
            
            <Button 
              onClick={onClose}
              className="w-full bg-gradient-primary text-white"
            >
              Começar agora
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Help button component
const HelpButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 z-40"
    >
      <Button
        onClick={onClick}
        className="h-12 w-12 rounded-full bg-gradient-primary text-white shadow-lg"
      >
        <Info className="h-6 w-6" />
      </Button>
    </motion.div>
  );
};

// Main component
export default function OnboardingTutorial() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [driverObj, setDriverObj] = useState<any>(null);

  // Check if first visit using localStorage
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    if (!hasVisitedBefore) {
      // Delay showing the welcome card to ensure the page has fully loaded
      const timer = setTimeout(() => {
        setShowWelcome(true);
        analytics.trackEvent('Tutorial', 'Welcome Shown');
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Initialize driver.js
  useEffect(() => {
    // @ts-ignore - Ignorando erros de tipagem do driver.js
    const driverInstance = driver({
      showProgress: false,
      animate: true,
      showButtons: ['close'],
      steps: tutorialSteps,
      onDeselected: (element) => {
        // This handles when user clicks outside or presses escape
        if (showTutorial) {
          endTutorial();
        }
      },
      onDestroyed: () => {
        // This handles when the tour is destroyed
        if (showTutorial) {
          endTutorial();
        }
      }
    });
    setDriverObj(driverInstance);
    
    return () => {
      if (driverInstance) {
        driverInstance.destroy();
      }
    };
  }, []);

  // Start tutorial
  const startTutorial = () => {
    if (driverObj) {
      setShowWelcome(false);
      setShowTutorial(true);
      setCurrentStep(0);
      // Usar o método correto para iniciar o tour
      driverObj.drive();
      
      analytics.trackEvent('Tutorial', 'Started');
      
      // Mark as visited
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  };

  // Skip tutorial
  const skipTutorial = () => {
    setShowWelcome(false);
    
    // Mark as visited
    localStorage.setItem('hasVisitedBefore', 'true');
    
    analytics.trackEvent('Tutorial', 'Skipped');
  };

  // End tutorial
  const endTutorial = () => {
    if (driverObj) {
      driverObj.destroy();
      setShowTutorial(false);
      
      // If they completed all steps
      if (currentStep === tutorialSteps.length - 1) {
        setShowCompletion(true);
        analytics.trackEvent('Tutorial', 'Completed');
      } else {
        analytics.trackEvent('Tutorial', 'Abandoned', 'Step', currentStep + 1);
      }
    }
  };

  // Navigation functions
  const goToNextStep = () => {
    if (driverObj && currentStep < tutorialSteps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      
      // Reiniciar o driver com os novos passos, pulando para o índice necessário
      driverObj.destroy();
      // @ts-ignore
      const newDriverInstance = driver({
        showProgress: false,
        animate: true,
        showButtons: ['close'],
        steps: tutorialSteps.slice(nextStep),
        onDeselected: () => {
          if (showTutorial) {
            endTutorial();
          }
        },
        onDestroyed: () => {
          if (showTutorial) {
            endTutorial();
          }
        }
      });
      
      setDriverObj(newDriverInstance);
      newDriverInstance.drive();
      
      analytics.trackEvent('Tutorial', 'Step Viewed', 'Step', nextStep + 1);
    }
    
    // If it's the last step
    if (currentStep === tutorialSteps.length - 1) {
      endTutorial();
    }
  };
  
  const goToPrevStep = () => {
    if (driverObj && currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      
      // Reiniciar o driver com os novos passos, pulando para o índice necessário
      driverObj.destroy();
      // @ts-ignore
      const newDriverInstance = driver({
        showProgress: false,
        animate: true,
        showButtons: ['close'],
        steps: tutorialSteps.slice(prevStep),
        onDeselected: () => {
          if (showTutorial) {
            endTutorial();
          }
        },
        onDestroyed: () => {
          if (showTutorial) {
            endTutorial();
          }
        }
      });
      
      setDriverObj(newDriverInstance);
      newDriverInstance.drive();
    }
  };
  
  // Restart tutorial
  const restartTutorial = () => {
    if (driverObj) {
      setShowTutorial(true);
      setCurrentStep(0);
      
      // Reiniciar o driver com todos os passos desde o início
      driverObj.destroy();
      // @ts-ignore
      const newDriverInstance = driver({
        showProgress: false,
        animate: true,
        showButtons: ['close'],
        steps: tutorialSteps,
        onDeselected: () => {
          if (showTutorial) {
            endTutorial();
          }
        },
        onDestroyed: () => {
          if (showTutorial) {
            endTutorial();
          }
        }
      });
      
      setDriverObj(newDriverInstance);
      newDriverInstance.drive();
      
      analytics.trackEvent('Tutorial', 'Restarted');
    }
  };
  
  // Close completion
  const closeCompletion = () => {
    setShowCompletion(false);
  };

  return (
    <>
      <AnimatePresence>
        {showWelcome && <WelcomeCard onStart={startTutorial} onSkip={skipTutorial} />}
        {showTutorial && (
          <TutorialProgress 
            currentStep={currentStep} 
            totalSteps={tutorialSteps.length}
            onNext={goToNextStep}
            onPrev={goToPrevStep}
            onClose={endTutorial}
          />
        )}
        {showCompletion && <CompletionCard onClose={closeCompletion} />}
      </AnimatePresence>
      
      {!showWelcome && !showTutorial && !showCompletion && (
        <HelpButton onClick={restartTutorial} />
      )}
    </>
  );
}