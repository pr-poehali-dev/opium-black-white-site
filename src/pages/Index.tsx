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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-900 to-black pointer-events-none" />
      
      <div className="fixed top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10 animate-slide-up">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-elegant font-bold tracking-[0.3em] animate-fade-in">FOREVER DESIGN</h1>
          <div className="flex gap-8">
            <a href="#portfolio" className="opium-text hover:text-white transition-all duration-300 hover:tracking-wider animate-slide-in-right" style={{ animationDelay: '0.2s' }}>ПОРТФОЛИО</a>
            <a href="#order" className="opium-text hover:text-white transition-all duration-300 hover:tracking-wider animate-slide-in-right" style={{ animationDelay: '0.3s' }}>ЗАКАЗАТЬ</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center relative z-10">
          <h2 className="text-7xl md:text-9xl font-elegant font-bold tracking-tight mb-6 animate-scale-in">
            FOREVER
          </h2>
          <h2 className="text-7xl md:text-9xl font-elegant font-bold tracking-tight mb-8 text-white/50 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            DESIGN
          </h2>
          <p className="text-lg md:text-xl opium-text max-w-2xl mx-auto mb-12 font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Создаём минималистичные проекты с максимальным воздействием
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-white to-gray-200 text-black hover:shadow-2xl hover:shadow-white/20 font-heading tracking-wider px-10 py-7 text-lg transition-all duration-500 hover:scale-105 rounded-full border-2 border-white/20"
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">НАЧАТЬ ПРОЕКТ</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative py-24 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-4 text-center animate-fade-in">
            PORTFOLIO
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-16 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-square border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden cursor-pointer animate-slide-up hover:border-white/30 transition-all duration-700 rounded-lg"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-12 group-hover:translate-y-0 transition-all duration-700">
                  <p className="text-sm opium-text mb-2 font-light tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.category}</p>
                  <h4 className="text-2xl font-heading font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{item.title}</h4>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                  <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                    <Icon name="ArrowUpRight" size={36} className="text-white" />
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-white/5 to-transparent">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-4 text-center animate-fade-in">
            ЗАКАЗАТЬ
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          <p className="text-center opium-text mb-12 font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Оставьте заявку, и мы свяжемся с вами в Telegram
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-14 tracking-wide rounded-full px-6 backdrop-blur-sm focus:bg-white/10 focus:border-white/40 transition-all duration-300 hover:border-white/30"
                required
              />
            </div>
            
            <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <Input
                placeholder="Telegram"
                value={formData.telegram}
                onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-14 tracking-wide rounded-full px-6 backdrop-blur-sm focus:bg-white/10 focus:border-white/40 transition-all duration-300 hover:border-white/30"
                required
              />
            </div>
            
            <div className="animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
              <Textarea
                placeholder="Расскажите о вашем проекте..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-32 tracking-wide rounded-3xl p-6 backdrop-blur-sm focus:bg-white/10 focus:border-white/40 transition-all duration-300 hover:border-white/30 resize-none"
                required
              />
            </div>
            
            <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                type="submit" 
                size="lg" 
                className="group relative overflow-hidden w-full bg-gradient-to-r from-white to-gray-200 text-black hover:shadow-2xl hover:shadow-white/20 font-heading tracking-wider h-14 text-lg transition-all duration-500 hover:scale-[1.02] rounded-full"
              >
                <span className="relative z-10">ОТПРАВИТЬ ЗАЯВКУ</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </Button>
            </div>
          </form>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="opium-text font-light tracking-wider animate-fade-in">© 2024 FOREVER DESIGN</p>
          <div className="flex gap-6">
            <a href="#" className="opium-text hover:text-white transition-all duration-300 hover:scale-125 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="opium-text hover:text-white transition-all duration-300 hover:scale-125 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="opium-text hover:text-white transition-all duration-300 hover:scale-125 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <Icon name="Github" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
