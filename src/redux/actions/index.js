import {  SET_USERS, SET_BARS, SET_HIGHWAY, SET_CAVES } from "../constants";
import api from "../../middleware/api";

   
function setUsers(users) {
    return {
        type: SET_USERS,   
        payload:users
    };
}

export function getUsers() {

    return dispatch => {
        return api.getData("api/users")
        .then(( response ) => {

            console.log("response",response)
            dispatch(setUsers(response.data || []));            
            
        })       
    }
}


function setBars(bars) {
    return {
        type: SET_BARS,   
        payload:bars
    };
}

export function getBars() {

    return dispatch => {
        return api.getData("api/bars")
        .then(( response ) => {

            dispatch(setBars(response.data || []));            
            
        })       
    }
}


function setHighWay(highway) {
    return {
        type: SET_HIGHWAY,   
        payload:highway
    };
}

export function getHighWay() {

    return dispatch => {
        return api.getData("api/highwayStats")
        .then(( response ) => {

            dispatch(setHighWay(response.data || []));            
            
        })       
    }
}


function setCaves(caves) {
    return {
        type: SET_CAVES,   
        payload:caves
    };
}

export function getCaves() {

    return dispatch => {
        return api.getData("api/caveStats")
        .then(( response ) => {

            dispatch(setCaves(response.data || []));            
            
        })       
    }
}



  
  
  