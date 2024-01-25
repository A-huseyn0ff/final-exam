
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Basket from './Pages/Basket/Basket';
import Admin from './Pages/Admin/Admin';
import Detail from './Pages/Detail/Detail';
import Wishlist from './Pages/Wishlist/Wishlist';
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/add" element={<Admin/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/wishlist" element={<Wishlist />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
