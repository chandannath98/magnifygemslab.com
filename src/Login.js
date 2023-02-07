import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase.config";

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
const [activityIndicatorVisible, setActivityIndicatorVisible] = useState(false)

 

  const handleLogin = () => {
        
    setActivityIndicatorVisible(true)
   

    
    signInWithEmailAndPassword(auth, email, password)
        .then((authUser) => {
            
           
           
            setActivityIndicatorVisible(false)
            window.open("/");
            
        })
        .catch(error => {console.log(error) })
};



    return(
      <div id="loginform">
        <FormHeader title="Login" />
        <div>
     <div className="row">
     <label>Username</label>
     <input value={email}  onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your username" type="text" />
   </div>  
     <div className="row">
     <label>Password</label>
     <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" type="password" />
   </div>  
 
   <div id="button" className="row">
    <button onClick={handleLogin}>Login</button>
  </div>
    </div>
      
      </div>
    )
  
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);








