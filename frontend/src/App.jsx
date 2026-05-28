import "../components/navbar.css";
import './App.css';

import { ListingCard } from '../components/ListingCard';
import { Details } from '../components/details';
import { Router, Routes, Route } from 'react-router-dom';
import { SavedCard } from '../components/saved_card';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListingCard/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/saved_card" element={<SavedCard/>} />
      </Routes>
    </div>
  );
}
export default App;
