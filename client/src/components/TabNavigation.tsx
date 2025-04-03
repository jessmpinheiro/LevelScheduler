import LevelCheckTab from "./LevelCheckTab";
import ScheduleTab from "./ScheduleTab";
import TechSpeakingClubTab from "./TechSpeakingClubTab";
import TestimonialSection from "./TestimonialSection";
import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeTab: "level-check" | "schedule" | "tech-speaking-club";
  setActiveTab: (tab: "level-check" | "schedule" | "tech-speaking-club") => void;
}

export default function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  return (
    <>
      <div className="max-w-4xl mx-auto mb-8 px-4">
        <div className="border-b border-gray-200">
          <ul className="flex flex-wrap">
            <li className="mr-4">
              <a 
                href="#level-check" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("level-check");
                }}
                className={cn(
                  "inline-block py-3 px-4 font-medium text-lg rounded-t-lg transition-all",
                  activeTab === "level-check" 
                    ? "text-gradient font-bold border-b-2 border-primary" 
                    : "text-gray-600 hover:text-primary"
                )}
              >
                Level Check Form
              </a>
            </li>
            <li className="mr-4">
              <a 
                href="#schedule" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("schedule");
                }}
                className={cn(
                  "inline-block py-3 px-4 font-medium text-lg rounded-t-lg transition-all",
                  activeTab === "schedule" 
                    ? "text-gradient font-bold border-b-2 border-primary" 
                    : "text-gray-600 hover:text-primary"
                )}
              >
                Schedule Meeting
              </a>
            </li>
            <li>
              <a 
                href="#tech-speaking-club" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("tech-speaking-club");
                }}
                className={cn(
                  "inline-block py-3 px-4 font-medium text-lg rounded-t-lg transition-all",
                  activeTab === "tech-speaking-club" 
                    ? "text-gradient font-bold border-b-2 border-primary" 
                    : "text-gray-600 hover:text-primary"
                )}
              >
                Tech Speaking Club
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4">
        {activeTab === "level-check" && <LevelCheckTab />}
        {activeTab === "schedule" && <ScheduleTab />}
        {activeTab === "tech-speaking-club" && <TechSpeakingClubTab />}
      </div>
      
      <TestimonialSection />
    </>
  );
}
