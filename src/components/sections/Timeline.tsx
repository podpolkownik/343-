import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, BarChart, ShoppingCart } from 'lucide-react';

export const Timeline = () => {
  const events = [
    {
      icon: DollarSign,
      title: "Первые шаги",
      date: "1 день",
      description: "Начало торговли и первые успехи",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: TrendingUp,
      title: "Углубление знаний",
      date: "2 день",
      description: "Интенсивное изучение криптовалютного рынка",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: BarChart,
      title: "Финансовый подъём",
      date: "Неделя",
      description: "Успешные сделки начали приносить серьёзные доходы",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: ShoppingCart,
      title: "Финансовая независимость",
      date: "Сегодня",
      description: "Покупка BMW M5 2024 года, о котором мечтал",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Моя история</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Путь от начала торговли до финансовой независимости
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-2 gap-8">
          {/* Таймлайн */}
          <div>
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
              >
                <div className={`flex items-center gap-6 p-6 rounded-xl shadow-lg ${event.bgColor} max-w-xl`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${event.color}`}>
                    <event.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">{event.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Картинка */}
          <div className="flex justify-center items-center">
            <img 
              src="https://sun9-76.userapi.com/impg/3Gd4VxdWFfyVFb5QDBwo0Xc1CNyckXkuAjamsQ/0kZK0eSuU1U.jpg?size=1024x1024&quality=96&sign=13e4c0bdb331c2653e2fcf4489e3b3c2&type=album" 
              alt="Мой путь в криптовалюте"
              className="w-full h-auto rounded-xl shadow-lg md:max-w-md md:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
