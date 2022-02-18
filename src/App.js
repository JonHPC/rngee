
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Outlet, Link} from 'react-router-dom';


function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
