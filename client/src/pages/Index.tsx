import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { UsersList } from "./UsersList";
import { UserDetails } from "./UserDetails";
import { Login } from "./Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";


// TODO -> 

// Css finish
// --> Navbar mobile display



// ****
// ****Handle Loading 
// ****Handle Style


// Ideas
// - prevent multiple login 
// - put online status indicator for agents
// - requirements.txt




function Index() {
  return (
    <BrowserRouter>
 <Routes>
  <Route path="/login" element={<Login />}/>
  <Route path="/" element={<ProtectedRoute element={<Home/>}/>}/>
  <Route path="/users"element={<UsersList/>}/>
  <Route path="/user/:userId" element={<ProtectedRoute element={<UserDetails/>}/>}/>  
 </Routes>
    </BrowserRouter>
  );
}

export default Index;
