import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { Analytics } from "@vercel/analytics/react"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Not Found</p>} />

      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
