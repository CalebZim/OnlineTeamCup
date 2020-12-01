import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import './App.css'
import './assets/Tachyons.css'

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from "react-router-dom";

// Views 
import Home from './views/Home';
import RuleBook from './views/Rule-Book'
import Register from './views/Register'


const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/league-rule-book" component={RuleBook} layout={LayoutDefault} />
            <AppRoute exact path="/register" component={Register} />
          </Switch>
      )} />
  );
}

export default App;