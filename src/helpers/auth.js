import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
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
  redirectPath: '/landing',
  allowRedirectBack: false,
});

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.user.accessToken === null,
  wrapperDisplayName: 'UserIsAuthenticated',
  redirectPath: '/',
});
