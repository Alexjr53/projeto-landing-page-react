import './AppRoutes.css'
import Home from "../components/home/Home";
import About from "../components/about/About";
import Product from "../components/product/Product";
import Contact from "../components/contact/Contact";
import {Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';


function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<motion.div className="fullHeight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> <Home /> </motion.div>} />
                <Route path="/about" element={<motion.div className="fullHeight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> <About /> </motion.div>} />
                <Route path="/product" element={<motion.div className="fullHeight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> <Product /> </motion.div>} />
                <Route path="/contact" element={<motion.div className="fullHeight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> <Contact /> </motion.div>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AppRoutes