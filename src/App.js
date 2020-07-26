import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/router/protectedroute/ProtectedRoute';
import pageurl from './components/router/url/pageurl';
import {
	Login,
	SignUp,
	Terms,
	PrivacyPage,
	FAQ,
	LoanRequest,
	LandingPage,
	AboutUs,
	Page404,
	Payment,
	Compaign,
	Blog,
	EmailVerification,
	EmailConfirmationFailure,
	EmailConfirmation,
} from './components/pages/mainpages';

import {
	FundeeDashboard,
	AdminDashboard,
	DefaultDashboard,
	InvestorDashboard,
} from './components/pages/dashboards';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path={pageurl.LANDING_PAGE_URL} component={LandingPage} />

				<Route exact path={pageurl.LOGIN_PAGE_URL} component={Login} />

				<Route exact path={pageurl.REGISTER_PAGE_URL} component={SignUp} />

				<Route exact path={pageurl.TC_PAGE_URL} component={Terms} />

				<Route exact path={pageurl.PAYMENT_PAGE_URL} component={Payment} />

				<Route exact path={pageurl.FAQ_PAGE_URL} component={FAQ} />

				<Route exact path={pageurl.ABOUT_US_PAGE_URL} component={AboutUs} />

				<Route exact path={pageurl.BLOG_PAGE_URL} component={Blog} />

				<Route
					exact
					path={pageurl.PRIVACY_POLICY_PAGE_URL}
					component={PrivacyPage}
				/>

				

				<Route
					exact
					path={pageurl.EMAIL_VERIFICATION_URL}
					component={EmailVerification}
				/>
				<Route
					exact
					path={pageurl.EMAIL_CONFIRMATION_FAILURE_URL}
					component={EmailConfirmationFailure}
				/>

				<Route
					exact
					path={pageurl.EMAIL_CONFIRMATION_URL}
					component={EmailConfirmation}
				/>

				<ProtectedRoute
					exact
					path={pageurl.LOAN_REQUEST_PAGE_URL}
					component={LoanRequest}
				/>

				<ProtectedRoute
					exact
					path={pageurl.INVESTOR_DASHBOARD}
					component={InvestorDashboard}
				/>

				<ProtectedRoute
					exact
					path={pageurl.FUNDEE_DASHBOARD_PAGE_URL}
					component={FundeeDashboard}
				/>

				<ProtectedRoute
					exact
					path={pageurl.COMPAIGN_PAGE_URL}
					component={Compaign}
				/>

				<ProtectedRoute
					exact
					path={pageurl.ADMIN_DASHBOARD_PAGE_URL}
					component={AdminDashboard}
				/>

				<ProtectedRoute
					exact
					path={pageurl.DEFAULT_DASHBOARD_PAGE_URL}
					component={DefaultDashboard}
				/>

				

				<Route exact component={Page404} />

				{/* <ProtectedRoute exact path={pageurl.USER_RECOMMENDATIONS} component={Recommendations} /> */}

				<ProtectedRoute
					exact
					path={pageurl.FUNDEE_DASHBOARD_PAGE_URL}
					component={FundeeDashboard}
				/>

				<Route component={Page404} />
			</Switch>
		</Router>
	);
}

export default App;
