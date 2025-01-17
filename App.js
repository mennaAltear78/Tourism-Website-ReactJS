import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import HomePage from './component/Pages/HomePage';
import ServicePage from './component/Pages/ServicePage';
import NewsPage from './component/Pages/NewsPage';
import ContactPage from './component/Pages/ContactPage';
function App() {
  return (
    <div >
    <Header/>
   
    <Routes>
      <Route path='/'  element={<HomePage/>}/>
      <Route path='/ServicePage'  element={<ServicePage/>}/>
      <Route path='/NewsPage' element={<NewsPage/>}/>
      <Route path='/ContactPage' element={<ContactPage/>}/>
    </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
