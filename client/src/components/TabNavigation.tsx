import LevelCheckTab from "./LevelCheckTab";
import ScheduleTab from "./ScheduleTab";
import TestimonialSection from "./TestimonialSection";
import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeTab: "level-check" | "schedule";
  setActiveTab: (tab: "level-check" | "schedule") => void;
}

export default function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  return (
    <>
      <div className="max-w-4xl mx-auto mb-6">
        <div className="border-b border-gray-200">
          <ul className="flex">
            <li className="mr-1">
              <a 
                href="#level-check" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("level-check");
                }}
                className={cn(
                  "inline-block py-3 px-4 font-medium",
                  activeTab === "level-check" 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-gray-600 hover:text-primary"
                )}
              >
                Level Check Form
              </a>
            </li>
            <li className="mr-1">
              <a 
                href="#schedule" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("schedule");
                }}
                className={cn(
                  "inline-block py-3 px-4 font-medium",
                  activeTab === "schedule" 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-gray-600 hover:text-primary"
                )}
              >
                Schedule Meeting
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {activeTab === "level-check" ? <LevelCheckTab /> : <ScheduleTab />}
      </div>
      
      <TestimonialSection />
    </>
  );
}
