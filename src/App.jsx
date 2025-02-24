import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Taskly Dashboard</h1>
      <Dashboard />
      <TaskList />
    </div>
  );
}

export default App
