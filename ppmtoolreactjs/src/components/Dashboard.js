import React, { Component } from 'react';
import Header from './layout/Header';
import ProjectItem from './project/ProjectItem';



export default class Dashboard extends Component {
  render() {

    return ( 
        <div>
            <h1>Welcome to the Dashboard</h1> 
            <ProjectItem/>
            <Header/>
       </div>
    );
  }
}
