const API_KEY = 'AIzaSyD2TGrCzks3qlgYeCkAIrqAxdXgM4xJxOo';

const SIG_IN_URL = `https://tripcity-app.firebaseio.com/v1/accounts:signInWithPassword?key=${API_KEY}`


export const SigIn = (email, password) => {

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
            const { localId, idToken, email } = data

            localStorage.setItem('localId', localId)
            localStorage.setItem('idToken', idToken)
            localStorage.setItem('email', email)

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


