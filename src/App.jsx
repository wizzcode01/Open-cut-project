import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Contributors from './pages/Contributors'
import Blog from './pages/Blog'
import BlogContent from './pages/BlogContent'

function App() {

  return (

      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
           <Route path="/blog" element={<Blog/>} />
           <Route path="/contributors" element={<Contributors/>} />
            <Route path="/blog-content" element={<BlogContent/>} />
        </Routes>
      </div>
    </Router>
    
    
  )
}

export default App
