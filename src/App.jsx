<<<<<<< HEAD
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Taskly Dashboard</h1>
      <Dashboard />
      <TaskList />
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Logos Section */}
      <div className="flex space-x-4 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-24 transition-transform hover:scale-110" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-24 transition-transform hover:scale-110" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Vite + React</h1>

      {/* Counter Card */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Edit <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src/App.jsx</code> and save to test HMR.
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-500 text-sm">
        Click on the Vite and React logos to learn more.
      </p>
>>>>>>> main
    </div>
  );
}

export default App;
