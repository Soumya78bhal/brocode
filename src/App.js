
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <div>
        <Toaster position="top-right">
        </Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/editor/:roomId' element={<EditorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
