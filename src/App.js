import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import './App.css';
// import NavBar from './components/NavBar';
import LogIn from './components/Login';
import DashBoard from './components/DashBoard';
import LeaderBoard from './components/LeaderBoard';
import New from './components/New';
import PageNotFound from './components/PageNotFound';

function App() {
  // const authedUser = useState(false);

  return (
    <BrowserRouter>
      {/* {authedUser && <NavBar />} */}
      <Routes>
          <Route path='/login' exact element={<LogIn />}/>
          <Route path='/' element={<DashBoard />}/>
          <Route path='/leaderboard' element={<LeaderBoard />}/>
          <Route path='/new' element={<New />}/>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;