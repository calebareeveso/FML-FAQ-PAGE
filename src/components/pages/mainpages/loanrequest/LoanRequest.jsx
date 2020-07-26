import React, { useReducer } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import './LoanRequest.scss';
import PlusIcon from '../../../assets/images/plus.svg';
import SuccessIcon from '../../../assets/images/Successfully.svg';
import ErrorIcon from '../../../assets/images/Error.svg';
import { Footer } from '../../navigation/navigation';

// Redux
import { connect } from 'react-redux';
import { loanRequest } from '../../../../actions/dataActions';


const initialState = {
    title: '',
    description: '',
    location: '',
    amount: '',
    repaymentPeriod: '',
    repaymentTimes: '', 
    photoUrl: ''
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value,
    };
}

const LoanRequest = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function onChange(e) {
        dispatch({ field: e.target.name, value: e.target.value });
    }
    const { title, description, location, amount, repaymentPeriod, repaymentTimes, photoUrl, loading } = state;

    function onSubmit(e) {
        e.preventDefault();

        const formData = {
            title, 
            description, 
            location, 
            amount, 
            repaymentPeriod, 
            repaymentTimes, 
            photoUrl
        };
        // console.log(formData)
        props.loanRequest(formData);
        
    }

    // function loader() {
    //     this.setState({ loading : true });

    //     setTimeout(() => {
    //         this.setState({ loading: false })
    //     }, 3000)
    // }

    function closeModal() {
        document.getElementById('message').classList.add('inactive');
        document.getElementById('overlay').classList.add('inactive');
        
    }


    return (
        <section>
            {/* <DashboardNavbar /> */}
                {/* if ( props.data.createdRequest ) {
                    
                    <div onClick={closeModal} id="overlay"></div>
                    <div id="message" className='text-center'>
                        <img src={SuccessIcon} alt="" />
                        <p>{props.data.data.message}</p>
                        <Link to='#'>Dashboard</Link>
                    </div>
                } else {
                    <div onClick={closeModal} ></div>
                    <div id="message" className='text-center'>
                        <img src={ErrorIcon} alt="" />
                        <p>{props.data.data.message}</p>
                        <Link to='#'>Try Again</Link>
                    </div>
                } */}
            
            <div className='loan-wrapper'>
                <div>
                <span>Dashboard ></span>
                <span className="create"> Create Loan Request</span>
                </div>

                <form 
                    id="loanRequest" 
                    onSubmit={onSubmit} 
                    method="POST">
                    <div className='top-content'>
                        <div className='upload-wrapper'>
                            <div className='d-flex flex-column align-items-center upload'>
                                <h4>Upload a Picture</h4>
                                <p>Click button to upload a picture of yourself</p>
                                {/* eslint-disable-next-line */}
                                <input 
                                    type="file" 
                                    placeholder="Browse"
                                    name="photoUrl"
                                    id="photoUrl"
                                    onChange={onChange}
                                    value={photoUrl}
                                />
                                <p>File type: Jpg, Png</p>
                                <p>File size: not more than 2MB</p>
                            </div>

                            <div className='d-flex upload-add'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <img src={PlusIcon} alt="" />
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <img src={PlusIcon} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='motivational-wrapper'>
                            <h5>Motivational text</h5>
                            <p>Why do you want this loan? Why is it important to you get the loan? Put all this down in the field</p>

                            <label>Description</label>
                            <textarea placeholder="Description of loan br asked for"></textarea>
                            <p>Not more than 100 words</p>
                        </div>
                    </div>

                    <div className='loan-details-wrapper'>
                        <div className='loan-details-content'>
                            <h5>Loan details</h5>
                            <div className='form-group'>
                                <div>
                                    <label>Title*</label>
                                    <input 
                                        type="text" 
                                        placeholder="Title"
                                        name="title"
                                        id="title"
                                        onChange={onChange}
                                        value={title} 
                                    />
                                </div>

                                <div>
                                    <label>Amount needed*</label>
                                    <input 
                                        type="number" 
                                        placeholder='200, 000' 
                                        name="amount"
                                        id="amount"
                                        onChange={onChange}
                                        value={amount}
                                    />
                                </div>
                            </div>

                            <div>
                                <label>Description</label>
                                <textarea 
                                    placeholder="Description of loan being asked for"
                                    name="description"
                                    id="description"
                                    onChange={onChange}
                                    value={description}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className='payback-wrapper'>
                        <h5>Payback plan</h5>
                        <div className='form-group'>
                            <div>
                                <label>Repayment Period</label>
                                <input 
                                    type="date" 
                                    placeholder="Date"
                                    name="repaymentPeriod"
                                    id="repaymentPeriod"
                                    onChange={onChange}
                                    value={repaymentPeriod}
                                />
                            </div>

                            <div>
                                <label>Repayment Period</label>
                                <input 
                                    type="text" 
                                    placeholder="Lagos, Nigeria"
                                    name="location"
                                    id="location"
                                    onChange={onChange}
                                    value={location}
                                />
                            </div>

                            <div>
                                <label>Repayment Times</label>
                                <input 
                                    type="text" 
                                    placeholder="6" 
                                    name='repaymentTimes'
                                    id='repaymentTimes'
                                    onChange={onChange}
                                    value={repaymentTimes}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='invite-wrapper'>
                        <h5>Invite a recommender</h5>
                        
                        <div className='form-group'>
                            <div>
                                <label>Name</label>
                                <input type="text" placeholder="Recommender"></input>
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" placeholder="recommender@gmail.com"></input>
                            </div>
                        </div>
                    </div>

                    <button 
                        className='btn'
                        type="submit"
                        disabled={loading}>
                            {loading &&  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                            {loading &&  <span>Loading</span>}
                            {!loading &&  <span>Create Request</span>}
                    </button>
                </form>
            </div>
            <Footer />
        </section>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data
});

const mapActionsToProps = {
    loanRequest,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(LoanRequest));