import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/base/header/header';
import MainPage from './components/pages/main-page/main-page';
import NotFound from './components/pages/not-found/not-found';
import PlantPage from './components/pages/plant-page/plant-page';
import SearchPage from './components/pages/search-page/search-page';

import './style.scss';

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <MainPage/>
          </Route>
          <Route exact path='/search'>
            <SearchPage />
          </Route>
          <Route path='/plant/:id'>
            <PlantPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
      </Switch>
    </Router>
  );

}

export default App;