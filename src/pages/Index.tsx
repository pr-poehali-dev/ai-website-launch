import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import UsageSection from "@/components/UsageSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DemoSection />
      <UsageSection />
      <Footer />
    </div>
  );
};

export default Index;
