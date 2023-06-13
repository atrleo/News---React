
import './App.css';

import React, { Component, useState } from 'react'
import Header from './components/Header';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";
import { exportDefaultDeclaration } from '@babel/types';





const App = ()=> {
  const pageCount = 10;
  const [progress,setProgress] = useState(0);
  

  const apiKey = process.env.REACT_APP_NEWS_API;
 
    return (
      <div>
        <Router>
          <Header />
          <LoadingBar
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageCount} country="us" category="general" />}>
            </Route>

            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageCount} country="us" category="business" />}>
            </Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageCount} country="us" category="entertainment" />}>
            </Route>

            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageCount} country="us" category="health" />}>
            </Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageCount} country="us" category="science" />}>
            </Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageCount} country="us" category="sports" />}>
            </Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageCount} country="us" category="technology" />}>
            </Route>




          </Routes>
        </Router>

      </div>
    )
  
}

export default App;

