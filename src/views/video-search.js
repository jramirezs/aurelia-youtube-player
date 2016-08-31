import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import * as axios from 'axios';

const API_KEY = 'AIzaSyASSJNgzHQQDmhotVtZZwUbDGibRw7OQCc';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3';

@inject(axios, EventAggregator)
export class VideoSearch {
  constructor(http, ea) {
    this.state = {};
    this.http = http;
    this.ea = ea;

    this.subscriber = this.ea.subscribe('searchTermChanged', data => {
      this.state.searchTerm = data.term;
      this.search();
    });
  }

  activate(params) {
    if (params.q) {
      this.state.searchTerm = params.q;
      return this.search();
    }

    return this.searchPopular();
  }

  searchPopular() {
    return this.http.get(ROOT_URL + '/videos', {
      params: {
        part: 'snippet,statistics',
        key: API_KEY,
        type: 'video',
        maxResults: 12,
        regionCode: 'CO',
        chart: 'mostPopular'
      }
    })
    .then((response) => {
      this.state.popularVideos = response.data.items;
    })
    .then()
    .catch((error) => {
      //Log error
    });
  }

  search() {
    this.isSearching = true;
    history.pushState(null, null, `#?q=${this.state.searchTerm}`);

    return this.http.get(ROOT_URL + '/search', {
      params: {
        part: 'snippet',
        key: API_KEY,
        q: this.state.searchTerm,
        type: 'video',
        maxResults: 15
      }
    })
    .then((response) => {
      this.state.videos = response.data.items;
      this.isSearching = false;
    })
    .then()
    .catch((error) => {
      //Log error
    });
  }

  detach() {
    this.subscriber.dispose();
  }
}
