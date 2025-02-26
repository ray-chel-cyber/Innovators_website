import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
    text: 'This product changed my life! I can’t imagine my days without it anymore. The quality is top-notch!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
    text: 'Amazing quality and fantastic customer service. Highly recommend to everyone!',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    image: 'https://via.placeholder.com/100', 
    text: 'A wonderful experience from start to finish. I will definitely be a returning customer.',
  },
  
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 mb-6">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-15">  <span className='underline decoration-amber-700 underline-offset-8'>What</span> Our Customers Say</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-10 w-2xs max-w-sm shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
            >
              <img src={testimonial.image} alt={testimonial.name} className="h-20 w-20 rounded-full mx-auto border-4 border-gray-200 " />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{testimonial.name}</h3>
              <p className="text-gray-800 mt-3 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
