import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AddCourses from './Components/AddCourses/AddCourses';
import Details from './Components/Details/Details';
import Log from './Components/Login/Log';
import Header from './Components/Header/header';

function App() {

  return (
    <div>
     <BrowserRouter>
     <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<Details />} />
          <Route path="/addCourses" element={<AddCourses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:courseId" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/log" element={<Log />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
