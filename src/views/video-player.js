import {inject} from 'aurelia-framework';
import * as axios from 'axios';

const API_KEY = 'AIzaSyASSJNgzHQQDmhotVtZZwUbDGibRw7OQCc';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/';

@inject(axios)
export class VideoPlayer {

  constructor(http) {
    this.state = {};
    this.http = http;
  }

  activate(params) {
    this.id = params.id;

    this.http.get(ROOT_URL + 'search', {
      params: {
        part: 'snippet',
        key: API_KEY,
        relatedToVideoId: this.id,
        type: 'video',
        maxResults: 10
      }
    })
    .then((response) => {
      this.state.suggestedVideos = response.data.items;
    })
    .then()
    .catch((error) => {
      //Log error
    });

    return this.http.get(ROOT_URL + 'videos', {
      params: {
        part: 'snippet,statistics',
        key: API_KEY,
        id: this.id,
        type: 'video'
      }
    })
    .then((response) => {
      this.state.selectedVideo = response.data.items[0];
      this.isSearching = false;
    })
    .then()
    .catch((error) => {
      //Log error
    });
  }

}
