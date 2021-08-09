import { useEffect, useState } from "react";
import Axios from "axios"
import {Switch , Route} from "react-router-dom"

import './App.css';
import Home from "./Pages/Home";
import UserDetails from "./Pages/UserDetails";
import CommentPage from "./Pages/CommentPage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  const [users, setUsers] = useState([])
  const [loadUsers, setLoadUsers]=useState(true)
 
  const getUsers = ()=> {
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      setUsers(res.data);
      setLoadUsers(false)
    })
    .catch((err)=>console.log(err))
  }
    
  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className="App">
    <Header />
     <Switch>
       <Route exact path="/" render={()=> <Home users={users} loadUsers={loadUsers} />} />
       <Route path="/users/:id" component={UserDetails}/>
       <Route path="/posts/:id" component={CommentPage}/>
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
