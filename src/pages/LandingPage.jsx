import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header
        className="relative w-full h-screen flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <motion.h1
          className="text-4xl sm:text-5xl font-bold z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Streamline your tasks with Taskly today.
        </motion.h1>
        <motion.button
          onClick={() => navigate("/signup")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get Started
        </motion.button>
      </header>

      <section className="py-20 px-10 text-center">
        <h2 text-3xl font-semibold mb-8>Discover Taskly’s Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
          {["feature1", "feature2"].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <img src={`/images/${feature}.png`} alt={`Feature ${index + 1}`} className="w-40 h-40 mb-4" />
              <h3 className="text-xl font-semibold">{index === 0 ? "Manage Tasks Efficiently" : "Collaboration Made Simple"}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {index === 0 ? "Organize tasks seamlessly with our intuitive UI." : "Work with your team in real-time and boost productivity."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-10 bg-gray-200 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Unlock Your Team’s Potential with Taskly</h2>
        <motion.img
          src="/images/team.jpg"
          alt="Team working"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="mt-4 text-gray-700 dark:text-gray-300">Empower your team to work smarter and accomplish goals faster.</p>
      </section>

      <section className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md text-center my-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Effortless Task Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {["task1", "task2", "task3"].map((task, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img src={`/images/${task}.png`} alt={`Task ${index + 1}`} className="w-16 h-16 mb-4" />
              <p className="text-lg font-medium text-gray-700 dark:text-white">
                {index === 0 ? "Easy to Use Interface" : index === 1 ? "Smart Scheduling" : "Automated Reminders"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto bg-blue-600 text-white p-10 rounded-lg shadow-lg my-12 text-center">
        <blockquote className="flex flex-col items-center">
          <motion.img
            src="/images/testimonial.jpg"
            alt="Testimonial"
            className="w-16 h-16 rounded-full border-4 border-white mb-4"
            whileHover={{ scale: 1.1 }}
          />
          <p className="text-xl font-light italic">
            “Taskly has changed the way our team collaborates. Our productivity has skyrocketed!”
          </p>
        </blockquote>
      </section>

      <section className="max-w-6xl mx-auto rounded-lg shadow-lgpx-12 py-10 bg-blue-500 text-white text-center">
        <p className="text-lg font-semibold">Start your free trial today</p>
        <motion.button
          onClick={() => navigate("/signup")}
          className="mt-4 px-10 py-2 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-200"
          whileHover={{ scale: 1.05 }}
        >
          Sign Up
        </motion.button>
      </section>
    </div>
  );
};

export default LandingPage;
