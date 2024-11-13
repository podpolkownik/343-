import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, BarChart2, CheckCircle2, ExternalLink } from 'lucide-react';

export const Solution = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Гарантированная безопасность",
      description: "Современные протоколы защиты ваших средств и данных.",
    },
    {
      icon: TrendingUp,
      title: "Рост прибыли",
      description: "Поддержка выгодных сделок для постоянного прироста капитала.",
    },
    {
      icon: BarChart2,
      title: "Проверенная эффективность",
      description: "Стабильный заработок на платформе с опытными аналитиками.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
            <span className="whitespace-nowrap">Решение:</span>{' '}
            <a 
              href="https://coin-lem.com" 
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-2 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coin Lem
              <ExternalLink className="w-4 h-4 text-blue-600" />
            </a>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Платформа, которая открывает путь к финансовой независимости.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-blue-50 p-8 rounded-xl text-center"
            >
              <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Как работает{' '}
                <a 
                  href="https://coin-lem.com"
                  className="underline text-white hover:text-white inline-flex items-center gap-2 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coin Lem
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>?
              </h3>
              <ul className="space-y-4">
                {[
                  "Глубокий анализ и проверенные инвестиционные стратегии",
                  "Эффективные алгоритмы для максимизации прибыли",
                  "Постоянная поддержка от команды профессионалов",
                  "Лёгкий доступ к доходным торговым возможностям",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[400px]">
              <img
                src="https://sun9-4.userapi.com/impg/ZD3nm0lOCjKi6Uja8AhRmG9Dj_wUtNg49w4hTQ/EMnffmSzsSM.jpg?size=1000x720&quality=96&sign=e5b5cd776f9cb35fddd1c6520670eab8&type=album"
                alt="Coin Lem в действии"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
