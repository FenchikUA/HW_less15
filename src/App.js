import Header from './components/Header';
import Main from './components/Main';
import HomePage from './components/pages/HomePage';
import OnePage from './components/pages/OnePage';
import NotFound from './components/pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [countris, setCountris] = useState([]);
  return (
    <div>
      <Header />
      <Main>
       <Routes>
        <Route exact path='/' element={<HomePage countris={countris} setCountris={setCountris}/>}></Route>
        <Route path='/country/:name' Component={OnePage}></Route>
        <Route Component={NotFound}></Route>
       </Routes>
      </Main>
    </div>
  );
}

export default App;
