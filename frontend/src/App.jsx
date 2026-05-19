import './App.css';

import { Card } from '../components/card';
import { Details } from '../components/details';
import { Router, Routes, Route } from 'react-router-dom';

function App() {
return (
  <div className="App">
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/details" element={<Details />} />
      </Routes>
  </div>

  
);
}
export default App;
