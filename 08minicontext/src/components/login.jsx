import React , {useState,useContext} from 'react';
function Login() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const {setuser} = useContext(useContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setuser({Username,Password})
    }
    return ( 
        <div>

            <h1>Login</h1>

            <input type="text" 
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Username'/>
            <input type="text" 
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
     );
}

export default Login;