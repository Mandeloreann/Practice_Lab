let apiUrl
const apiUrls = {
  production: 'https://sei-library-api.herokuapp.com/books',
  development: 'https://sei-library-api.herokuapp.com/books'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
