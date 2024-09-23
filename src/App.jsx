import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer'
import './App.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
