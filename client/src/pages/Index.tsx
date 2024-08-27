import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { UsersList } from "./UsersList";
import { UserDetails } from "./UserDetails";


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
  <Route path="/" element={<Home />}/>
  <Route path="/users" element={<UsersList />}/>
  <Route path="/user/:userId" element={<UserDetails />}/>  
 </Routes>
    </BrowserRouter>
  );
}

export default Index;
