import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; //라우터 세팅
import Main from './Pages/Main';
import Main1 from './Pages/Main1';
import Log from './Pages/Log_/Log';
import Login from './Pages/Member/Login';
import Upload from './Pages/Upload';
import Repository from './Pages/Repository/Repository';
import Branch from './Pages/Branch/Branch';
import RepositorySetting from './Pages/Repository/RepositorySetting';
import Notice from './Pages/Notice/Notice';
import UpsideBar from './Components/UpsideBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* 메인 페이지 */}
          

          {/* 이하 다른 페이지들 주석으로 구분 */}
          <Route path='/main' element={<Main />} />
          <Route path='/up' element = {<UpsideBar/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/Log' element={<Log/>} />
          <Route path='/repository' element={<Repository/>} />
          <Route path='/repository_setting' element={<RepositorySetting/>} />
          <Route path='/branch' element={<Branch/>} />
          <Route path='/notice' element={<Notice/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
