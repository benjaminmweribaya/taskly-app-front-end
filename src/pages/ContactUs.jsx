import React, { useState } from "react";

const faqs = [
  {
    question: "How do I contact support?",
    answer: "You can contact support via email at support@taskly.com or through our 24/7 live chat on the website."
  },
  {
    question: "What are the support hours?",
    answer: "Our support team is available 24/7 to assist you with any inquiries or issues."
  },
  {
    question: "Where is Taskly located?",
    answer: "Taskly is a global company with headquarters in Nairobi, Kenya. We operate remotely to serve users worldwide."
  }
];


const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">HOW TO CONTACT US</h1>
        <p className="text-lg text-gray-600 mt-2">Taskly support team is here for you 24/7. Get in touch with us below.</p>
      </header>

      <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" required className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Email Address" required className="w-full p-3 border rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Subject" required className="w-full p-3 border rounded-lg" />
            <input type="text" placeholder="Phone Number" required className="w-full p-3 border rounded-lg" />
          </div>
          <textarea placeholder="Your Message" required className="w-full p-3 border rounded-lg h-32"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </form>
      </section>

      <section className="max-w-6xl mx-auto mt-10 text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Find Us Here</h2>
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.24066592688!2d36.8198235!3d-1.2863895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f110baf08e1e5%3A0x3c987f8a7b4a2b08!2sTechnical%20University%20of%20Kenya!5e0!3m2!1sen!2ske!4v1648897265738!5m2!1sen!2ske"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-10 bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <button onClick={() => toggleFAQ(index)} className="w-full text-left text-lg font-medium flex justify-between">
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
