import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/home/Home'
import TopMenu from './components/NavBar'
import Header from './components/Header'
import NotFound from './components/NotFound'
import PostMain from './components/post/PostMain'

function App(): JSX.Element {
  return <BrowserRouter>
    <TopMenu />
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/post/*" element={<PostMain />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
}

export default App;