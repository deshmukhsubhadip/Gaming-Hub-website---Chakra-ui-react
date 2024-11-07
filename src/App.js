import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Game from "./Components/Game";
import Upload from "./Components/Upload";
import Login from "./Components/Login";
import Signup from './Components/Signup';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
       <Route path='/home' element={<Home />} />
       <Route path="/games" element={<Game />} />
       <Route path="/upload" element={<Upload />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
