// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Browser } from "./constants";
// import { Dashboard, Home, Http404 } from './pages';
import { LoginForm } from './components';
import { NavBar } from './components';
export default function App() {
  return (
  
    <NavBar/>                 
    // <BrowserRouter>
    //   <Routes>
    //     <Route path={Browser.ROOT} element={<Home />}></Route>
    //     <Route path={Browser.DASHBOARD} element={<Dashboard />}></Route>
    //     <Route path={Browser.HTTP_404} element={<Http404 />}></Route>
    //     <Route path={Browser.ASTERISK} element={<Http404 />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}