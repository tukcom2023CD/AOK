import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; //라우터 세팅
import Main from './Pages/Main';
import Project from './Pages/Project';
import LogHistory from './Pages/LogHistory';
import Upload from './Pages/Upload';
import Login from './Pages/Login';
import Merge from './Pages/Merge';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* 메인 페이지 */}
          <Route path='' element={<Login  />} />
          {/* 이하 다른 페이지들 주석으로 구분 */}
          <Route path='/main' element={<Main  />} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/project' element={<Project />} />
          <Route path='/log_history' element={<LogHistory />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/merge' element={<Merge  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
