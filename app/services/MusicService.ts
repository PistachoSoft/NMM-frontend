import {Promise} from 'es6-promise';
import Repository from '../mocks/Repository';
import {SongsResponse} from '../models/responses/SongsResponse';
import {AlbumsResponse} from '../models/responses/AlbumsResponse';
import {ArtistsResponse} from '../models/responses/ArtistsResponse';
import {ArtistModel} from '../models/ArtistModel';
import {AlbumModel} from '../models/AlbumModel';

export default class MusicService {
  static getAllSongs(): Promise<SongsResponse> {
    console.info('GET', '/songs');

    return Repository.findAllSongs();
  }

  static getSongsByAlbum(albumId: number) {
    console.info('GET', `/albums/${albumId}/songs`);

    return Repository.findSongsByAlbum(albumId);
  }

  static getAllAlbums(): Promise<AlbumsResponse> {
    console.info('GET', '/albums');

    return Repository.findAllAlbums();
  }

  static getAlbumsByArtist(artistId: number) {
    console.info('GET', `/artists/${artistId}/albums`);

    return Repository.findAlbumsByArtist(artistId);
  }

  static getSongsByArtist(artistId: number) {
    console.info('GET', `/artists/${artistId}/songs`);

    return Repository.findSongsByArtist(artistId);
  }

  static getAllArtists(): Promise<ArtistsResponse> {
    console.info('GET', '/artists');

    return Repository.findAllArtists();
  }

  static getArtistById(id: number): Promise<ArtistModel> {
    console.info('GET', `/artists/${id}`);

    return Repository.findArtistById(id);
  }

  static getAlbumById(id: number): Promise<AlbumModel> {
    console.info('GET', `/albums/${id}`);

    return Repository.findAlbumById(id);
  }
}
