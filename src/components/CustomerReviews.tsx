import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: "James Anderson",
    date: "4 дня назад",
    image: "https://sun9-26.userapi.com/impg/lpQ6hNwR752pFnNibh_3h1KUCfJlYDBg5Qr1VA/YOsVpiM-xYI.jpg?size=736x736&quality=96&sign=dd729b60bd5a52d36ea34da41508a5d0&type=album",
    text: "Coin Lem помог мне заработать значительную прибыль всего за несколько месяцев. Платформа проста в использовании, а торговые сигналы точны. Настоятельно рекомендую!",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    date: "3 дня назад",
    image: "https://sun9-40.userapi.com/impg/tnv-9s_z7tUqpmeeJOwmLrOnJiBU6c0uWzOA6Q/M-Tutnhm63M.jpg?size=736x736&quality=96&sign=91666027b4a5a99a37a7bbf12b208122&type=album",
    text: "Я начала торговать на Coin Lem несколько недель назад, и уже вижу отличные результаты. Платформа легко отслеживает криптовалютные тренды.",
    rating: 5,
  },
  {
    name: "Michael Williams",
    date: "6 дней назад",
    image: "https://sun9-60.userapi.com/impg/hcq2OyGID-LVZqpc4RFYZ7RthiaCQ2GEoxMXUQ/dEDNApOvb7c.jpg?size=736x736&quality=96&sign=6e2b351b1ef013c2c46c873a7be0a161&type=album",
    text: "После множества исследований я нашел Coin Lem, и это стало настоящим прорывом! Платформа надежна и безопасна. Теперь я зарабатываю деньги, о которых раньше даже не мечтал.",
    rating: 5,
  },
  {
    name: "Sophia Brown",
    date: "5 дней назад",
    image: "https://sun9-75.userapi.com/impg/AmjGMLD5e43y4_ZERCFhYJUUzia_WGTBQIoAhA/nZ4GVaeRiX4.jpg?size=736x736&quality=96&sign=49a2f92b399a1fb48b670f515accb81c&type=album",
    text: "Coin Lem предлагает прозрачные комиссии и безопасный способ торговли. Я добилась отличных результатов в своем портфеле и с нетерпением жду будущих инвестиций.",
    rating: 5,
  },
  {
    name: "David Wilson",
    date: "3 дня назад",
    image: "https://sun9-16.userapi.com/impg/rtcikau-Vf6XMUxhadMB_iHa4ipNaNz9Mw4Aag/hyiIxSEGx9Y.jpg?size=1024x1024&quality=96&sign=a4ecce19a72d198b508c67650648d638&type=album",
    text: "Coin Lem помог мне заработать прибыль за несколько недель. Это настоящая находка для всех, кто серьезно настроен на криптовалютную торговлю.",
    rating: 5,
  },
  {
    name: "Isabella Martinez",
    date: "2 дня назад",
    image: "https://sun9-59.userapi.com/impg/zdKaEej6dQbeDSC3-U_wrS6T--h1bYCjDSknuw/a_psc-KavB0.jpg?size=736x736&quality=96&sign=cce26bae4d64e6b25625b4fbecf4bc00&type=album",
    text: "Я заметила улучшения в своих доходах всего через пару недель с Coin Lem. Удивительно, сколько я научилась о криптовалютной торговле с их помощью.",
    rating: 5,
  },
  {
    name: "Lucas Taylor",
    date: "сегодня",
    image: "https://sun9-26.userapi.com/impg/LCBtdjBhJT97LiqnqstbYIdUIAa1DakjPQDCIg/CYkOLiuj33o.jpg?size=751x751&quality=96&sign=d3931cae661815c315fab4db6b1dc541&type=album",
    text: "Coin Lem полностью изменила мой подход к торговле. Теперь я не переживаю из-за волатильности рынка – платформа делает все намного проще.",
    rating: 5,
  }
];

const CustomerReviews: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Отзывы клиентов
          </h2>
          <p className="text-sm text-gray-600">
            Узнайте, что говорят люди о своем опыте использования Coin Lem.
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedReviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </AnimatePresence>
        </motion.div>

        {reviews.length > 3 && (
          <motion.div 
            layout
            className="text-center mt-6"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {showAll ? 'Показать меньше' : 'Показать больше отзывов'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;
