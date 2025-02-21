import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const FAQItem = ({ id, question, answer, index, moveItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type: 'FAQ',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'FAQ',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => drag(drop(node))} className={`bg-gray-200 p-4 rounded-md  cursor-pointer ${isDragging ? 'opacity-50' : ''}`}>
      <div className="flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
        <h4 className="font-semibold text-gray-800">{question}</h4>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>
  );
};

function About() {
  const [faqs, setFaqs] = useState([
    { id: 1, question: "Are your products cruelty-free?", answer: "Yes! We are 100% cruelty-free and do not test on animals." },
    { id: 2, question: "Do you use natural ingredients?", answer: "Yes, we carefully source natural and safe ingredients for all our products." },
    { id: 3, question: "Is your packaging eco-friendly?", answer: "Absolutely! We prioritize sustainability and use eco-friendly packaging." },
    { id: 4, question: "Are your products safe for sensitive skin?", answer: "Yes, our dermatologist-tested formulas are designed to be safe for all skin types." },
    { id: 5, question: "Where can I buy your products?", answer: "You can explore and purchase our products on our official website." }
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const updatedFaqs = [...faqs];
    const [movedItem] = updatedFaqs.splice(fromIndex, 1);
    updatedFaqs.splice(toIndex, 0, movedItem);
    setFaqs(updatedFaqs);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center p-6 mt-20">
        <div className="max-w-4xl bg-white shadow-md rounded-lg p-10 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Brand</h2>
          <p className="text-gray-600 text-lg mb-6">
            Welcome to our brand! We specialize in high-quality, sustainable, and innovative beauty products designed to enhance your natural charm. Our products are cruelty-free, eco-friendly, and made with the finest ingredients to ensure premium quality.
          </p>
          <img 
            src="https://e7.pngegg.com/pngimages/108/484/png-clipart-cosmetics-lipstick-cream-personal-care-make-up-artist-cosmetics-miscellaneous-cream.png" 
            alt="Cosmetics" 
            className="rounded-lg shadow-md mx-auto mb-6 w-full md:w-3/4"
          />
          
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h3>
          <div className="text-left space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} {...faq} index={index} moveItem={moveItem} />
            ))}
          </div>
          
          <div className="mt-6">
            <Link to='/collection' className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 transition duration-300 text-nowrap">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>
    </DndProvider>
  );
}

export default About;
