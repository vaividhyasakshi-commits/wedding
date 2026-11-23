import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Wedding from './pages/Wedding';import Admin from './pages/Admin';
export default function App(){return <BrowserRouter><Routes><Route path="/" element={<Wedding/>}/><Route path="/admin" element={<Admin/>}/><Route path="*" element={<Wedding/>}/></Routes></BrowserRouter>;}
