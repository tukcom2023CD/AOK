import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; //라우터 세팅
import Main from './Pages/Main';
import Project from './Pages/Project';
import Upload from './Pages/Upload';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* 메인 페이지 */}
          <Route path='/main' element={<Main />} />

          {/* 이하 다른 페이지들 주석으로 구분 */}
          <Route path='/project' element={<Project />} />
          <Route path='/upload' element={<Upload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
