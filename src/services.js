const ATTRACTIONS_URL = "https://tripcity-app.firebaseio.com/attractions/";

// TODO this file should be remade once we move to firebase
// import attractions from "./fixtures/attractions.json";

// const attractionsKey = "attractions";
// Initially just to have some attractions in localStorage we prefill it
// with the data we have prepared for testing purpose.
// if (localStorage.getItem(attractionsKey) === null) {
//   localStorage.setItem(attractionsKey, JSON.stringify(attractions));
// }

const favoriteAttractionIdsKey = "favoriteAttractionIds";
const getFavoriteAttractionIdsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(favoriteAttractionIdsKey));

// The exported function bodies should be remade once we move to firebase
// Every single one of them returns a promise because in the end we are
// going to get the data asynchronously from server

// GET ATTRACTIONS
export const getAttractions = () =>
  fetch(ATTRACTIONS_URL + ".json").then((response) => response.json());

// CONVERT ATTRACTIONS OBJECT TO ARRAY
export const getAttractionsAsArray = () =>
  getAttractions().then((attractions) =>
    Object.entries(attractions || {})
      .map(([id, attraction]) => ({
        id,
        ...attraction,
      }))
      .sort((a, b) => (a.id < b.id ? -1 : 1))
  );

export const getAttractionById = (id) =>
  getAttractions().then((attractions) => attractions[id] || null);

export const getFavoriteAttractionIds = () =>
  Promise.resolve(getFavoriteAttractionIdsFromLocalStorage() || null);

// ADD NEW ATTRACTION
export const addAttraction = (attraction) =>
  fetch(ATTRACTIONS_URL + ".json", {
    method: "POST",
    body: JSON.stringify(attraction),
  });

export const toggleFavorite = (attractionId) =>
  getFavoriteAttractionIds().then((attractionIds) => {
    if (attractionIds === null) {
      const data = JSON.stringify({ [attractionId]: true });
      localStorage.setItem(favoriteAttractionIdsKey, data);
      return;
    }

    if (attractionIds[attractionId] === true) {
      delete attractionIds[attractionId];
      const data = JSON.stringify(attractionIds);
      localStorage.setItem(favoriteAttractionIdsKey, data);
      return;
    }

    attractionIds[attractionId] = true;
    const data = JSON.stringify(attractionIds);
    localStorage.setItem(favoriteAttractionIdsKey, data);
  });

export const getFavoriteAttractionsAsArray = () =>
  Promise.all([
    getAttractionsAsArray(),
    getFavoriteAttractionIds(),
  ]).then(([attractions, favoriteIds]) =>
    attractions.filter(
      (attraction) =>
        favoriteIds !== null && favoriteIds[attraction.id] === true
    )
  );
