/* eslint-disable no-unused-vars */
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contacts from './pages/contact';
import NotFound from './pages/notFound';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
    <Routes>
      {/* defining route path and component related to route path */}
      <Route path="/"  element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts/:id" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
