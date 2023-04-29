import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Loader } from './components';

const Home = React.lazy(() => import('./pages/Home'));
const Metrics = React.lazy(() => import('./pages/Metrics'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='metrics' element={<Metrics />} />
            <Route exact path='*' element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />

      </Router>
    </>

  );
}

export default App;
