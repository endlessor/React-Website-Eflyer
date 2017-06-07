/* eslint-disable no-unused-vars */
import { CALL_API } from '../middleware/api';

// ======================================================================================
/**
 * loadFlyer API action
 */
export const LOAD_FLYER_REQUEST = 'LOAD_FLYER_REQUEST';
export const LOAD_FLYER_SUCCESS = 'LOAD_FLYER_SUCCESS';
export const LOAD_FLYER_FAILURE = 'LOAD_FLYER_FAILURE';

function fetchLoadFlyer() {
  return {
    [CALL_API]: {
      types: [LOAD_FLYER_REQUEST, LOAD_FLYER_SUCCESS, LOAD_FLYER_FAILURE],
      endpoint: '/flyers/autosave',
      method: 'get'
    }
  };
}

export function loadFlyer() {
  return (dispatch, getState) => {
    return dispatch(fetchLoadFlyer());
  };
}

// ======================================================================================
/**
 * createFlyer API action
 */
export const CREATE_FLYER_REQUEST = 'CREATE_FLYER_REQUEST';
export const CREATE_FLYER_SUCCESS = 'CREATE_FLYER_SUCCESS';
export const CREATE_FLYER_FAILURE = 'CREATE_FLYER_FAILURE';

function fetchCreateFlyer(data, successRedirect) {
  return {
    [CALL_API]: {
      types: [CREATE_FLYER_REQUEST, CREATE_FLYER_SUCCESS, CREATE_FLYER_FAILURE],
      endpoint: '/flyers/autosave',
      method: 'post',
      data,
      successRedirect
    }
  };
}

export function createFlyer(data, successRedirect) {
  return (dispatch, getState) => {
    return dispatch(fetchCreateFlyer(data, successRedirect));
  };
}

// ======================================================================================
/**
 * saveFlyer API action
 */
export const SAVE_FLYER_REQUEST = 'SAVE_FLYER_REQUEST';
export const SAVE_FLYER_SUCCESS = 'SAVE_FLYER_SUCCESS';
export const SAVE_FLYER_FAILURE = 'SAVE_FLYER_FAILURE';

function fetchSaveFlyer(data, successRedirect) {
  return {
    [CALL_API]: {
      types: [SAVE_FLYER_REQUEST, SAVE_FLYER_SUCCESS, SAVE_FLYER_FAILURE],
      endpoint: '/flyers/autosave',
      method: 'put',
      data,
      successRedirect
    }
  };
}

export function saveFlyer(data, successRedirect) {
  return (dispatch, getState) => {
    return dispatch(fetchSaveFlyer(data, successRedirect));
  };
}

// ======================================================================================
/**
 * Flyer UI change action
 */
export const UI_CHANGE_FLYER = 'UI_CHANGE_FLYER';

export function changeFlyer(change) {
  return {
    type: UI_CHANGE_FLYER,
    change
  };
}
