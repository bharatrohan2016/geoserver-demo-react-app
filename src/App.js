
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Layout from './Layout';
import { NotificationContainer } from 'react-notifications';
import States from './Pages/States/States';
import District from './Pages/District/District';
import Barabanki from './Pages/Barabanki/Barabanki';
import Franchise from './Pages/Franchise/Franchise';

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route element= {<Login/>} path="/" />
          <Route element = {<Login/>} path="/login" />
          <Route element= {<States/>} path="/farmers" />
          <Route element={<Franchise/>} path="/franchise"/>
          <Route element={<District />} path="/district/:id" />
          <Route element={<Barabanki/>} path='/barabanki'/>
        </Routes>
        <NotificationContainer/>
      </HashRouter>
  );
}

export default App;
