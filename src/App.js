import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <h1>Myrddin's Pokedex App!</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Seen/AddSeen" />
        <Route path="/Seen/AddSeen" />
        <Route path="/Caught" />


      </Routes>

    </div>
  );
}

export default App;
