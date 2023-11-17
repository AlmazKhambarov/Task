import logo from './logo.svg';
import './App.css';
import Main from './Components/Posts/Main/Main';
import { Route, Routes } from 'react-router-dom';
import ShowPost from './Components/Posts/Show/ShowPost';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/post/:id' element={<ShowPost/>}/>
  </Routes>

  </>
  );
}

export default App;
