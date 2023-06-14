import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Starred from './pages/Starred.jsx';
import MainLayout from './components/MainLayout';
import Show from './pages/Show.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/starred" element={<Starred />}></Route>
        </Route>
        
        <Route path="/show/:showId" element={<Show />} />
        {/* : is used to create dynamic web link to the pages, here based on the show Id of wurl we are displaying Show  */}
        <Route path="*" element={<div>Not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
