// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './navbar';
import Footer from './footer';
import Info from './pages/Info/info.js';
import Welcome from './pages/Welcome/Welcome.js';
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component


// Define animation variants for smoother transitions
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.05,
  },
};

function App() {
  const location = useLocation(); // Get the current location for animations

  return (
    <div>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <NavBar />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.2 }} // Adjusted duration
              >
                <Welcome />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.2 }} // Adjusted duration
              >
                <Info />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

// Wrap App with Router
export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
