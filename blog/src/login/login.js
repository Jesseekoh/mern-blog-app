import './login.css';
import { Link } from 'react-router-dom';

const LoginUi = () => {
  return (
   <div className='main-signup-div'>
     <div className='signup-info'>
       <h1>Login to BLog Socials</h1>
     </div>
     <form>
     <div className='signup-container'>
       <div className='signup-top-input-div'>
	  <div className='signup-details-div'>
            <label>Email</label>
	    <input type='text' required/>
	  </div>
	  <div className='signup-details-div'>
            <label>Password</label>
	    <input type='text' required/>
	  </div>
       </div>
       <button type='submit'>Login</button>
       <p>Dont have an account? <Link to='/signup'><span>sign up</span></Link></p>
     </div>
     </form>
   </div>
  );
}
export default LoginUi;
