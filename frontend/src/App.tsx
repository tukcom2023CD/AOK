import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; //라우터 세팅
import Main from './Pages/Member/Main';
import Log from './Pages/Log_/Log';
import Login from './Pages/Member/Login';
import Upload from './Pages/Upload';
import Repository from './Pages/Repository/Repository';
import Branch from './Pages/Branch/Branch';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* 메인 페이지 */}
          

          {/* 이하 다른 페이지들 주석으로 구분 */}
          <Route path='/main' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/Log' element={<Log/>} />
          <Route path='/repository' element={<Repository/>} />
          <Route path='/branch' element={<Branch/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
