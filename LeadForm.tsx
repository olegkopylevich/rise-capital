import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface LeadFormProps {
  onSuccess?: () => void;
}

export function LeadForm({ onSuccess }: LeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      comment: formData.get('comment'),
      timestamp: new Date().toISOString(),
    };

    try {
      // Вариант 1: Отправка в Google Sheets через API (замените URL)
      // const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      // });

      // Вариант 2: Отправка на ваш backend
      // const response = await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // Вариант 3: Telegram Bot API напрямую (НЕ РЕКОМЕНДУЕТСЯ - токен будет виден)
      // const BOT_TOKEN = 'YOUR_BOT_TOKEN';
      // const CHAT_ID = 'YOUR_CHAT_ID';
      // const message = `🔔 Новая заявка!\n\n👤 Имя: ${data.name}\n📧 Email: ${data.email}\n📱 Телефон: ${data.phone}\n💼 Услуга: ${data.service}\n💬 Комментарий: ${data.comment}`;
      
      // await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     chat_id: CHAT_ID,
      //     text: message,
      //   }),
      // });

      // Для демонстрации - имитация отправки
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Данные заявки:', data);
      
      setSuccess(true);
      e.currentTarget.reset();
      
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (err) {
      setError('Произошла ошибка при отправке. Попробуйте позже.');
      console.error('Ошибка отправки формы:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center p-8 bg-primary/10 rounded-xl border border-primary/20">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-2">
          Заявка отправлена!
        </h3>
        <p className="text-muted-foreground">
          Спасибо за интерес к Rise Capital.<br />
          Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">
          Имя <span className="text-destructive">*</span>
        </Label>
        <Input 
          id="name" 
          name="name" 
          placeholder="Иван Иванов"
          required 
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input 
          id="email" 
          name="email" 
          type="email"
          placeholder="ivan@example.com"
          required 
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Телефон</Label>
        <Input 
          id="phone" 
          name="phone" 
          type="tel"
          placeholder="+7 (999) 123-45-67"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="service">
          Интересующая услуга <span className="text-destructive">*</span>
        </Label>
        <select 
          id="service" 
          name="service"
          required
          className="w-full mt-1 p-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Выберите услугу</option>
          <option value="telegram">Платный Telegram-канал</option>
          <option value="autofollow">Автоследование сделкам</option>
          <option value="paid-course">Платное обучение</option>
          <option value="free-course">Бесплатное обучение</option>
        </select>
      </div>

      <div>
        <Label htmlFor="comment">Комментарий (опционально)</Label>
        <Textarea
          id="comment"
          name="comment"
          placeholder="Расскажите подробнее о ваших целях..."
          rows={4}
          className="mt-1"
        />
      </div>

      {error && (
        <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm">
          {error}
        </div>
      )}

      <div className="pt-2">
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90"
          size="lg"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Отправка...
            </>
          ) : (
            'Отправить заявку'
          )}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <a href="#" className="text-primary hover:underline">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
}
