const express = require('express'),
  app = express();

const artists = require('./mocks/artists');
const albums = require('./mocks/albums');
const songs = require('./mocks/songs');

app.get('/artists', (req, res) => {
  res.send({
    artists
  });
});

app.get('/artists/:id', (req, res) => {
  const id = +req.params.id;

  res.send(artists.filter((artist) => {
    return artist.id === id;
  })[0]);
});

app.get('/artists/:id/albums', (req, res) => {
  const artistId = +req.params.id;

  res.send({
    albums: albums.filter((album) => {
      return album.artistId === artistId;
    })
  });
});

app.get('/artists/:id/songs', (req, res) => {
  const artistId = +req.params.id;

  res.send({
    songs: songs.filter((song) => {
      return song.artistId === artistId;
    })
  });
});

app.get('/albums', (req, res) => {
  res.send({
    albums
  });
});

app.get('/albums/:id', (req, res) => {
  const id = +req.params.id;

  res.send(albums.filter((album) => {
    return album.id === id;
  })[0]);
});

app.get('/albums/:id/songs', (req, res) => {
  const albumId = +req.params.id;

  res.send({
    songs: songs.filter((song) => {
      return song.albumId === albumId;
    })
  });
});

app.get('/songs', (req, res) => {
  res.send({
    songs
  });
});

app.listen(9000);
