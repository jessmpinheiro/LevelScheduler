import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import TabNavigation from "@/components/TabNavigation";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"level-check" | "schedule">("level-check");
  
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-1">
        <IntroSection />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
      
      <Footer />
    </div>
  );
}
