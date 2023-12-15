import 'bootstrap-icons/font/bootstrap-icons.css';
import RegisterForm from './components/register/RegisterForm';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <RegisterForm />
      <Carousel />

      <Footer />
    </div>
  );
}

export default App;
