import {Promise} from 'es6-promise';
import {SongsResponse} from '../models/responses/SongsResponse';
import {AlbumsResponse} from '../models/responses/AlbumsResponse';
import {ArtistsResponse} from '../models/responses/ArtistsResponse';

export default class MusicService {
  static getAllSongs(): Promise<SongsResponse> {
    return new Promise((resolve, reject) => {
      resolve({
        songs: [
          {
            id: 1,
            name: 'Road of Resistance.'
          }, {
            id: 2,
            name: 'Karate.'
          }, {
            id: 3,
            name: 'Awadama Fever.'
          }, {
            id: 4,
            name: 'Yava!'
          }, {
            id: 5,
            name: 'Amore.'
          }, {
            id: 6,
            name: 'Meta Taro.'
          }, {
            id: 7,
            name: 'Syncopation.'
          }, {
            id: 8,
            name: 'GJ!'
          }, {
            id: 9,
            name: 'Sis. Anger.'
          }, {
            id: 10,
            name: 'No Rain, No Rainbow.'
          }, {
            id: 11,
            name: 'Tales of the Destinies.'
          }, {
            id: 12,
            name: 'The One.'
          }
        ]
      } as SongsResponse);
    });
  }

  static getAllAlbums(): Promise<AlbumsResponse> {
    return new Promise((resolve, reject) => {
      resolve({
        albums: [
          {
            id: 1,
            name: 'Babymetal',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/36/Babymetalcover.jpg'
          }, {
            id: 2,
            name: 'Babymetal (live @ Budokan)',
            image: 'http://www.metalsucks.net/wp-content/uploads/2014/12/babymetalbudokandvd_638.jpg'
          }, {
            id: 3,
            name: 'Road of Resistance',
            image: 'http://assets.blabbermouth.net.s3.amazonaws.com/media/babymetalmetalresistancecdbigger.jpg'
          }
        ]
      } as AlbumsResponse);
    });
  }

  static getAllArtists(): Promise<ArtistsResponse> {
    return new Promise((resolve, reject) => {
      resolve({
        artists: [
          {
            id: 1,
            name: 'Babymetal',
            image: 'http://i1.jpopasia.com/news/4/13927-j6dk7ofxmv.jpg'
          }
        ]
      } as ArtistsResponse);
    });
  }
}
