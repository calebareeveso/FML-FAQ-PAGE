import React from 'react';
import './payment.css';

const Payment = () => {
return(
<div className="container cover">
    <div className="form-wrapper ">
        <div id="close">
            <h1>&times;</h1>
        </div>
        <div className="form-content">
            <div className="form-header">
                <h1>Fund this Campaign</h1>
            </div>
            <form action="" method="POST">
                <div className="row">
                    <label for="">Choose Your preferred method of payment</label>
                    <select className="col-md-12">
                    </select>
                    <label for="">How much do you plan to donate to this campaign</label>
                    <input className="col-md-12" type="text" />
                    <div className="split">
                        <div>
                            <label for="">Card Holder Name</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="">Card Number</label>
                            <input type="text" /> 
                        </div>
                    </div>
                    <div className="split">
                        <div>
                            <label for="">Card Expiry Date</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="">CVV</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="but">
                    <button className="btn" type="submit">FUND NOW</button>
                    <p>Secured by Flutterwave</p>
                </div>
            </form>
        </div>
    </div>
</div>

)
}

export default Payment;
