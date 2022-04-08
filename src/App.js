import "./App.scss";
import NavbarComp from "./components/NavbarComp";
import { Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Recruiters from './components/Recruiters';
import AddRecruiter from './components/AddRecruiter';
import EditRecruiter from './components/EditRecruiter';
import Rating from './Pages/Rating';
import Search from './components/Search';
import AddSearchs from './components/AddSearchs';
import Reports from './components/Reports';
import NotFound from './Pages/NotFound';
import ForgotPassword from './components/ForgotPassword';
import SpinnerComp from "./commons/Spinner";
import EditSearch from "./components/EditSearch";

const App = () => {
  return (
    <div>
      <NavbarComp />
      <SpinnerComp />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/recruiters" element={<Recruiters/>} />
        <Route path="/searchs" element={<Search/>} />
        <Route path="/search/:id" element={<EditSearch />} />
        <Route path="/addSearch" element={<AddSearchs />} />
        <Route path="/reports" element={<Reports/>} />
        <Route path={"/recruiter/:id"} element={<EditRecruiter/>} />
        <Route path="/addRecruiter" element={<AddRecruiter/>} />
        <Route path="/rating/:id" element={<Rating/>}/>
        <Route path="/forgotPass" element={<ForgotPassword/>}/>
        <Route path="*" element={<NotFound replace to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
