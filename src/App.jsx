import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AITutor from './pages/AITutor';
import Practice from './pages/Practice';
import Topics from './pages/Topics';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/ai-tutor' component={AITutor} />
        <Route path='/practice' component={Practice} />
        <Route path='/topics' component={Topics} />
        <Route path='/analytics' component={Analytics} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
