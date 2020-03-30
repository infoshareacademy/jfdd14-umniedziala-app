import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AddNewPlace from './pages/AddNewPlace/AddNewPlace';
import NewPlaceAdded from './pages/NewPlaceAdded/NewPlaceAdded';
import PlaceDetails from './pages/PlaceDetails/PlaceDetails';
import PlaceList from './pages/PlaceList/PlacesList';
import Default from './pages/Default/Default';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <ToastContainer />
        <Switch>       
            <Route exact path="/" component={Home} />
            <Route path="/addnewplace" component={AddNewPlace} />
            <Route path="/placeadded" component={NewPlaceAdded} />
            <Route path="/placedetails" component={PlaceDetails} />
            <Route path="/placelist" component={PlaceList} />
            <Route component={Default} />
        </Switch>
    </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
