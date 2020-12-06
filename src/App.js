import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './pages/Home'
import Cv from './pages/Cv'
import Projects from './pages/Projects'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'exact component={Home}/>
          <Route path='/cv' component={Cv}/>
          <Route path='/projects' component={Projects}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
