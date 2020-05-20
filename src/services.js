const ATTRACTIONS_URL = "https://tripcity-app.firebaseio.com/attractions/";
const API_KEY = "AIzaSyD2TGrCzks3qlgYeCkAIrqAxdXgM4xJxOo";
const REGISTER_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const LOG_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

// firebase rules:
// {
//   "rules": {
//     "attractions": {
//       ".read": true,
//     	".write": "auth != null"
//     },
//     "users": {
//       "$uid": {
//         ".read": "$uid === auth.uid",
//         ".write": "$uid === auth.uid"
//       }
//     }
//   }
// }

export const getFavoriteAttractionIdsFromFirebase = (userId) => {
  const idToken = JSON.parse(localStorage.getItem("tripcityUser")).idToken;
  return fetch(
    `https://tripcity-app.firebaseio.com/users/${userId}/favourites.json?auth=${idToken}`
  ).then((response) => response.json());
};

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

export const getFavoriteAttractionIds = (userId) =>
  getFavoriteAttractionIdsFromFirebase(userId).then(
    (attractions) => attractions || null
  );

export const addAttraction = (attraction) => {
  const idToken = JSON.parse(localStorage.getItem("tripcityUser")).idToken;
  return fetch(ATTRACTIONS_URL + ".json?auth=" + idToken, {
    method: "POST",
    body: JSON.stringify(attraction),
  });
};

export const toggleFavorite = (attractionId, userId) => {
  const idToken = JSON.parse(localStorage.getItem("tripcityUser")).idToken;
  return getFavoriteAttractionIds(userId).then((attractionIds) => {
    if (attractionIds === null) {
      const data = JSON.stringify({ [attractionId]: true });
      return fetch(
        `https://tripcity-app.firebaseio.com/users/${userId}/favourites.json?auth=${idToken}`,
        {
          method: "PUT",
          body: data,
        }
      );
    }
    if (attractionIds[attractionId] === true) {
      delete attractionIds[attractionId];
      return fetch(
        `https://tripcity-app.firebaseio.com/users/${userId}/favourites/${attractionId}.json?auth=${idToken}`,
        {
          method: "DELETE",
        }
      );
    }
    attractionIds[attractionId] = true;
    const data = JSON.stringify(attractionIds);
    return fetch(
      `https://tripcity-app.firebaseio.com/users/${userId}/favourites.json?auth=${idToken}`,
      {
        method: "PUT",
        body: data,
      }
    );
  });
};

export const getFavoriteAttractionsAsArray = (userId) =>
  Promise.all([
    getAttractionsAsArray(),
    getFavoriteAttractionIds(userId),
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
