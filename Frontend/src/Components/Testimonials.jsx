import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg'

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sophia Lee',
      review: 'The best cosmetic products I have ever used. My skin feels so refreshed and radiant!',
      image: profile,
    },
    {
      name: 'Emma Watson',
      review: 'Absolutely love the quality and results. Highly recommend to everyone!',
      image: profile,
    },
    {
      name: 'Olivia Martinez',
      review: 'Fantastic products with great pricing. My go-to cosmetic brand!',
      image: profile,
        },
  ];

  return (
    <section className="p-6 bg-gradient-to-r from-pink-100 to-purple-200">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center" whileHover={{ scale: 1.05 }}>
            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4" />
            <p className="text-lg italic mb-4">“{testimonial.review}”</p>
            <h3 className="font-semibold text-xl">{testimonial.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
