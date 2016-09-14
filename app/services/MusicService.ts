import {Promise} from 'es6-promise';
import Repository from '../mocks/Repository';
import {ISongsResponse} from '../models/responses/ISongsResponse';
import {IAlbumsResponse} from '../models/responses/IAlbumsResponse';
import {IArtistsResponse} from '../models/responses/IArtistsResponse';
import {IArtistModel} from '../models/IArtistModel';
import {IAlbumModel} from '../models/IAlbumModel';

export default class MusicService {
  public static getAllSongs(): Promise<ISongsResponse> {
    return Repository.findAllSongs();
  }

  public static getSongsByAlbum(albumId: number) {
    return Repository.findSongsByAlbum(albumId);
  }

  public static getAllAlbums(): Promise<IAlbumsResponse> {
    return Repository.findAllAlbums();
  }

  public static getAlbumsByArtist(artistId: number) {
    return Repository.findAlbumsByArtist(artistId);
  }

  public static getSongsByArtist(artistId: number) {
    return Repository.findSongsByArtist(artistId);
  }

  public static getAllArtists(): Promise<IArtistsResponse> {
    return Repository.findAllArtists();
  }

  public static getArtistById(id: number): Promise<IArtistModel> {
    return Repository.findArtistById(id);
  }

  public static getAlbumById(id: number): Promise<IAlbumModel> {
    return Repository.findAlbumById(id);
  }
}
