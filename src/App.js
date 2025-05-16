import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Componant/Header';
import Slider from './Componant/Slider';

      // ✅ added
import ExampleComponent from './SOR/ExampleComponent';      // ✅ added
import Body from './Componant/body';
import Footer from './Componant/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ position: "relative", zIndex: 0 }}>
        <Slider />
        <Body/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
