import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'

// NOTE: Alert is only used on the '/' route moving to that route we can prevent
// content shift when alert shows by hiding and unhiding the Alert rather than
// conditionally rendering

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='w-full max-w-screen-lg mx-auto px-3 pb-12'>
              <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/about' element={<About />} />
                <Route exact path='/notfound' element={<NotFound />} />
                <Route exact path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
