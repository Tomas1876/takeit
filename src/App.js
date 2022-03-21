import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Pros from './pages/Pros';
import Cons from './pages/Cons';
import Result from './pages/Result';
import Questions from './pages/Questions';

function App() {
  return (
    <>
      <Header />
      <main>
        <div class="main-box">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/pros" element={<Pros />} />
            <Route path="/cons" element={<Cons />} />
            <Route path="/result" element={<Result />} />
            <Route path="/questions" element={<Questions />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
