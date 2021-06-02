import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './landing/Landing';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/'>
                        <Landing />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;