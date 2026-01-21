import React, { useState } from 'react';
import { Button } from './ui/button';
import { MessageSquare, Copy, GraduationCap, Gift } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { LeadForm } from './LeadForm';

const services = [
  {
    icon: MessageSquare,
    title: 'Платный Telegram-канал',
    description: 'Получайте торговые сигналы в режиме реального времени с детальными пояснениями и аналитикой рынка',
    features: [
      'Сигналы в реальном времени',
      'Детальная аналитика рынка',
      'Уровни входа и выхода',
      'Управление рисками',
    ],
    price: '5,000 ₽/мес',
    accent: 'primary',
    popular: true,
  },
  {
    icon: Copy,
    title: 'Автоследование сделкам',
    description: 'Автоматическое копирование сделок опытных трейдеров на ваш счет для пассивного заработка',
    features: [
      'Полная автоматизация',
      'Копирование сделок профи',
      'Контроль рисков',
      'Прозрачная статистика',
    ],
    price: 'от 10,000 ₽/мес',
    accent: 'secondary',
    popular: false,
  },
  {
    icon: GraduationCap,
    title: 'Платное обучение',
    description: 'Комплексные курсы трейдинга с персональным менторством и разбором реальных сделок',
    features: [
      'Индивидуальный подход',
      'Практические занятия',
      'Разбор ваших сделок',
      'Сертификат об окончании',
    ],
    price: 'от 25,000 ₽',
    accent: 'accent',
    popular: false,
  },
  {
    icon: Gift,
    title: 'Бесплатное обучение',
    description: 'Вебинары и базовые уроки для начинающих трейдеров. Отличный старт в мир трейдинга',
    features: [
      'Основы трейдинга',
      'Еженедельные вебинары',
      'Доступ к материалам',
      'Сообщество новичков',
    ],
    price: 'Бесплатно',
    accent: 'primary',
    popular: false,
    free: true,
  },
];

export function Services() {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  return (
    <section className="py-20 bg-card/30" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши услуги
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий формат работы с Rise Capital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const accentColor = service.accent === 'primary' 
              ? 'primary' 
              : service.accent === 'secondary' 
              ? 'secondary' 
              : 'accent';
            
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-card border-2 transition-all duration-300 hover:shadow-2xl ${
                  service.popular
                    ? 'border-primary shadow-lg shadow-primary/20'
                    : 'border-border hover:border-primary/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      Популярное
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-${accentColor}/10 flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 text-${accentColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${accentColor}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-bold ${service.free ? 'text-primary' : ''}`}>
                      {service.price}
                    </span>
                  </div>
                  
                  <Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
                    <DialogTrigger asChild>
                      <Button 
                        className={`w-full ${
                          service.popular 
                            ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                            : service.free
                            ? 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30'
                            : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                        }`}
                      >
                        {service.free ? 'Начать бесплатно' : 'Выбрать тариф'}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>{service.title}</DialogTitle>
                        <DialogDescription>
                          Оставьте заявку, и мы свяжемся с вами для подключения
                        </DialogDescription>
                      </DialogHeader>
                      <LeadForm onSuccess={() => setOpenDialog(null)} />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}