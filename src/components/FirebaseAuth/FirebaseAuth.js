import React from 'react';
import { useContext } from 'react';


const API_KEY = 'AIzaSyD2TGrCzks3qlgYeCkAIrqAxdXgM4xJxOo';

const SIG_IN_URL = `https://tripcity-app.firebaseio.com/v1/accounts:signInWithPassword?key=${API_KEY}`
const SAVE_USERS_URL = `https://tripcity-app.firebaseio.com/users`

export const SignIn = (email, password) => {

    const credentials = {
        email,
        password,
        returnSecureToken: true,
    };

    return fetch(
        SIG_IN_URL,
        {
            method: 'POST',
            body: JSON.stringify(credentials)
        }
    )
        .then((response) => {
            if (response.ok) {
                return response
            }
            return Promise.reject(response)
        })
        .then((reponse) => response.json())
        .then((data) => {
            // const { idToken, email, refreshToken, localId } = data
            JSON.stringify(data)
            localStorage.setItem('dataSrata',data)

            // localStorage.setItem('idToken', data.idToken)
            // localStorage.setItem('email', data.email)
            // localStorage.setItem('refreshToken', data.refreshToken)
            // localStorage.setItem('localId', data.localId)

            return data
        })
       
}

export const fetchWithToken = (url, options) => {

    return fetch(
      // @TODO this will not work when url param will have query string
      url + '?auth=' + localStorage.getItem('idToken'),
      options
    )
      .then((response) => {
        if (response.ok) {
          return response
        }
  
        return Promise.reject(response)
      })
  
  }
  
  export const isTokenInStorage = () => {
    const token = localStorage.getItem('idToken')
  
    return token ? true : false
  }
  
  export const logOut = () => {
    localStorage.removeItem('localId')
    localStorage.removeItem('idToken')
    localStorage.removeItem('email')
  }


