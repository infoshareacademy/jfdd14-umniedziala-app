import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AddNewPlace from './pages/AddNewPlace/AddNewPlace';
import PlaceDetails from './pages/PlaceDetails/PlaceDetails';
import PlaceList from './pages/PlaceList/PlacesList';
import FavouriteList from './pages/FavouriteList/FavouriteList';
import Default from './pages/Default/Default';
import SignInPage from './pages/SignIn/SignInPage';
import Login from './pages/Login/Login';
import 'semantic-ui-css/semantic.min.css';
import { ToastContainer } from 'react-toastify';
import { getAttractionsAsArray } from './services';
import { AttractionsContext } from './contexts/AttractionsContext';
import { SignInToFirebase } from './contexts/SignInToFirebase';
import { LoginToFirebase } from './contexts/LoginToFirebase';

function App() {
  const [attractionList, setAttractionList] = useState([]);

  const attractionData = {
    attractionList,
    setAttractionList
  };

  const API_KEY = 'AIzaSyD2TGrCzks3qlgYeCkAIrqAxdXgM4xJxOo';

  const SIG_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`

  const SignIn = (email, password) => {
    console.log( 'email podawany do funkcji SignIn',email, 'pass podawany do funkcji signIn' ,password)
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
      .then((response) => response.json())
      .then((data) => {
        const { localId, idToken, email } = data
console.log('dane przychodzące z funkcji SignIn', localId, idToken, email);


        localStorage.setItem('localId', localId)
        localStorage.setItem('idToken', idToken)
        localStorage.setItem('email', email)

        return data
      })

  }

  useEffect(() => {
    getAttractionsAsArray().then(attractions => setAttractionList(attractions))
  }, []);

  return (
    <BrowserRouter>
      <SignInToFirebase.Provider value={SignIn}>
        <AttractionsContext.Provider value={attractionData}>
          <Header />
          <ToastContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addnewplace" component={AddNewPlace} />
            <Route path="/placedetails/:id" component={PlaceDetails} />
            <Route path="/placelist" component={PlaceList} />
            <Route path="/myfavourites" component={FavouriteList} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/login" component={Login} />
            <Route component={Default} />
          </Switch>
        </AttractionsContext.Provider>
      </SignInToFirebase.Provider>

    </BrowserRouter>
  );

}

export default App;