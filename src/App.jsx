import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Contributors from './pages/Contributors'
import Blog from './pages/Blog'
import BlogContent from './pages/BlogContent'
import Roadmap from './pages/Roadmap'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'


function App() {

  return (

      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
           <Route path="/blog" element={<Blog/>} />
           <Route path="/contributors" element={<Contributors/>} />
            <Route path="/blog-content" element={<BlogContent/>} />
            <Route path="/roadmap" element={<Roadmap/>} />
            <Route path="/privacy" element={<PrivacyPolicy/>} />
            <Route path="/terms" element={<Terms/>} />

        </Routes>
      </div>
    </Router>
    
    
  )
}

export default App
