import React from 'react';
import styles from './recommendations.module.css';
import { Link } from 'react-router-dom';
import Breadcrumb from '../user-profile/breadcrumb/breadcrumb';
import trusteeImg1 from '../../../assets/images/image 8.png';
import trusteeImg2 from '../../../assets/images/image 12.png';
import trusteeImg3 from '../../../assets/images/image 9.png';
import RecommendBox from '../user-profile/recommend-box/recommend-box';
import { Navbar, Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';

const breadcrumbLinks = [
    {link: '/user-profile', label: 'Profile'},
    {link: '/recommendations', label: 'Recommendations'}
]

const trustees = [
    {image: trusteeImg1, name: 'Melissa Ryan', message: `“John is a trustworthy person and He has never for once owned a single penny”`},
    {image: trusteeImg2, name: 'Aliyah Parker', message: `“John is a trustworthy person and He has never for once owned a single penny”`},
    {image: trusteeImg3, name: 'Alicia Knowles', message: `“John is a trustworthy person and He has never for once owned a single penny”`},
    {image: trusteeImg1, name: 'Melissa Ryan', message: `“John is a trustworthy person and He has never for once owned a single penny”`},
    {image: trusteeImg2, name: 'Aliyah Parker', message: `“John is a trustworthy person and He has never for once owned a single penny”`},
    {image: trusteeImg3, name: 'Alicia Knowles', message: `“John is a trustworthy person and He has never for once owned a single penny”`},
    {image: trusteeImg1, name: 'Melissa Ryan', message: `“John is a trustworthy person and He has never for once owned a single penny”`},
    {image: trusteeImg2, name: 'Aliyah Parker', message: `“John is a trustworthy person and He has never for once owned a single penny”`},
    {image: trusteeImg3, name: 'Alicia Knowles', message: `“John is a trustworthy person and He has never for once owned a single penny”`},
    {image: trusteeImg1, name: 'Melissa Ryan', message: `“John is a trustworthy person and He has never for once owned a single penny”`},
    {image: trusteeImg2, name: 'Aliyah Parker', message: `“John is a trustworthy person and He has never for once owned a single penny”`},
    {image: trusteeImg3, name: 'Alicia Knowles', message: `“John is a trustworthy person and He has never for once owned a single penny”`}
]

const Recommendations = (props) => {
    return(
        <ScrollIntoView>
            <React.Fragment>
                <Navbar />
                <div className={['container', styles.Recommendations].join(' ')}>
                <Breadcrumb>{breadcrumbLinks}</Breadcrumb>

                <div>
                    <button className={["btn", "d-block", "d-md-none", "mb-5", styles.MobileBtn].join(' ')}>
                        <Link to="/user-profile">
                            <svg width=".9em" height=".9em" viewBox="0 0 16 16" className="bi mb-1 mr-2 bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            Back
                        </Link>
                    </button>
                    <h2 className="font-weight-bold">Recommendations (12)</h2>
                    <div className="row">
                        { trustees.map((trustee, idx) => {
                            return (
                                <div className="col-md-4 col-6 px-2 mb-3" key={`trustee_${idx}`}>
                                    <RecommendBox key={`trustee_${idx}`} trusteeName={trustee.name} trusteePic={trustee.image}>
                                        {trustee.message}
                                    </RecommendBox>
                                </div>
                            )
                        })}
                    </div>
                </div>       
            </div>
            <Footer />
            </React.Fragment>
        </ScrollIntoView>
    );
}

export default Recommendations;