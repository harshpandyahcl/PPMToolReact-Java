import { Component } from 'react';
import { BrowserRouter as Router , Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import AddProject from './components/project/AddProject';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
        </div>
      </Router>
    );
  }
}

export default App;