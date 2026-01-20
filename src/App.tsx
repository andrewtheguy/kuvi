import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlatformView from './pages/PlatformView';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="platform/:type" element={<PlatformView />} />
      </Route>
    </Routes>
  );
}

export default App;
