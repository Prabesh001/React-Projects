import { useState } from "react";
import './styles.css'

function GenerateRandomPassword(){
  let [password, setPassword] = useState('')
  const [num, setNum] = useState(8)
  
  const chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*-_=+0123456789'
  
  function handleGetPasswordLength(event){
    let newNum = parseInt(event.target.value);
    
    if(newNum>20){
      setNum(newNum = newNum %21);
    }
    if(newNum==0){
      setNum( newNum = newNum + 20)
    }
    else{
      setNum(newNum)
    }
  }
  function handleGeneratePassword(){
    
    password=''
    for(let i=1;i<=num;i++){
      const randomIndex = Math.random();
      password+=chars.charAt(randomIndex*chars.length);
    }
    setPassword(password)
    localStorage.setItem('password', password)
  }
  
  return(
    <div className="container">
      <div>
        <h1>Generate Random Password</h1>
      </div>
      <input type="number" value={num} onChange={()=>handleGetPasswordLength(event)}/>
      <span className="warning">*Password cannot be longer than 20 characters*</span>
      <button onClick={handleGeneratePassword}>Generate</button><br />
      <div>
        <div>Your Password: </div>
      </div>
      <div className="password">{password}</div>
    </div>
  );
}

export default GenerateRandomPassword
