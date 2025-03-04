import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../assets/Hero.jpg";
import FeatureImage from "../assets/Feature.jpg";
import TeamImage from "../assets/Team.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header
        className="relative w-full h-screen flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
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

      {/* Features Section */}
      <section className="py-20 px-10 text-center bg-gray-100 dark:bg-gray-900">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
          Discover Taskly’s Powerful Features
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Taskly is designed to enhance your productivity with its intuitive features. Experience seamless task management
          and communication like never before.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12 items-center">

          {/* Left Features */}
          <div className="space-y-12">
            <motion.div
              className="flex flex-col items-center text-center lg:text-right"
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-cube text-3xl text-blue-500"></i>
              <h3 className="text-xl font-semibold mt-3 text-gray-900 dark:text-white">User-Friendly Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xs">
                Navigate effortlessly with our clean, intuitive design tailored for optimal user experience.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center lg:text-right"
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-tasks text-3xl text-blue-500"></i>
              <h3 className="text-xl font-semibold mt-3 text-gray-900 dark:text-white">Robust Task Management</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xs">
                Create, assign, and track tasks efficiently to keep your projects on schedule.
              </p>
            </motion.div>
          </div>

          {/* Center Image */}
          <motion.img
            src={FeatureImage}
            alt="Feature Illustration"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Right Features */}
          <div className="space-y-12">
            <motion.div
              className="flex flex-col items-center text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-comments text-3xl text-blue-500"></i>
              <h3 className="text-xl font-semibold mt-3 text-gray-900 dark:text-white">Efficient Communication Channel</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xs">
                Collaborate seamlessly with team members through comments and notifications directly on tasks.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-rocket text-3xl text-blue-500"></i>
              <h3 className="text-xl font-semibold mt-3 text-gray-900 dark:text-white">Get Started Today</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xs">
                Join Taskly now and transform the way you manage your tasks and projects.
              </p>
            </motion.div>
          </div>

        </div>
      </section>


      {/* Team Section */}
      <section className="py-20 px-10 bg-gray-200 dark:bg-gray-800 text-center md:text-left relative flex flex-col md:flex-row items-center md:items-start">
        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">Unlock Your Team’s Potential with Taskly App</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Taskly empowers teams to enhance productivity by simplifying task tracking assignments. Experience seamless collaboration and watch your projects thrive.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            <strong>Boost Productivity.</strong> Achieve more in less time with organized task management and clear deadlines.
          </p>
        </div>

        {/* Team Image Positioned at the Right */}
        <motion.img
          src={TeamImage}
          alt="Team working"
          className="w-96 rounded-lg shadow-lg mx-auto mt-8 md:mt-0 md:ml-10 md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
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

      {/* Call-to-Action Section */}
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
    </div >
  );
};

export default LandingPage;
