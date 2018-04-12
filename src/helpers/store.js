import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { apiConstants } from '../helpers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const loggerMiddleware = createLogger();

// axios middleware config
const axiosClient = axios.create({
  baseURL: apiConstants.HOST,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware,
    thunkMiddleware,
    axiosMiddleware(axiosClient, {
      interceptors: {
        returnRejectedPromiseOnError: true,
        request: [
          ({getState}, req) => {
            const state = getState();

            if (state.user && state.user.accessToken) {
              req.headers.Authorization = 'Bearer ' + state.user.accessToken;
            }

            return req
          }
        ]
      }
    }),
  )
);
