import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Authentication from './components/auth/Authentication';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/home/Profile';
import EditProfile from './components/home/EditProfile';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='' element={<Home />} />
    <Route path='/login' element={<Authentication />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/editprofile' element={<EditProfile />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
