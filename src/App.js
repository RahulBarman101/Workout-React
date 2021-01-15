import './App.css';
import Header from './components/JS/Header';
import Hero from './components/JS/Hero';
import Workouts from './components/JS/Workouts';

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <Header />
        <Hero />
      </div>
      <div className="workouts">
        <Workouts /> 
      </div>
    </div>
  );
}

export default App;
