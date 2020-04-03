import data from './data';

const attractionData = JSON.parse(localStorage.getItem('attracttionData')) || data;

export default attractionData ;