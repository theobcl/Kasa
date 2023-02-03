import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Error from '../pages/Error';
import About from '../pages/About';
import Lodging from '../pages/Lodging';

function RoutesPath() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lodging" element={<Lodging />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default RoutesPath;
