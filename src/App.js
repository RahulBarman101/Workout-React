import './App.css';
import Header from './components/JS/Header';
import Hero from './components/JS/Hero';
import Workouts from './components/JS/Workouts';
import StartWorkout from './components/JS/StartWorkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path='/'>
        <div className="landing-page">
          <Header />
          <Hero />
        </div>
        <div className="workouts">
          <Workouts /> 
        </div>
        </Route>
        <Route path="/work">
          <StartWorkout />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
