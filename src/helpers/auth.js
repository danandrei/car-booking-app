import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

export const userIsAuthenticated = connectedAuthWrapper({
  authenticatedSelector: state => state.user.accessToken !== null,
  wrapperDisplayName: 'UserIsAuthenticated',
});

export const userIsNotAuthenticated = connectedAuthWrapper({
  authenticatedSelector: state => state.user.accessToken === null,
  wrapperDisplayName: 'UserIsNotAuthenticated',
});

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.user.accessToken !== null,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  redirectPath: '/',
  allowRedirectBack: false,
});

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.user.accessToken === null,
  wrapperDisplayName: 'UserIsAuthenticated',
  redirectPath: '/',
});

export const adminIsAuthenticated = connectedAuthWrapper({
  authenticatedSelector: state => state.user.data !== null && state.user.data.role === 'admin',
  wrapperDisplayName: 'AdminIsAuthenticated',
});


export const adminIsNotAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.user.data !== null && state.user.data.role === 'admin',
  wrapperDisplayName: 'AdminIsNotAuthenticated',
  redirectPath: '/',
  allowRedirectBack: false,
});
