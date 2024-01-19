import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArtistPage from './components/ArtistPage';
import AlbumPage from './components/AlbumPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/artist" component={ArtistPage} />
        <Route path="/album" component={AlbumPage} />
        {/* Aggiungi altre route se necessario */}
      </Switch>
    </Router>
  );
};

export default App;