import './App.css'
import Choose from './components/Choose'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Table from './components/Table'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <>
      <div className='font-poppins'>
        <Header/>
        <Hero />
        <Stats />
        <Choose />
        <Table />
        <Testimonial />
        <Footer />
      </div>
    </>
  )
}

export default App
