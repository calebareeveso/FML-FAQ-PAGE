import React, { useEffect, useState } from 'react';
import './EmailVerification.css';
import { Navbar, Footer } from '../../../navigation/navigation';
import ScrollIntoView from '../../../../router/scrollintoview/ScrollIntoView';
import success from './images/success.png';
import { Link } from 'react-router-dom';
import EmailConfirmationFailure from '../EmailConfirmationFailure/EmailConfirmationFailure';
import Spinner from '../Spinner';
import axios from 'axios';

const EmailVerification = (props) => {
  let baseURL = 'https://api.fundmylaptop.com/users/verification';
  // check id of user

  const { id } = props.match.params;
  // console.log(props.match.params);

  const [confirmEmail, setConfirmEmail] = useState(true);
  const [loading, setLoading] = useState(false);

  console.log(props.location.search);

  // get the id from the url>>>>>
  const query = new URLSearchParams(props.location.search);
  const uid = query.get('uid');
  console.log('uid', uid); //123

  useEffect(() => {
    axios
      .get(`baseURL/api/${id}`)
      .then((data) => {
        setConfirmEmail(false);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <Spinner />;
  } else if (confirmEmail) {
    return (
      <ScrollIntoView>
        <div>
          <Navbar />
          <div className="email-success mb-5 text-center">
            <div className="email-succes-card">
              <div className="email-success-container">
                <img src={success} alt="" />
                <h5>Congratulations</h5>
                <p>
                  {' '}
                  <b>Email Verified!!!</b>{' '}
                </p>

                <Link to="/">
                  <button className="email-success-btn">
                    Continue to Homepage
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </ScrollIntoView>
    );
  } else if (!confirmEmail) {
    return (
      <ScrollIntoView>
        <div>
          <Navbar />
          <EmailConfirmationFailure />;
          <Footer />
        </div>
      </ScrollIntoView>
    );
  }
};

export default EmailVerification;
