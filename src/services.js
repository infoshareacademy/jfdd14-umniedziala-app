const ATTRACTIONS_URL = "https://tripcity-app.firebaseio.com/attractions/";

const userId = "jYGN6TYDxWR0FgqrVTYdjvJoA9M4";

const USER_ATTRACTIONS_URL =
  `https://tripcity-app.firebaseio.com/users/${userId}/favourites.json`;

const ATTRACTION_ID_PATH_URL = `https://tripcity-app.firebaseio.com/users/${userId}/favourites`;

// const favoriteAttractionIdsKey = "favoriteAttractionIds";

/* 
const getFavoriteAttractionIdsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(favoriteAttractionIdsKey));
 */

export const getFavoriteAttractionIdsFromFirebase = (url) =>
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      return data;
    });

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

export const getFavoriteAttractionIds = (urlUserID, urlAttractionId) =>
  getFavoriteAttractionIdsFromFirebase(USER_ATTRACTIONS_URL) || null;

export const addAttraction = (attraction) =>
  fetch(ATTRACTIONS_URL + ".json", {
    method: "POST",
    body: JSON.stringify(attraction),
  });

export const toggleFavorite = (attractionId) =>
  getFavoriteAttractionIds().then((attractionIds, url) => {
    if (attractionIds === null) {
      const data = JSON.stringify({ [attractionId]: true });
      fetch(USER_ATTRACTIONS_URL, {
        method: "PATCH",
        body: data,
      });
      return;
    }

    if (attractionIds[attractionId] === true) {
      delete attractionIds[attractionId];
      const data = JSON.stringify(attractionIds);
      fetch(ATTRACTION_ID_PATH_URL + `/${attractionId}.json`, {
        method: "DELETE",
        body: data,
      });
      return;
    }

    attractionIds[attractionId] = true;
    fetch(USER_ATTRACTIONS_URL, {
      method: "PATCH",
      body: JSON.stringify(attractionIds),
    });
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
