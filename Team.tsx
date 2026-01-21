import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Алексей Волков',
    role: 'Главный трейдер',
    specialty: 'Фьючерсы на индексы',
    experience: '8+ лет',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgwMjE2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Мария Соколова',
    role: 'Ведущий аналитик',
    specialty: 'Валютный рынок (Forex)',
    experience: '6+ лет',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgwMjE2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Дмитрий Петров',
    role: 'Старший трейдер',
    specialty: 'Криптовалюты',
    experience: '5+ лет',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgwMjE2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Елена Новикова',
    role: 'Руководитель обучения',
    specialty: 'Технический анализ',
    experience: '7+ лет',
    image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgwMjE2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Team() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наша команда
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Профессионалы с многолетним опытом работы на финансовых рынках
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-1">{member.specialty}</p>
                <p className="text-muted-foreground text-xs">Опыт: {member.experience}</p>
                
                <div className="flex gap-3 mt-4">
                  <button className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </button>
                  <button className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
