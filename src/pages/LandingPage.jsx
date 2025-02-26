import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header
        className="relative w-full h-screen flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <h1 className="text-4xl sm:text-5xl font-bold z-10">
          Streamline your tasks with Taskly today.
        </h1>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 z-10">
          Get Started
        </button>
      </header>

      <section className="py-16 px-6 text-center">
        <h2 text-3xl font-semibold mb-6>
          Discover Taskly’s Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img src="/images/feature1.png" alt="Feature 1" className="w-40 h-40 mb-4" />
            <h3 className="text-xl font-semibold">Manage Tasks Efficiently</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Organize tasks seamlessly with our intuitive UI.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/feature2.png" alt="Feature 2" className="w-40 h-40 mb-4" />
            <h3 text-xl font-semibold>
              Collaboration Made Simple
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Work with your team in real-time and boost productivity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-200 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Unlock Your Team’s Potential with Taskly</h2>
        <img src="/images/team.jpg" alt="Team working" className="w-full max-w-3xl mx-auto rounded-lg shadow-lg" />
        <p className="mt-4 text-gray-700 dark:text-gray-300">Empower your team to work smarter and accomplish goals faster.</p>
      </section>

      <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Effortless Task Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
            <img src="/images/task1.png" alt="Task 1" className="w-16 h-16 mb-2" />
            <p className="text-lg font-medium text-gray-700">
              Easy to Use Interface
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
            <img src="/images/task2.png" alt="Task 2" className="w-16 h-16 mb-2" />
            <p className="text-lg font-medium text-gray-700">
              Smart Scheduling
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
            <img src="/images/task3.png" alt="Task 3" className="w-16 h-16 mb-2" />
            <p className="text-lg font-medium text-gray-700">
              Automated Reminders
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-3xl bg-blue-600 text-white p-8 rounded-lg shadow-lg mt-12 text-center">
        <blockquote className="flex flex-col items-center">
          <img src="/images/testimonial.jpg" alt="Testimonial" className="w-16 h-16 rounded-full border-4 border-white mb-4" />
          <p className="text-xl font-light italic">
            “Taskly has changed the way our team collaborates. Our productivity has skyrocketed!”
          </p>
        </blockquote>
      </section>

      <footer className="py-10 bg-blue-500 text-white text-center">
        <p className="text-lg font-semibold">Start your free trial today</p>
        <button className="mt-3 px-6 py-2 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-200">
          Sign Up
        </button>
      </footer>
    </div>
  );
};

export default LandingPage;
