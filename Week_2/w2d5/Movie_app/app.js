const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const path  = require('path')

const app = express();
const PORT = 3000;


app.use(express.static('public'));

app.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname,'','index.html'))
})
app.get('/api/movies/popular', (req, res) => {
  const apiKey = 'e53976953a4d9a77db13158d7eb6e520';
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.get('/api/movies/top_rated', (req, res) => {
  const apiKey = 'e53976953a4d9a77db13158d7eb6e520';
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


