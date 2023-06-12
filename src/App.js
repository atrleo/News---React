
import './App.css';

import React, { Component } from 'react'
import Header from './components/Header';
import News from './components/News';

import {
  BrowserRouter as Router,
 
  Route,
  Link,
  Routes
} from "react-router-dom";





export default class App extends Component {
  pageCount = 10;
  apiKey= process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key = "home" pageSize={this.pageCount} country="us" category= "general"/>}>   
            </Route>
          
            <Route exact path="/business" element={<News apiKey={this.apiKey} key = "business" pageSize={this.pageCount} country="us" category= "business"/>}>   
            </Route>
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key = "entertainment" pageSize={this.pageCount} country="us" category= "entertainment"/>}>   
            </Route>
            
            <Route exact path="/health" element={<News apiKey={this.apiKey} key = "health" pageSize={this.pageCount} country="us" category= "health"/>}>   
            </Route>
            <Route exact path="/science" element={<News  apiKey={this.apiKey}key = "science" pageSize={this.pageCount} country="us" category= "science"/>}>   
            </Route>
            <Route exact path="/sports" element={<News  apiKey={this.apiKey}key = "sports" pageSize={this.pageCount} country="us" category= "sports"/>}>   
            </Route>
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key = "technology" pageSize={this.pageCount} country="us" category= "technology"/>}>   
            </Route>


          

      </Routes>
        </Router>

      </div>
    )
  }
}




