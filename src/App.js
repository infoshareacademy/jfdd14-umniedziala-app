import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AddNewPlace from './pages/AddNewPlace/AddNewPlace';
import PlaceDetails from './pages/PlaceDetails/PlaceDetails';
import PlaceList from './pages/PlaceList/PlacesList';
import FavouriteList from './pages/FavouriteList/FavouriteList';
import Default from './pages/Default/Default';
import 'semantic-ui-css/semantic.min.css';
import { ToastContainer } from 'react-toastify';
import { getAttractionsAsArray } from './services';
import { AttractionsContext } from './contexts/AttractionsContext';

function App () {
  const [attractionList, setAttractionList] = useState([]);

  const attractionData = {
    attractionList,
    setAttractionList
  };

  useEffect(() => {
    getAttractionsAsArray().then(attractions => setAttractionList(attractions))
  }, []);
  
  return(
    <BrowserRouter>
      <AttractionsContext.Provider value={attractionData}>
        <Header />
        <ToastContainer />
        <Switch>       
            <Route exact path="/" component={Home} />
            <Route path="/addnewplace" component={AddNewPlace} />
            <Route path="/placedetails/:id" component={PlaceDetails} />
            <Route path="/placelist" component={PlaceList} />
            <Route path="/myfavourites" component={FavouriteList} />
            <Route component={Default} />
        </Switch>
      </AttractionsContext.Provider>
      
    </BrowserRouter>
  );
  
}

export default App;