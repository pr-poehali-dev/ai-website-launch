import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
            <Icon name="Brain" size={14} className="text-white" />
          </div>
          <span className="text-sm font-medium text-foreground">NeuralX</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; 2026 NeuralX. Искусственный интеллект нового поколения.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
