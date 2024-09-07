import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { UsersList } from "./UsersList";
import { UserDetails } from "./UserDetails";
import { Login } from "./Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import { styles } from "../styles/styles";


function Index() {
  return (
    <BrowserRouter>
 <Routes>
  <Route path="/login" element={<Login />}/>
  <Route path="/" element={<ProtectedRoute element={<Home/>}/>}/>
  <Route path="/users" element={<ProtectedRoute element={<UsersList/>}/>}/>
  <Route path="/user/:userId" element={<ProtectedRoute element={<UserDetails/>}/>}/>  
  <Route path="*" element={<p className={styles.mainSectionContiner}>NOT FOUND!!!</p>}/>
 </Routes>
    </BrowserRouter>
  );
}

export default Index;
