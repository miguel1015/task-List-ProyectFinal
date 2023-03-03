import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./componentes/home/Home"
import About from "./componentes/About/About"
import TaskList from "./componentes/taskList/TaskLits"
import Navbar from './componentes/nabvar/Navbar';
import Login from './login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='/taskList' element={<TaskList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
