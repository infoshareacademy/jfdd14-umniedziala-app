const ATTRACTIONS_URL = "https://tripcity-app.firebaseio.com/attractions/";
const API_KEY = "AIzaSyD2TGrCzks3qlgYeCkAIrqAxdXgM4xJxOo";
const REGISTER_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const LOG_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

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

export const register = (email, password) => {
  const credentials = {
    email,
    password,
    returnSecureToken: true,
  };
  return fetch(REGISTER_URL, {
    method: "POST",
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      return Promise.reject(response);
    })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const logIn = (email, password) => {
  const credentials = {
    email,
    password,
    returnSecureToken: true,
  };
  return fetch(LOG_IN_URL, {
    method: "POST",
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      return Promise.reject(response);
    })
    .then((response) => response.json())
    .then((data) => {
      const { idToken, refreshToken } = data;
      localStorage.setItem(
        "tripcityUser",
        JSON.stringify({ idToken, refreshToken })
      );
      return data;
    });
};

export const logOut = () => {
  localStorage.removeItem("tripcityUser");
};

// {
//   "rules": {
//     ".read": "auth !== null",
//     ".write": "false",
//     "messages": {
//       "$messageKey": {
//         ".write":  "auth !== null && (!data.exists() || (data.child('uuid').val() === auth.uid))"
//       }
//     }
//   }
// }
// {
//   "rules": {
//     "users": {
//       "$uid": {
//         ".read": "$uid === auth.uid",
//         ".write": "$uid === auth.uid"
//       }
//     }
//   }
// }