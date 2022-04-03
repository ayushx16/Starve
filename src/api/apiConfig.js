const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f243f3e88c451c34fb16f390c6e75495',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;