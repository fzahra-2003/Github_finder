import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar/>

            <main className='w-full max-w-screen-lg mx-auto px-3 pb-12'>
              <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/NotFound' element={<NotFound/>} />
                <Route exact path='/*' element={<NotFound/>} />
              </Routes>
            </main>
            <Footer />
        </div>
    </Router>
  );
}


export default App;
