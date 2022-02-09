const apiConfig = {
  baseUrl: "http://api.themoviedb.org/3/",
  apiKey: "d1930fa81cacb8565fd0fe2c7ac868df",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,

};

export default apiConfig