import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LogIn from './components/Login';
import Home from './components/Home';
import LeaderBoard from './components/LeaderBoard';
import New from './components/New';
import { connect } from 'react-redux';

function App({authedUser}) {
  return (
    <BrowserRouter>
      <Routes>
          {authedUser && <NavBar />}
          <Route path='/login' exact element={<LogIn />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/leaderboard' element={<LeaderBoard />}/>
          <Route path='/new' element={<New />}/>
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = ({authedUser}) => ({
  authedUser: !!authedUser
});

export default connect(mapStateToProps)(App)