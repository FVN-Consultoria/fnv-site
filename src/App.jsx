import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import Home from './pages/Home'
import CentralGestor from './pages/CentralGestor'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/central-gestor" element={<CentralGestor />} />
      </Routes>
      <Footer />
      <WhatsAppFAB />
    </BrowserRouter>
  )
}
