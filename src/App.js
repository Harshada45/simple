import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/home/Home";
import { Routes, Route} from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import ImageUpload from "./component/imageupload/ImageUpload";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDetails from "./component/UserDetails/UserDetails";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/dashboard" element={<Navbar></Navbar>}>
          <Route index element={<Home></Home>} />

          <Route path="userdetails" element={<UserDetails></UserDetails>} />
          <Route path="imageupload" element={<ImageUpload></ImageUpload>} />

        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
