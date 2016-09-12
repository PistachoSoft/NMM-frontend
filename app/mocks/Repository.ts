import {Promise} from 'es6-promise';
import {artists} from './Artists';
import {albums} from './Albums';
import {songs} from './Songs';

export default class Repository {
  static findAllArtists() {
    return Promise.resolve({
      artists
    });
  }

  static findAllAlbums() {
    return Promise.resolve({
      albums
    });
  }

  static findAllSongs() {
    return Promise.resolve({
      songs
    });
  }

  static findSongsByAlbum(albumId: number) {
    return Promise.resolve({
      songs: songs.filter((song) => {
        return song.albumId === albumId;
      })
    });
  }

  static findAlbumsByArtist(artistId: number) {
    return Promise.resolve({
      albums: albums.filter((album) => {
        return album.artistId === artistId;
      })
    });
  }

  static findSongsByArtist(artistId: number) {
    return Promise.resolve({
      songs: songs.filter((song) => {
        return song.artistId === artistId;
      })
    });
  }

  static findArtistById(id: number) {
    return Promise.resolve(artists.filter((artist) => {
      return artist.id === id;
    })[0]);
  }

  static findAlbumById(id: number) {
    return Promise.resolve(albums.filter((album) => {
      return album.id === id;
    })[0]);
  }
}
