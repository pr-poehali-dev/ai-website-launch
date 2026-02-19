import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <Icon name="Brain" size={18} className="text-white" />
          </div>
          <span className="text-lg font-semibold text-foreground">NeuralX</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Главная
          </button>
          <button
            onClick={() => scrollTo("demo")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Демо
          </button>
          <button
            onClick={() => scrollTo("usage")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Использование
          </button>
        </nav>

        <Button
          size="sm"
          className="gradient-bg text-white border-0 hover:opacity-90"
          onClick={() => scrollTo("demo")}
        >
          Начать
        </Button>
      </div>
    </header>
  );
};

export default Header;
