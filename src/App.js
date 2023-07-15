import React from 'react';
import Navigation from './components/navigation';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import PageRenderer from './page-renderer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/:page" element={<PageRenderer />} /> {/**pageRenderer takes a page parameter .. if we are on this route we should be expecting this param to be route */}
          <Route path="/" render={() => <Navigate to="/home"/>} /> {/**redirecting / to /home by default */}
          {/**<Route element={() => 404} /> {/**if there is nothing else */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
