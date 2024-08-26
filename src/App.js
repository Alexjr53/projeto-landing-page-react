import './Global.css';
import Home from './components/home/Home';
import About from './components/about/About'
import Contact from './components/contact/Contact';
import Product from './components/product/Product';
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

