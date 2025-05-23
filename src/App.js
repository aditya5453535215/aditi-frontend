import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Componant/Header';
import Home from './Pages/Home';
import Services from './Pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      < Route element = {<Home/>} path={"/"}> </Route>
      < Route element = {<Home/>} path={"/home"}> </Route>
      < Route element = {<Services/>} path={"/services"}> </Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
