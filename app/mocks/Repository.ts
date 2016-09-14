import {Promise} from 'es6-promise';
import {artists} from './Artists';
import {albums} from './Albums';
import {songs} from './Songs';

export default class Repository {
  public static findAllArtists() {
    return Promise.resolve({
      artists
    });
  }

  public static findAllAlbums() {
    return Promise.resolve({
      albums
    });
  }

  public static findAllSongs() {
    return Promise.resolve({
      songs
    });
  }

  public static findSongsByAlbum(albumId: number) {
    return Promise.resolve({
      songs: songs.filter((song) => {
        return song.albumId === albumId;
      })
    });
  }

  public static findAlbumsByArtist(artistId: number) {
    return Promise.resolve({
      albums: albums.filter((album) => {
        return album.artistId === artistId;
      })
    });
  }

  public static findSongsByArtist(artistId: number) {
    return Promise.resolve({
      songs: songs.filter((song) => {
        return song.artistId === artistId;
      })
    });
  }

  public static findArtistById(id: number) {
    return Promise.resolve(artists.filter((artist) => {
      return artist.id === id;
    })[0]);
  }

  public static findAlbumById(id: number) {
    return Promise.resolve(albums.filter((album) => {
      return album.id === id;
    })[0]);
  }
}
