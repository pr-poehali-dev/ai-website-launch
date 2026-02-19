import Icon from "@/components/ui/icon";

const useCases = [
  {
    icon: "MessageSquare",
    title: "Генерация текста",
    description: "Создание статей, описаний, писем и любого контента за секунды",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: "Code2",
    title: "Написание кода",
    description: "Автоматическая генерация, рефакторинг и отладка кода на любом языке",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "BarChart3",
    title: "Анализ данных",
    description: "Обработка больших массивов информации и формирование инсайтов",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: "Image",
    title: "Работа с изображениями",
    description: "Распознавание, классификация и генерация визуального контента",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    icon: "Languages",
    title: "Перевод",
    description: "Мгновенный перевод на 100+ языков с сохранением контекста и стиля",
    gradient: "from-pink-500 to-violet-500",
  },
  {
    icon: "Lightbulb",
    title: "Креативные идеи",
    description: "Генерация бизнес-идей, сценариев, названий и маркетинговых стратегий",
    gradient: "from-amber-400 to-orange-500",
  },
];

const UsageSection = () => {
  return (
    <section id="usage" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Области <span className="gradient-text">применения</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            NeuralX решает задачи в десятках направлений — от создания контента до анализа данных
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((item, idx) => (
            <div
              key={item.title}
              className="group rounded-2xl glass p-6 hover:bg-muted/30 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={item.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageSection;
