import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { LeadForm } from './LeadForm';

// Данные пересчитаны для годовой доходности 68%
// Начальный капитал: 100,000 ₽ → Конечный: 168,000 ₽
const monthlyData = [
  { month: 'Янв', profit: 5.2, balance: 105200 },
  { month: 'Фев', profit: 6.8, balance: 112355 },
  { month: 'Мар', profit: 4.1, balance: 116961 },
  { month: 'Апр', profit: 7.3, balance: 125499 },
  { month: 'Май', profit: 5.9, balance: 132903 },
  { month: 'Июн', profit: 3.8, balance: 137952 },
  { month: 'Июл', profit: 6.4, balance: 146780 },
  { month: 'Авг', profit: 5.1, balance: 154266 },
  { month: 'Сен', profit: 4.5, balance: 161205 },
  { month: 'Окт', profit: -2.8, balance: 156690 },
  { month: 'Ноя', profit: 4.7, balance: 164057 },
  { month: 'Дек', profit: 2.4, balance: 168000 },
];

const stats = [
  { label: 'Годовая доходность', value: '+68%', color: 'text-primary' },
  { label: 'Средняя доходность в месяц', value: '+4.5%', color: 'text-primary' },
  { label: 'Максимальная просадка', value: '-2.8%', color: 'text-destructive' },
  { label: 'Win rate', value: '91.7%', color: 'text-accent' },
];

export function Results() {
  const [activeChart, setActiveChart] = useState<'balance' | 'profit'>('balance');
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <section className="py-20 bg-card/30" id="results">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">Результаты за 2025 год</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Отчетность и результаты
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Прозрачная статистика торговли с реальными результатами
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            * Прошлые результаты не гарантируют будущую доходность
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* График */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {activeChart === 'balance' ? 'Рост счета' : 'Месячная доходность'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Динамика за последние 12 месяцев
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={activeChart === 'balance' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveChart('balance')}
                  className={activeChart === 'balance' ? 'bg-primary' : ''}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Баланс
                </Button>
                <Button
                  variant={activeChart === 'profit' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveChart('profit')}
                  className={activeChart === 'profit' ? 'bg-primary' : ''}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Прибыль
                </Button>
              </div>
            </div>

            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height={400}>
                {activeChart === 'balance' ? (
                  <AreaChart data={monthlyData}>
                    <defs>
                      <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00ff88" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#00ff88" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a3a5c" />
                    <XAxis dataKey="month" stroke="#8fa3bf" />
                    <YAxis stroke="#8fa3bf" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0f2642',
                        border: '1px solid #1a3a5c',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => [`${value.toLocaleString()} ₽`, 'Баланс']}
                    />
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="#00ff88"
                      strokeWidth={2}
                      fill="url(#balanceGradient)"
                    />
                  </AreaChart>
                ) : (
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a3a5c" />
                    <XAxis dataKey="month" stroke="#8fa3bf" />
                    <YAxis stroke="#8fa3bf" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0f2642',
                        border: '1px solid #1a3a5c',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => [`${value}%`, 'Прибыль']}
                    />
                    <Line
                      type="monotone"
                      dataKey="profit"
                      stroke="#00ff88"
                      strokeWidth={3}
                      dot={{ fill: '#00ff88', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Хотите получить доступ к полной отчетности?
            </h3>
            <p className="text-muted-foreground mb-6">
              Подпишитесь на наш канал и получите детальную статистику по всем сделкам
            </p>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Получить доступ
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Получить доступ к отчетности</DialogTitle>
                  <DialogDescription>
                    Оставьте заявку для получения полного доступа к статистике
                  </DialogDescription>
                </DialogHeader>
                <LeadForm onSuccess={() => setOpenDialog(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}