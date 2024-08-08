import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LogIn from './components/Login';
import DashBoard from './components/DashBoard';
import LeaderBoard from './components/LeaderBoard';
import New from './components/New';
import PageNotFound from './components/PageNotFound';
import AuthedRoute from './components/AuthedRoute';

function App() {
  const authorization = useSelector(state => state.authorization);
  const [marginTop, setMarginTop] = useState(0);

  return (
    <BrowserRouter>
      {authorization.isAuthenticated && <NavBar setNavbarHeight={setMarginTop}/>}
      <Routes>
          <Route path='/login' exact element={<LogIn />}/>
          <Route path='/' element={<AuthedRoute><DashBoard marginTop={marginTop}/></AuthedRoute>}/>
          <Route path='/leaderboard' element={<AuthedRoute><LeaderBoard marginTop={marginTop}/></AuthedRoute>}/>
          <Route path='/new' element={<AuthedRoute><New marginTop={marginTop}/></AuthedRoute>}/>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;