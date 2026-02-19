import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Будущее начинается с интеллекта";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToUsage = () => {
    document.getElementById("usage")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/8 rounded-full blur-[80px] animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(240,15%,5%)_70%)]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-in mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Платформа нового поколения
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-delay-1">
          <span className="gradient-text">{displayText}</span>
          <span className="border-r-2 border-primary animate-blink ml-1" />
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-delay-2">
          NeuralX — передовая платформа ИИ, которая анализирует, создаёт и решает задачи
          любой сложности за считанные секунды
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-3">
          <Button
            size="lg"
            className="gradient-bg text-white border-0 text-base px-8 py-6 hover:opacity-90 transition-opacity"
            onClick={scrollToDemo}
          >
            <Icon name="Sparkles" size={20} />
            Попробовать демо
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border/50 text-foreground bg-transparent hover:bg-muted/50 text-base px-8 py-6"
            onClick={scrollToUsage}
          >
            <Icon name="BookOpen" size={20} />
            Как это работает
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-0 animate-fade-in-delay-3">
          {[
            { value: "50M+", label: "Запросов" },
            { value: "0.3с", label: "Скорость" },
            { value: "99.9%", label: "Точность" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
