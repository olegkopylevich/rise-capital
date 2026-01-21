import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    name: 'Иван Смирнов',
    role: 'Подписчик канала',
    text: 'За 6 месяцев работы с Rise Capital я увеличил свой депозит на 45%. Сигналы приходят вовремя, всегда с детальным пояснением. Команда реально профессиональная!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgwMjE2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Анна Козлова',
    role: 'Ученица курса',
    text: 'Прошла полный курс обучения. Впервые столкнулась с таким системным подходом к трейдингу. Теперь торгую самостоятельно и понимаю, что делаю. Спасибо!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgwMjE2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Максим Орлов',
    role: 'Автоследование',
    text: 'Использую автоследование уже 4 месяца. Удобно, что не нужно постоянно сидеть у монитора. Результаты стабильные, команда всегда на связи.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgwMjE2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Ольга Петрова',
    role: 'Новичок в трейдинге',
    text: 'Начинала с бесплатных вебинаров. Информация подается очень понятно, без воды. После базового курса перешла на платное обучение. Очень довольна!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgwMjE2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Сергей Волков',
    role: 'Подписчик канала',
    text: 'Работаю с несколькими каналами сигналов, но Rise Capital - лучшие. Высокая точность, грамотное управление рисками, адекватная поддержка.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgwMjE2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Екатерина Лебедева',
    role: 'Ученица курса',
    text: 'Отличная команда! Менторство - это то, что выделяет Rise Capital среди конкурентов. Разбор моих сделок помог избежать многих ошибок.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgwMjE2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Реальные истории успеха от трейдеров, которые работают с нами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-muted">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Lead Form */}
        <div className="max-w-2xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-primary/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Начните с бесплатного обучения
            </h3>
            <p className="text-muted-foreground">
              Оставьте заявку и получите доступ к базовым урокам и вебинарам
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); }}>
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-6 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
            >
              Получить доступ к бесплатным урокам
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
