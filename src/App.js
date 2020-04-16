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
// import { UserSignInData } from './contexts/UserSignInData';


function App() {
  const [attractionList, setAttractionList] = useState([]);


  // const UserIdandRefreshToken = {
  //   localId,
  //   email,
  // },
  // UserIdAndRefreshToken = useContext(UserSignInData);


  const attractionData = {
    attractionList,
    setAttractionList
  };

  const API_KEY = 'AIzaSyD2TGrCzks3qlgYeCkAIrqAxdXgM4xJxOo';

  const SIG_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`

  const SignIn = (email, password) => {

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
        const { localId, idToken, email, refreshToken } = data

        localStorage.setItem('appData', JSON.stringify({  idToken, refreshToken }));
        
      
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
          {/* <UserSignInData.Provider > */}
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
          {/* </UserSignInData.Provider> */}
        </AttractionsContext.Provider>
      </SignInToFirebase.Provider>

    </BrowserRouter>
  );

}

export default App;