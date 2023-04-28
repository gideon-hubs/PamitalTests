
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Header from "./components/Header";
import Users from "./pages/Users/Users";


function App() {
  return (
    <div>
   <BrowserRouter>
   <Header/>
   <Routes>

   <Route path='/' element={<Home/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/contact' element={<Contact/>} />
   <Route path='/users' element={<Users/>} />

   </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;
