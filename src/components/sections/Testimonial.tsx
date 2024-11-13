import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonial = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        
        <blockquote className="text-2xl font-medium text-gray-900 mb-8">
          "Проект{' '}
          <a 
            href="https://coin-lem-project.com" 
            className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-2 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coin Lem
          </a>{' '}
          помог мне освоить криптовалютный рынок и добиться финансовой независимости. Благодаря уникальной поддержке и платформе, я смог реализовать мечту о собственной BMW и уверен в своём будущем."
        </blockquote>
        
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://sun9-58.userapi.com/impg/rsQh-B3ZjPaxIUJorHxaWueQWO3gimCVufPpVw/7v4Ei8npqyM.jpg?size=1024x1024&quality=96&sign=ec43b8a80ea7604da2c261962f62d43a&type=album"
            alt="Джонатан Смит"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-left">
            <div className="font-bold text-gray-900">Джонатан Смит</div>
            <div className="text-gray-600">25 лет, Нью-Йорк</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
