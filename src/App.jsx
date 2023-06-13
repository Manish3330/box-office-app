import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Starred from './pages/Starred.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/starred" element={<Starred />}></Route>
        <Route path="*" element={<div>Not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
