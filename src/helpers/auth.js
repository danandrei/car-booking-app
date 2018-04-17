import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

export const customerIsAuthenticated = connectedAuthWrapper({
  authenticatedSelector: state => state.user.accessToken !== null && state.user.role === 'customer',
  wrapperDisplayName: 'CustomerIsAuthenticated',
});

export const customerIsNotAuthenticated = connectedAuthWrapper({
  authenticatedSelector: state => state.user.accessToken === null,
  wrapperDisplayName: 'CustomerIsNotAuthenticated',
});

export const customerIsNotAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.user.accessToken !== null && state.user.role === 'customer',
  wrapperDisplayName: 'CustomerIsNotAuthenticated',
  redirectPath: '/',
  allowRedirectBack: false,
});

export const adminIsAuthenticated = connectedAuthWrapper({
  authenticatedSelector: state => state.user.accessToken !== null && state.user.role === 'admin',
  wrapperDisplayName: 'AdminIsAuthenticated',
});

export const adminIsNotAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.user.accessToken !== null && state.user.role === 'admin',
  wrapperDisplayName: 'AdminIsNotAuthenticated',
  redirectPath: '/',
  allowRedirectBack: false,
});
