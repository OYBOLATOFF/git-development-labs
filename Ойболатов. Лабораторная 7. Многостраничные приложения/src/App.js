import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Registration from './components/Registration';
import Contacts from './components/Contacts';
import './style.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <nav>
            <ul className="menu">
              <li>
                <Link to="/" className="menu-link">Главная страница</Link>
              </li>
              <li>
                <Link to="/about" className="menu-link">О компании</Link>
              </li>
              <li>
                <Link to="/blog" className="menu-link">Блог</Link>
              </li>
              <li>
                <Link to="/contacts" className="menu-link">Контакты</Link>
              </li>
              <li>
                <Link to="/registration" className="menu-link">Регистрация</Link>
              </li>
            </ul>
          </nav>

        </div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
