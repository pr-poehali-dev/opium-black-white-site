import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const portfolioItems = [
  { id: 1, title: 'PROJECT ONE', category: 'DESIGN' },
  { id: 2, title: 'PROJECT TWO', category: 'DEVELOPMENT' },
  { id: 3, title: 'PROJECT THREE', category: 'BRANDING' },
  { id: 4, title: 'PROJECT FOUR', category: 'DIGITAL' },
  { id: 5, title: 'PROJECT FIVE', category: 'CREATIVE' },
  { id: 6, title: 'PROJECT SIX', category: 'ART' },
];

export default function Index() {
  const [formData, setFormData] = useState({ name: '', telegram: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', telegram: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-elegant font-bold tracking-[0.3em]">FOREVER DESIGN</h1>
          <div className="flex gap-8">
            <a href="#portfolio" className="opium-text hover:text-white transition-colors">ПОРТФОЛИО</a>
            <a href="#order" className="opium-text hover:text-white transition-colors">ЗАКАЗАТЬ</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center animate-fade-in">
          <h2 className="text-7xl md:text-9xl font-elegant font-bold tracking-tight mb-6">
            FOREVER
          </h2>
          <h2 className="text-7xl md:text-9xl font-elegant font-bold tracking-tight mb-8 text-white/50">
            DESIGN
          </h2>
          <p className="text-lg md:text-xl opium-text max-w-2xl mx-auto mb-12 font-light tracking-wide">
            Создаём минималистичные проекты с максимальным воздействием
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 font-heading tracking-wider px-8 py-6 text-lg"
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          >
            НАЧАТЬ ПРОЕКТ
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-16 text-center">
            PORTFOLIO
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-square opium-border bg-secondary/20 overflow-hidden cursor-pointer animate-slide-up hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm opium-text mb-2 font-light tracking-widest">{item.category}</p>
                  <h4 className="text-2xl font-heading font-bold tracking-wider">{item.title}</h4>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Icon name="ArrowUpRight" size={48} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-24 px-6 bg-secondary/10">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-4 text-center">
            ЗАКАЗАТЬ
          </h3>
          <p className="text-center opium-text mb-12 font-light tracking-wide">
            Оставьте заявку, и мы свяжемся с вами в Telegram
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <Input
                placeholder="ИМЯ"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-black/50 border-white/20 text-white placeholder:text-white/40 h-14 tracking-wider"
                required
              />
            </div>
            <div>
              <Input
                placeholder="TELEGRAM"
                value={formData.telegram}
                onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                className="bg-black/50 border-white/20 text-white placeholder:text-white/40 h-14 tracking-wider"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="ОПИСАНИЕ ПРОЕКТА"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-black/50 border-white/20 text-white placeholder:text-white/40 min-h-32 tracking-wider resize-none"
                required
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-white text-black hover:bg-white/90 font-heading tracking-wider h-14 text-lg"
            >
              ОТПРАВИТЬ ЗАЯВКУ
            </Button>
          </form>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="opium-text font-light tracking-wider">© 2024 FOREVER DESIGN</p>
          <div className="flex gap-6">
            <a href="#" className="opium-text hover:text-white transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="opium-text hover:text-white transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="opium-text hover:text-white transition-colors">
              <Icon name="Github" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}