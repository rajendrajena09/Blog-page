
import Navbar from './Navbar';
import Home from './Home';
import Create from './create.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './Blogdetails.js';
import NotFound from './NotFound.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/blog/:id" element={<BlogDetails/>} />
            <Route path="*" element={<NotFound/>} />
           </Routes>
        </div>

      </div>

    </Router>
  );
}

export default App;
