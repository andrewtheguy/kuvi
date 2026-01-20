import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import WebApps from './pages/WebApps';
import Utilities from './pages/Utilities';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/web" replace />} />
        <Route path="web" element={<WebApps />} />
        <Route path="utilities" element={<Utilities />} />
      </Route>
    </Routes>
  );
}

export default App;
