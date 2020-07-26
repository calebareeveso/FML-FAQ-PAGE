import React from 'react';
import './ResetPassword.css';
import '../../../assets/bootstrap.css';
import { Navbar,Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'

const ResetPassword = () => {

    return(
        <ScrollIntoView>
        <Navbar/>
        <div>
      <form>
          <h1>Reset Password</h1>
          <p>Enter your new password and confirm to continue.</p>
          <div>
          <label className="formGroupExampleInput1" >Enter New Password</label>
          <input
              type="password"
              placeholder="Enter new password"
              name="password"
              className="form-control"
              id="password"
            />
            <label className="formGroupExampleInput">Enter New Password</label>
            <input
              type="password"
              placeholder="Re-enter new password"
              name="password"
              className="form-control"
              id="passsword" style={{marginBottom: '10%' }}
            />
            <input
              type="submit"
              className="form-control btn-continue login-btn btn-fml-secondary "
              value="Continue" style={{marginBottom: '15%' ,marginTop: '5%' }}
            />
          </div>
      </form>
        </div>
        
        
        <Footer/>
        </ScrollIntoView>
    )
}

export default ResetPassword;
