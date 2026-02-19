import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const DEMO_RESPONSES: Record<string, string> = {
  default:
    "Привет! Я NeuralX — искусственный интеллект нового поколения. Я могу анализировать текст, генерировать идеи, писать код и помогать в решении сложных задач. Задайте мне любой вопрос!",
  код: "Вот пример функции на Python для сортировки массива:\n\n```python\ndef quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quick_sort(left) + middle + quick_sort(right)\n```\n\nАлгоритм работает за O(n log n) в среднем случае.",
  стих: "Цифровой разум в сети нейронов,\nМечтает светом тысяч экранов.\nОн учит мир через потоки данных,\nСоздавая будущее из слов желанных.\n\n— Сгенерировано NeuralX",
  идея: "💡 Вот 3 бизнес-идеи с использованием ИИ:\n\n1. **AI-стилист** — приложение, подбирающее образы по фото гардероба\n2. **Умный ментор** — персональный ИИ-наставник для изучения языков\n3. **Автоматизация отчётов** — сервис, превращающий данные в готовые презентации\n\nКаждая идея может быть реализована за 2-3 месяца.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("код") || lower.includes("программ") || lower.includes("функци"))
    return DEMO_RESPONSES["код"];
  if (lower.includes("стих") || lower.includes("поэз") || lower.includes("напиши"))
    return DEMO_RESPONSES["стих"];
  if (lower.includes("иде") || lower.includes("бизнес") || lower.includes("придумай"))
    return DEMO_RESPONSES["идея"];
  return DEMO_RESPONSES["default"];
}

const DemoSection = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    const response = getResponse(userMessage);
    let i = 0;

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text: "" }]);

      const interval = setInterval(() => {
        if (i < response.length) {
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "ai",
              text: response.slice(0, i + 1),
            };
            return updated;
          });
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 15);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestions = [
    "Напиши код сортировки",
    "Придумай бизнес-идею",
    "Напиши стихотворение",
  ];

  return (
    <section id="demo" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Попробуйте <span className="gradient-text">прямо сейчас</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Интерактивная демонстрация возможностей NeuralX в реальном времени
          </p>
        </div>

        <div className="rounded-2xl glass glow overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-sm text-muted-foreground font-medium">NeuralX Terminal</span>
          </div>

          <div ref={chatRef} className="h-80 overflow-y-auto p-5 space-y-4">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-4 animate-pulse-glow">
                  <Icon name="Brain" size={32} className="text-white" />
                </div>
                <p className="text-muted-foreground mb-6">Задайте вопрос или выберите пример</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setInput(s);
                      }}
                      className="px-4 py-2 rounded-full glass text-sm text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "gradient-bg text-white"
                      : "glass text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && messages[messages.length - 1]?.role !== "ai" && (
              <div className="flex justify-start">
                <div className="glass rounded-2xl px-4 py-3 text-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-border/30">
            <div className="flex gap-3">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Напишите сообщение..."
                className="min-h-[48px] max-h-[120px] resize-none bg-muted/30 border-border/30 text-foreground placeholder:text-muted-foreground"
                rows={1}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="gradient-bg text-white border-0 px-4 hover:opacity-90 shrink-0"
              >
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
