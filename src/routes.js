import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import ProductPageContainer from './pages/ProductPage/ProductPageContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <HomePageContainer />} />
      <Route exact path="/ProductPageContainer/:id" render={() => <ProductPageContainer />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
