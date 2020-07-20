import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from '../src/components/menu/menu';
import List from './components/list/list';
import Add from './components/add/add';
import Edit from './components/edit/edit';
import Detail from './components/detail/detail';

function App() {
  return (
    <div className="App">
      <Router>


      <Menu />

    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/list" component={List} />
      <Route exact path="/add" component={Add} />
      <Route exact path="/filmes/list/:id" component={Edit} />
      <Route exact path="/filmes/:id" component={Detail} />
    </Switch>
      </Router>
    </div>
  );
}

export default App;
