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

function App() {
  const authorization = useSelector(state => state.authorization);
  const [marginTop, setMarginTop] = useState(0);

  return (
    <BrowserRouter>
      {authorization.isAuthenticated && <NavBar setNavbarHeight={setMarginTop}/>}
      <Routes>
          <Route path='/login' exact element={<LogIn />}/>
          <Route path='/' element={<DashBoard marginTop={marginTop}/>}/>
          <Route path='/leaderboard' element={<LeaderBoard marginTop={marginTop}/>}/>
          <Route path='/new' element={<New marginTop={marginTop}/>}/>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;