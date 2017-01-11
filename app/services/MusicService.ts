import {Promise} from 'es6-promise';
import {SongsResponse} from '../models/responses/SongsResponse';
import {AlbumsResponse} from '../models/responses/AlbumsResponse';
import {ArtistsResponse} from '../models/responses/ArtistsResponse';
import {ArtistModel} from '../models/ArtistModel';
import {AlbumModel} from '../models/AlbumModel';
import {HttpRequest} from 'http-request';

export default class MusicService {
  private static http = new HttpRequest({
    baseUrl: 'http://localhost:9000'
  });

  static getAllSongs(): Promise<SongsResponse> {
    console.info('GET', '/songs');

    return this.http.get('/songs').then((response) => {
      return response.data;
    });
  }

  static getSongsByAlbum(albumId: number) {
    console.info('GET', `/albums/${albumId}/songs`);

    return this.http.get(`/albums/${albumId}/songs`).then((response) => {
      return response.data;
    });
  }

  static getAllAlbums(): Promise<AlbumsResponse> {
    console.info('GET', '/albums');

    return this.http.get('/albums').then((response) => {
      return response.data;
    });
  }

  static getAlbumsByArtist(artistId: number) {
    console.info('GET', `/artists/${artistId}/albums`);

    return this.http.get(`/artists/${artistId}/albums`).then((response) => {
      return response.data;
    });
  }

  static getSongsByArtist(artistId: number) {
    console.info('GET', `/artists/${artistId}/songs`);

    return this.http.get(`/artists/${artistId}/songs`).then((response) => {
      return response.data;
    });
  }

  static getAllArtists(): Promise<ArtistsResponse> {
    console.info('GET', '/artists');

    return this.http.get('/artists').then((response) => {
      return response.data;
    });
  }

  static getArtistById(id: number): Promise<ArtistModel> {
    console.info('GET', `/artists/${id}`);

    return this.http.get(`/artists/${id}`).then((response) => {
      return response.data;
    });
  }

  static getAlbumById(id: number): Promise<AlbumModel> {
    console.info('GET', `/albums/${id}`);

    return this.http.get(`/albums/${id}`).then((response) => {
      return response.data;
    });
  }
}
