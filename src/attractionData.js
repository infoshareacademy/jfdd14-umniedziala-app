import data from './data';

const attractionData = JSON.parse(localStorage.getItem('attractionData')) || data;

export default attractionData ;