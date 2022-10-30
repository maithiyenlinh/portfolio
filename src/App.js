import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home';
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH, PROJECT_PATH } from './constant/route';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import { prefixRoute } from './constant/config';
import Cursor from './components/Cursor';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={HOME_PATH} element={<Home />} />
        <Route path={PROJECT_PATH} element={<Project />} />
        <Route path={ABOUT_PATH} element={<About />} />
        <Route path={CONTACT_PATH} element={<Contact />} />
        <Route path={`${prefixRoute}*`} element={<Navigate to={HOME_PATH} />} />
      </Routes>
    </Layout>
  );
}

export default App;
