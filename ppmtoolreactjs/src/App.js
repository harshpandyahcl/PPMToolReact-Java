import { Component } from 'react';
import { BrowserRouter as Router , Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import AddProject from './components/project/AddProject';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;