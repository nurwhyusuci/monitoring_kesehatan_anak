import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginOrangTua from './auth/LoginOrangTua';
import OrangTuaRoutes from './routes/OrangTuaRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginOrangTua />} />
        <Route path="/orangtua/*" element={<OrangTuaRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
