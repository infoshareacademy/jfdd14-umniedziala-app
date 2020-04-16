const ATTRACTIONS_URL = "https://tripcity-app.firebaseio.com/attractions/";

const API_KEY = 'AIzaSyD2TGrCzks3qlgYeCkAIrqAxdXgM4xJxOo';

const SIG_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`


const favoriteAttractionIdsKey = "favoriteAttractionIds";
const getFavoriteAttractionIdsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(favoriteAttractionIdsKey));

export const getAttractions = () =>
  fetch(ATTRACTIONS_URL + ".json").then((response) => response.json());

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

export const SignIn = (email, password) => {

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