import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Home from './pages/Home/Home';
import routes from './routes/index.routes';

const AppRoutes = () =>
  routes.map((route, id) => (
    <Route
      key={route.slug}
      path={route.slug}
      component={route.component}
      render={route.render}
    />
  ));

export default function App() {
  return (
    <Router>
      <Switch>
        <AppRoutes />
      </Switch>
    </Router>
  );
}
