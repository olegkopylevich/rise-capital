import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { LeadForm } from './LeadForm';

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1761587941453-bd1790225d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwY2hhcnRzJTIwZmluYW5jZXxlbnwxfHx8fDE3Njc5ODA4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Trading charts"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f3a] via-[#0a1f3a]/95 to-[#0f2642]/90" />
      </div>

      {/* Анимированные элементы фона */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Бейдж */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">Команда профессиональных трейдеров</span>
          </div>

          {/* Заголовок */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
              Rise Capital
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-foreground/90">
              Управляйте капиталом с профессионалами рынка
            </span>
          </h1>

          {/* Подзаголовок */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Платные сигналы в Telegram, автоследование сделкам, профессиональное обучение трейдингу от практиков
          </p>

          {/* CTA кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
                >
                  Подписаться на канал
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Оставьте заявку</DialogTitle>
                  <DialogDescription>
                    Заполните форму, и мы свяжемся с вами для подключения к каналу
                  </DialogDescription>
                </DialogHeader>
                <LeadForm onSuccess={() => setOpen(false)} />
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-6 text-lg"
                >
                  Начать обучение
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Начните обучение</DialogTitle>
                  <DialogDescription>
                    Оставьте заявку на бесплатное или платное обучение
                  </DialogDescription>
                </DialogHeader>
                <LeadForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { value: '5+', label: 'Лет опыта' },
              { value: '10K+', label: 'Подписчиков' },
              { value: '85%', label: 'Точность сигналов' },
              { value: '24/7', label: 'Поддержка' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Скролл индикатор */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}