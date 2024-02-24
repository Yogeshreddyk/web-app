import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
