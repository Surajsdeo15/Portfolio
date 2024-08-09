import './App.css';
import './index.css';
import Portfolio from './PortfolioComponents/PortfolioHome';
import TheoryAll from './Theory/TheoryAll';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
 <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/theory" element={<TheoryAll />} />
        {/* Add more routes here if needed */}
      </Routes>
    </>
  );
}

export default App;
