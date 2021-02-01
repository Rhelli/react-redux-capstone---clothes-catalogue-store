import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import ProductPageContainer from './pages/ProductPage/ProductPageContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/ProductPageContainer" component={ProductPageContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
