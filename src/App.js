import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AddNewPlace from './pages/AddNewPlace/AddNewPlace';
import PlaceDetails from './pages/PlaceDetails/PlaceDetails';
import PlaceList from './pages/PlaceList/PlacesList';
import FavouriteList from './pages/FavouriteList/FavouriteList';
import Default from './pages/Default/Default';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import 'semantic-ui-css/semantic.min.css';
import { ToastContainer } from 'react-toastify';
import { getAttractionsAsArray } from './services';
import { AttractionsContext } from './contexts/AttractionsContext';
import { UserContext } from './contexts/UserContext';
import Auth from './components/Auth.js/Auth';


function App() {
  const [attractionList, setAttractionList] = useState([]);
  const [userId, setUserId] = useState("");

  const attractionData = {
    attractionList,
    setAttractionList
  };

  const userData = {
    userId,
    setUserId
  };

  useEffect(() => {
    getAttractionsAsArray().then(attractions => setAttractionList(attractions))
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={userData}>
        <AttractionsContext.Provider value={attractionData}>
            <Header />
            <ToastContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/placedetails/:id" component={PlaceDetails} />
              <Route path="/placelist" component={PlaceList} />
              <Route path="/myfavourites" component={(props) => <Auth><FavouriteList {...props}/></Auth>} />
              <Route path="/addnewplace" component={(props) => <Auth><AddNewPlace {...props}/></Auth>} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route component={Default} />
            </Switch>
        </AttractionsContext.Provider>
      </UserContext.Provider>

    </BrowserRouter>
  );

}

export default App;