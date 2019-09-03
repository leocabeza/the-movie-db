const { v3 } = theMovieDb;

const button = document.getElementById('getPopularMovies');
const inputText = document.getElementById('v3Key');
const list = document.getElementById('popularMovies');

const createImageSource = (url, baseUrl) => baseUrl.concat('w185/', url);

const handleResults = (results, apiConfiguration) => {
  button.toggleAttribute('disabled');
  
  results.forEach((movie) => {
      const listElement = document.createElement('li');
      const image = document.createElement('img');
      const title = document.createElement('h3');
      const overview  = document.createElement('blockquote');
      image.setAttribute('src', createImageSource(movie.poster_path, apiConfiguration.images.base_url))
      image.setAttribute('alt', movie.title);
      title.innerText = movie.title;
      overview.innerText = movie.overview;
      listElement.appendChild(title);
      listElement.appendChild(image);
      listElement.appendChild(overview);
      list.appendChild(listElement);
  });

  list.style.display = 'flex';
};

const handleSubmit= (event) => {
  event.preventDefault();

  const apiv3Key = document.getElementById('v3Key').value;
  const v3Client = v3(apiv3Key);
  button.toggleAttribute('disabled');
  v3Client.configuration.api()
    .then((apiConfiguration) => {
      v3Client.movie.popular()
        .then(({ results }) => {
          handleResults(results, apiConfiguration);
        });
    })
    .catch((error) => {
      console.log('error', error);
      button.toggleAttribute('disabled');
    });
};

document.getElementById('v3-demo-form').addEventListener('submit', handleSubmit);
