
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/editor/:RoomId' element={<EditorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
