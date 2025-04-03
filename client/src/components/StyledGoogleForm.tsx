import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface StyledGoogleFormProps {
  formUrl: string;
  height?: number;
  className?: string;
}

export default function StyledGoogleForm({ 
  formUrl, 
  height = 700,
  className = ""
}: StyledGoogleFormProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      setIsLoading(false);
      
      // Apply custom styles to the iframe content
      try {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDocument) return;
        
        // Create a style element
        const styleElement = iframeDocument.createElement('style');
        styleElement.textContent = `
          /* Main form container */
          .freebirdFormviewerViewFormCard {
            background: white !important;
            border-radius: 8px !important;
            box-shadow: none !important;
          }

          /* Form header */
          .freebirdFormviewerViewHeaderHeader {
            background: linear-gradient(135deg, #ff7e00 0%, #8e2de2 100%) !important;
            border-radius: 8px 8px 0 0 !important;
            padding: 24px !important;
          }

          /* Form title */
          .freebirdFormviewerViewHeaderHeadertext {
            color: white !important;
            font-weight: bold !important;
          }

          /* Section titles */
          .freebirdFormviewerViewItemsSectionheaderSectionheader {
            background: rgba(142, 45, 226, 0.05) !important;
            border-left: 4px solid #8e2de2 !important;
            padding: 8px 16px !important;
            margin: 24px 0 12px 0 !important;
          }

          /* Form input fields */
          .freebirdFormviewerViewItemsTextTextInput,
          .freebirdFormviewerViewItemsTextShortText,
          .freebirdFormviewerViewItemsTextLongText,
          .quantumWizTextinputPaperinputInput,
          .quantumWizTextinputPapertextareaInput {
            border-color: #e2e8f0 !important;
            border-radius: 6px !important;
          }

          .quantumWizTextinputPaperinputInput:focus,
          .quantumWizTextinputPapertextareaInput:focus {
            border-color: #8e2de2 !important;
          }

          /* Radio buttons and checkboxes */
          .appsMaterialWizToggleRadiogroupOffRadio,
          .appsMaterialWizToggleCheckboxOffContainer {
            border-color: #8e2de2 !important;
          }

          .appsMaterialWizToggleRadiogroupOnRadio,
          .appsMaterialWizToggleCheckboxOnContainer {
            background-color: #8e2de2 !important;
          }

          /* Submit button */
          .freebirdFormviewerViewNavigationButtonsAndProgress {
            display: flex;
            justify-content: center;
            margin: 32px 0 !important;
          }

          .freebirdFormviewerViewNavigationSubmitButton {
            background: linear-gradient(135deg, #ff7e00 0%, #8e2de2 100%) !important;
            color: white !important;
            font-weight: 600 !important;
            border-radius: 30px !important;
            padding: 0 32px !important;
            height: 44px !important;
            box-shadow: 0 4px 10px rgba(142, 45, 226, 0.2) !important;
            transition: all 0.2s ease-in-out !important;
          }

          .freebirdFormviewerViewNavigationSubmitButton:hover {
            box-shadow: 0 6px 14px rgba(142, 45, 226, 0.3) !important;
            transform: translateY(-1px) !important;
          }

          /* Progress bar */
          .freebirdFormviewerViewNavigationProgress {
            background-color: #e2e8f0 !important;
            height: 6px !important;
            border-radius: 3px !important;
          }

          .freebirdFormviewerViewNavigationProgressIndicator {
            background: linear-gradient(135deg, #ff7e00 0%, #8e2de2 100%) !important;
            border-radius: 3px !important;
          }

          /* Required field asterisk */
          .freebirdFormviewerViewItemsItemRequiredAsterisk {
            color: #ff7e00 !important;
          }
          
          /* Focus and validation states */
          .freebirdFormviewerViewItemsTextValidationMessage {
            color: #ff7e00 !important;
          }
          
          /* Error states */
          .freebirdFormviewerViewItemsItemError {
            color: #ff7e00 !important;
          }
          
          /* Dropdown menus */
          .quantumWizMenuPaperselectOption:hover {
            background-color: rgba(142, 45, 226, 0.05) !important;
          }
          
          .quantumWizMenuPaperselectSelectedOption {
            background-color: rgba(142, 45, 226, 0.1) !important;
          }
        `;

        // Append style to head
        iframeDocument.head.appendChild(styleElement);
      } catch (error) {
        console.error("Could not inject styles:", error);
      }
    };

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex flex-col space-y-4 p-4">
          <Skeleton className="h-12 w-3/4 bg-gradient-primary opacity-10" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-8 w-8 rounded-full ml-2" />
          <Skeleton className="h-10 w-1/4 rounded-full ml-2" />
        </div>
      )}
      <iframe 
        ref={iframeRef}
        src={formUrl}
        width="100%" 
        height={height} 
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0}
        title="English Level Assessment Form"
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        allow="autoplay; camera; microphone; fullscreen"
      />
    </div>
  );
}