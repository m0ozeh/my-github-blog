import './index.css'
import Home from './components/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopMenu from './components/topmenu/TopMenu'
import Header from './components/header/Header'

function App(): JSX.Element {
  return <BrowserRouter>
    <TopMenu />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Home />} />
    </Routes>
  </BrowserRouter>
}

export default App;