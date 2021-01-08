import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from '../src/components/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* 루트 router가 다른 곳에서 작동하지 않도록 exact 적용 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}
export default App;
