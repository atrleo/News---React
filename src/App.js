
import './App.css';

import React, { Component } from 'react'
import Header from './components/Header';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";





export default class App extends Component {
  pageCount = 10;
  state = {
    progress:0,
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }


  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Header />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="home" pageSize={this.pageCount} country="us" category="general" />}>
            </Route>

            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageCount} country="us" category="business" />}>
            </Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageCount} country="us" category="entertainment" />}>
            </Route>

            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageCount} country="us" category="health" />}>
            </Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageCount} country="us" category="science" />}>
            </Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageCount} country="us" category="sports" />}>
            </Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageCount} country="us" category="technology" />}>
            </Route>




          </Routes>
        </Router>

      </div>
    )
  }
}




