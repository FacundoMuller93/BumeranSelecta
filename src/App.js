import './App.scss';
import NavbarComp from './components/NavbarComp';
import { Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Recruiters from './components/Recruiters';
import AddRecruiter from './components/AddRecruiter';
import Searchs from './components/Searchs';
import Reports from './components/Reports';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <div >
      <NavbarComp/>
     
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/recruiters" element={<Recruiters/>} />
        <Route path="/searchs" element={<Searchs/>} />
        <Route path="/reports" element={<Reports/>} />
        {/* <Route path={`/recruiter/${recruiter.id}`} element={<Reports/>} /> */}
        <Route path="/addRecruiter" element={<AddRecruiter/>} />
        <Route path="*" element={<NotFound replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
