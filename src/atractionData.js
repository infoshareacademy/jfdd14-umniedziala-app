import data from './data';

const atractionData = JSON.parse(localStorage.getItem('atractionData')) || data;

export default atractionData ;