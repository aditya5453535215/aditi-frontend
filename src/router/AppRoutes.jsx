import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import NotFound from '../Pages/NotFound';


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
                <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
                 */}
                <Route path="*" element={<NotFound />} />
                < Route element={<Home />} path={"/"}> </Route>
                < Route element={<Home />} path={"/home"}> </Route>
                < Route element={<Services />} path={"/services"}> </Route>
            </Routes>
        </BrowserRouter>

    );
}

/* 
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Componant/common/Header';
import Home from './Pages/Home';
import Services from './Pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      < Route element= {<Home/>} path={"/"}> </Route>
      < Route element= {<Home/>} path={"/home"}> </Route>
      < Route element= {<Services/>} path={"/services"}> </Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;

*/