import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={() => <div>Main</div>} />
    </Switch>
  );
};

export default Routes;
