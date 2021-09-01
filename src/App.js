import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import 'bulma/css/bulma.min.css'
import './App.css';

function App() {
  return (
    <div>
      <div className="main-container">
      <Header />
       <Navigation />
       </div>
      <Footer />
    </div>
  );
}

export default App;
