import './signup.css';
import { Link } from 'react-router-dom';

const SignupUi = () => {
  return (
   <div className='main-signup-div'>
     <div className='signup-info'>
       <h1>Join BLog Socials Today!</h1>
     </div>
     <form>
     <div className='signup-container'>
       <div className='signup-top-input-div'>
	  <div className='signup-details-div'>
            <label>Username</label>
	    <input type='text' required/>
	  </div>
	  <div className='signup-details-div'>
            <label>Email</label>
	    <input type='text' required/>
	  </div>
	  <div className='signup-details-div'>
            <label>Address</label>
	    <input type='text' required/>
	  </div>
	  <div className='signup-details-div'>
            <label>Bio</label>
	    <input type='text' required/>
	  </div>
       </div>
       <div className='signup-bottom-input-div'>
	  <div className='signup-password-div'>
            <label>Password</label>
	    <input type='text' required/>
	  </div>
	  <div className='signup-password-div'>
            <label>Confirm Password</label>
	    <input type='text' required/>
	  </div>
       </div>
       <button type='submit'>Signup</button>
       <p>Already have an account? <Link to='/login'><span>login</span></Link></p>
     </div>
     </form>
   </div>
  );
}
export default SignupUi;
