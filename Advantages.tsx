import React from 'react';
import { Shield, TrendingUp, BarChart3, HeadphonesIcon } from 'lucide-react';

const advantages = [
  {
    icon: Shield,
    title: 'Опытная команда',
    description: 'Профессиональные трейдеры с многолетним опытом работы на финансовых рынках',
  },
  {
    icon: TrendingUp,
    title: 'Проверенные стратегии',
    description: 'Торговые системы, протестированные на реальных счетах с положительными результатами',
  },
  {
    icon: BarChart3,
    title: 'Прозрачная статистика',
    description: 'Открытая отчетность по всем сделкам и результатам торговли',
  },
  {
    icon: HeadphonesIcon,
    title: 'Поддержка 24/7',
    description: 'Круглосуточная помощь и консультации от команды экспертов',
  },
];

export function Advantages() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши преимущества
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Почему трейдеры выбирают Rise Capital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
