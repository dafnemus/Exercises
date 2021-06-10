import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../sections/Home';
import Checkout from '../sections/Checkout';
import Information from '../sections/Information';
import Payment from '../sections/Payment';
import Success from '../sections/Success';
import NotFound from '../sections/NotFound';
import Layout from '../components/Layout';
import AppContext from '../lib/context/AppContext';
import useInitialState from '../lib/hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;