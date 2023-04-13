import './index.css'
import Home from './components/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopMenu from './components/topmenu/TopMenu'
import Header from './components/header/Header'
import NotFound from './components/NotFound'
import PostRouter from './components/article/PostRouter'

function App(): JSX.Element {
  return <BrowserRouter>
    <TopMenu />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/*" element={<PostRouter />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
}

export default App;