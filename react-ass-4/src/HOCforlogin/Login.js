import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const login = () => {
    localStorage.setItem('login', true);
    navigate('/')

  }
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem('login');
    if (login) {
      navigate('/')
    }
  });
  return (
    <div className="container" style={{ margin: "30px" }}>
      <div classNameName="Form-control">
        {/* Username : <input type="text" /><br/><br/>
      Password : <input type="text"/> */}
        <div className="mb-1">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{ boxSizing: "10px" }} />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleFormControlTextarea1" rows="3" />
          <br />

          <button type="submit" class="btn btn-primary btn-sm" onClick={login}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login
